import { assign, concurrency } from '@lzwme/fe-utils';
import { config, SiteInfo } from './config';
import { getRepoForks, getUrlsFromLatestCommitComment, logger, fixSiteUrl } from './utils';

async function repoCommentBot(repo: string, maxForks = 3000) {
  let siteList: { [repo: string]: string[] } = {};
  const list = await getRepoForks(repo, maxForks, { per_page: Math.min(maxForks, 100) });
  logger.info(`[${repo}]forks repo list:`, config.debug ? list : list.length);

  const tasks = list
    .filter(repo => {
      if (/^https?:\/\/([0-9a-zA-Z\-]+\.)/.test(repo.homepage)) {
        repo.homepage = fixSiteUrl(repo.homepage);
        if (config.siteBlockList.has(repo.homepage)) return false;
        siteList[repo.full_name] = [repo.homepage];
        // return false;
      }

      return !config.repoBlockList.has(repo.full_name);
    })
    .map(repo => async () => {
      const r = await getUrlsFromLatestCommitComment(repo.full_name);
      if (r.length) siteList[repo.full_name] = (siteList[repo.full_name] || []).concat(r);
      logger.debug(`[${repo.full_name}]site list:`, r);
    });

  await concurrency(tasks, 6);

  return siteList;
}

export async function repoBot(maxForks = 3000) {
  const r: { [repo: string]: string[] } = {};

  for (const repo of config.gptDemoRepos) Object.assign(r, await repoCommentBot(repo, maxForks));
  for (const [forkRepo, urls] of Object.entries(r)) {
    for (const url of urls) {
      if (!config.siteInfo[url]) config.siteInfo[url] = {};
      if (url.includes('.vercel.app')) config.siteInfo[url].needVPN = true;
      assign(config.siteInfo[url], { repo: forkRepo } as SiteInfo);
    }
  }
  return r;
}

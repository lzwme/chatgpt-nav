import { concurrency } from '@lzwme/fe-utils';
import { config } from './config';
import { getRepoForks, getUrlsFromLatestCommitComment, logger, fixSiteUrl } from './utils';

async function repoCommentBot(repo: string, maxForks = 1000) {
  let siteList: { [repo: string]: string[] } = {};
  const list = await getRepoForks(repo, maxForks, { per_page: Math.min(maxForks, 100) });
  logger.info(`[${repo}]forks repo list:`, config.debug ? list : list.length);

  const repoInSiteInfo = new Set(Object.values(config.siteInfo).map(d => d.repo));
  let isMaxRateLimited = false;
  const tasks = list
    .filter(item => {
      if (/^https?:\/\/([0-9a-zA-Z\-]+\.)/.test(item.homepage)) {
        item.homepage = fixSiteUrl(item.homepage);
        if (!config.siteBlockList.has(item.homepage)) siteList[item.full_name] = [item.homepage];
      }

      if (config.isOnlyNew && repoInSiteInfo.has(item.full_name)) return false;

      return !config.repoBlockMap.has(item.full_name);
    })
    .sort((a, b) => Number(repoInSiteInfo.has(b.full_name)) - Number(repoInSiteInfo.has(a.full_name)))
    .map(item => async () => {
      if (isMaxRateLimited) return;
      const r = await getUrlsFromLatestCommitComment(item.full_name);
      if (r.ratelimit && r.remaining < 1) {
        isMaxRateLimited = true;
        logger.warn('达到最大请求限制次数', r);
      }
      if (r.message.includes('Not Found')) config.repoBlockMap.set(r.repo, '');
      if (r.list.length) siteList[item.full_name] = (siteList[item.full_name] || []).concat(r.list);
      logger.debug(`[${item.full_name}]site list:`, r);
    });

  await concurrency(tasks, config.ci ? 2 : 6);

  return siteList;
}

export async function repoBot(maxForks = 3000) {
  const result: { [repo: string]: string[] } = {};

  for (const [repo, defaultInfo] of config.gptDemoRepos) {
    const r = await repoCommentBot(repo, maxForks);
    Object.assign(result, r);
    for (const [forkRepo, urls] of Object.entries(r)) {
      for (const url of urls) {
        if (url.startsWith('https://github.com')) continue;
        if (!config.siteInfo[url]) config.siteInfo[url] = Object.assign({}, defaultInfo);
        if (url.includes('.vercel.app')) config.siteInfo[url].needVPN = true;
        else config.siteInfo[url].hide = 9;
        if (!config.siteInfo[url].repo) config.siteInfo[url].repo = forkRepo;
      }
    }
  }
  return result;
}

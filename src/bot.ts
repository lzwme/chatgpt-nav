import { concurrency } from '@lzwme/fe-utils';
import { config } from './config';
import { getRepoForks, getUrlsFromLatestCommitComment, logger, fixSiteUrl, urlVerify } from './utils';

async function repoCommentBot(repo: string, maxForks = 1000) {
  let siteList: { [repo: string]: string[] } = {};
  const list = await getRepoForks(repo, maxForks, { per_page: Math.min(maxForks, 100) });
  logger.info(`[${repo}]forks repo list:`, config.debug ? list : list.length);

  const isOnlyNew = process.argv.slice(2).includes('--only-new'); // ingore in siteInfo
  const repoInSiteInfo = new Set(Object.values(config.siteInfo).map(d => d.repo));
  let isMaxRateLimited = false;
  const tasks = list
    .filter(item => {
      if (/^https?:\/\/([0-9a-zA-Z\-]+\.)/.test(item.homepage)) {
        item.homepage = fixSiteUrl(item.homepage);
        if (config.siteBlockList.has(item.homepage)) return false;
        siteList[item.full_name] = [item.homepage];
      }

      if (isOnlyNew && repoInSiteInfo.has(item.full_name)) return false;

      return !config.repoBlockList.has(item.full_name);
    })
    .map(item => async () => {
      if (isMaxRateLimited) return;
      const r = await getUrlsFromLatestCommitComment(item.full_name);
      if (r.ratelimit && r.remaining < 1) {
        isMaxRateLimited = true;
        logger.warn('达到最大请求限制次数', r);
      }
      if (r.message.includes('Not Found')) config.repoBlockList.add(r.repo);
      if (r.list.length) siteList[item.full_name] = (siteList[item.full_name] || []).concat(r.list);
      logger.debug(`[${item.full_name}]site list:`, r);
    });

  await concurrency(tasks, config.ci ? 3 : 6);

  return siteList;
}

export async function repoBot(maxForks = 3000) {
  const r: { [repo: string]: string[] } = {};

  for (const repo of config.gptDemoRepos) Object.assign(r, await repoCommentBot(repo, maxForks));
  for (const [forkRepo, urls] of Object.entries(r)) {
    for (const url of urls) {
      if (!config.siteInfo[url]) config.siteInfo[url] = {};
      if (url.includes('.vercel.app')) config.siteInfo[url].needVPN = true;
      if (!config.siteInfo[url].repo) config.siteInfo[url].repo = forkRepo;
    }
  }
  return r;
}

export function siteUrlVerify() {
  const tasks = Object.entries(config.siteInfo).map(([url, item]) => async () => {
    if (item.needVerify != null && item.needVerify < 0) return true;
    const isOk = await urlVerify(url);
    if (!isOk) item.needVerify = (item.needVerify || 0) + 1;
    else if('needVerify' in item) delete item.needVerify;
    return isOk;
  });

  return concurrency(tasks, 6);
}

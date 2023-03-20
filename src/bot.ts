import { concurrency, color } from '@lzwme/fe-utils';
import { config } from './config';
import { getRepoForks, getUrlsFromLatestCommitComment, logger, fixSiteUrl, httpLinkChecker } from './utils';

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
        if (config.siteBlockList.has(item.homepage)) return false;
        siteList[item.full_name] = [item.homepage];
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
    if (config.debug && url.endsWith('vercel.app')) return true;
    if (item.hide) return true;

    if (item.needVerify != null) {
      if (item.needVerify < 0) return true;
      if (item.needVerify > 6) return false;
    }

    logger.debug(`[urlVerify] start for`, color.green(url));
    const startTime = Date.now();
    const r = await httpLinkChecker(url, { verify: body => /<body/i.test(body) });

    if (r.code) {
      if (r.redirected) {
        delete item.needVerify;
        item.desc = `Redirect to: ${r.url}`;
        if (!config.siteInfo[r.url]) config.siteInfo[r.url] = {};
        logger.debug(`[urlVerify][${color.cyan(url)}]`, color.greenBright(item.desc), r);
      } else {
        item.needVerify = (item.needVerify || 0) + 1;
        if (item.needVerify >= 6 && r.statusCode === 404) {
          delete config.siteInfo[r.url]; // 超过 6 次均 404 则移除
        } else {
          if (!item.desc || /^\d+ - /.test(item.desc)) item.desc = `${r.statusCode} - ${r.errmsg}`;
        }
        logger.warn(`[urlVerify][${color.yellow(url)}]`, r.statusCode, r.errmsg.slice(0, 300), r.url == url ? '' : color.cyan(r.url));
      }
    } else if ('needVerify' in item) {
      delete item.needVerify;
    }

    const timeCost = Date.now() - startTime;
    if (timeCost > 5000) logger.warn(`[urlVerify][slow]`, color.magenta(url), color.red(timeCost), r);
    else logger.debug(`[urlVerify]done!`, color.green(url), color.cyan(timeCost), r);
    return r;
  });

  return concurrency(tasks, 6);
}

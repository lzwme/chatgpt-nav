import { concurrency, color } from '@lzwme/fe-utils';
import { httpLinkChecker } from '@lzwme/fe-utils/cjs/node/lib/httpLinkChecker';
import { config } from './config';
import { getRepoForks, getUrlsFromLatestCommitComment, logger, fixSiteUrl } from './utils';
import { getTypes } from './ai-type';

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

export function siteUrlVerify() {
  const needGFWKeywords = ['vercel.app', 'openai.com'];
  const isGitHubCi = (process.env.GITHUB_CI || process.env.SYNC) != null;

  const tasks = Object.entries(config.siteInfo).map(([url, item], idx) => async () => {
    // 移除全部 vercel.app 的信息
    if (url.includes('vercel.app') || Number(item.needVerify) >= 2) {
      delete config.siteInfo[url];
      return true;
    }

    if (item.type) item.type = getTypes(item.type);

    if (!isGitHubCi) {
      // if (item.needVPN) return true;
      if (needGFWKeywords.some(key => url.includes(key))) return true;
      if (item.star! >= 3) return true;
    }

    if (Number(item.hide) === 1) return true;

    if (item.needVerify != null) {
      if (item.needVerify < 0) return true;
    }

    logger.debug(`[urlVerify][${idx}] start for`, color.green(url));
    const startTime = Date.now();
    const r = await httpLinkChecker(url, { verify: body => /<body/i.test(body) || /<\/body>/i.test(body), reqOptions: { timeout: 10_000, rejectUnauthorized: false } });

    if (r.code) {
      // ignore TSL error
      if (r.errmsg.includes('network socket disconnected before secure TLS connection')) {
        r.code = 0;
        r.body = '';
      }

      if (String(r.errmsg).startsWith('<html><script>')) r.code = 0;
    }

    if (r.code) {
      if (r.redirected) {
        delete item.needVerify;
        item.desc = `Redirect to: ${r.url}`;
        if (!config.siteInfo[r.url]) config.siteInfo[r.url] = {};
        logger.debug(`[urlVerify][${color.cyan(url)}]`, color.greenBright(item.desc), r);
      } else if (!item.needVPN) {
        item.needVerify = (item.needVerify || 0) + 1;
        if (item.needVerify >= 7) {
          delete config.siteInfo[url]; // 超过 6 次均 404 则移除
        } else {
          item.errmsg = `[error][${r.statusCode || r.code}]${r.errmsg}`.slice(0, 200);
          // @TODO: 兼容包含 error 的格式，后续移除
          if (item.desc) item.desc = item.desc.replace(/\[error\]\[.+\].+$/, '');
        }
        logger.warn(`[urlVerify][${idx}][${color.yellow(url)}]`, r.statusCode, r.errmsg.slice(0, 300), r.url == url ? '' : color.cyan(r.url));
      }
    } else {
      if (item.needVPN && !isGitHubCi) delete item.needVPN;

      if ('needVerify' in item) {
        if (item.needVerify && item.needVerify > 0) delete item.needVerify;
      }

      ['errmsg', 'invalid'].forEach(k => item[k] && delete item[k]);

      if (!item.title && r.body) {
        const title = r.body.match(/<title>(.*)<\/title>/)?.[1];
        if (title) item.title = title;
        if (item.title === item.desc) delete item.desc;
      }
    }

    const timeCost = Date.now() - startTime;
    if (timeCost > 5000 && !r.code) logger.warn(`[urlVerify][${idx}][slow]`, color.magenta(url), color.red(timeCost));
    else logger.debug(`[urlVerify][${idx}]done!`, color.green(url), color.cyan(timeCost), r);
    return r;
  });

  return concurrency(tasks, 6);
}

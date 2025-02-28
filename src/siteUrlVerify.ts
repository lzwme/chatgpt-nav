import { concurrency, color, httpLinkChecker } from '@lzwme/fe-utils';
import { config } from './config';
import { logger } from './utils';
import { getTypes } from './getTypes';

export function siteUrlVerify() {
  const knownUrlKeyWords = ['apps.apple.com', 'baidu.com', 'qq.com', 'tencent.com', 'aliyun.com'];
  const needVPNKeywords = ['vercel.app', 'openai.com', 'bing.com'];
  const isGitHubCi = (process.env.GITHUB_CI || process.env.SYNC) != null;

  const tasks = Object.entries(config.siteInfo).map(([url, item], idx) => async () => {
    if (item.type) item.type = getTypes(item.type);

    if (Number(item.hide) === 1) return true;
    if (knownUrlKeyWords.some(key => url.includes(key))) return true;

    if (!isGitHubCi) {
      // if (item.needVPN) return true;
      if (needVPNKeywords.some(key => url.includes(key))) return true;
      if (item.star! >= 3) return true;
    }

    if (item.needVerify != null && item.needVerify < 0) return true;

    logger.debug(`[urlVerify][${idx}] start for`, color.green(url));
    const startTime = Date.now();
    const r = await httpLinkChecker(url, {
      verify: body => /<body/i.test(body) || /<\/body>/i.test(body),
      reqOptions: { timeout: 10_000, rejectUnauthorized: false },
    });

    if (r.code) {
      // 30x 为正常
      if (r.redirected || String(r.code).startsWith('30')) r.code = 0;

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
        if (!item.needVerify || item.needVerify > 0) item.needVerify = (item.needVerify || 0) + 1;
        item.errmsg = `[error][${r.statusCode || r.code}]${r.errmsg}`.slice(0, 200);

        const errKeys = ['404'];
        if (item.needVerify >= 7) {
          if ((r.statusCode == 404 || errKeys.some(k => r.errmsg?.includes(k)))) {
            delete config.siteInfo[url];
          } else {
            item.hide = 1;
          }
        }

        logger.warn(
          `[urlVerify][${idx}][${color.yellow(url)}]`,
          r.statusCode,
          r.errmsg.slice(0, 300),
          r.url == url ? '' : color.cyan(r.url)
        );
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

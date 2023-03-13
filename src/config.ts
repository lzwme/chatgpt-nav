import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readJsonFileSync } from '@lzwme/fe-utils';
import {config as dConfig } from 'dotenv';
import { logger, req, fixSiteUrl } from './utils';

type BoolLike = boolean | 0 | 1;

export interface SiteInfo {
  /** github 仓库 */
  repo?: string;
  /** 推荐等级(1-3) */
  star?: number;
  /** 需要自己输入 key */
  needKey?: BoolLike;
  /** 需要科学上网 */
  needVPN?: BoolLike;
  /** 需要密码(暂不展示，除非有密码) */
  needPwd?: BoolLike | string;
  /** 付费应用 */
  needPay?: BoolLike | string;
  /** 已失效 */
  invalid?: BoolLike | string;
  /** 不展示（失效超过30天等） */
  hide?: BoolLike;
  /** 描述信息 */
  desc?: string;
}

const rootDir = resolve(fileURLToPath(import.meta.url), '../..');
console.log(rootDir)
export const config = {
  rootDir,
  siteInfoFile: resolve(rootDir, 'site-info.json'),
  debug: process.argv.slice(2).includes('--debug'),
  gptDemoRepos: [`ddiu8081/chatgpt-demo`, `ourongxing/chatgpt-vercel`, `cogentapps/chat-with-gpt`],
  /** github 仓库禁止列表 */
  repoBlockList: new Set([]) as Set<string>,
  /** 站点禁止列表 */
  siteBlockList: new Set([]) as Set<string>,
  /** 站点信息 */
  siteInfo: {
    'https://gpt.demo.com': {
      repo: 'lzwme/gpt-demo', // 来源仓库
      star: 1, // 推荐星级，1-3
      invalid: '20230310', // 已失效，标注发现时间
      hide: 0, // 不显示在首页
      needKey: 0, // 是否需要自己输入 API KEY
      needPwd: 0, // 【受限】是否需要密码、账号登录才能访问
      needPay: 0, // 付费应用
      desc: '描述',
    },
  } as { [url: string]: SiteInfo },
};

export function initConfig() {
  dConfig();
  const token = process.env.GH_TOKEN || '';
  if (token) req.setHeaders({ Authorization: `Bearer ${token}` });
  else logger.warn('Not found GH TOKEN');

  Object.assign(config.siteInfo, readJsonFileSync(config.siteInfoFile));

  for (const [url, info] of Object.entries(config.siteInfo)) {
    let fixedUrl = fixSiteUrl(url);
    if (fixedUrl !== url) {
      delete config.siteInfo[url];
      config.siteInfo[fixedUrl] = info;
    }

    if (info.hide) {
      config.siteBlockList.add(url);
      if (info.repo) config.repoBlockList.add(info.repo);
    }
  }

  logger.updateOptions({ levelType: config.debug ? 'debug' : 'log' });
  logger.debug('config:', config);

  return config;
}

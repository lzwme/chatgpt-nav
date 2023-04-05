import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readJsonFileSync } from '@lzwme/fe-utils';
import {config as dConfig } from 'dotenv';
import { logger, ghReq, fixSiteUrl } from './utils';
import { writeFileSync } from 'node:fs';

type BoolLike = boolean | 0 | 1;

export interface SiteInfo {
  /** github 仓库 */
  repo?: string;
  /** 推荐等级(1-3) */
  star?: number;
  /** 需人工验证。-1 已确认，且无需程序检测；大于等于 3 则显示为 ？ 状态 */
  needVerify?: number;
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
  title?: string;
  /** 描述信息 */
  desc?: string;
  /** 程序检测到的错误信息 */
  errmsg?: string;
  /** @TODO 分类类别 */
  cate?: 'chat' | 'tool' | 'ai';
}

const rootDir = resolve(fileURLToPath(import.meta.url), '../..');

export const config = {
  rootDir,
  ci: Boolean(process.env.CI || process.env.SYNC),
  siteInfoFile: resolve(rootDir, 'site-info.json'),
  debug: false,
  isOnlyNew: false,
  gptDemoRepos: new Map<string, SiteInfo>([
    [`Yidadaa/ChatGPT-Next-Web`, {}],
    [`lvwzhen/teach-anything`, {}],
    [`ddiu8081/chatgpt-demo`, {}],
    [`ourongxing/chatgpt-vercel`, {}],
    [`cogentapps/chat-with-gpt`, { needKey: true, needVPN: true }],
    // [`yesmore/QA`, {}],
  ]),
  /** github 仓库禁止列表: hide=1、[siteInfo].repoBlockList */
  repoBlockMap: new Map<string, string>([]),
  /** 站点禁止列表: hide=1 */
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

export function initConfig(argv: Record<string, unknown>) {
  dConfig();
  config.debug = Boolean(argv.debug || process.env.DEBUG);
  config.isOnlyNew = Boolean(argv.onlyNew);

  const token = (process.env.GH_TOKEN || process.env.GITHUB_TOKEN || '').trim();
  console.log('token', token.length);
  if (token) ghReq.setHeaders({ Authorization: `Bearer ${token}` });
  else logger.warn('Not found GH TOKEN');

  const info = readJsonFileSync<{ repoBlockList: string[]; siteInfo: Record<string, SiteInfo> }>(config.siteInfoFile);
  Object.assign(config.siteInfo, info.siteInfo);
  info.repoBlockList.forEach(repo => config.repoBlockMap.set(repo, ''));

  for (const [url, info] of Object.entries(config.siteInfo)) {
    let fixedUrl = fixSiteUrl(url);
    if (fixedUrl !== url) {
      delete config.siteInfo[url];
      config.siteInfo[fixedUrl] = info;
    }

    if (info.hide) {
      config.siteBlockList.add(url);
      if (info.repo) config.repoBlockMap.set(info.repo, url);
    }
  }

  logger.updateOptions({ levelType: config.debug ? 'debug' : 'log' });
  logger.debug('config:', config);

  return config;
}

export function saveConfig() {
  const info = {
    repoBlockList: [...config.repoBlockMap].filter(d => !config.siteInfo[d[1]]?.hide).map(d => d[0]),
    siteInfo: config.siteInfo,
  };
  writeFileSync(config.siteInfoFile, JSON.stringify(info, null, 2), 'utf8');
}

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { gitCommit, logger } from './utils';
import { repoBot } from './bot';
import { config, initConfig, saveConfig } from './config';

function formatSiteList() {
  const list: string[] = [];

  for (const [url, info] of Object.entries(config.siteInfo)) {
    if (info.hide || info.needPwd) continue;

    let prefix = '';
    if (info.needPwd) prefix += '🔒';
    if (info.needPay) prefix += '💰';
    if (info.needKey) prefix += '🔑';
    if (info.needVPN) prefix += '🚀';
    if (info.invalid) prefix = '❌' + (typeof info.invalid === 'string' ? info.invalid : '');
    if (info.star) prefix += '⭐'.repeat(Math.min(3, info.star));
    list.push(`1. [[${prefix || '⭐'}] ${url}](${url}) ${info.desc || ''}`.trim());
  }

  return list.sort();
}

async function updateReadme() {
  const rdFile = resolve(config.rootDir, 'README.md');
  const list = formatSiteList();
  const content = readFileSync(rdFile, 'utf8');
  const updated = content.replace(/站点列表：[\s\S]+##/g, `站点列表：\n\n${list.join(`\n`)}\n\n##`);
  if (updated !== content) writeFileSync(rdFile, updated, 'utf8');
  else logger.debug('[UPDATE-READE] No Chagned');
}

export async function start() {
  initConfig();
  await repoBot(config.debug ? 10 : 2000);
  await updateReadme();
  saveConfig();
  gitCommit();
}

start().then(() => logger.info('done! Total:', Object.keys(config.siteInfo).length));

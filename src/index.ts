import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { logger } from './utils';
import { repoBot } from './bot';
import { config, initConfig } from './config';

function formatSiteList() {
  const list: string[] = [];

  for (const [url, info] of Object.entries(config.siteInfo)) {
    if (info.hide || info.needPwd) continue;

    let prefix = '';
    if (info.needPwd) prefix += '🔒';
    if (info.needPay) prefix += '💰';
    if (info.needKey) prefix += '🔑';
    if (info.needVPN) prefix += '🚀';
    if (info.star) prefix += '⭐'.repeat(Math.min(3, info.star));
    if (info.invalid) prefix = '❌' + (typeof info.invalid === 'string' ? info.invalid : '');
    list.push(`- [${prefix ? `[${prefix}]` : ''}${url}](${url})`);
  }

  return list.sort();
}

async function updateReadme() {
  const rdFile = resolve(config.rootDir, 'README.md');
  const list = formatSiteList();
  const content = readFileSync(rdFile, 'utf8');
  const updated = content.replace(/## Site List[\s\S]+##/g, `## Site List\n\n${list.join(`\n`)}\n\n##`);
  if (updated !== content) writeFileSync(rdFile, updated, 'utf8');
  else logger.debug('[UPDATE-READE] No Chagned');
}

export async function start() {
  initConfig();
  await repoBot();
  await updateReadme();
  writeFileSync(config.siteInfoFile, JSON.stringify(config.siteInfo, null, 2), 'utf8');
}

start().then(() => logger.info('done!'));

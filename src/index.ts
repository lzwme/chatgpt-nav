import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { gitCommit, logger } from './utils';
import { repoBot } from './bot';
import { config, initConfig, saveConfig } from './config';

function formatSiteList() {
  return Object.entries(config.siteInfo)
    .sort((a, b) => {
      for (const key of ['invalid', 'needVPN', 'needPwd', 'needPay', 'needKey'] as const) {
        if (a[1][key] !== b[1][key]) return a[1][key] ? 1 : -1;
      }

      if (a[1].star !== b[1].star) return (b[1].star || 1) - (a[1].star || 1);

      return a[0] > b[0] ? 1 : -1;
    })
    .filter(([_url, info]) => !info.hide)
    .map(([url, info]) => {
      let prefix = '';
      if (info.needPwd) prefix += '🔒';
      if (info.needPay) prefix += '💰';
      if (info.needKey) prefix += '🔑';
      if (info.needVPN) prefix += '🚀';
      if (info.invalid) prefix = '❌' + (typeof info.invalid === 'string' ? info.invalid : '');
      if (info.star) prefix += '⭐'.repeat(Math.min(3, info.star));
      return `1. [[${prefix || '⭐'}] ${url}](${url}) ${info.desc || ''}`.trim();
    });
}

async function updateReadme() {
  const rdFile = resolve(config.rootDir, 'README.md');
  const list = formatSiteList();
  const content = readFileSync(rdFile, 'utf8');
  const updated = content.replace(/站点列表：[\s\S]+## 参与贡献/g, `站点列表：\n\n${list.join(`\n`)}\n\n## 参与贡献`);
  if (updated !== content) writeFileSync(rdFile, updated, 'utf8');
  else logger.debug('[UPDATE-READE] No Chagned');
}

export async function start() {
  initConfig();
  await repoBot(config.debug ? 10 : 2000);
  await updateReadme();
  saveConfig();
  if (config.ci) gitCommit();
}

start().then(() => logger.info('done! Total:', Object.keys(config.siteInfo).length));

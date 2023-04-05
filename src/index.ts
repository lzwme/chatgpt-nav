import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import parser from 'yargs-parser';
import { gitCommit, logger } from './utils';
import { repoBot, siteUrlVerify } from './bot';
import { config, initConfig, saveConfig } from './config';

function formatSiteList() {
  return Object.entries(config.siteInfo)
    .filter(([_url, info]) => !info.hide)
    .sort((a, b) => {
      for (const key of ['invalid', 'needVerify', 'needVPN', 'needPwd', 'needPay', 'needKey'] as const) {
        if ('needVerify' == key) {
          if (a[1].needVerify! > 2 || b[1].needVerify! > 2) return a[1].needVerify! > 2 ? 1 : -1;
        } else if (a[1][key] !== b[1][key]) return a[1][key] ? 1 : -1;
      }

      if (a[1].star !== b[1].star) return (b[1].star || 1) - (a[1].star || 1);

      return a[0] > b[0] ? 1 : -1;
    })
    .map(([url, info]) => {
      let prefix = '';

      if (info.invalid) prefix = '❌' + (typeof info.invalid === 'string' ? info.invalid : '');
      else if (info.needVerify! > 2) prefix += '❓';

      if (info.star && info.star > 0) prefix += '⭐'.repeat(Math.min(3, info.star));
      else if (info.star == 0) prefix += '⛔';

      if (info.needPwd) prefix += '🔒';
      if (info.needPay) prefix += '💰';
      if (info.needKey) prefix += '🔑';
      if (info.needVPN) prefix += '🚀';
      return `1. [[${prefix || '⭐'}] ${url}](${url}) ${info.title ? `**${info.title}。** ` : ''}${info.desc || ''} ${
        info.errmsg ? `\`${info.errmsg}\`` : ''
      }`.trim();
    });
}

async function updateReadme() {
  const rdFile = resolve(config.rootDir, 'README.md');
  const list = formatSiteList();
  const content = readFileSync(rdFile, 'utf8');
  const updated = content.replace(/站点列表\([\s\S]+\n\n## /g, `站点列表(${list.length})：\n\n${list.join(`\n`)}\n\n## `);
  if (updated !== content) writeFileSync(rdFile, updated, 'utf8');
  else logger.debug('[UPDATE-READE] No Chagned');
  return list.length;
}

export async function start() {
  const argv = parser(process.argv.slice(2));
  logger.debug('argv', argv);
  initConfig(argv);
  if (argv.bot !== false) await repoBot(config.debug ? 10 : 2000);
  if (argv.urlCheck !== false) await siteUrlVerify();
  const total = await updateReadme();
  saveConfig();
  if (config.ci || argv.ci) gitCommit();
  return total;
}

start().then(total => {
  logger.info(`done! Total: ${total} / ${Object.keys(config.siteInfo).length}`);
  process.nextTick(() => process.exit());
});

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(fileURLToPath(import.meta.url), '../..');
const data = JSON.parse(readFileSync(resolve(rootDir, 'site-info.json'), 'utf8'));
const errors: string[] = [];
const warns: string[] = [];
const seen = new Map<string, string>();

for (const [url, info] of Object.entries<Record<string, any>>(data.siteInfo)) {
  if (!/^https?:\/\//.test(url)) errors.push(`非法 URL: ${url}`);
  const norm = url.toLowerCase().replace(/\/+$/, '').replace(/([?&])utm_[^&]*/gi, '$1').replace(/[?&]$/, '');
  if (seen.has(norm)) errors.push(`规范化重复: ${url} <-> ${seen.get(norm)}`);
  else seen.set(norm, url);
  if (/(^|[?&])utm_/i.test(url)) errors.push(`含 utm 跟踪参数: ${url}`);
  if (info.hide) continue;
  if (!info.title) warns.push(`缺 title: ${url}`);
  if (!info.desc) warns.push(`缺 desc: ${url}`);
  if (!info.type?.length) errors.push(`缺 type: ${url}`);
  if (Array.isArray(info.type)) {
    for (const t of info.type) if (!data.categoryInfo[t]) errors.push(`未知分类 ${t}: ${url}`);
  }
  if (info.desc && Array.from(info.desc).length > 100 && !info.descShort) errors.push(`长描述缺 descShort: ${url}`);
}

console.log(`lint: ${Object.keys(data.siteInfo).length} sites, ${errors.length} errors, ${warns.length} warnings`);
errors.forEach(e => console.error('  [ERROR]', e));
warns.forEach(w => console.warn('  [WARN]', w));
if (errors.length) process.exit(1);

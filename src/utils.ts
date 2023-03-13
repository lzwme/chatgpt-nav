import { Request, getLogger } from '@lzwme/fe-utils';

export const logger = getLogger();
export const req = Request.getInstance();

export async function getRepoForks(repo: string, total = 0, params: { per_page?: number; page?: number; sort?: string } = {}) {
  params = { per_page: 10, page: 1, sort: 'newest', ...params };
  logger.debug(`[getRepoForks][${repo}]`, params);

  const url = `https://api.github.com/repos/${repo}/forks`;
  const r = await req.get<{ full_name: string; homepage: string }[]>(url, params);
  let list = Array.isArray(r.data) ? r.data : [];

  if (!Array.isArray(r.data)) {
    logger.error(`[${repo}][fork]获取列表失败！`, r.data);
    return list;
  }

  if (total) {
    let page = params.page || 1;
    while (total > list.length) {
      const t = await getRepoForks(repo, 0, { ...params, page: ++page });
      if (t.length === 0) break;
      list = list.concat(t);
    }

    logger.debug(`[getRepoForks][${repo}]`, total, list.length);
  }

  return list;
}

export async function getUrlsFromLatestCommitComment(repo: string) {
  // @see https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28
  const url = `https://api.github.com/repos/${repo}/commits`;
  let { data } = await req.get<{ comments_url: string; commit: { comment_count: number } }[]>(url, { per_page: 5 });
  const siteList: string[] = [];

  if (!Array.isArray(data)) {
    logger.warn(`[${repo}]获取 commits 失败`);
    return siteList;
  }

  data = data.filter(d => d.commit?.comment_count);
  if (!data.length) return siteList;

  const { data: comment } = await req.get<{ body: string }[]>(data[0].comments_url);

  if (!Array.isArray(comment) || !comment.length) {
    logger.warn(`[${repo}]`, Array.isArray(comment) ? `获取 comments 为空` : `获取 comments 失败`, data[0].comments_url);
    return siteList;
  }

  const body = comment[0].body;
  const urlList = String(body).match(/\[.+\]\(.+\)/gm);
  if (!urlList) return siteList;

  let shortUrl = '';
  urlList
    .map(d => d.split('(')[1].slice(0, -1))
    .forEach(url => {
      if (url.startsWith('http')) {
        if (url.endsWith('vercel.app') || url.endsWith('netlify.app')) {
          if (!shortUrl || shortUrl.length > url.length) shortUrl = url;
        } else {
          siteList.push(url);
        }
      }
    });
  if (shortUrl) siteList.push(shortUrl);

  return siteList;
}

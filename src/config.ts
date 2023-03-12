import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

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

const rootDir = resolve(fileURLToPath(import.meta.url), '..');

export const config = {
  rootDir,
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
    'https://www.chat2ai.cn': { star: 2 },
    'https://chat.ninvfeng.xyz': { star: 1 },
    'https://chat.yqcloud.top': { star: 1 },
    'https://fastgpt.app': { star: 1 },
    'https://chat.zecoba.cn': { star: 1 },
    'https://chatgpt.hswmartin.top': { star: 1 },
    'https://www.chatsverse.xyz': { star: 2 },
    'https://www.aitoolgpt.com': { star: 2 },
    'https://chilloutai.com': { desc: '你的虚拟女友' },
    'https://wordstory.streamlit.app': { desc: '写故事' },
    'https://lzwme-gpt.netlify.app': { needKey: 1 },
    'https://chatgpt.haomingzi.net/ChatGPT.html': {},
    'https://my-chatgpt-eosin.vercel.app': {},
    'https://chatgpt-demo-gilt.vercel.app': {},
    'https://chatgpt-demo-blue-phi.vercel.app': {},
    'https://chatgpt-demo-muxinxy.vercel.app': {},
    'https://chatgpt-demo-mzwmiao.vercel.app': {},
    'https://chatgpt-demo-nu-six.vercel.app': {},
    'https://chatgpt-demo-nullufull.vercel.app': {},
    'https://chatgpt-inside.vercel.app': {},
    'https://chatgpt-proxy-online.vercel.app': {},
    'https://gpt.lzw.me': { needPwd: 1 },
    'https://chat.paoying.net': { needPay: 1 },
    'https://chat.alpaca-bi.com': { needPay: 1 },
    'https://freegpt.cc': { needKey: 1 },
    'https://chat.chunkiu.hk': { invalid: 1, desc: '无回复，key 失效' },
    'https://chat.tgbot.co': {},
    'https://chat.geekr.dev': {},
    'https://xc.com': {},
    'https://chat.51buygpt.com': {},
    'https://chat.forchange.cn': {},
    'https://freechatgpt.chat': {},
    'https://askai.ws': {},
    'https://ai.yiios.com': {},
    'http://chat.apigpt.cn': {},
    'https://aigcfun.com': {},
    'http://gpt.mxnf.store': {},
    'https://www.aicodehelper.com': {},
    'https://ai-toolbox.codefuture.top': {},
    'https://harry-potter.openai-lab.co': {},
    'https://94gpt.com': {},
    'https://www.teach-anything.com': {},
    'http://itecheasy.com.cn': {},
    'https://trychatgp.com': {},
    'https://chatgpt.ddiu.io': {},
    'https://chatgpt.ddiu.me': {},
    'https://ai117.com': {},
    'http://chat.livepo.top': {},
    'https://chat.eaten.fun': {},
    'https://chat.binjie.site:7777': {},
    'https://chatgpt123.fyi': {},
    'https://chatgpt.white-peach.ga': {},
    'https://chat.luoyangshusheng.com': {},
    'https://kang.al': {},
  } as { [url: string]: SiteInfo },
};

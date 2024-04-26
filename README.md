# ChatGPT 在线体验网站收集列表

众所周知，国内访问并体验 ChatGPT 拥有一定的门槛，主要受限于网络无法访问、账号无法注册等条件。然而对于突破该约束条件的同学来说，可以很轻松的使用开源程序搭建基于 OPENAI API 的在线应用网站。

本仓库旨在搜集整理国内用户可访问的基于 OPENAI API 开发的在线应用列表，以供条件受限的同学参考使用。其主要来源为：

- 从网络手动搜集整理。
- 热心网友推荐或自荐。**欢迎自荐，您的应用会获得更多的曝光机会。**
- 程序自动抓取开源仓库信息。定时任务每日更新。
- More...

## 参与贡献

由于部分站点从网络自动搜集，尚未作可用性验证，欢迎提 [Issues](https://github.com/lzwme/chatgpt-sites/issues) 或 PR 对其矫正。您可以：

- 推荐并添加好用的站点。
- 验证已有站点列表的可用性、有效性并更正。
- 自荐您的站点。如果您的站点可以稳定长期运行、使用收费 API KEY 且免费使用等，可增加推荐星级。
- more...

站点配置信息在 `site-info.json` 文件中设置，基本格式参考（为 `0` 的项不用填写）：

```ts
{
  "https://gpt.demo.com": {
      "source": "recommend",
      "star": 3,                // 推荐星级，0-3。0 用于标记可访问但不可用、使用受限
      "needLogin": 1,           // 需要注册或绑定账号登录才可使用
      "desc": "描述",
      "title": "标题",
      "needKey": 1,             // 是否需要自己输入 API KEY
      "needPwd": 1,             // 是否需要密码、账号登录才能访问
      "needPay": 1,             // 付费应用
      "needVerify": 1,          // 需人工验证确认状态。-1 表示可用且无需程序验证
      "needVPN": 1,             // 需科学上网
      "hide": 1,                // 不显示在列表中，失效并将移除
      "repo": 'lzwme/gpt-demo', // 来源仓库
      "invalid": '20230310'    // 已失效，标注发现时间
  },
}

// 例如：

```

## 声明

以下站点列表来源于网络收集、GitHub 开源仓库信息搜集和网友推荐。**若您的站点不希望被公开访问，应当设置密码等安全防范措施**。若有侵权请提 [Issues](https://github.com/lzwme/chatgpt-sites/issues) 处理。

## 站点列表

```
⭐ 推荐星级。默认一星。免费、无需代理、无需 KEY 等，可增加星级
⛔ 0星标记。表示可访问，但功能暂不可用、需私有密钥、使用受限等
🔑 需输入API KEY。可使用自己的 KEY（应注意甄别、谨慎使用，避免您的 API KEY 泄露）
🚀 需代理。可代理登录、免费试用等
🔐 需要密码。需要私有密码、通过特殊渠道获取密码、认证码等
🧑‍💻 需登录。注册账号时请仔细甄别相关页面，不要使用常用密码
💰 需付费。请仔细识别，谨防受骗
❓ 需手动验证。访问异常、不确定是否失效、程序探测无法访问等
❌ 已失效。会在失效一段时间后移除
```

站点列表(601)：

1. [[⭐⭐⭐🧑‍💻] https://ai.360.cn](https://ai.360.cn) **【大厂】360智脑。** 需申请资格
1. [[⭐⭐⭐🧑‍💻] https://chatglm.cn](https://chatglm.cn) **【大厂】智谱清言。** 清华大学孵化的智谱AI提供的千亿参数对话模型ChatGLM
1. [[⭐⭐⭐] https://qianwen.aliyun.com](https://qianwen.aliyun.com) **【大厂】通义千问。** 需申请体验
1. [[⭐⭐⭐🧑‍💻] https://so.csdn.net/chat](https://so.csdn.net/chat) **【大厂】C知道。** 由CSDN和外部合作伙伴联合研发的生成式AI产品
1. [[⭐⭐⭐🧑‍💻] https://xinghuo.xfyun.cn](https://xinghuo.xfyun.cn) **【大厂】讯飞星火认知大模型。** 需申请资格，但审核非常快
1. [[⭐⭐⭐🧑‍💻] https://yiyan.baidu.com](https://yiyan.baidu.com) **【大厂】文心一言。** 已全面开放，使用百度账号登录即可
1. [[⭐⭐⭐🧑‍💻] https:chat.tiangong.cn](https:chat.tiangong.cn) **【大厂】天工AI。** 昆仑万维提供的对标 ChatGPT 的双千亿级大语言模型，也是一个对话式AI助手
1. [[⭐⭐🧑‍💻] http://bamboochat.kebakeba.com](http://bamboochat.kebakeba.com) **BambooChat。** 国内可直接畅想的 chatgpt 服务，基于 GPT3.5tubro 和 GPT4 构建
1. [[⭐⭐] http://new.cutim.top](http://new.cutim.top) **ChatGPT Web--免费的国内ChatGPT。**
1. [[⭐⭐🧑‍💻] https://carps.ink](https://carps.ink) **在线ChatGPT。** 无需魔法，国内可用，支持AI绘画，支持联网搜索，谷歌搜索，必应搜索，支持多达60余种角色对话，支持语音合成，多达60余种AI语音。后续会支持文档对话等等 `[error][-1]timeout`
1. [[⭐⭐] https://chat.binjie.site:7777](https://chat.binjie.site:7777) **仅用于开发学习交流。** 基于 GPT3 的在线对话应用（非 OpenAI GTP 3.5+），支持部分信息在线搜索
1. [[⭐⭐🧑‍💻] https://chat.coolai.vip](https://chat.coolai.vip) **CoolAI地址发布页。** 每日登录后，签到即可获取125次chatgpt3.5对话额度，也可使用额度进行思维导图绘制，midjourney绘画。同时每日会更新卡密供用户使用
1. [[⭐⭐🧑‍💻] https://chat.oldwei.com](https://chat.oldwei.com) **openfish。** 使用ChatGPT多账号轮询逆向官网接口，Claude逆向工程做第二备用，ChatGPT官方收费API KEY做第三备用。系统稳定可长期免费使用
1. [[⭐⭐🧑‍💻] https://chattyaid.com](https://chattyaid.com) **ChattyAid。** Best AI Content Writer
1. [[⭐⭐🧑‍💻] https://gpt.nowait.xin/chat](https://gpt.nowait.xin/chat) **33GPT - 为内容创客打造的AI对话工具。** 每天可免费提问10次，会员无限制。实打实向微软付费，企业级服务接口，速度快，非常稳定
1. [[⭐⭐🧑‍💻] https://home.v50.ltd](https://home.v50.ltd) **T-CHAT。** 免费的AI画图
1. [[⭐⭐🧑‍💻] https://www.weijiwangluo.com/talk](https://www.weijiwangluo.com/talk) **ATalk。** 是一个基于gpt-3.5-turbo引擎封装的网站,通过输入文本，输出相应的回答，实现智能聊天的功能
1. [[⭐⭐🧑‍💻] https://xmind.ai](https://xmind.ai) **Xmind Copilot。** Xmind Copilot 思维导图 AI 助手
1. [[⭐] https://ai-toolbox.codefuture.top](https://ai-toolbox.codefuture.top) **AI帮个忙。** 多功能AI小帮手
1. [[⭐] https://ai.zecoba.cn](https://ai.zecoba.cn) **301 Moved Permanently。**
1. [[⭐] https://aigcfun.com](https://aigcfun.com) **AI EDU。** 该站点已暂停访问
1. [[⭐] https://aitools.run](https://aitools.run) **AI帮个忙 | 多功能AI小帮手。**
1. [[⭐] https://chat.eryajf.net](https://chat.eryajf.net) **AList-Eryajf。**
1. [[⭐] https://chat.wangyaodi.com](https://chat.wangyaodi.com) **NextChat。**
1. [[⭐] https://dusk.chat](https://dusk.chat)
1. [[⭐] https://plus.wxredcover.cn](https://plus.wxredcover.cn) **ChatGPT。**
1. [[⭐] https://www.dusk.chat](https://www.dusk.chat) **Welcome to Dusk.。**
1. [[⭐] https://www.meout.app](https://www.meout.app) **Meout - Find your outing。** Find your next outing in seconds
1. [[⭐] https://www.zhenghaoyun.cn](https://www.zhenghaoyun.cn) **DNSPod。**
1. [[⭐] https://zhenghaoyun.cn](https://zhenghaoyun.cn) **ChatGPT。**
1. [[🔑] https://chat-simplifier.imzbb.cc](https://chat-simplifier.imzbb.cc) 聊天简化器
1. [[🔑] https://chat.h-t-m.com](https://chat.h-t-m.com) **ChatGPT Next Web。**
1. [[🔑] https://weeklyreport.avemaria.fun](https://weeklyreport.avemaria.fun) 周报生成器。仅于周一、五、六、日免费使用，其余时间自备 OpenAI API Key
1. [[⭐⭐💰🧑‍💻] http://ai.bamboochat.cn](http://ai.bamboochat.cn) **BambooChat。** 3.5和4.0 API构建的CHATGPT网站
1. [[⭐⭐💰🧑‍💻] https://chat.immuseai.com](https://chat.immuseai.com) **灵沐AI（Immuse AI)。** 灵沐AI（Immuse AI)。免梯子，支持GPT4，双端通用，界面简单友好。将来会集成更多的大模型应用。
1. [[⭐⭐💰] https://chat.pinkfong.cn](https://chat.pinkfong.cn) **hao-gpt。** 双端支持，可免费使用，支持GPT4
1. [[💰🧑‍💻] https://chat.alpaca-bi.com](https://chat.alpaca-bi.com) **Alpaca ChatGPT。**
1. [[⭐⭐💰🔑🧑‍💻] https://shutu.cn](https://shutu.cn) **oneperfect-gpt。**
1. [[🔐] https://chat.zecoba.cn](https://chat.zecoba.cn) **泽科巴AI对话。** 为了配合网信办技术安全审核，网站暂时关闭
1. [[🔐🔑] https://blog.zhuliansoft.com](https://blog.zhuliansoft.com)
1. [[🔐🔑] https://chat.zgboke.com](https://chat.zgboke.com) **ChatGPT Next Web。**
1. [[⭐⭐🚀] http://chat.newstop.uk](http://chat.newstop.uk) **Chat智能机器人。** 无需登录，免费使用，可选模版【域名DNS已被污染，可 VPN 访问】 `[error][-1]timeout`
1. [[⭐⭐🚀🧑‍💻] https://aassdd.opao.xyz](https://aassdd.opao.xyz) **oneperfect-gpt。** 使用了120美刀账号。没有任何速率限制，访问速度飞快 `[error][-1]timeout`
1. [[⭐⭐🚀🧑‍💻] https://backre.com](https://backre.com) **百库。** 国内可访问，提供免费额度 `[error][-1]timeout`
1. [[⭐⭐🚀] https://chat.weuseing.com](https://chat.weuseing.com) **Chat机器人。** 无需登录，免费使用 `[error][-1]timeout`
1. [[⭐⭐🚀🧑‍💻] https://chattoai.cc](https://chattoai.cc) **AiAiChat。** 基于GPT3.5和GPT4开发的主打一键生成式小应用，支持一键生成思维导图，与GPT4自由对话，使用企业付费接口部署分布式API，高速稳定 `[error][-1]timeout`
1. [[⭐⭐🚀] https://firstai.opao.xyz](https://firstai.opao.xyz) **ChatGPT Next。** 最新可用地址发布页 `[error][-1]timeout`
1. [[⭐⭐🚀] https://gpt.aifree.site](https://gpt.aifree.site) **FREEGPT。** 免费,无需登陆,无需翻墙,无限次数 `[error][-1]timeout`
1. [[⭐⭐🚀] https://newstop.c1ns.cn](https://newstop.c1ns.cn) **Chat智能机器人。** 无需登录，免费使用，可选模版
1. [[🚀] http://itecheasy.com.cn](http://itecheasy.com.cn) **ChatGpt-智能Ai。**
1. [[🚀] https://ai117.com](https://ai117.com) **AI Chat。**
1. [[🚀] https://chat-langchainjs.fly.dev](https://chat-langchainjs.fly.dev) **LangChain Chat。**
1. [[🚀] https://chat.1kcode.com](https://chat.1kcode.com) **ChatGPT Web。**
1. [[🚀] https://chat.51buygpt.com](https://chat.51buygpt.com) **ChatGPT社区免费版 | 51BuyGPT。**  `[error][-1]timeout`
1. [[⭐⭐⭐🔑🚀] https://beta.openai.com](https://beta.openai.com) **OpenAI ChatGPT。** ChatGPT(beta) 官方入口
1. [[🚀] https://ai.6ix.com](https://ai.6ix.com) **6ixAI。**  `[error][-1]timeout`
1. [[🚀] https://ai.i-misaka.com](https://ai.i-misaka.com) **Index Ai。**  `[error][-1]timeout`
1. [[🚀] https://chat.abc123.site](https://chat.abc123.site) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[🚀] https://chat.aigc101.net](https://chat.aigc101.net) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[🚀] https://2618.eu.org](https://2618.eu.org) **ImGood Web。** ChatGPT API Demo `[error][-1]timeout`
1. [[⭐⭐🚀] https://aiv.erbanku.com](https://aiv.erbanku.com) **VisualGPT。**  `[error][-1]timeout`
1. [[🚀] https://askwhyai.xyz](https://askwhyai.xyz)  `[error][-1]timeout`
1. [[🚀] https://bengbu.icu](https://bengbu.icu) **ChatGPT。**  `[error][-1]timeout`
1. [[🚀] https://bot.sy1120.top](https://bot.sy1120.top) **ChatGPT。**  `[error][-1]getaddrinfo ENOTFOUND bot.sy1120.top`
1. [[🚀] https://chat.417521.xyz](https://chat.417521.xyz) **ChatGPT。**  `[error][-1]timeout`
1. [[🚀] https://www.askwhyai.xyz](https://www.askwhyai.xyz) **Ask Why AI。**  `[error][-1]timeout`
1. [[🚀] https://chatcat.pages.dev](https://chatcat.pages.dev) **chatcat-基于ChatGPT的猫娘catgirl。** 免费测试KEY不支持多轮对话。可填写自己的KEY `[error][-1]timeout`
1. [[🚀] https://ai.xiaokai.dev](https://ai.xiaokai.dev) **ChatGPT。**  `[error][-1]timeout`
1. [[🚀] https://ai.youmeng.me](https://ai.youmeng.me) **ChatGPT API。**  `[error][-1]timeout`
1. [[🚀] https://aibi.one](https://aibi.one) **ChatGPT。**  `[error][-1]read ECONNRESET`
1. [[🚀] https://c.thagki9.com](https://c.thagki9.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[🚀] https://chat-bzl.maybee.shop](https://chat-bzl.maybee.shop) **ChatGPT。**  `[error][-1]timeout`
1. [[⭐⭐⭐🚀] https://chat.lmsys.org](https://chat.lmsys.org) **FastChat。** 基于 Vicuna: An Open Chatbot Impressing GPT-4 `[error][-1]timeout`
1. [[🚀] https://c.icean.xyz](https://c.icean.xyz) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[🚀] https://chat.19970212.xyz](https://chat.19970212.xyz) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[🚀] https://chat.acgh.top](https://chat.acgh.top) **ChatGPT。**  `[error][-1]timeout`
1. [[🚀] https://chat.aurai.online](https://chat.aurai.online) **Aurai。**  `[error][-1]timeout`
1. [[🚀] https://chat.bravecai.lol](https://chat.bravecai.lol) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[🚀] https://chat.by-pro.cn](https://chat.by-pro.cn) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[🚀] https://chat.colorfuldora.xyz](https://chat.colorfuldora.xyz) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[🚀] https://www.aibi.one](https://www.aibi.one) **ChatGPT。**  `[error][-1]timeout`
1. [[🚀] https://bobnewby.eu.org](https://bobnewby.eu.org) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[🚀] https://chat.himiwei.com](https://chat.himiwei.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[🚀] https://chat.itinglight.com](https://chat.itinglight.com) **曾程锦的专属 ChatGPT。**  `[error][-1]timeout`
1. [[🚀] https://jike.life](https://jike.life) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[🚀] https://jpt.ma](https://jpt.ma) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[🚀] https://www.bobnewby.eu.org](https://www.bobnewby.eu.org) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[🚀] https://www.jpt.ma](https://www.jpt.ma) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[🚀] https://chat.clandoom.com](https://chat.clandoom.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[🚀] https://chat.iv16sl.xyz](https://chat.iv16sl.xyz) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[🔑🚀] https://shangzhou.eu.org](https://shangzhou.eu.org)  `[error][-1]timeout`
1. [[🔑🚀] https://www.shangzhou.eu.org](https://www.shangzhou.eu.org) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[🔑🚀] https://chatgpt.ssssp.net](https://chatgpt.ssssp.net) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[🔑🚀] https://gpt.chatmomo.tech](https://gpt.chatmomo.tech) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[🔑🚀] https://chat.openaccessgpt.org](https://chat.openaccessgpt.org) **Open Access GPT。**  `[error][-1]timeout`
1. [[❓⭐⭐🧑‍💻] https://jntm.opengpt88.com](https://jntm.opengpt88.com) **ChatGPT。**  `[error][-1]timeout`
1. [[❓⭐⭐] https://chat.free2gpt.xyz](https://chat.free2gpt.xyz) **Free2gpt。** 无需魔法 无需登录 不限次数 `[error][-1]timeout`
1. [[❓⭐⭐] https://sofast.ai/chat](https://sofast.ai/chat) **嗖快AI助理。** 将ChatGPT分成了不同的角色方便对话。可免费体验，邀请好友可获得更多的体验流量 `[error][-1]timeout`
1. [[❓⭐⭐🧑‍💻] https://www.magicaibot.com/talk](https://www.magicaibot.com/talk) **MagicAI。** 集成chatgpt和midjourney两大AI引擎网站，响应速度极快 `[error][-1]timeout`
1. [[❓🔑] https://freegpt.cc](https://freegpt.cc) **ChatGPT Playground - freeGPT.cc。**  `[error][-1]timeout`
1. [[❓🔑] https://ai.yiios.com](https://ai.yiios.com) **小鱼智能客服 - ai.yiios.com。** ChatGPT 镜像站 `[error][-1]read ECONNRESET`
1. [[❓🚀] https://94gpt.com](https://94gpt.com) **Chat GPT。** 上下文仅支持2条对话，设置自己 Key 后可去除限制 `[error][301]Moved Permanently`
1. [[❓] https://trychatgp.com](https://trychatgp.com) **GPTalk。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.ddiu.io](https://chatgpt.ddiu.io)  `[error][-1]timeout`
1. [[❓] https://chatgpt123.fyi](https://chatgpt123.fyi) **ChatGPT123.FYI。**  `[error][-1]timeout`
1. [[❓] https://open-gpt.app](https://open-gpt.app) **OpenGPT - Create ChatGpt Application in seconds | OpenGPT。** 立即使用海量的 ChatGPT 应用，或在几秒钟内创建属于自己的应用 `[error][-1]timeout`
1. [[❓] https://chatgpt.eclipsewww.tech](https://chatgpt.eclipsewww.tech) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.eclipsewww.xyz](https://chatgpt.eclipsewww.xyz) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://chat.irss.eu.org](https://chat.irss.eu.org) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.930621.xyz](https://chatgpt.930621.xyz) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://chat.closeai.me](https://chat.closeai.me) **ChatGPT Web。**  `[error][-1]timeout`
1. [[❓🔐] https://chat.xiexie.me](https://chat.xiexie.me) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.svxte.ch](https://chatgpt.svxte.ch) **ChatGPT | SVX TECH。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.canbingzt.com](https://chatgpt.canbingzt.com) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://chat.opencf.xyz](https://chat.opencf.xyz) **ChatGPT Web Online。**  `[error][-1]timeout`
1. [[❓] https://chat.gog.one](https://chat.gog.one) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.jellybeans.love](https://chatgpt.jellybeans.love) **ChatGPT - 旺脉。**  `[error][-1]timeout`
1. [[❓] https://chat.chatgptworld.net](https://chat.chatgptworld.net) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://chat1.osfpu.com](https://chat1.osfpu.com) ChatGPT API Demo `[error][-1]timeout`
1. [[❓] https://chat.milomoon.com](https://chat.milomoon.com) **欢迎来到畅的AI。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.ppt6666.com](https://chatgpt.ppt6666.com) **ChatGPT API Demo。** ChatGPT 智能AI机器人 `[error][-1]timeout`
1. [[❓] https://www.shifeiti.pro](https://www.shifeiti.pro)  `[error][-1]timeout`
1. [[❓] https://shifeiti.pro](https://shifeiti.pro) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://www.lazyboy.top](https://www.lazyboy.top) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://lazyboy.top](https://lazyboy.top)  `[error][-1]timeout`
1. [[❓] https://chat.m1saka.eu.org](https://chat.m1saka.eu.org) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.moeyy.cn](https://chatgpt.moeyy.cn) **302 Found。**  `[error][403]Forbidden`
1. [[❓] https://www.ydzykt.cn](https://www.ydzykt.cn) **不智能助手。**  `[error][-1]timeout`
1. [[❓] https://gpt2.pedroz.eu.org](https://gpt2.pedroz.eu.org) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.pedroz.eu.org](https://chat.pedroz.eu.org) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chatgpt-demo.ainetshop.com](https://chatgpt-demo.ainetshop.com) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://www.gptcc.cc](https://www.gptcc.cc) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://gptcc.cc](https://gptcc.cc)  `[error][-1]timeout`
1. [[❓] https://chat.ctcd.cc](https://chat.ctcd.cc) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://talk.xiu.ee](https://talk.xiu.ee) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.lxzh.app](https://chatgpt.lxzh.app) **ChatGPT Smart assistant。**  `[error][-1]timeout`
1. [[❓] https://ai.lpsee.com](https://ai.lpsee.com) ChatGPT API Demo `[error][-1]connect ECONNREFUSED 154.85.102.32:443`
1. [[❓] https://chat.gptku.com](https://chat.gptku.com) **ChatGPT API Demo。**  `[error][-1]getaddrinfo ENOTFOUND chat.gptku.com`
1. [[❓] https://chat.aisa.top](https://chat.aisa.top) 308 - Permanent Redirect `[error][308]Permanent Redirect`
1. [[❓] https://chat.laravel.icu](https://chat.laravel.icu) **CoolChat。** 402 - Payment Required `[error][-1]timeout`
1. [[❓] https://chat.rmb.run](https://chat.rmb.run) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://chat.kollykolly.cn](https://chat.kollykolly.cn) **ChatGPT中文版。**  `[error][503]Service Unavailable`
1. [[❓] https://scn.pandazki.im](https://scn.pandazki.im) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://showcase.pandazki.im](https://showcase.pandazki.im) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://chat.tradergalax.xyz](https://chat.tradergalax.xyz) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://www.chatgpt123.fyi](https://www.chatgpt123.fyi) **ChatGPT123.FYI。**  `[error][-1]timeout`
1. [[❓] https://chat.lucascool.social](https://chat.lucascool.social) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.jingbh.cloud](https://chatgpt.jingbh.cloud) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://chat.gptly.net](https://chat.gptly.net) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.fcc.cm](https://chat.fcc.cm) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.locationwith.com](https://chat.locationwith.com) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.wtko1.icu](https://chat.wtko1.icu) **ChatGPT Next Web。** ChatGPT `[error][-1]timeout`
1. [[❓] https://aihelper.qiming.info](https://aihelper.qiming.info) ChatGPT `[error][-1]timeout`
1. [[❓] https://ytliu.top](https://ytliu.top)  `[error][-1]getaddrinfo ENOTFOUND ytliu.top`
1. [[❓] https://www.ytliu.top](https://www.ytliu.top) **Yaotian  Liu。**  `[error][-1]getaddrinfo ENOTFOUND www.ytliu.top`
1. [[❓] https://t.chate.chat](https://t.chate.chat) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://lyuhang.top](https://lyuhang.top) **ChatGPT。**  `[error][-1]getaddrinfo ENOTFOUND lyuhang.top`
1. [[❓] https://www.lyuhang.top](https://www.lyuhang.top) **ChatGPT。**  `[error][-1]getaddrinfo ENOTFOUND www.lyuhang.top`
1. [[❓🔑] https://chatgpt-with-key.yongmai.xyz](https://chatgpt-with-key.yongmai.xyz) **ChatGPT3.5 with your key。**  `[error][-1]timeout`
1. [[❓🔑] https://jincheng.wiki](https://jincheng.wiki)  `[error][-1]read ECONNRESET`
1. [[❓🔑] https://www.jincheng.wiki](https://www.jincheng.wiki) **ChatGPT。**  `[error][400]Bad Request`
1. [[❓] https://chat.leonas.dev](https://chat.leonas.dev) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://gpt.toolkit.show](https://gpt.toolkit.show) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.yuexun.me](https://chatgpt.yuexun.me) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://ai.wlei.cc](https://ai.wlei.cc) ChatGPT `[error][-1]getaddrinfo ENOTFOUND ai.wlei.cc`
1. [[❓] https://www.676888.xyz](https://www.676888.xyz)  `[error][530]HTTP_530`
1. [[❓🔑] https://playground.openaikey.xyz](https://playground.openaikey.xyz) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://gpt.71xun.com](https://gpt.71xun.com) **ChatGPT API Demo。**  `[error][-1]getaddrinfo ENOTFOUND gpt.71xun.com`
1. [[❓] https://chatgpt.daysdream.one](https://chatgpt.daysdream.one) **ChatGPT。**  `[error][308]Permanent Redirect`
1. [[❓] https://chatgpt1111-2.4everland.app](https://chatgpt1111-2.4everland.app)  `[error][502]Bad Gateway`
1. [[❓] https://chatgpt.ago88.com](https://chatgpt.ago88.com) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.chlorine.site](https://chat.chlorine.site) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.outshine.me](https://chatgpt.outshine.me) **ChatGPT For Outshine。**  `[error][-1]timeout`
1. [[❓] https://ai.ppclub.ml](https://ai.ppclub.ml) 308 - Permanent Redirect `[error][-1]getaddrinfo ENOTFOUND ai.ppclub.ml`
1. [[❓] https://chat.zhenghaoyun.cn](https://chat.zhenghaoyun.cn) **ChatGPT。**  `[error][-1]getaddrinfo ENOTFOUND chat.zhenghaoyun.cn`
1. [[❓] https://chat.exi.software](https://chat.exi.software) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.singee.me](https://chatgpt.singee.me) 403 - Forbidden `[error][403]Forbidden`
1. [[❓] https://chatgpt.jerryfage.top](https://chatgpt.jerryfage.top) **ChatGPT API Demo。**  `[error][-1]read ECONNRESET`
1. [[❓] https://chat.pedroz.app](https://chat.pedroz.app) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.miantiao.me](https://chat.miantiao.me) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.justrrry.xyz](https://www.justrrry.xyz) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://justrrry.xyz](https://justrrry.xyz)  `[error][-1]timeout`
1. [[❓] https://kais.live](https://kais.live)  `[error][-1]timeout`
1. [[❓] https://www.kais.live](https://www.kais.live) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://kehangbio.com](https://kehangbio.com) **Minesweeper。**  `[error][-1]timeout`
1. [[❓] https://x.chate.chat](https://x.chate.chat) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://www.meturing.top](https://www.meturing.top) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://meturing.top](https://meturing.top)  `[error][-1]timeout`
1. [[❓] https://www.mulaen.com](https://www.mulaen.com)  `[error][-1]timeout`
1. [[❓] https://gpt.sheepig.top/chat](https://gpt.sheepig.top/chat) **OpenAI。**  `[error][-1]timeout`
1. [[❓] https://gpt.tool00.com](https://gpt.tool00.com) **AI免费中文公益版 - 提供GPT模型的实时聊天功能。**  `[error][-1]timeout`
1. [[❓] https://hi.icu](https://hi.icu) **https://hi.icu 中文ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat35.com/chat](https://chat35.com/chat) **ChatGPT中文版 - Chat97.com。**  `[error][-1]timeout`
1. [[❓] https://chat.moyunav.com](https://chat.moyunav.com) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.cyihx.me](https://chat.cyihx.me) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.bowlofnoodles.top](https://chatgpt.bowlofnoodles.top) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.tiabless.com](https://chat.tiabless.com) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://gpt.exci.me](https://gpt.exci.me) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://chatgpt-demo-7.4everland.app](https://chatgpt-demo-7.4everland.app) **/ipfs/bafybeidg3bhwcatzb6jacizknk7ykdv7k6cpawpbhdpueiwh23rgf2wwai/。**  `[error][502]Bad Gateway`
1. [[❓] https://chatgpt-demo-pw2ps0ci-lsqs2022.4everland.app](https://chatgpt-demo-pw2ps0ci-lsqs2022.4everland.app) **/ipfs/bafybeidg3bhwcatzb6jacizknk7ykdv7k6cpawpbhdpueiwh23rgf2wwai/。**  `[error][502]Bad Gateway`
1. [[❓] https://luqman.chat](https://luqman.chat)  `[error][-1]timeout`
1. [[❓] https://www.luqman.chat](https://www.luqman.chat) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://www.weekdaycare.cf](https://www.weekdaycare.cf)  `[error][-1]getaddrinfo ENOTFOUND www.weekdaycare.cf`
1. [[❓] https://ai.czhuangjia.top](https://ai.czhuangjia.top) **竹合在线陪聊。**  `[error][-1]timeout`
1. [[❓] https://chat.sciencat.net](https://chat.sciencat.net) **ChatGPT 公益站 By Sciencat。**  `[error][-1]timeout`
1. [[❓] https://www.imgpt.top](https://www.imgpt.top) ChatGPT `[error][526]HTTP_526`
1. [[❓] https://mygpt.moinkhao.me](https://mygpt.moinkhao.me) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.e7.work](https://chat.e7.work) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat4u.me](https://chat4u.me)  `[error][-1]timeout`
1. [[❓] https://www.chat4u.me](https://www.chat4u.me) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.internetip.cn](https://chat.internetip.cn) **智能AI。**  `[error][-1]getaddrinfo ENOTFOUND chat.internetip.cn`
1. [[❓⭐⭐] https://theb.ai](https://theb.ai)  `[error][403]Forbidden`
1. [[❓] https://chat.gow66.tech](https://chat.gow66.tech) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.rockyzhong.buzz](https://www.rockyzhong.buzz) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://rockyzhong.buzz](https://rockyzhong.buzz)  `[error][-1]getaddrinfo ENOTFOUND rockyzhong.buzz`
1. [[❓⭐⭐🔐] https://bot.jjzn.top](https://bot.jjzn.top) **极简智能AI-Chatgpt会员版。** 极简智能 `[error][-1]timeout`
1. [[❓] https://chatgpt.keke.cc](https://chatgpt.keke.cc) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://ai2.622622.xyz](https://ai2.622622.xyz)  `[error][403]Forbidden`
1. [[❓] https://chat.dywa.tech](https://chat.dywa.tech) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://gpt5.life](https://gpt5.life)  `[error][-1]timeout`
1. [[❓] https://www.gpt5.life](https://www.gpt5.life) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.notemi.cn](https://chatgpt.notemi.cn) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://noyashow.xyz](https://noyashow.xyz) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.junknow.cn](https://chat.junknow.cn) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.mxla1.com](https://chat.mxla1.com) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://gpt.limitzou.cn](https://gpt.limitzou.cn) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://www.gptmust.top](https://www.gptmust.top) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://www.kernelgpt.uk](https://www.kernelgpt.uk) **ChatGPT。**  `[error][-1]getaddrinfo ENOTFOUND www.kernelgpt.uk`
1. [[❓] https://kernelgpt.uk](https://kernelgpt.uk)  `[error][-1]getaddrinfo ENOTFOUND kernelgpt.uk`
1. [[❓] https://chat.bigs.top](https://chat.bigs.top) **ChatGPT。**  `[error][502]Bad Gateway`
1. [[❓] https://tschatgpt.top](https://tschatgpt.top) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.wuhen4213.xyz](https://chatgpt.wuhen4213.xyz) **ChatGPT Web。**  `[error][503]Service Unavailable`
1. [[❓] https://www.gptkkleno.top](https://www.gptkkleno.top) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://www.icechats.com](https://www.icechats.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.lubangyan.top](https://chatgpt.lubangyan.top) **ChatGPT API Demo。**  `[error][-1]getaddrinfo ENOTFOUND chatgpt.lubangyan.top`
1. [[❓] https://chat.genge.cc](https://chat.genge.cc) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://www.fwrite.tech](https://www.fwrite.tech) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.wole.gq](https://chatgpt.wole.gq) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.wole.gq](https://chat.wole.gq) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.cy1973.cn](https://chatgpt.cy1973.cn) **机器人花花。**  `[error][-1]timeout`
1. [[❓🔑] https://175.178.88.119](https://175.178.88.119) **chathome。** 免费访问chatgpt `[error][-1]timeout`
1. [[❓] https://chatgpt.lik.sale](https://chatgpt.lik.sale) **ChatGPT菠萝头AI。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.davidweng.tk](https://chatgpt.davidweng.tk) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://www.ad1865.xyz](https://www.ad1865.xyz) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://ad1865.xyz](https://ad1865.xyz)  `[error][-1]timeout`
1. [[❓] https://chat.gnn.ac.cn](https://chat.gnn.ac.cn) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chatgptdemo1.ccfx.cc](https://chatgptdemo1.ccfx.cc)  `[error][-1]connect ECONNREFUSED 127.0.0.1:443`
1. [[❓] https://www.snowgao.cn](https://www.snowgao.cn) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://snowgao.cn](https://snowgao.cn)  `[error][-1]timeout`
1. [[❓] https://iamchatgpt.top](https://iamchatgpt.top)  `[error][-1]read ECONNRESET`
1. [[❓] https://www.iamchatgpt.top](https://www.iamchatgpt.top) **ChatGPT。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://1ight.xyz](https://1ight.xyz)  `[error][-1]timeout`
1. [[❓🔐🔑] https://www.1ight.xyz](https://www.1ight.xyz) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://www.ranxin.love](https://www.ranxin.love) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.laughmetal.com](https://chat.laughmetal.com) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chatgpt-vercel.ssiswent.cc](https://chatgpt-vercel.ssiswent.cc) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://gpg.icu](https://gpg.icu) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.shibuzhuo.top](https://www.shibuzhuo.top) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://shibuzhuo.top](https://shibuzhuo.top)  `[error][-1]getaddrinfo ENOTFOUND shibuzhuo.top`
1. [[❓] https://vercel.onlybot.club](https://vercel.onlybot.club) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat2.ikun99.cf](https://chat2.ikun99.cf) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chatai.v4coder.cn](https://chatai.v4coder.cn) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://kdy4.top](https://kdy4.top) **ChatGPT。**  `[error][-1]getaddrinfo ENOTFOUND kdy4.top`
1. [[❓] https://ai.zzgoodqc.cn](https://ai.zzgoodqc.cn) **ChatGPT Next Web。**  `[error][400]default_vip_400`
1. [[❓] https://ai.bingxizg.com](https://ai.bingxizg.com) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://35.maogou.xyz](https://35.maogou.xyz) **ChatGPT3.5。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.coolxy.top](https://chatgpt.coolxy.top) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://www.gpt.kendeji.fun](https://www.gpt.kendeji.fun) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat2.ai.guoshenghuaxing.com](https://chat2.ai.guoshenghuaxing.com) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.panxox.xyz](https://chatgpt.panxox.xyz) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.oeerp.com](https://chatgpt.oeerp.com) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://dev-chat.zhuscat.com](https://dev-chat.zhuscat.com) **ChatBot。**  `[error][-1]read ECONNRESET`
1. [[❓] https://yjtx.online](https://yjtx.online)  `[error][-1]getaddrinfo ENOTFOUND yjtx.online`
1. [[❓] https://www.yjtx.online](https://www.yjtx.online) **ChatGPT。**  `[error][-1]getaddrinfo ENOTFOUND www.yjtx.online`
1. [[❓] https://gpts.wxredcover.cn](https://gpts.wxredcover.cn) **ChatGPT。** GPT 3.5 Model。需关注公众号获取密码 `[error][-1]timeout`
1. [[❓] https://case789.com](https://case789.com)  `[error][-1]timeout`
1. [[❓] https://www.case789.com](https://www.case789.com) **ChatGPT。**  `[error][-1]read ECONNRESET`
1. [[❓] https://gpt.windcrain.top](https://gpt.windcrain.top) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.kcalb.wang](https://chat.kcalb.wang) **ChatGPT API Demo。**  `[error][-1]read ECONNRESET`
1. [[❓] https://chat.weifu.host](https://chat.weifu.host) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://heshaobin.top](https://heshaobin.top)  `[error][-1]timeout`
1. [[❓] https://www.heshaobin.top](https://www.heshaobin.top) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://kevin-chatgpt.top](https://kevin-chatgpt.top) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://gps.kevin-chatgpt.top](https://gps.kevin-chatgpt.top) **ChatGPT。**  `[error][-1]timeout`
1. [[❓🔐] https://openai.gflish.xyz](https://openai.gflish.xyz) **ChatGPT Next Web。** 需关注公众号获取授权码 `[error][503]Service Unavailable`
1. [[❓] https://msu.best](https://msu.best)  `[error][-1]timeout`
1. [[❓] https://www.msu.best](https://www.msu.best) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://www.horizonchatgpt.cn](https://www.horizonchatgpt.cn)  `[error][-1]timeout`
1. [[❓] https://yyyy.chat](https://yyyy.chat)  `[error][-1]getaddrinfo ENOTFOUND yyyy.chat`
1. [[❓] https://test.nekoko.top](https://test.nekoko.top) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.dengrenfang.cn](https://chatgpt.dengrenfang.cn) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://www.timely-rain.top](https://www.timely-rain.top) **ChatGPT API Demo。**  `[error][-1]getaddrinfo ENOTFOUND www.timely-rain.top`
1. [[❓] https://www.dsssc.top](https://www.dsssc.top) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://www.nanpy.com](https://www.nanpy.com) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://nanpy.com](https://nanpy.com)  `[error][-1]timeout`
1. [[❓] https://chatgpt3.fun](https://chatgpt3.fun) **ChatGPT Pro。** 需关注公众号获取授权码 `[error][-1]timeout`
1. [[❓] https://gpt.xt98.xyz](https://gpt.xt98.xyz) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://c.totoro.ga](https://c.totoro.ga)  `[error][526]HTTP_526`
1. [[❓] https://chat.totoro.ga](https://chat.totoro.ga)  `[error][526]HTTP_526`
1. [[❓] https://chat.asurepos.com](https://chat.asurepos.com) **ChatGPT Next Web。**  `[error][-1]write EPROTO C047AB25977F0000:error:0A000410:SSL routines:ssl3_read_bytes:sslv3 alert handshake failure:../deps/openssl/openssl/ssl/record/rec_layer_s3.c:1586:SSL alert number 40
`
1. [[❓] https://gpt.wonwe.cc](https://gpt.wonwe.cc) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://jinchang.ltd](https://jinchang.ltd)  `[error][-1]getaddrinfo ENOTFOUND jinchang.ltd`
1. [[❓] https://www.jinchang.ltd](https://www.jinchang.ltd) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.sun.tm](https://chat.sun.tm) **ChatGPT Next Web。**  `[error][308]Permanent Redirect`
1. [[❓] https://gpt.hopequan.com](https://gpt.hopequan.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.ciit.ltd](https://chat.ciit.ltd) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.xichuang-china.com](https://chatgpt.xichuang-china.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://fy99.cf](https://fy99.cf) **ChatGPT Next Web。**  `[error][-1]connect ECONNREFUSED 47.113.228.237:443`
1. [[❓] https://chat3.fy99.cf](https://chat3.fy99.cf) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.keco.tk](https://www.keco.tk) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://keco.tk](https://keco.tk) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://gpt.166266366.xyz](https://gpt.166266366.xyz) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐] https://ai.wefoundi.top](https://ai.wefoundi.top) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.nununu.net](https://www.nununu.net) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://nununu.net](https://nununu.net)  `[error][-1]timeout`
1. [[❓] https://chat.marlonlu.cn](https://chat.marlonlu.cn) **ChatGPT Next Web。**  `[error][-1]read ECONNRESET`
1. [[❓] https://dataweng.com](https://dataweng.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.dfsqs.com](https://www.dfsqs.com) **ChatGPT Next Web。**  `[error][-1]getaddrinfo ENOTFOUND www.dfsqs.com`
1. [[❓] https://dd299.life](https://dd299.life) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.dd299.life](https://www.dd299.life)  `[error][-1]timeout`
1. [[❓] https://gpt.wustca.club](https://gpt.wustca.club) **ChatGPT Next Web。**  `[error][-1]read ECONNRESET`
1. [[❓] https://www.starryu.cn](https://www.starryu.cn) **Chat GPT。**  `[error][-1]timeout`
1. [[❓] https://starryu.cn](https://starryu.cn)  `[error][-1]timeout`
1. [[❓] https://x.chen.rs](https://x.chen.rs) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.iosshop.xyz](https://chat.iosshop.xyz) **ChatGPT 探索分享。**  `[error][-1]timeout`
1. [[❓] https://888.i33i.top](https://888.i33i.top) **抱歉，站点已暂停。**  `[error][-1]timeout`
1. [[❓] https://chat.xiaobubu.asia](https://chat.xiaobubu.asia) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.yydsyy.top](https://www.yydsyy.top) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://yydsyy.top](https://yydsyy.top) **ChatGPT Next Web。**  `[error][-1]getaddrinfo ENOTFOUND yydsyy.top`
1. [[❓] https://gpt.selfshepherd.site](https://gpt.selfshepherd.site) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://gpt.fcsy.fit](https://gpt.fcsy.fit) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.yaozheng.men](https://www.yaozheng.men) **ChatGPT Next Web。**  `[error][-1]getaddrinfo ENOTFOUND www.yaozheng.men`
1. [[❓] https://yaozheng.men](https://yaozheng.men) **ChatGPT Next Web。**  `[error][-1]getaddrinfo ENOTFOUND yaozheng.men`
1. [[❓] https://chat.tridict.com](https://chat.tridict.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.tobyqin.cn](https://chat.tobyqin.cn) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://web.lnk4all.com](https://web.lnk4all.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://zrtstudy.online](https://zrtstudy.online) **ChatGPT Next Web。**  `[error][-1]connect ECONNREFUSED 127.0.0.1:443`
1. [[❓] https://llm.i207m.top](https://llm.i207m.top) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chatdage.com](https://chatdage.com)  `[error][-1]timeout`
1. [[❓] https://www.chatdage.com](https://www.chatdage.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.snowdew.one](https://www.snowdew.one) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://snowdew.one](https://snowdew.one)  `[error][-1]timeout`
1. [[❓] https://chatgpt.eyrefree.org](https://chatgpt.eyrefree.org)  `[error][-1]timeout`
1. [[❓] https://gpt.nyanners.moe](https://gpt.nyanners.moe) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.iecho.cc](https://chat.iecho.cc) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.mijk.top](https://chat.mijk.top) **ChatGPT Next Web。**  `[error][-1]getaddrinfo ENOTFOUND chat.mijk.top`
1. [[❓] https://ai.renhotec.com](https://ai.renhotec.com)  `[error][403]Forbidden`
1. [[❓] https://chat.kimwong.me](https://chat.kimwong.me) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.teap.online](https://chat.teap.online) **ChatGPT Next Web。**  `[error][-1]connect ECONNREFUSED 43.153.87.227:443`
1. [[❓] https://chat.doctoroyy.net](https://chat.doctoroyy.net) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.xwls.eu.org](https://chat.xwls.eu.org) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.uidx.cn](https://chat.uidx.cn) **ChatGPT Next Web。**  `[error][-1]getaddrinfo ENOTFOUND chat.uidx.cn`
1. [[❓] https://chat.yundesign.top](https://chat.yundesign.top) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.slouch.top](https://chat.slouch.top) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.mnnm.tech](https://chatgpt.mnnm.tech) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.bjqtim.top](https://www.bjqtim.top)  `[error][-1]connect ECONNREFUSED 43.135.156.155:443`
1. [[❓] https://chat.xizhibei.me](https://chat.xizhibei.me) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.zhuanjie.ltd](https://chat.zhuanjie.ltd) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.panpan.store](https://chatgpt.panpan.store) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.nidu.fun](https://chat.nidu.fun) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://gpt.gqy.ink](https://gpt.gqy.ink) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.uyloal.com](https://chatgpt.uyloal.com)  `[error][403]Forbidden`
1. [[❓] https://chatgpt.woc.moe](https://chatgpt.woc.moe) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.xzyjs.xyz](https://chat.xzyjs.xyz) **ChatGPT Next Web。**  `[error][-1]read ECONNRESET`
1. [[❓] https://robot.suebi.top](https://robot.suebi.top) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.sososn.cn](https://chat.sososn.cn) **嗖嗖AI助手。**  `[error][-1]timeout`
1. [[❓] https://chat.dyzyzj.top](https://chat.dyzyzj.top)  `[error][-1]timeout`
1. [[❓] https://zhoumo.xyz](https://zhoumo.xyz) **404 Not Found。**  `[error][523]HTTP_523`
1. [[❓] https://www.zhoumo.xyz](https://www.zhoumo.xyz) **Hello Meijun!。**  `[error][523]HTTP_523`
1. [[❓] https://chatgpt.cros3hadow.org](https://chatgpt.cros3hadow.org) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔑] https://chat.genzj.info](https://chat.genzj.info) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔑] https://chat.chen.lu](https://chat.chen.lu) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔑] https://chat.abes.live](https://chat.abes.live) **刘阳的 ChatGPT。**  `[error][-1]timeout`
1. [[❓🔑] https://chat.abrahamgreyson.me](https://chat.abrahamgreyson.me) **刘阳的 ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.w630.cc](https://chat.w630.cc) **ChatGPT Private Limited - ccw。**  `[error][-1]timeout`
1. [[❓] https://www.gabrlie.online](https://www.gabrlie.online) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://gabrlie.online](https://gabrlie.online)  `[error][-1]timeout`
1. [[❓] https://gpt.chrome7.com](https://gpt.chrome7.com) **ChatGPT Next Web。**  `[error][-1]socket hang up`
1. [[❓] https://chat.pinw.ca](https://chat.pinw.ca) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.toogoodtodo.com](https://www.toogoodtodo.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://toogoodtodo.com](https://toogoodtodo.com)  `[error][-1]timeout`
1. [[❓] https://chatn.voyaye.com](https://chatn.voyaye.com) **ChatGPT Next Web。**  `[error][-1]read ECONNRESET`
1. [[❓] https://chatgpt.hwdz.com.cn](https://chatgpt.hwdz.com.cn) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.afunc.cn](https://chatgpt.afunc.cn) **Mr.Y&#x27;s ChatGPT Web。**  `[error][-1]read ECONNRESET`
1. [[❓] https://gptweb.ttti.cc](https://gptweb.ttti.cc) **ChatGPT Next Web。**  `[error][308]Permanent Redirect`
1. [[❓] https://gpt.xsaf1207.cn](https://gpt.xsaf1207.cn) **ChatGPT Next Web。**  `[error][400]Bad Request`
1. [[❓] https://jidaoinfo.com](https://jidaoinfo.com)  `[error][-1]getaddrinfo ENOTFOUND jidaoinfo.com`
1. [[❓] https://chat.bslo.ltd](https://chat.bslo.ltd)  `[error][-1]timeout`
1. [[❓🔑] https://ai.galend.com](https://ai.galend.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.vanav.eu.org](https://chat.vanav.eu.org) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐] https://ai.ncwuhz.cn](https://ai.ncwuhz.cn) **ChatGPT Next Web。**  `[error][-1]read ECONNRESET`
1. [[❓🔐] https://iam.customgroup.icu](https://iam.customgroup.icu) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://vercel-gpt.gkirito.com](https://vercel-gpt.gkirito.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔑] https://chat.casemaka.com](https://chat.casemaka.com) **ChatGPT Next Web。**  `[error][-1]connect ECONNREFUSED 103.42.176.244:443`
1. [[❓] https://iwangpo.com](https://iwangpo.com) **Hexo。**  `[error][526]HTTP_526`
1. [[❓] https://chat.laizn.com](https://chat.laizn.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chatgpt-next.aab.icu](https://chatgpt-next.aab.icu) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://gpt.demochen.com](https://gpt.demochen.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔑] https://chat.2smile.top](https://chat.2smile.top) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://yucccc.top](https://yucccc.top) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://openai.juzi.in](https://openai.juzi.in) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://gpt.ppqq.me](https://gpt.ppqq.me) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.walletong.win](https://chat.walletong.win) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://magic2.defiweb3.games](https://magic2.defiweb3.games) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.visualzhou.com](https://chat.visualzhou.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://ai.8t.cx](https://ai.8t.cx) **ChatGPT Next Web。**  `[error][-1]getaddrinfo ENOTFOUND ai.8t.cx`
1. [[❓] https://doraemon.hosealle.cloud](https://doraemon.hosealle.cloud) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.ccino.xyz](https://chat.ccino.xyz) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://gpt.chenliang.org](https://gpt.chenliang.org) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.orcas.link](https://chatgpt.orcas.link) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.erichub.xyz](https://chatgpt.erichub.xyz) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.allprompt.org](https://chatgpt.allprompt.org) **ChatGPT WebUI。**  `[error][-1]timeout`
1. [[❓] https://gpt.yuluo.link](https://gpt.yuluo.link) **ChatGPT Next Web。**  `[error][308]Permanent Redirect`
1. [[❓] https://chat.mangguo.cloud](https://chat.mangguo.cloud) **ChatGPT API Demo。**  `[error][-1]read ECONNRESET`
1. [[❓🔐🔑] https://chat.aiapiopen.com](https://chat.aiapiopen.com) **Ai Health。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.mahyang.uk](https://chat.mahyang.uk) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.artifidea.com](https://chat.artifidea.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.owen666.top](https://chat.owen666.top) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://gpt.jiangyuhong.cn](https://gpt.jiangyuhong.cn) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://ai.aiminjie.com](https://ai.aiminjie.com)  `[error][-1]read ECONNRESET`
1. [[❓🔐🔑] https://chat.nowyouseeme.cyou](https://chat.nowyouseeme.cyou) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.liukaiqi.cn](https://chatgpt.liukaiqi.cn) **ChatGPT Next Web。**  `[error][-1]read ECONNRESET`
1. [[❓🔐🔑] https://chat.blockbind.com](https://chat.blockbind.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.zuomu.org](https://chat.zuomu.org) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.zgu9.one](https://chat.zgu9.one) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.linus.store](https://chat.linus.store) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.nako.tw](https://chat.nako.tw) **ChatGPT Next Web。**  `[error][403]Forbidden`
1. [[❓] https://chatweb.intoodoo.com](https://chatweb.intoodoo.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.ioscundang.com](https://www.ioscundang.com) **ChatGPT Next Web。**  `[error][-1]write EPROTO C057ECCEB27F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:../deps/openssl/openssl/ssl/record/rec_layer_s3.c:1586:SSL alert number 80
`
1. [[❓] https://ioscundang.com](https://ioscundang.com)  `[error][-1]write EPROTO C057ECCEB27F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:../deps/openssl/openssl/ssl/record/rec_layer_s3.c:1586:SSL alert number 80
`
1. [[❓🔐🔑] https://cgnwbva-chatgpt-mirror.spama.com.cn](https://cgnwbva-chatgpt-mirror.spama.com.cn) **ChatGPT Next Web。**  `[error][308]Permanent Redirect`
1. [[❓] https://www.gogpt.online](https://www.gogpt.online) **Go ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://gogpt.online](https://gogpt.online)  `[error][-1]timeout`
1. [[❓] https://gpt.yujian.icu](https://gpt.yujian.icu) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.chaz.cloud](https://chat.chaz.cloud) **ChatGPT Next Web。**  `[error][200]app_key inside config.php cannot be empty!`
1. [[❓] https://embracellm.space](https://embracellm.space) **ChatGPT Next Web。**  `[error][200]Welcome to nginx!`
1. [[❓🔐🔑] https://charlesc.ai](https://charlesc.ai)  `[error][-1]timeout`
1. [[❓🔐🔑] https://www.charlesc.ai](https://www.charlesc.ai) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://nenesoft.live](https://nenesoft.live) **NeneGPT。**  `[error][-1]timeout`
1. [[❓] https://www.nenesoft.live](https://www.nenesoft.live)  `[error][-1]timeout`
1. [[❓] https://chatgpt.junjiewen.com](https://chatgpt.junjiewen.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://yatoooon.ltd](https://yatoooon.ltd)  `[error][-1]timeout`
1. [[❓] https://www.yatoooon.ltd](https://www.yatoooon.ltd) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.yuanx.me](https://chatgpt.yuanx.me) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat1.lumione.cloud](https://chat1.lumione.cloud) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://ai.myvip.one](https://ai.myvip.one) **ChatGPT Next Web。** key 已失效 `[error][-1]timeout`
1. [[❓] https://chatgpt.lioy3.me](https://chatgpt.lioy3.me) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://www.aitao.live](https://www.aitao.live) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://aitao.live](https://aitao.live)  `[error][-1]timeout`
1. [[❓] https://chat.redhut.eu.org](https://chat.redhut.eu.org) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.yuistar.eu.org](https://www.yuistar.eu.org)  `[error][-1]timeout`
1. [[❓] https://yuistar.eu.org](https://yuistar.eu.org) **YuiChat。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.ntlx.top](https://chatgpt.ntlx.top) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://zhishi.one](https://zhishi.one) **ChatGPT Next Web。**  `[error][-1]getaddrinfo ENOTFOUND zhishi.one`
1. [[❓] https://chatgpt.oyas-nano.com](https://chatgpt.oyas-nano.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://gpt.pkuphy.com](https://gpt.pkuphy.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.zyxianzi.moe](https://chat.zyxianzi.moe) **ChatGPT Next Web。**  `[error][-1]getaddrinfo ENOTFOUND chat.zyxianzi.moe`
1. [[❓] https://gpt.irss.eu.org](https://gpt.irss.eu.org) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.xdliang123.xyz](https://www.xdliang123.xyz) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.lzl.dev](https://chat.lzl.dev) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat-web.aurora1.top](https://chat-web.aurora1.top)  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.aivision.life](https://chat.aivision.life)  `[error][403]Forbidden`
1. [[❓] https://www.fengyan.co](https://www.fengyan.co) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://fengyan.co](https://fengyan.co)  `[error][-1]timeout`
1. [[❓] https://loveai.site](https://loveai.site) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.dofun.tech](https://chat.dofun.tech) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.landon.li](https://chat.landon.li) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://gpt.elliclee.com](https://gpt.elliclee.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://nigiyaka.top](https://nigiyaka.top)  `[error][-1]getaddrinfo ENOTFOUND nigiyaka.top`
1. [[❓] https://www.nigiyaka.top](https://www.nigiyaka.top) **ChatGPT Next Web。**  `[error][-1]getaddrinfo ENOTFOUND www.nigiyaka.top`
1. [[❓] https://www.nonchalantlyunparagoned.asia](https://www.nonchalantlyunparagoned.asia) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://nonchalantlyunparagoned.asia](https://nonchalantlyunparagoned.asia)  `[error][-1]timeout`
1. [[❓] https://chat.onking.fun](https://chat.onking.fun)  `[error][-1]timeout`
1. [[❓] https://chat.yizhilee.com](https://chat.yizhilee.com) **ChatGPT Next Web。**  `[error][-1]connect ECONNREFUSED 80.87.199.46:443`
1. [[❓] https://puzz1e.top](https://puzz1e.top)  `[error][-1]read ECONNRESET`
1. [[❓] https://op.edgenetcast.com](https://op.edgenetcast.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat-with-me.uniori.xyz](https://chat-with-me.uniori.xyz) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://404find.me](https://404find.me) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.solodu.com](https://chat.solodu.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chatgpt.yaowan.pub](https://chatgpt.yaowan.pub)  `[error][-1]timeout`
1. [[❓] https://baxi.rocks](https://baxi.rocks) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.baxi.rocks](https://www.baxi.rocks)  `[error][-1]timeout`
1. [[❓] https://gpt.kitkong.xyz](https://gpt.kitkong.xyz) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.appbox.fun](https://chat.appbox.fun) **ChatGPT Next Web。**  `[error][-1]getaddrinfo ENOTFOUND chat.appbox.fun`
1. [[❓] https://www.jinlaiv2ray.top](https://www.jinlaiv2ray.top)  `[error][-1]timeout`
1. [[❓] https://jinlaiv2ray.top](https://jinlaiv2ray.top)  `[error][-1]timeout`
1. [[❓] https://chatgpt.cly.life](https://chatgpt.cly.life) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://a.secscan.vip](https://a.secscan.vip) **ChatGPT Next Web。**  `[error][-1]getaddrinfo ENOTFOUND a.secscan.vip`
1. [[❓] https://ai.nieanshow.cn](https://ai.nieanshow.cn) **ChatGPT 中文。**  `[error][-1]read ECONNRESET`
1. [[❓] https://ai.16661905.xyz](https://ai.16661905.xyz) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.wyih.net](https://chat.wyih.net) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.hktkdy.com](https://chat.hktkdy.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://zhizhiai.com](https://zhizhiai.com)  `[error][-1]timeout`
1. [[❓] https://zhizhiai.cn](https://zhizhiai.cn)  `[error][-1]read ECONNRESET`
1. [[❓] https://chat.rano.ltd](https://chat.rano.ltd) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://xiaodengchat.xyz](https://xiaodengchat.xyz) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.xiaodengchat.xyz](https://www.xiaodengchat.xyz)  `[error][-1]timeout`
1. [[❓] https://chatgpt.ionia.lol](https://chatgpt.ionia.lol) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://zzfer.crytomato.online](https://zzfer.crytomato.online)  `[error][-1]read ECONNRESET`
1. [[❓🔑] https://www.3688.bio](https://www.3688.bio)  `[error][-1]timeout`
1. [[❓🔑] https://3688.bio](https://3688.bio) **ChatGPT Next Web。**  `[error][-1]connect ECONNREFUSED 103.42.176.244:443`
1. [[❓] https://gpt.gitshuo.com](https://gpt.gitshuo.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://cham.pub](https://cham.pub) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.cham.pub](https://www.cham.pub)  `[error][-1]timeout`
1. [[❓] https://gpt.eamclan.com](https://gpt.eamclan.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.chatqhd.top](https://www.chatqhd.top) **ChatGPT Next Web。**  `[error][400]Bad Request`
1. [[❓] https://chat.shuishui.dev](https://chat.shuishui.dev) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chat.openai-proxy.com](https://chat.openai-proxy.com) **ChatGPT Next Web。**  `[error][-1]read ECONNRESET`
1. [[❓] https://next.wio.me](https://next.wio.me) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://chatcoin.life](https://chatcoin.life)  `[error][403]Forbidden`
1. [[❓] https://www.chatcoin.life](https://www.chatcoin.life)  `[error][403]Forbidden`
1. [[❓] https://chat.zzzytd.top](https://chat.zzzytd.top) **ChatGPT。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.chaostec.net](https://chat.chaostec.net) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.jxjyzzc.cn](https://chat.jxjyzzc.cn) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://luvul.me](https://luvul.me) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://www.luvul.me](https://www.luvul.me)  `[error][-1]timeout`
1. [[❓🔐🔑] https://wwvw.eu.org](https://wwvw.eu.org) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.emoryhuang.cn](https://chat.emoryhuang.cn) **ChatGPT Next Web。**  `[error][-1]getaddrinfo ENOTFOUND chat.emoryhuang.cn`
1. [[❓🔐🔑] https://openai.aisavepet.com](https://openai.aisavepet.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://gpt.flying86.tk](https://gpt.flying86.tk) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.tanyuecn.com](https://chat.tanyuecn.com) **ChatGPT Next Web。**  `[error][-1]connect ECONNREFUSED 198.211.58.238:443`
1. [[❓🔐🔑] https://chat.coolcwift.top](https://chat.coolcwift.top) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://www.5805801.xyz](https://www.5805801.xyz)  `[error][-1]timeout`
1. [[❓🔐🔑] https://5805801.xyz](https://5805801.xyz) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chatgpt.yuansicloud.com](https://chatgpt.yuansicloud.com) **ChatGPT Next Web。**  `[error][502]Bad Gateway`
1. [[❓🔐🔑] https://web.shuai.plus](https://web.shuai.plus) **没有找到站点。**  `[error][401]Unauthorized`
1. [[❓🔐🔑] https://forriver.net](https://forriver.net) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://www.forriver.net](https://www.forriver.net) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://ai.jxyp.cc](https://ai.jxyp.cc) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.dogsbody.cn](https://chat.dogsbody.cn) **ChatGPT Next Web。**  `[error][-1]read ECONNRESET`
1. [[❓🔐🔑] https://chat.minibox.ai](https://chat.minibox.ai) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://www.jupt.cc](https://www.jupt.cc)  `[error][-1]timeout`
1. [[❓🔐🔑] https://jupt.cc](https://jupt.cc) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://gpt996.icu](https://gpt996.icu) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://cheapxyzs.online](https://cheapxyzs.online)  `[error][-1]timeout`
1. [[❓] https://www.cheapxyzs.online](https://www.cheapxyzs.online) **ChatGPT。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://ai.conef.top](https://ai.conef.top) **ConeF ChatGPT。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.ajhz.top](https://chat.ajhz.top) **ChatGPT Next Web。**  `[error][400]Bad Request`
1. [[❓🔐🔑] https://smokeandmirror.top](https://smokeandmirror.top) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://www.duruo.cyou](https://www.duruo.cyou) **ChatMao-cy。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://duruo.cyou](https://duruo.cyou)  `[error][-1]timeout`
1. [[❓🔐🔑] https://www.chat222.asia](https://www.chat222.asia) **敬恒CHATGPT。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat222.asia](https://chat222.asia) **量化管理后台。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.auslin.top](https://chat.auslin.top) **ChatGPT Next Web。**  `[error][308]Permanent Redirect`
1. [[❓🔐🔑] https://chat.xeyes.io](https://chat.xeyes.io)  `[error][-1]getaddrinfo ENOTFOUND chat.xeyes.io`
1. [[❓🔐🔑] https://new.letmedoitforyou.top](https://new.letmedoitforyou.top) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://www.lynngpt.club](https://www.lynngpt.club) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://lynngpt.club](https://lynngpt.club)  `[error][-1]timeout`
1. [[❓] https://ztule.com](https://ztule.com) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://www.ztule.com](https://www.ztule.com) **ChatGPT。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.wylu.me](https://chat.wylu.me) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://www.chatares.com](https://www.chatares.com) **ChatAres Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] http://chat.pason.cc](http://chat.pason.cc)  `[error][-1]timeout`
1. [[❓] https://zoujinfa.me](https://zoujinfa.me) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://chat.kirito.life](https://chat.kirito.life) **ChatGPT。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chatgpt-next-web-xtmqaihc-amengpp.4everland.app](https://chatgpt-next-web-xtmqaihc-amengpp.4everland.app)  `[error][502]Bad Gateway`
1. [[❓🔐🔑] https://chatgpt-next-web-4.4everland.app](https://chatgpt-next-web-4.4everland.app)  `[error][502]Bad Gateway`
1. [[❓🔐🔑] https://chat.njxzc.top](https://chat.njxzc.top) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.uuz.ai](https://chat.uuz.ai) **ChatGPT Next Web。**  `[error][-1]getaddrinfo ENOTFOUND chat.uuz.ai`
1. [[❓⭐⭐] https://chatgpt1680.zeabur.app](https://chatgpt1680.zeabur.app) **ChatGPT Web - idc1680。**  `[error][502]Bad Gateway`
1. [[❓🔐🔑] https://chat.epcb.asia](https://chat.epcb.asia) **ChatGPT Next Web。**  `[error][-1]getaddrinfo ENOTFOUND chat.epcb.asia`
1. [[❓] https://co.zxilly.dev](https://co.zxilly.dev)  `[error][401]Unauthorized`
1. [[❓] https://chat.yingqiu001.com](https://chat.yingqiu001.com) **ChatGPT。**  `[error][-1]timeout`
1. [[❓🔐🔑] https://chat.yunwuu.com](https://chat.yunwuu.com) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❓] https://gpt.leeapps.cn](https://gpt.leeapps.cn)  `[error][-1]timeout`
1. [[❓🔐🔑] https://hub.docker.com/r/bentwng/chatgpt-next-web/tags](https://hub.docker.com/r/bentwng/chatgpt-next-web/tags) **Docker。**  `[error][-1]timeout`
1. [[❓] https://www.chatgpt-teaching.cn](https://www.chatgpt-teaching.cn)  `[error][-1]timeout`
1. [[❓] https://chatgpt-teaching.cn](https://chatgpt-teaching.cn)  `[error][-1]timeout`
1. [[❓] https://robot.kahao360.com](https://robot.kahao360.com) **ChatGPT。**  `[error][-1]read ECONNRESET`
1. [[❓] https://b.jqrai.one](https://b.jqrai.one) **ChatGPT Next Web。**  `[error][-1]getaddrinfo ENOTFOUND b.jqrai.one`
1. [[❓] https://chatbot.cicilili.com](https://chatbot.cicilili.com)  `[error][-1]timeout`
1. [[❓] https://chat.nide.app](https://chat.nide.app) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chat.sheg.eu.org](https://chat.sheg.eu.org)  `[error][-1]timeout`
1. [[❓] https://7o5.fun](https://7o5.fun) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://gitsbt.com](https://gitsbt.com)  `[error][-1]timeout`
1. [[❓] https://www.gitsbt.com](https://www.gitsbt.com)  `[error][-1]timeout`
1. [[❓] https://www.chatmeta.top](https://www.chatmeta.top) **ChatGPT。**  `[error][-1]read ECONNRESET`
1. [[❓] https://chatmeta.top](https://chatmeta.top)  `[error][-1]timeout`
1. [[❓] https://www.simpletrying.xyz](https://www.simpletrying.xyz) **ChatCat。**  `[error][-1]timeout`
1. [[❓] https://simpletrying.xyz](https://simpletrying.xyz)  `[error][400]Bad Request`
1. [[❓] https://www.ylychatgpt.chat](https://www.ylychatgpt.chat) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://ylychatgpt.chat](https://ylychatgpt.chat)  `[error][-1]timeout`
1. [[❓] https://www.mychat.icu](https://www.mychat.icu) **ChatGPT Next Web。**  `[error][308]Permanent Redirect`
1. [[❓] https://mychat.icu](https://mychat.icu)  `[error][308]Permanent Redirect`
1. [[❓] https://www.lovegou.cn](https://www.lovegou.cn) **ChatGPT API Demo。**  `[error][-1]getaddrinfo ENOTFOUND www.lovegou.cn`
1. [[❓] https://chatgpt.zzgoodqc.cn](https://chatgpt.zzgoodqc.cn) **ChatGPT。**  `[error][-1]timeout`
1. [[❓] https://chatgpt-yyds.fun](https://chatgpt-yyds.fun) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://gpt.bactive.bio](https://gpt.bactive.bio) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❓] https://mymoss.com.cn/web](https://mymoss.com.cn/web) **MyMOSS。** 我拥有强大的AI引擎，可以辅助你快速写作，赶快试一试吧！ `[error][301]Moved Permanently`
1. [[❌⭐⭐⭐] http://lmflow.com](http://lmflow.com) **LMFlow。** 一个可扩展、方便、高效的工具箱，用于微调大型机器学习模型，设计为用户友好、快速可靠，并可供整个社区访问 `[error][-1]timeout`
1. [[❌🚀] https://cf.xssio.cf](https://cf.xssio.cf) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❌🚀] https://chat.skynetx007.top](https://chat.skynetx007.top) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❌🚀] https://chat.xssio.cf](https://chat.xssio.cf) **ChatGPT API Demo。**  `[error][-1]timeout`
1. [[❌🚀] https://ai.wilr-life.top](https://ai.wilr-life.top) **ChatGPT Next Web。** token 已用完 `[error][-1]timeout`
1. [[❌] https://chatgpt.himehina.space](https://chatgpt.himehina.space) **ChatGPT 聊天。**  `[error][-1]timeout`
1. [[❌] https://chat.axz.me](https://chat.axz.me) 308 - Permanent Redirect `[error][308]Permanent Redirect`
1. [[❌] https://chat.tangmeifa.com](https://chat.tangmeifa.com) **Chat。**  `[error][-1]getaddrinfo ENOTFOUND chat.tangmeifa.com`
1. [[❌] https://alexsay.top](https://alexsay.top) **Alex chat Web。**  `[error][400]Bad Request`
1. [[❌] https://www.alexsay.top](https://www.alexsay.top)  `[error][-1]timeout`
1. [[❌🔑] https://ai.iaimi.cn](https://ai.iaimi.cn) **ChatGPT Next Web。**  `[error][-1]timeout`
1. [[❌] https://ai.pingchn.com](https://ai.pingchn.com) **ChatGPT API Demo。** key 已失效 `[error][-1]timeout`

## License

`chatgpt-sites` is released under the MIT license.

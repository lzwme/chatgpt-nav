# 🍡 ChatGPT 在线体验网站列表

由于众所周知的原因，国内访问并体验 ChatGPT 的拥有一定的门槛，主要集中在网络无法访问、账号无法注册两个主要限制条件。然而对于突破该约束条件的同学来说，则可以很轻松的使用开源应用搭建基于 OPENAI API 的体验网站。

本仓库旨在通过搜集整理国内用户可访问的在线体验列表，以供相关同学查阅参考。其主要来源为：

- 从网络手动搜集整理
- 热心网友推荐或自荐
- 程序自动抓取开源仓库信息
- More...

## 参与贡献

由于部分站点从网络自动搜集，尚未作可用性验证，欢迎欢迎提 issues 或 PR 对其矫正。站点配置信息在 `src/config.ts` 中设置，基本格式为：

```ts
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
```

## Site List


## TODO(待整理)

1. https://chat.tgbot.co
1. https://chat.geekr.dev
1. https://chat.51buygpt.com
1. https://chat.forchange.cn
1. https://freechatgpt.chat
1. https://askai.ws
1. https://ai.yiios.com
1. http://chat.apigpt.cn
1. https://aigcfun.com
1. http://gpt.mxnf.store
1. https://www.aicodehelper.com
1. https://ai-toolbox.codefuture.top
1. https://harry-potter.openai-lab.co
1. https://94gpt.com
1. https://www.teach-anything.com
1. http://itecheasy.com.cn
1. https://trychatgp.com
1. https://chatgpt.ddiu.io
1. https://ai117.com
1. http://chat.livepo.top
1. https://chatgpt.ddiu.me
1. https://chat.eaten.fun
1. https://chatgpt.ddiu.me
1. https://chat.binjie.site:7777
1. https://chatgpt123.fyi
1. https://chatgpt.white-peach.ga
1. https://chat.luoyangshusheng.com
1. https://kang.al
1. https://www.aiartchat.live 
1. https://chat.zengzhe.xyz 
1. https://www.qylxschool.cn
1. https://chat.jmni.cn
1. https://chat.limy.space 
1. https://chatgpt.intdouble.com 
1. https://chatgpt-demo-9ddqso22f-ddiu8081.vercel.app
1. https://w9j1ao.vercel.app

## 声明

以上体验站点来源于网络收集、GitHub 开源仓库信息搜集和网友推荐。若有侵权请提 issues 处理。

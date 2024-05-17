# ChatGPT/AI 网站导航收集列表


本仓库旨在搜集整理当前流行可用的 AI 在线应用列表，以供关注AI应用与发展的同学参考使用。

**欢迎自荐，您的应用会获得更多的曝光机会。**

站点配置信息在 `site-info.json` 文件中设置，基本格式参考（为 `0` 的项不用填写）：

```ts
{
  "https://gpt.demo.com": {
      "type": "",           // 站点所属分类
      "source": "recommend",    // 站点来源
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
```

## 声明

以下站点列表来源于网络收集，若有侵权请提 [Issues](https://github.com/lzwme/chatgpt-nav/issues) 处理。

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

站点列表(400)：

### 国产大模型 (14)

1. [[⭐⭐⭐🧑‍💻] https://ai-maas.wair.ac.cn](https://ai-maas.wair.ac.cn) **紫东太初。** 中科院自动化所和武汉人工智能研究院联合推出的新一代大模型，从三模态走向全模态，支持多轮问答、文本创作、图像生成、3D理解、信号分析等全面问答任务，拥有更强的认知、理解、创作能力，带来全新互动体验。
1. [[⭐⭐⭐🧑‍💻] https://ai.360.cn](https://ai.360.cn) **360智脑。** 需申请资格
1. [[⭐⭐⭐] https://chat.sensetime.com](https://chat.sensetime.com) **商汤商量。** 商汤旗下的AI对话助手
1. [[⭐⭐⭐🧑‍💻] https://chatglm.cn](https://chatglm.cn) **智谱清言。** 清华大学孵化的智谱AI提供的千亿参数对话模型ChatGLM
1. [[⭐⭐⭐🧑‍💻] https://hunyuan.tencent.com](https://hunyuan.tencent.com) **腾讯混元助手。** 腾讯混元助手Chat
1. [[⭐⭐⭐🧑‍💻] https://image.hunyuan.tencent.com](https://image.hunyuan.tencent.com) **混元生图。** 腾讯混元生图
1. [[⭐⭐⭐🧑‍💻] https://kimi.moonshot.cn](https://kimi.moonshot.cn) **Kimi。** Kimi智能助手能够支持约20万汉字的上下文输入，具备显著的中文优势，能够为用户提供回答问题、速读文件、整理资料、激发灵感、辅助创作等服务
1. [[⭐⭐⭐] https://pangu.huaweicloud.com](https://pangu.huaweicloud.com) **华为盘古。** 华为盘古大模型，重塑千行百业
1. [[⭐⭐⭐] https://tongyi.aliyun.com/qianwen](https://tongyi.aliyun.com/qianwen) **通义千问。** 阿里达摩院提供的一个不断进化的AI大模型
1. [[⭐⭐⭐] https://www.coze.cn](https://www.coze.cn) **扣子。** Coze中文版，字节旗下一款用来开发新一代 AI ChatBot的应用编辑平台
1. [[⭐⭐⭐] https://www.doubao.com/chat/](https://www.doubao.com/chat/) **豆包。** 基于字节跳动研发的云雀大语言模型的Chat应用
1. [[⭐⭐⭐🧑‍💻] https://xinghuo.xfyun.cn](https://xinghuo.xfyun.cn) **讯飞星火。** 讯飞星火大模型
1. [[⭐⭐⭐🧑‍💻] https://yiyan.baidu.com](https://yiyan.baidu.com) **文心一言。** 已全面开放，使用百度账号登录即可
1. [[⭐] https://www.baichuan-ai.com/chat](https://www.baichuan-ai.com/chat) **百川智能。** 百川智能旗下的AI对话助手

### AI 聊天对话 (35)

1. [[⭐⭐⭐🧑‍💻] https://ai-maas.wair.ac.cn](https://ai-maas.wair.ac.cn) **紫东太初。** 中科院自动化所和武汉人工智能研究院联合推出的新一代大模型，从三模态走向全模态，支持多轮问答、文本创作、图像生成、3D理解、信号分析等全面问答任务，拥有更强的认知、理解、创作能力，带来全新互动体验。
1. [[⭐⭐⭐] https://ai-nav.lzw.me](https://ai-nav.lzw.me) **AI网址导航。** 收集了当前最新的AI人工智能相关的网站网址，定时任务每日更新，检测验证可用性
1. [[⭐⭐⭐🧑‍💻] https://ai.360.cn](https://ai.360.cn) **360智脑。** 需申请资格
1. [[⭐⭐⭐] https://chat.sensetime.com](https://chat.sensetime.com) **商汤商量。** 商汤旗下的AI对话助手
1. [[⭐⭐⭐🧑‍💻] https://chatglm.cn](https://chatglm.cn) **智谱清言。** 清华大学孵化的智谱AI提供的千亿参数对话模型ChatGLM
1. [[⭐⭐⭐🧑‍💻] https://hunyuan.tencent.com](https://hunyuan.tencent.com) **腾讯混元助手。** 腾讯混元助手Chat
1. [[⭐⭐⭐🧑‍💻] https://kimi.moonshot.cn](https://kimi.moonshot.cn) **Kimi。** Kimi智能助手能够支持约20万汉字的上下文输入，具备显著的中文优势，能够为用户提供回答问题、速读文件、整理资料、激发灵感、辅助创作等服务
1. [[⭐⭐⭐] https://pangu.huaweicloud.com](https://pangu.huaweicloud.com) **华为盘古。** 华为盘古大模型，重塑千行百业
1. [[⭐⭐⭐🧑‍💻] https://so.csdn.net/chat](https://so.csdn.net/chat) **C知道。** 由CSDN和外部合作伙伴联合研发的生成式AI产品
1. [[⭐⭐⭐] https://tongyi.aliyun.com/qianwen](https://tongyi.aliyun.com/qianwen) **通义千问。** 阿里达摩院提供的一个不断进化的AI大模型
1. [[⭐⭐⭐] https://www.coze.cn](https://www.coze.cn) **扣子。** Coze中文版，字节旗下一款用来开发新一代 AI ChatBot的应用编辑平台
1. [[⭐⭐⭐] https://www.doubao.com/chat/](https://www.doubao.com/chat/) **豆包。** 基于字节跳动研发的云雀大语言模型的Chat应用
1. [[⭐⭐⭐🧑‍💻] https://www.tiangong.cn](https://www.tiangong.cn) **天工AI。** 昆仑万维提供的对标 ChatGPT 的双千亿级大语言模型，也是一个对话式AI助手
1. [[⭐⭐⭐🧑‍💻] https://xinghuo.xfyun.cn](https://xinghuo.xfyun.cn) **讯飞星火。** 讯飞星火大模型
1. [[⭐⭐⭐🧑‍💻] https://yiyan.baidu.com](https://yiyan.baidu.com) **文心一言。** 已全面开放，使用百度账号登录即可
1. [[⭐⭐🧑‍💻] https://chat.oldwei.com](https://chat.oldwei.com) **openfish。** 使用ChatGPT多账号轮询逆向官网接口，Claude逆向工程做第二备用，ChatGPT官方收费API KEY做第三备用。系统稳定可长期免费使用
1. [[⭐] https://ai.360.com](https://ai.360.com) **360智脑。** 360旗下的AI聊天助手
1. [[⭐] https://apps.apple.com/us/app/opencat/id6445999201](https://apps.apple.com/us/app/opencat/id6445999201) **OpenCat。** 在苹果手表上用ChatGPT
1. [[⭐] https://chat.colossalai.org](https://chat.colossalai.org) **ColossalChat。** 免费开源的AI聊天机器人
1. [[⭐] https://www.anthropic.com](https://www.anthropic.com) **Claude3。** Claude是ChatGPT最为有力的竞争对手之一，可以通过Slack和Poe集成Claude集成的机器人使用。
1. [[⭐] https://www.baichuan-ai.com/chat](https://www.baichuan-ai.com/chat) **百川智能。** 百川智能旗下的AI对话助手
1. [[⭐] https://www.bing.com/new](https://www.bing.com/new) **Bing。** Bing版ChatGPT聊天机器人，微软新搜索引擎
1. [[⭐] https://www.chai-research.com](https://www.chai-research.com) **Chai Research。** 领先的AI聊天平台
1. [[⭐] https://www.chatbase.co](https://www.chatbase.co) **Chat Base。** 上传包含您数据的文档或添加一个指向您网站的链接，即可获得一个类似于ChatGPT的聊天机器人，可以回答与这些文档相关的任何问题。然后将其作为聊天小部件添加到您的网站上。
1. [[⭐] https://www.lingyiwanwu.com](https://www.lingyiwanwu.com) **零一万物。** 零一万物是由李开复老师创办的，致力于成为一家由技术愿景驱动、拥有卓越中国工程底蕴的创新企业，推动以基座大模型为突破的AI 2.0掀起技术、平台到应用多个层面的革命。
1. [[⭐] https://www.minimaxi.com](https://www.minimaxi.com) **MINIMAX。** MiniMax 全量发布大语言模型 abab6，为国内首个 MoE 大语言模型。在 MoE 结构下，abab6 拥有大参数带来的处理复杂任务的能力，同时模型在单位时间内能够训练足够多的数据，计算效率也可以得到大幅提升。改进了 abab5.5 在处理更复杂、对模型输出有更精细要求场景中出现的问题。
1. [[⭐⭐⭐🚀] https://chat.openai.com](https://chat.openai.com) **ChatGPT。** Open Ai旗下的聊天产品，全球最火的chatgpt产品。
1. [[⭐⭐⭐🔑🚀] https://beta.openai.com](https://beta.openai.com) **OpenAI ChatGPT。** ChatGPT(beta) 官方入口
1. [[⭐⭐⭐🚀] https://bard.google.com](https://bard.google.com) **Google Bard。** Google推出的聊天机器人。
1. [[🚀] https://agentgpt.reworkd.ai](https://agentgpt.reworkd.ai) **AgentGPT。** AgentGPT是一个革命性的基于浏览器的自主AI平台。
1. [[🚀] https://app.myshell.ai](https://app.myshell.ai) **Myshell。** MyShell是一个创新的聊天机器人平台，你可以在这里遇到各种拥有独特个性和声音的虚拟角色存在。作为创建者，你可以赋予你的聊天机器人一个非常生动的声音，并整合任何知识，超越现有的基于LLM的系统。
1. [[🚀] https://merlin.foyer.work](https://merlin.foyer.work) **Merlin。** Merlin是Open AI的ChatGPT驱动的Chrome扩展程序，随时随地可用。
1. [[🚀] https://monica.im](https://monica.im) **Moncia。** Monica是由ChatGPT API提供支持的Chrome扩展程序，旨在成为您的个人AI助手，实现轻松聊天和文案编写。
1. [[🚀] https://poe.com](https://poe.com) **Poe。** 问答社区Quora建立的一个平台，集成了多个流行的聊天机器人。
1. [[🚀] https://theb.ai](https://theb.ai) **TheB.AI。** TheB.AI是一款全能的人工智能平台。可以访问一系列创新的模型，涵盖先进的语言模型、强大的图像模型等等。

### AI 绘图 (73)

1. [[⭐⭐⭐🧑‍💻] https://image.hunyuan.tencent.com](https://image.hunyuan.tencent.com) **混元生图。** 腾讯混元生图
1. [[⭐⭐⭐] https://stability.ai](https://stability.ai) **Stable Diffusion。** 英国AI初创公司，开源了强大的 Stable Diffusion 文生图大模型
1. [[⭐⭐⭐] https://www.doubao.com/chat/](https://www.doubao.com/chat/) **豆包。** 基于字节跳动研发的云雀大语言模型的Chat应用
1. [[⭐⭐⭐] https://www.midjourney.com](https://www.midjourney.com) **触手AI。** Midjourney 是目前AI绘图最强大的存在
1. [[⭐⭐] https://d.design](https://d.design) **阿里堆友。** 堆友是Alibaba Design打造的设计师全成长周期服务平台，围绕品质、效率、技能、成就、收入五大用户价值布局平台能力，全力服务设计师，旨在成为设计师的好朋友。
1. [[⭐⭐] https://www.wujieai.com](https://www.wujieai.com) **无界AI。** 无界AI，集prompt搜索、AI图库、AI创作、AI广场、词/图等为一体。提供一站式AI搜索-创作-交流-分享服务。
1. [[⭐] https://3dfy.ai](https://3dfy.ai) **3DFY AI。** AI创建大规模高质量的3D资产
1. [[⭐] https://588ku.com/ai/wuxianhua](https://588ku.com/ai/wuxianhua) **无限画。** 千库网旗下AI设计工具，可一键生成高品质目标图像。
1. [[⭐] https://6pen.art](https://6pen.art) **6pen。** 6pen是一个为大多数人打造的AI绘画创作社区
1. [[⭐] https://aicolors.co](https://aicolors.co) **AIcolors。** 根据文本生成调色板，提供配色案例参考
1. [[⭐] https://ailogo.qq.com](https://ailogo.qq.com) **腾讯AIDesign。** 腾讯自研的智能设计平台，免费在线生成品牌logo、企业VI，仅需3步助您开启业务。
1. [[⭐] https://ailogo.qq.com/guide/brandname](https://ailogo.qq.com/guide/brandname) **AIDesign。** 10秒创建Logo！腾讯出品的AI Logo神器
1. [[⭐] https://app.recraft.ai/community](https://app.recraft.ai/community) **Recraft。** 便捷的AI生成矢量图像生成工具
1. [[⭐] https://art.aiseo.ai](https://art.aiseo.ai) **AISEO ART。** AISEO Art 的AI算法按照分类进行过细致的训练
1. [[⭐] https://brandmark.io](https://brandmark.io) **BrandMark。** 最先进的人工智能Logo设计工具
1. [[⭐] https://cascadeur.com](https://cascadeur.com) **Cascadeur。** AI辅助制作3D关键帧动画
1. [[⭐] https://dreamfusion3d.github.io](https://dreamfusion3d.github.io) **DreamFusion。** 谷歌推出的文本转3D模型
1. [[⭐] https://facecheck.id](https://facecheck.id) **Facecheck ID。** 利用人工智能技术通过照片在线查找人员。
1. [[⭐] https://firefly.adobe.com](https://firefly.adobe.com) **Adobe Firefly。** Adobe推出的一款AI图片生成器。
1. [[⭐] https://flair.ai](https://flair.ai) **Flair AI。** 你的私人AI设计师！一键生成精美产品照片
1. [[⭐] https://imagecreator.alkaidvision.com](https://imagecreator.alkaidvision.com) **ImageCreator。** PS中免费使用的SD神级插件
1. [[⭐] https://img.logosc.cn](https://img.logosc.cn) **AI改图神器。** AI万能图片编辑器，在线修改图片颜色尺寸；智能抠图去水印；AI/EPS/PSD/SVG全格式支持的在线图片编辑器。
1. [[⭐] https://imgcreator.ai](https://imgcreator.ai) **ImgCreator。** 超赞的多合一AI设计工具，超强的背景生成、海报生成能力
1. [[⭐] https://jsai.cc/ai](https://jsai.cc/ai) **即时AI。** 即时AI是一款极具前沿创新的AIGC产品，一款可以快速生成设计稿的生成式设计工具，它能够通过简单的自然语言描述来生成与需求相匹配的设计稿。
1. [[⭐] https://leonardo.ai](https://leonardo.ai) **Leonardo.AI/。** 以前所未有的质量、速度和风格一致性，为您的项目创建高质量的视觉资产。
1. [[⭐] https://mastergo.com/ai](https://mastergo.com/ai) **MasterGo AI。** MasterGo AI使用人工智能辅助设计，开启数字交互新时代。
1. [[⭐] https://nijijourney.com/zh](https://nijijourney.com/zh) **NijiJourney。** MJ出品！面向二次元风格，内容细致拿捏专业到位
1. [[⭐] https://pixcut.wondershare.com](https://pixcut.wondershare.com) **Pixcut。** Pixcut是一款自动免费去除图片背景的工具，新手只需点击几下就能使背景变透明。
1. [[⭐] https://pixian.ai](https://pixian.ai) **Pixian AI。** PixianAI是一款图像背景去除工具，可以以极低的价格获得出色的质量，在测试版期间完全免费。
1. [[⭐] https://pixso.cn](https://pixso.cn) **Pixso AI。** 设计师只需用简短的文本描述，无需手动绘制或寻找现成素材，即可迅速生成图像内容。
1. [[⭐] https://plask.ai](https://plask.ai) **Plask。** AI捕捉运动！帮你制作流畅的3D动画
1. [[⭐] https://tongyi.aliyun.com/wanxiang/](https://tongyi.aliyun.com/wanxiang/) **阿里通义万相。** 通义万相是阿里云通义旗下的AI创意作画平台，可提供AI艺术创作，可支持文生图、图生图、涂鸦作画、虚拟模特、个人写真等多场景的图片创作能力。
1. [[⭐] https://tusiart.com](https://tusiart.com) **tusi.art。** 吐司是可在线生图的AI模型分享社区
1. [[⭐] https://vectorizer.ai](https://vectorizer.ai) **Vectorizer AI。** Vectorizer可以使用AI快速轻松地将JPEG和PNG位图转换为SVG矢量图。
1. [[⭐] https://visualelectric.com](https://visualelectric.com) **Visualelectric。** 更适合设计创作的AI绘画工具
1. [[⭐] https://wepik.com/ai](https://wepik.com/ai) **Wepik。** Wepik使用人工智能和文字来创作艺术，通过描述你想要看到的内容，Wepik的AI图像生成器将会实现它。
1. [[⭐] https://www.alpacaml.com](https://www.alpacaml.com) **Alpaca。** 个性化的AI工具包，可接入Ps的SD绘画插件
1. [[⭐] https://www.esheep.com](https://www.esheep.com) **eSheep。** 国内知名的AIGC在线画图网站，提供海量模型，并支持在线AI画图
1. [[⭐] https://www.gaoding.com/ai/design](https://www.gaoding.com/ai/design) **稿定AI。** 稿定智能设计工具是一款智能化的设计工具，采用先进的人工智能技术，自动分析和生成设计方案。只需稍作调整，即可完成完美的设计。
1. [[⭐] https://www.illostration.com](https://www.illostration.com) **illostration。** 几秒内创建不同风格插图
1. [[⭐] https://www.kaedim3d.com](https://www.kaedim3d.com) **KAEDIM。** 帮你迅速生成3D模型及纹理
1. [[⭐] https://www.liblib.ai](https://www.liblib.ai) **liblib哩布哩布。** 超多优质模型，国内领先的AI创作平台
1. [[⭐] https://www.liblib.art](https://www.liblib.art) **LiblibAI。** liblib是一个AI模型分享社区，在这里可以分享模型素材，共同探索AI绘画。
1. [[⭐] https://www.logosc.cn](https://www.logosc.cn) **标小智logo生成。** 标小智是一款智能LOGO在线设计生成器。只需输入品牌名称就能免费在线生成公司logo设计，商标设计，以及配套企业VI助您打造个性品牌。
1. [[⭐] https://www.modaiyun.com/mdy/ai](https://www.modaiyun.com/mdy/ai) **模袋云AI。** 模袋云AI是一款在线别墅设计神器。
1. [[⭐] https://www.nolibox.com](https://www.nolibox.com) **图宇宙。** 图宇宙是计算美学是高品质的智能设计平台，致力于让每个人都能享受好设计。
1. [[⭐] https://www.nvidia.cn/studio/canvas](https://www.nvidia.cn/studio/canvas) **NVIDIA Canvas。** 用AI将简单的勾勒转化成逼真的图像
1. [[⭐] https://www.photoroom.com](https://www.photoroom.com) **PhotoRoom。** 在几秒钟内创建高品质的图像。只需轻点一下，即可去除背景并合成一个能展示产品或模特的图像。PhotoRoom赋予每个人设计超能力，因为你编辑的是物体而不是像素。PhotoRoom是一款图像编辑应用程序，让您通过编辑物体来捕捉、编辑和混合图像。
1. [[⭐] https://www.pixcakeai.com](https://www.pixcakeai.com) **像素蛋糕。** 像素蛋糕是一款简单易用的AI修图工具，只需要拖入图片，即可实现一键智能Raw转档调色，一键磨皮全身液化，轻松实现“一秒初修，三秒精修”的批量修图操作。
1. [[⭐] https://www.plasmo.ai](https://www.plasmo.ai) **Plasmo。** 将草图转为3D模型
1. [[⭐] https://www.ponzu.gg](https://www.ponzu.gg) **Ponzu。** AI生成3D无缝贴图纹理
1. [[⭐] https://www.seaart.ai](https://www.seaart.ai) **SeaArt。** 国内团队开发的图片模型分享社区。 `[error][-1]timeout`
1. [[⭐] https://www.sloyd.ai](https://www.sloyd.ai) **Sloyd。** 快速生成3D游戏资产
1. [[⭐] https://www.tiamat.world](https://www.tiamat.world) **Tiamat。** 国内自研的AI作画系统！内测中
1. [[⭐] https://www.tryemoji.com](https://www.tryemoji.com) **TryEmoji。** 将emoji表情变成3D元素
1. [[⭐] https://www.whee.com](https://www.whee.com) **美图WHEE。** WHEE是一款AI绘画与图片生成器，提供一站式AI视觉创作服务。
1. [[⭐] https://yige.baidu.com](https://yige.baidu.com) **文心一格。** 百度旗下AI艺术和创意辅助平台
1. [[🚀] https://civitai.com](https://civitai.com) **CivitAI。** AI绘画模型共享平台，拥有海量开源模型
1. [[🚀] https://pixai.art](https://pixai.art) **PixAI.Art。** 使用 PixAI 的AI艺术生成器释放创造力。轻松生成高品质的动漫人工智能艺术。探索 AI 工具、角色模板等。
1. [[🚀] https://playgroundai.com](https://playgroundai.com) **Playground Ai。** 图片编辑工具，按照您的想象编辑图片
1. [[🚀] https://www.canva.com/ai-image-generator](https://www.canva.com/ai-image-generator) **Canva Text to Image。** 将文字和短语变成美丽的图片。
1. [[🚀] https://www.craiyon.com](https://www.craiyon.com) **Craiyon。** 基于AI全新免费 AI 图像生成器。
1. [[🚀] https://www.creativefabrica.com/spark](https://www.creativefabrica.com/spark) **CF Spark。** Spark让您只需输入您的提示，就可以开始生成图片。平台目前已经拥有一个强大的社区，让您可以获得关注者和设计反馈。
1. [[🚀] https://www.soulgen.net](https://www.soulgen.net) **SoulGen。** SoulGen 是一款 AI 魔法工具，可根据文本或提示创建令人惊叹的真实女孩艺术。立即免费试用并创建定制的 AI 角色。
1. [[🚀] https://yodayo.com/text-to-image](https://yodayo.com/text-to-image) **Yodayo。** 探索人工智能生成的动漫艺术，找到最佳提示，使用我们的免费人工智能艺术生成器创建美丽的图像，并与其他动漫迷分享！
1. [[🚀] https://openai.com/research/dall-e](https://openai.com/research/dall-e) **DALL·E2。** OpenAI出品的绘画工具
1. [[🚀] https://cn.bing.com/create](https://cn.bing.com/create) **Bing Image Creator。** 基于Dalle的AI绘画工具，Edge的侧边栏可直接使用。中国区不可用
1. [[🚀] https://creator.nightcafe.studio](https://creator.nightcafe.studio) **NightCafe。** 用AI生成惊艳的艺术品
1. [[🚀] https://imagine.meta.com](https://imagine.meta.com) **Imagine with Meta。** Meta 推出的免费AI绘画工具
1. [[🚀] https://lexica.art](https://lexica.art) **Lexica。** AI图像生成+SD提示词
1. [[🚀] https://rightbrain.art](https://rightbrain.art) **Vega AI。** 国内专业的ai创作平台，支持文本生成图片，图片风格转换 `[error][-1]getaddrinfo ENOTFOUND rightbrain.art`
1. [[🚀] https://scribblediffusion.com](https://scribblediffusion.com) **Scribble Diffusion。** 有趣！将鼠绘草图变成精美照片
1. [[🚀] https://www.dreamup.com](https://www.dreamup.com) **Dreamup。** 知名站点Deviantart发布的AI绘画工具

### AI 图像处理 (54)

1. [[⭐⭐⭐] https://arc.tencent.com/zh/ai-demos/faceRestoration](https://arc.tencent.com/zh/ai-demos/faceRestoration) **腾讯ARC。** ARC是腾讯旗下ARC（Applied Research Center，应用研究中心）实验室推出的系列AI图片处理工具，目前提供了三项免费的AI图像功能：人像修复、人像抠图和动漫增强。
1. [[⭐] https://ai.meitu.com/index](https://ai.meitu.com/index) **美图AI开放平台。** 美图推出的AI人脸图像处理平台
1. [[⭐] https://appicons.ai](https://appicons.ai) **Appicons AI。** AI生成精致的App图标
1. [[⭐] https://bgsub.cn](https://bgsub.cn) **BgSub。** BgSub是一款ai技术驱动的网络应用程序。可以帮助用户快速准确消除或替换图像背景，BgSub提供了比传统的Photoshop等工具更快速的抠图体验。
1. [[⭐] https://bgsub.cn/webapp](https://bgsub.cn/webapp) **BgSub。** 超实用！消除或替换图像背景的AI工具
1. [[⭐] https://bigjpg.com](https://bigjpg.com) **Bigjpg。** AI图片在线无损放大
1. [[⭐] https://boolpic.fun/background-remover](https://boolpic.fun/background-remover) **Toolkit。** 多功能的AI图片处理工具箱
1. [[⭐] https://booltool.boolv.tech/home](https://booltool.boolv.tech/home) **Booltool。** 多合一AI图像处理网站，快速进行编辑修整
1. [[⭐] https://cgfaces.com/en](https://cgfaces.com/en) **CG Faces。** 免费的 AI 人像生成图片素材网站
1. [[⭐] https://chacha.so.com](https://chacha.so.com) **图查查。** 图查查是一个专业的图片版权查询平台，基于360搜索算法和图像AI识别能力，为广大运营、市场、广告、设计师等需要用到配图或者进行设计的用户服务。
1. [[⭐] https://clipdrop.co](https://clipdrop.co) **Watermark Remover。** 体验图像编辑的顶峰——水印移除AI，借助先进的人工智能技术轻松、精确地擦除水印，确保您的视觉效果保持完美清晰、无干扰。 `[error][-1]read ECONNRESET`
1. [[⭐] https://creatie.ai](https://creatie.ai) **Creatie.ai。** 一键即出UI作品，绝美界面惊艳全场
1. [[⭐] https://diagram.com](https://diagram.com) **Digram。** 让Figma更好用的AI神器
1. [[⭐] https://github.com/pAIrprogio/vscode-ui-sketcher](https://github.com/pAIrprogio/vscode-ui-sketcher) **UI Sketcher。** VSCode插件,借助GPT-4V的多模态能力,在插件中画出界面草图,就能生成一个基于ReactNative的UI界面
1. [[⭐] https://github.com/tldraw/make-real](https://github.com/tldraw/make-real) **Makereal Tldraw。** 通过草图生成可交互的UI界面和代码
1. [[⭐] https://hp.package-ai.jp](https://hp.package-ai.jp) **PLUG AI。** AI辅助包装设计！并对包装方案生成分析评估
1. [[⭐] https://huemint.com/brand-intersection](https://huemint.com/brand-intersection) **Huemint。** 用AI自定义和谐配色
1. [[⭐] https://insightface.ai](https://insightface.ai) **InsightFaceSwap。** 比Midjourney更丝滑的AI换脸工具
1. [[⭐] https://jpghd.com/zh](https://jpghd.com/zh) **jpgHD。** 一键修复，让您的老照片变新照片
1. [[⭐] https://looka.com](https://looka.com) **Looka。** AI辅助logo和品牌设计
1. [[⭐] https://magicstudio.com/zh](https://magicstudio.com/zh) **MagicStudio。** 图片处理必备效率神器！为你的图片提供神奇魔法
1. [[⭐] https://nv-tlabs.github.io/GET3D](https://nv-tlabs.github.io/GET3D) **GET3D。** Nvidia的2D转3D模型
1. [[⭐] https://palette.fm](https://palette.fm) **Palette。** 用AI为黑白照片着色
1. [[⭐] https://palette.tone-row.com](https://palette.tone-row.com) **Palette。** 生成整套UI调色板
1. [[⭐] https://pensoulai.com](https://pensoulai.com) **IPensoul。** 超好用的AI图片工具！提供建筑家居草图渲染，AI抠图等功能
1. [[⭐] https://picwish.com](https://picwish.com) **PicWish。** 这是一个免费的平台，可以为您的图片制作透明背景。一键去除背景，秒速合成透明照片。PicWish提供所有功能均免费。立即上传您的图片免费尝试！
1. [[⭐] https://pixlr.com/cn](https://pixlr.com/cn) **Pixlr。** Pixlr是一家提供基于云的照片编辑服务的供应商，为消费者和公司在浏览器中提供编辑功能。Pixlr提供了一个平台，可以进行各种第三方集成。 `[error][-1]timeout`
1. [[⭐] https://qingtu.cn](https://qingtu.cn) **清图。** 在线修复！国产的 AI 图像处理工具
1. [[⭐] https://qoqo.ai](https://qoqo.ai) **QoQo。** AI快速创建用户旅程地图
1. [[⭐] https://tools.picsart.com](https://tools.picsart.com) **QuickTools By Picsart。** Picsart是全球最大的数字创作平台。其由人工智能驱动的工具使各个水平的创作者能够设计、编辑、绘制和分享照片和视频内容。 `[error][-1]timeout`
1. [[⭐] https://uizard.io/autodesigner](https://uizard.io/autodesigner) **Uizard。** 设计界 ChatGPT！利用AI生成多屏的UI界面
1. [[⭐] https://withpoly.com/browse/textures](https://withpoly.com/browse/textures) **Poly。** 根据文本生成3D材质 `[error][404]Not Found`
1. [[⭐] https://www.ai.zitijia.com](https://www.ai.zitijia.com) **字体家AI神笔。** 造字神器！ 仅需8个汉字即可生成一套6K+中文字库
1. [[⭐] https://www.cutout.pro](https://www.cutout.pro) **Cutout Pro。** 全能视觉设计平台，包含 AI 照片和视频编辑工具。自动化背景移除、图像修复、平面设计等。 `[error][-1]timeout`
1. [[⭐] https://www.daftart.ai](https://www.daftart.ai) **Daft Art。** AI专辑封面图片生成器
1. [[⭐] https://www.dora.run/ai](https://www.dora.run/ai) **Dora AI。** 一句话生成可交互&编辑的网站AI神器
1. [[⭐] https://www.fotor.com/cn](https://www.fotor.com/cn) **Fotor。** Fotor是一款免费的在线照片编辑器，可以轻松编辑、裁剪、调整大小、添加效果和文字，创建拼贴等。 `[error][-1]timeout`
1. [[⭐] https://www.hama.app/zh](https://www.hama.app/zh) **Hama。** 使用轻松！一键无痕抹除画面内容
1. [[⭐] https://www.noya.io](https://www.noya.io) **Noya。** 让线框图变成高保真设计
1. [[⭐] https://www.restorephotos.io](https://www.restorephotos.io) **Restorephoto。** 效果惊艳的AI修复面容模糊的照片
1. [[⭐] https://www.tracejourney.com](https://www.tracejourney.com) **Tracejourney。** 拯救MJ渣画质！图片一键转矢量
1. [[⭐] https://www.upscayl.org](https://www.upscayl.org) **Upscayl。** 模糊图片秒变超清！开源免费 AI 图片无损放大工具
1. [[⭐] https://www.usegalileo.ai](https://www.usegalileo.ai) **Galileo AI。** AI生成可编辑的UI界面
1. [[⭐] https://www.usesuperflow.com](https://www.usesuperflow.com) **Superflow。** AI辅助高效网站协作设计
1. [[⭐] https://www.visily.ai](https://www.visily.ai) **Visily。** 实用！AI轻松将手绘线框转换为高保真度
1. [[⭐] https://www.x-design.com](https://www.x-design.com) **美图设计室。** 美图设计室是一款由中国互联网公司美图公司开发的图像处理、照片编辑和设计软件。
1. [[⭐] https://www.zmo.ai](https://www.zmo.ai) **ZMO.AI。** ZMO可以轻松的生成令人惊叹的动漫、艺术或图像。
1. [[⭐] https://yunxiu.meitu.com/home](https://yunxiu.meitu.com/home) **美图云修。** 商业级AI影像处理工具
1. [[🚀] https://changestyleai.com](https://changestyleai.com) **Change Style AI。** 人工智能多风格肖像生成器！能够AI生成30种照片
1. [[🚀] https://designer.microsoft.com](https://designer.microsoft.com) **Microsoft Designer。** 微软推出的AI平面设计工具，实现快速完成设计加工。中国区不可用。
1. [[🚀] https://getimg.ai](https://getimg.ai) **Getimg。** 多功能AI图片编辑工具，让文字变成吸睛的视觉图像
1. [[🚀] https://lumalabs.ai](https://lumalabs.ai) **Luma Labs。** 将视频转为游戏资产
1. [[🚀] https://skybox.blockadelabs.com](https://skybox.blockadelabs.com) **Text to Skybox。** AI生成360°无缝环境贴图
1. [[🚀] https://waifulabs.com](https://waifulabs.com) **WaifuLabs。** 一键生成动漫二次元头像

### AI 视频生成 (35)

1. [[⭐⭐⭐] https://runwayml.com](https://runwayml.com) **Runway。** Runway提供一系列易于使用的工具和平台，利用人工智能技术创造出令人惊叹的艺术作品和创意内容。他们的技术可以用于图像生成、视频编辑、音频合成、文字生成等多个创作领域。
1. [[⭐] https://ai.invideo.io](https://ai.invideo.io) **InVideo。** 利用invideo AI，您可以立即将任何内容或想法转化为视频。
1. [[⭐] https://aigc.yizhentv.com](https://aigc.yizhentv.com) **一帧秒创。** 一帧秒创是基于秒创AIGC引擎的智能视频创作平台，包含AI数字人、AI帮写、AI视频、AI作画等AIGC工具。
1. [[⭐] https://app.artflow.ai](https://app.artflow.ai) **Artflow AI。** Artflow.ai可以在浏览器中借助人工智能帮助你创建独特的动画故事，包括原创角色、场景和对话。让你的创意流淌，以全新的方式呈现你的故事。
1. [[⭐] https://audo.ai](https://audo.ai) **Audo Studio。** 听起来很棒！AI一键清除音频背景杂音
1. [[⭐] https://b.jimmylv.cn](https://b.jimmylv.cn) **BibiGPT。** 一键总结B站音视频内容
1. [[⭐] https://beatbot.fm](https://beatbot.fm) **BeatBot。** Splash的AI音乐生成器
1. [[⭐] https://bibigpt.co](https://bibigpt.co) **BibiGPT。** 一键总结B站音视频内容
1. [[⭐] https://clipchamp.com/zh-hans](https://clipchamp.com/zh-hans) **Clipchamp。** 将文本转为视频旁白！几分钟即可创建导出视频
1. [[⭐] https://democreator.wondershare.com](https://democreator.wondershare.com) **DemoCreator。** DemoCreator可以记录您屏幕上的所有内容，可以使视频更具创意。可以平移和缩放，实时屏幕绘制，使用绿幕技术等等。
1. [[⭐] https://filmora.wondershare.com](https://filmora.wondershare.com) **Filmora。** Wondershare Filmora是一款简单的视频编辑器，可让您在Windows和Mac上编辑视频和音频。下载Filmora创建带有标题、转场和创意视觉效果的令人惊叹的影片。
1. [[⭐] https://fliki.ai](https://fliki.ai) **Fliki。** 高效帮用户创建视频，具有文本转语音功能
1. [[⭐] https://jollytoday.com](https://jollytoday.com) **GhostCut。** GhostCut 可以帮助创作者、商家和 MCN（多渠道网络）通过高效完成视频翻译、硬字幕翻译和字幕移除等任务，进行本地化的视频营销。
1. [[⭐] https://pro.splashmusic.com](https://pro.splashmusic.com) **SplashMusic。** 超酷！输入文本提示创建歌曲神器
1. [[⭐] https://soundraw.io](https://soundraw.io) **Soundraw。** 用AI制作免费的音乐
1. [[⭐] https://speaking.ai](https://speaking.ai) **Speaking AI。** 一键克隆！效果真实的文本转语音神器 `[error][-1]write EPROTO D06E0000:error:0A000410:SSL routines:ssl3_read_bytes:sslv3 alert handshake failure:c:\ws\deps\openssl\openssl\ssl\record\rec_layer_s3.c:1590:SSL alert number 40
`
1. [[⭐] https://tianyin.163.com](https://tianyin.163.com) **网易天音。** 网易出品！一站式AI编曲渲染导出，零基础写歌
1. [[⭐] https://uberduck.ai](https://uberduck.ai) **uberduck。** 开源的AI语音生成平台
1. [[⭐] https://vizard.ai](https://vizard.ai) **Vizard AI。** 一款 AI 驱动的视频生成和编辑器，可将一段长视频瞬间转换成10多个剪辑。AI 驱动的在线视频编辑器和屏幕录像机，让您能够创建病毒式视频剪辑。自动字幕生成器。
1. [[⭐] https://wonderdynamics.com](https://wonderdynamics.com) **Wonder Studio。** 真人表演自动转换为CG
1. [[⭐] https://www.animiz.cn/microvideo](https://www.animiz.cn/microvideo) **万彩微影。** 万彩微影，一款全能的AI智能短视频制作软件合集，专门制作热门的手绘动画视频，文字动画视频，还能一键把图文/文章/PPT转换为视频。
1. [[⭐] https://www.capcut.cn](https://www.capcut.cn) **剪映专业版。** 强大的国产剪辑工具！支持AI智能生成字幕和配音
1. [[⭐] https://www.genmo.ai](https://www.genmo.ai) **Genmo。** 更具创造性！使用文本指令编辑图像和视频
1. [[⭐] https://www.laihua.com](https://www.laihua.com) **来画。** 来画是有创意的AI动画短视频制作平台，仅需几张图片，几段文字和声音简单组合， 即可在短时间内生成一个有趣的动画短视频。
1. [[⭐] https://www.loom.com](https://www.loom.com) **Loom。** 使用 Loom AI 录制更好、更快的视频消息，让您的工作更加高效。
1. [[⭐] https://www.opus.pro](https://www.opus.pro) **Opus Clip。** Opus Clip可将长视频转换成高质量的短片，以在TikTok、YouTube Shorts 和 Reels上分享，以增加社交媒体的覆盖范围。
1. [[⭐] https://www.stableaudio.com](https://www.stableaudio.com) **Stable Audio。** Stability Al最新推出的音乐生成工具
1. [[⭐] https://www.unscreen.com](https://www.unscreen.com) **Unscreen。** 智能AI去除视频背景在线神器
1. [[⭐] https://www.veed.io](https://www.veed.io) **Veed。** 视频编辑变得简单。只需单击即可创建出色的视频。添加字幕，转录音频，浏览AI工具，使用模板等等。
1. [[⭐] https://zeemo.ai/cn](https://zeemo.ai/cn) **绘影字幕。** 绘影字幕的AI 字幕准确率高达98%，能让字幕创建变得前所未有的简单。您可以用绘影字幕的自动化流程取代手动转录，为内容创作者、电影制作人或任何需要字幕的人节省时间。
1. [[⭐] https://zenvideo.qq.com](https://zenvideo.qq.com) **腾讯智影。** 腾讯出品的融合多种AIGC能力进行智能视频创作的一体化工具。
1. [[⭐] https://zh.rask.ai](https://zh.rask.ai) **Rask。** 领先的AI视频本地化和配音工具
1. [[⭐⭐⭐🚀] https://pika.art](https://pika.art) **Pika。** Pika致力于用AI让每个人都能成为自己故事的导演，并激发我们每个人的创造力。
1. [[⭐⭐⭐🚀] https://www.heygen.com](https://www.heygen.com) **HeyGen。** AI生成真人营销视频
1. [[⭐⭐⭐🚀] https://openai.com/sora](https://openai.com/sora) **Sora。** 碾压级更新！颠覆性的文生视频大模型

### AI 数字人 (5)

1. [[⭐] https://virbo.wondershare.cn](https://virbo.wondershare.cn) **Virbo。** Virbo是一款万兴科技旗下的数字人营销视频创作神器。
1. [[⭐] https://www.d-id.com](https://www.d-id.com) **D-ID。** AI真人视频创作工具。
1. [[⭐] https://www.guiji.ai](https://www.guiji.ai) **硅基智能。** 打造硅基劳动力，让人回归人的价值。
1. [[⭐] https://www.kreadoai.com](https://www.kreadoai.com) **Kreado AI。** 多语言AI视频创作，只需输入文本或关键词，即可创作真实/虚拟人物的多语言口播视频。
1. [[⭐] https://www.xiaoice.com](https://www.xiaoice.com) **小冰。** 小冰基于全球领先的完备人工智能小冰框架，推出了数字专家和数字员工等完整产品线。

### AI 语音生成 (11)

1. [[⭐⭐] https://ttsmaker.cn](https://ttsmaker.cn) **TTSMAKER。** 免费的在线文本转语音神器
1. [[⭐] https://elevenlabs.io](https://elevenlabs.io) **Eleven Labs。** ElevenLabs 带来了最逼真、丰富和生动的声音，为寻求叙事的终极工具的创作者和发布者提供了最具吸引力的文本转语音和语音克隆软件。
1. [[⭐] https://mubert.com](https://mubert.com) **Mubert。** 使用人工智能为您的视频内容、播客和应用程序生成音乐。
1. [[⭐] https://peiyin.xunfei.cn/virtual-broadcasting](https://peiyin.xunfei.cn/virtual-broadcasting) **讯飞智作。** 讯飞智作是一站式配音平台，可以提供AI文字转语音、语音合成、智能配音、AI虚拟主播等工具。
1. [[⭐] https://play.ht](https://play.ht) **PlayHT。** 基于人工智能将文本转位逼真的语音
1. [[⭐] https://speechify.com](https://speechify.com) **Speechify。** 拥有数百万次在Chrome、iOS和Android上的下载量的领先文本到语音应用，可以在任何设备上听取互联网内容。
1. [[⭐] https://tingwu.aliyun.com](https://tingwu.aliyun.com) **通义听悟。** 阿里推出的会议转录工具
1. [[⭐] https://vocalremover.org](https://vocalremover.org) **Vocal Remover。** Vocal Remover使用强大的AI算法免费将歌曲中的人声与音乐分离。
1. [[⭐] https://www.moyin.com](https://www.moyin.com) **魔音工坊。** 魔音工坊是一款可以在线将文字转成语音的智能配音产品。提供不同性别、不同口音的真人声音，在你输入文字后直接配音。你可快速对短视频等需要配音的内容进行配音。
1. [[⭐] https://www.songtell.com](https://www.songtell.com) **Songtell。** 通过Songtell，利用AI的力量，深入探讨您最喜欢的歌曲，揭示歌词背后引人入胜的故事和内涵。
1. [[⭐] https://www.suno.ai](https://www.suno.ai) **Suno。** AI音乐创作平台，不需要任何工具，只需要想象力，就可以创作出美妙动听的音乐。

### AI 角色生成 (5)

1. [[⭐] https://www.xingyeai.com](https://www.xingyeai.com) **星野。** 星野是 MiniMax稀宇科技旗下AI原生应用，致力于为用户打造沉浸式AI内容社区。
1. [[🚀] https://beta.character.ai](https://beta.character.ai) **Character AI。** 创建虚拟角色，并与其进行开放式对话。
1. [[🚀] https://hiwaifu.com](https://hiwaifu.com) **Hi Waifu。** Hi Waifu可以创建一个拥有独特个性的数字朋友，随时可以与AI聊天，准备好以一种新的方式与AI交流互动吧。
1. [[🚀] https://janitorai.com](https://janitorai.com) **JanitorAI。** Janitor AI是由janitorai.com开发的一个平台，允许用户创建具有不同个性的虚拟聊天机器人角色。该平台由大型语言模型驱动，包括OpenAI的GPT模型。
1. [[🚀] https://www.aichatting.net](https://www.aichatting.net) **AI Chatting。** 创建虚拟角色，并与其进行开放式对话。

### AI 提示词 (19)

1. [[⭐] https://catjourney.life](https://catjourney.life) **Catjourney。** 超多实用的 MJ Style Tuner风格库
1. [[⭐] https://contentatscale.ai/ai-prompt-library](https://contentatscale.ai/ai-prompt-library) **Content at scale。** 收录最佳的ChatGPT prompt提示词
1. [[⭐] https://learningprompt.wiki](https://learningprompt.wiki) **Learning Prompt。** 提供免费的Prompt Engineering教程，包含ChatGPT和Midjourney的教程。
1. [[⭐] https://lib.kalos.art](https://lib.kalos.art) **LIB.KALOS.ART。** 艺术风格流派参考库
1. [[⭐] https://midlibrary.io](https://midlibrary.io) **Midlibrary。** 风格多样！实用超2000+MJ提示词资源
1. [[⭐] https://openart.ai/home](https://openart.ai/home) **Openart。** 实用！SD艺术创作提示词 `[error][-1]timeout`
1. [[⭐] https://prompt.noonshot.com](https://prompt.noonshot.com) **MJ Prompt Tool。** MJ提示词创造助手
1. [[⭐] https://promptalot.com](https://promptalot.com) **Promptalot。** 超好用的MJ提示词辅助插件
1. [[⭐] https://promptbase.com](https://promptbase.com) **PromptBase。** AI提示词交易网站
1. [[⭐] https://promptomania.com](https://promptomania.com) **PromptoMania。** MJ和SD提示词生成器
1. [[⭐] https://publicprompts.art](https://publicprompts.art) **PublicPrompts。** AI绘画模型+风格参考
1. [[⭐] https://replicate.com/pharmapsychotic/clip-interrogator](https://replicate.com/pharmapsychotic/clip-interrogator) **CLIP Interrogator。** 反向学习！从图片反推AI关键词
1. [[⭐] https://tools.saxifrage.xyz/prompt](https://tools.saxifrage.xyz/prompt) **Visual Prompt Builder。** 涨姿势系列！设计/绘画风格参考
1. [[⭐] https://www.clickprompt.org/zh-CN](https://www.clickprompt.org/zh-CN) **ClickPrompt。** 一款专为 Prompt 编写者设计的工具
1. [[⭐] https://www.ordinarypeopleprompts.com](https://www.ordinarypeopleprompts.com) **Ordinary Prompts。** 有趣ChatGPT提示词
1. [[⭐] https://www.promptingguide.ai](https://www.promptingguide.ai) **提示工程指南。** 提示工程（Prompt Engineering）是一门较新的学科，关注提示词开发和优化，帮助用户将大语言模型（Large Language Model, LLM）用于各场景和研究领域。
1. [[🚀] https://flowgpt.com](https://flowgpt.com) **Flowgpt。** 专注于分享聊天指令的社区网站
1. [[🚀] https://prompthero.com](https://prompthero.com) **PromptHero。** 最受欢迎的AI提示词网站
1. [[🚀] https://www.prompthunt.com/explore](https://www.prompthunt.com/explore) **Prompt Hunt。** 按主题分类的SD提示词

### AI 搜索引擎 (7)

1. [[⭐⭐⭐] https://www.perplexity.ai](https://www.perplexity.ai) **Perplexity AI。** Perplexity AI通过信息发现和共享解锁知识的力量。
1. [[⭐⭐⭐🧑‍💻] https://www.tiangong.cn](https://www.tiangong.cn) **天工AI。** 昆仑万维提供的对标 ChatGPT 的双千亿级大语言模型，也是一个对话式AI助手
1. [[⭐] https://metaso.cn](https://metaso.cn) **秘塔AI搜索。** 秘塔科技旗下的一款AI搜索产品，能够大幅提升搜索效率，解决日常生活、工作学习等场景中遇到的各类搜索需求
1. [[⭐] https://so.360.com](https://so.360.com) **360AI搜索。** 360AI搜索是由360集团推出的一款基于大模型的新一代答案引擎应用。该产品旨在为用户提供更直接、更直观的问题答案，不再只是一个普通的搜索工具，而是能够理解和处理复杂搜索查询的智能AI助手。
1. [[⭐⭐⭐🚀] https://www.bing.com/chat](https://www.bing.com/chat) **Bing。** bing版ChatGPT聊天机器人，微软新搜索引擎。中国区不可用
1. [[🚀] https://www.phind.com](https://www.phind.com) **Phind。** 为开发人员而生的AI搜索引擎。中国区不可用
1. [[🚀] https://you.com](https://you.com) **You。** You是一种具有对话性和持续学习能力的技术，可以增强网络搜索、写作、编码、数字艺术创作和解决复杂问题。

### AI 行业工具 (7)

1. [[⭐] https://quizlet.com](https://quizlet.com) **Q Chat。** 【教育】教育领域的人工智能导师
1. [[⭐] https://wanderlog.com/trip-plan-assistant](https://wanderlog.com/trip-plan-assistant) **Wanderlog。** 【旅游】Wanderlog是一款旅行规划AI助手，使用它来规划下下一场旅行吧！
1. [[⭐] https://www.cheggmate.ai](https://www.cheggmate.ai) **CheggMate。** 【教育】CheggMate是一款一体化解答作业的AI产品。
1. [[⭐] https://www.ixigo.com/plan](https://www.ixigo.com/plan) **Ixigo。** 【旅游】GPT旅行，在几秒钟内计划您的梦想旅行！
1. [[⭐] https://www.khanmigo.ai](https://www.khanmigo.ai) **Khanmigo。** 【教育】可汗学院Khanmigo，教育界的世界级人工智能。
1. [[⭐] https://www.tipranks.com](https://www.tipranks.com) **Tipranks。** 【金融】
1. [[⭐] https://www.turnitin.com](https://www.turnitin.com) **Turnitin。** 【教育】Turnitin是一款促进学术诚信，简化评分和反馈，防止抄袭，并改善学生的学习成果的产品。

### AI 写作助手 (41)

1. [[⭐⭐⭐] https://www.notion.so](https://www.notion.so) **Notion AI。** Notion AI是一款功能强大的人工智能工具，它可以帮助用户自动化和管理个人和团队的任务和流程。
1. [[⭐⭐⭐] https://www.writingo.net](https://www.writingo.net) **火山写作。** 火山写作是由字节跳动推出的，集成创作、润色、纠错、改写、翻译等能力的中英文AI 写作助手。
1. [[⭐⭐] https://www.giiso.com](https://www.giiso.com) **Giiso写作机器人。** Giiso是一款内容创作AI辅助工具，提供资讯写作、小红书文案、短视频脚本、PPT创作、文生图等类型创作。
1. [[⭐] https://ai.kezhan365.com](https://ai.kezhan365.com) **万彩AI。** 万彩AI是一款强大的AI写作工具合集，它为缺乏灵感或对写作感到困难的人提供了AI智能写作支持。
1. [[⭐] https://ai.zaker.cn](https://ai.zaker.cn) **爱创作。** 一键生成文章、营销文本、配图与短视频等多类型内容
1. [[⭐] https://aigc.baidu.com](https://aigc.baidu.com) **百度度加创作工具。** 百度旗下产品，打造人人可用的AI创作工具
1. [[⭐] https://bearly.ai](https://bearly.ai) **Bearly。** 英文阅读写作效率提高10倍
1. [[⭐] https://chuangyi.taobao.com/pages/aiCopy](https://chuangyi.taobao.com/pages/aiCopy) **阿里悉语。** 悉语智能是阿里妈妈创意中心出品的一款一键生成商品营销文案的工具。
1. [[⭐] https://effidit.qq.com](https://effidit.qq.com) **腾讯Effidit。** Effidit是由腾讯AI Lab 开发的一个智能创作助手，探索用AI技术提升写作者的写作效率和创作体验。
1. [[⭐] https://getgetai.com/workstation](https://getgetai.com/workstation) **字语未来。** 用AI创造更有价值的信息，定义新一代智能办公平台
1. [[⭐] https://hix.ai](https://hix.ai) **HIX.AI。** HIX.AI是一款由先进的GPT-3.5/4技术驱动的全能人工智能写作助手。
1. [[⭐] https://ibiling.cn](https://ibiling.cn) **笔灵AI。** 笔灵AI是国内领先的AI写作助手与智能工具。专为提高写作效率而设计，提供免费的AI文章改写、论文辅助、商业计划书撰写等服务。
1. [[⭐] https://if.caiyunai.com](https://if.caiyunai.com) **彩云小梦。** 彩云小梦是一个智能写作AI，你只需开个头，AI 就会帮你创作故事。你可以自由定义故事的世界设定，并扮演其中的角色，与其他角色聊天。
1. [[⭐] https://jenni.ai](https://jenni.ai) **jenni。** 面向作家的AI协作助手
1. [[⭐] https://languagetool.org](https://languagetool.org) **Language Tool。** LanguageTool 是一款免费的英语、西班牙语和其他30种语言的语法检查和改写工具。
1. [[⭐] https://littlefrog.ai](https://littlefrog.ai) **写作蛙。** 清华智谱旗下的AI写作助手
1. [[⭐] https://lunwenbang.cc](https://lunwenbang.cc) **AI论文帮。** 5分钟生成万字优质原创论文！
1. [[⭐] https://magickpen.com](https://magickpen.com) **MagicPen。** 在线AI英语写作助手 `[error][-1]timeout`
1. [[⭐] https://miaobi.xinhuaskl.com](https://miaobi.xinhuaskl.com) **新华妙笔。** 新华社媒体出品！AI公文写作学习平台
1. [[⭐] https://mp.weixin.qq.com/s/fZtFbxkHvmyQPykc81pydw](https://mp.weixin.qq.com/s/fZtFbxkHvmyQPykc81pydw) **腾讯文档智能助手。** 支持全品类内容生成、数据处理、版式美化等高效创作
1. [[⭐] https://novelistai.com](https://novelistai.com) **Novelist AI。** AI辅助你创建自己的小说
1. [[⭐] https://smodin.io/zh-cn](https://smodin.io/zh-cn) **Smodin。** 全球数百万学生、作家和互联网工作者使用的日常应用程序。我们最受欢迎的应用程序包括文本重写器、抄袭检查器、自动引文机和多语言翻译器。
1. [[⭐] https://wantquotes.net](https://wantquotes.net) **据意查句。** 清华出品！AI 神器让你的文案立马变高级
1. [[⭐] https://www.5118.com/ai/articlegenius](https://www.5118.com/ai/articlegenius) **5118 SEO优化精灵。** 一键式生成高质量SEO文章
1. [[⭐] https://www.aigaixie.com](https://www.aigaixie.com) **爱改写。** 爱改写是一款在线AI内容创作工具，帮助您通过查词、智能改写、纠错、查原创度等功能，帮助提高您的内容生产效率。
1. [[⭐] https://www.editage.cn/paperpal](https://www.editage.cn/paperpal) **Paperpal。** 学术写作新世代，面向科研人员的AI写作工具
1. [[⭐] https://www.editgpt.app](https://www.editgpt.app) **editGPT。** 让ChatGPT修改英语文章
1. [[⭐] https://www.grammarly.com](https://www.grammarly.com) **Grammarly。** Grammarly开发了一种使用人工智能和自然语言处理的数字写作工具。Grammarly键盘随时随地为您提供支持，确保您的写作始终看起来很棒。无论您是在输入紧急电子邮件、重要的LinkedIn消息还是必要的Facebook帖子，Grammarly都能让您放心地从移动设备上进行写作。
1. [[⭐] https://www.heyfriday.cn/home](https://www.heyfriday.cn/home) **西湖心辰-FRIDAY。** FRIDAY智能写作平台依靠自主研发的创新性AI算法，可以生成不同形式和语言风格的内容。
1. [[⭐] https://www.jasper.ai](https://www.jasper.ai) **Jasper。** AI文字内容创作工具。
1. [[⭐] https://www.mypitaya.com](https://www.mypitaya.com) **火龙果写作。** 火龙果智能写作软件，是一款基于AI 驱动的写作辅助神器，它提供了文章内容生成续写、智能改写、校对纠错、实时翻等强大功能。
1. [[⭐] https://www.notion.so/product/ai](https://www.notion.so/product/ai) **Notion AI。** AI写作神器！比你想得更多！写得更快
1. [[⭐] https://www.shenyandayi.com](https://www.shenyandayi.com) **深言达意。** 深言达意是一款写作辅助工具，核心功能包括据意查词、据意查句。
1. [[⭐] https://www.tutoreva.ai](https://www.tutoreva.ai) **TutorEva。** TutorEva是一个AI数学导师，用拍照AI识别来解决数学问题，TutorEva将在几秒钟内解决它们，即使是几何和应用题等难题。虚拟化身和互动教学使数学学习生动而简单。
1. [[⭐] https://www.writingo.net/home](https://www.writingo.net/home) **火山写作。** 字节的AI英语写作工具，高效提升英文表达
1. [[⭐] https://www.xiezuocat.com](https://www.xiezuocat.com) **秘塔写作猫。** 基于GPT的中文写作工具
1. [[⭐] https://xiezuocat.com](https://xiezuocat.com) **秘塔写作猫。** 写作猫是新一代交互式中英文写作辅助平台，集智能文本纠错、改写润色、自动续写、智能配图为一体。
1. [[🚀] https://novelai.net](https://novelai.net) **Novel.ai。** 基于人工智能，轻松构建独特的、惊险的、引入入胜的故事。
1. [[🚀] https://quillbot.com](https://quillbot.com) **Quillbot。** QuillBot一款写作改写工具，能够帮助您让写作更好、更快、更聪明。我们的改写工具是免费且易于使用的，只需点击一下按钮，即可进行改写。
1. [[🚀] https://writesonic.com](https://writesonic.com) **writesonic。** Writesonic可以为博客、广告、电子邮件和网站快速生成已优化的免费原创内容。
1. [[🚀] https://www.copy.ai](https://www.copy.ai) **Copy.ai。** 人工智能营销文案和内容创作工具，帮助各行各业的撰稿人、营销人员和企业快速高效地创建高质量的内容。

### AI 文档工具 (24)

1. [[⭐⭐⭐] https://www.aippt.cn](https://www.aippt.cn) **aiPPT。** 通过简单的文字自动生成想要的精致PPT
1. [[⭐] https://ai.wps.cn](https://ai.wps.cn) **WPS AI。** WPS AI是由金山办公发布的具备大语言模型能力的人工智能应用，为用户提供智能文档写作、阅读理解和问答、智能人机交互的能力。
1. [[⭐] https://chat-ppt.com](https://chat-ppt.com) **ChatPPT。** 必优科技推出的中文AI生成PPT的办公产品
1. [[⭐] https://chatexcel.com](https://chatexcel.com) **酷表 ChatExcel。** 酷表ChatExcel是通过文字聊天实现Excel的交互控制的AI辅助工具，期望通过对表输入需求即可得到处理后的数据。
1. [[⭐] https://gamma.app](https://gamma.app) **Gamma。** Gamma是幻灯片演示的一种替代方式-一种快速、简单的分享和展示工作的方法。创建引人入胜的演示文稿、备忘录、简报和文档，易于实时讨论或异步分享。全部在您的浏览器中完成，无需下载或安装任何内容。
1. [[⭐] https://glimmerai.tech](https://glimmerai.tech) **Glimmer Ai。** 热门！基于GPT-3和DALL·E2的AI PPT知名工具
1. [[⭐] https://noty.ai](https://noty.ai) **Noty AI。** ChatGPT驱动的AI会议转录工具
1. [[⭐] https://otter.ai](https://otter.ai) **Otter AI。** 写笔记和总结会议的速度提高 30 倍
1. [[⭐] https://ppt.isheji.com](https://ppt.isheji.com) **爱设计PPT。** 爱设计PPT利用先进的AI技术,自动创建并优化PPT模版。爱设计的AI能为您生成适合的,高质量且独特的PPT模版。
1. [[⭐] https://presentory.wondershare.com](https://presentory.wondershare.com) **Presentory。** Presentory是万兴科技旗下一款使用AI创建演示文稿的产品。
1. [[⭐] https://prezi.com](https://prezi.com) **Prezi。** 感动观众的演示，Prezi使用AI能力比以往任何时候都更快地完善、增强和定制您的内容。
1. [[⭐] https://rossum.ai](https://rossum.ai) **Rossum.ai。** 深受企业信赖，强大易用的AI智能文档处理平台
1. [[⭐] https://slidesgo.com/ai-presentations](https://slidesgo.com/ai-presentations) **SlidesGo。** Slidesgo最新推出了AI演示制作工具，它能在几次点击之内，为你制作出符合你需求的精美幻灯片。而且，它完全免费！
1. [[⭐] https://smartread.cc](https://smartread.cc) **司马阅AI文档。** 司马阅(SmartRead)，是一款AI文档阅读分析工具，通过聊天互动形式，精准地从复杂文档提取并分析信息，极大节省文档阅读和检索时间及便捷获取创新灵感，高效应用于工作、学习场景，如读行业市场报告、产品手册、法律文档、论文文献、电子书等。
1. [[⭐] https://timelyapp.com](https://timelyapp.com) **Timely。** 一款AI时间管理工具！可以帮助你更有效地管理时间
1. [[⭐] https://tome.app](https://tome.app) **Tome。** 先进的AI智能PPT制作工具
1. [[⭐] https://tome.app/ai](https://tome.app/ai) **Tome。** AI专为演示而构建。
1. [[⭐] https://wordai.com](https://wordai.com) **WordAi。** 10倍速AI内容输出！创建读者喜爱的优质内容
1. [[⭐] https://www.pandagpt.io](https://www.pandagpt.io) **PandaGPT。** 上传文档！即可用对话的方式让 AI 总结文档重点
1. [[⭐] https://www.taskade.com](https://www.taskade.com) **Taskade。** 高颜值AI大纲和思维导图生成，统一您的工作流程
1. [[⭐] https://yinxiang.com/dl-mac/](https://yinxiang.com/dl-mac/) **印象 AI。** 「印象笔记」X「印象AI」会创作的第二大脑
1. [[💰] https://bigesj.com/ai-ppt/](https://bigesj.com/ai-ppt/) **比格AI PPT。** AI 一键生成PPT。需付费
1. [[🚀] https://chatdoc.com](https://chatdoc.com) **chatDOC。** 通过与文档对话,以引用来源的方式获得即时答案。
1. [[🚀] https://chatpdf.com](https://chatpdf.com) **chatPDF。** 加入数百万学生、研究人员和专业人士的行列，通过 AI 即时回答问题。

### AI 思维导图 (4)

1. [[⭐] https://boardmix.cn](https://boardmix.cn) **博思AI白板。** boardmix博思白板，多人实时协作的流程图，思维导图工具。
1. [[⭐] https://gitmind.cn](https://gitmind.cn) **GitMind思乎。** GitMind是一款全平台在线思维导图脑图架构图制作软件工具，支持手机手机思维导图，Windows/Mac多平台操作及内容同步。
1. [[⭐] https://modao.cc/brand](https://modao.cc/brand) **墨刀AI。** 墨刀AI是国内知名产品设计协作平台「墨刀」最新推出的AI产品原型设计助手，帮助产品设计人高效实现和落地创意，激发无限创造力。
1. [[⭐] https://www.edrawsoft.cn/mindmaster](https://www.edrawsoft.cn/mindmaster) **亿图脑图。** 万兴科技旗下的亿图脑图MindMaster软件是一款多平台思维导图软件，可用于Windows，Mac和Linux等桌面环境，也可以在线使用或在苹果，安卓等移动端上使用。

### AI 翻译工具 (14)

1. [[⭐⭐⭐] https://immersivetranslate.com](https://immersivetranslate.com) **沉浸式翻译。** 沉浸式翻译是一款免费的，好用的，没有废话的，革命性的，饱受赞誉的，AI 驱动的双语网页翻译扩展。
1. [[⭐⭐⭐] https://translate.volcengine.com](https://translate.volcengine.com) **火山翻译。** 字节旗下支持超过100种语种的免费在线翻译
1. [[⭐⭐⭐] https://www.deepl.com/translator](https://www.deepl.com/translator) **DeepL。** 支持翻译文本和文件，为个人和团队提供准确的翻译，每天有数百万人使用DeepL进行翻译。
1. [[⭐] https://cn.bing.com/translator](https://cn.bing.com/translator) **必应翻译。** 内置微软自研的翻译词库，对流行词以及生僻词精准进行翻译
1. [[⭐] https://fanyi.baidu.com](https://fanyi.baidu.com) **百度翻译。** 提供即时免费200+语言翻译服务
1. [[⭐] https://fanyi.caiyunapp.com](https://fanyi.caiyunapp.com) **彩云小译。** 兼具“你边说，我边译”的字字幕翻译功能。包括文字翻译、文档翻译、网页翻译、术语库、浏览器插件和双语对照服务
1. [[⭐] https://fanyi.sogou.com/text](https://fanyi.sogou.com/text) **搜狗翻译。** 支持中、英、法、日等50多种语言之间的互译功能
1. [[⭐] https://fanyi.xfyun.cn/console/trans/text](https://fanyi.xfyun.cn/console/trans/text) **讯飞智能翻译。** 科大讯飞推出的人工智能翻译平台
1. [[⭐] https://fanyi.youdao.com](https://fanyi.youdao.com) **有道翻译。** 网易旗下深受用户喜欢的口碑型学习工具产品
1. [[⭐] https://kuaiyi.wps.cn/txt-translate](https://kuaiyi.wps.cn/txt-translate) **金山快译。** 金山旗下多场景的翻译服务 `[error][502]Bad Gateway`
1. [[⭐] https://sight.youdao.com](https://sight.youdao.com) **网易见外。** 网易自营的智能转写翻译服务。
1. [[⭐] https://translate.alibaba.com](https://translate.alibaba.com) **阿里翻译。** 阿里巴巴达摩院推出的多领域多语种的在线机器翻译
1. [[⭐] https://transmart.qq.com/zh-CN/index](https://transmart.qq.com/zh-CN/index) **TranSmart。** 腾讯AI Lab研发的AI辅助翻译产品，满足用户快速翻译的需求
1. [[🚀] https://translate.google.com](https://translate.google.com) **Google翻译。** Google免费提供上100种语言智能即时翻译工具

### AI 编程开发 (24)

1. [[⭐] https://charisma.ai](https://charisma.ai) **Charisma。** 轻松连接到 Unreal Engine、Unity、移动设备和 metaverses
1. [[⭐] https://codeium.com](https://codeium.com) **Codeium。** 超过40种语言的免费代码加速工具
1. [[⭐] https://comate.baidu.com](https://comate.baidu.com) **Comate。** 基于文心大模型，结合百度积累多年的编程现场大数据和外部优秀开源数据，为你生成更符合实际研发场景的优质代码。
1. [[⭐] https://fig.io](https://fig.io) **Fig。** 内置AI终端命令自动补全，新一代命令行工具
1. [[⭐] https://fronty.com](https://fronty.com) **Fronty。** 支持图像到 HTML CSS 转换器
1. [[⭐] https://github.com/features/copilot](https://github.com/features/copilot) **GitHub Copilot。** 热门！GitHub AI编程工具
1. [[⭐] https://hocoos.com](https://hocoos.com) **Hocoos。** 无代码AI智能在线快速创建网站
1. [[⭐] https://iflycode.xfyun.cn](https://iflycode.xfyun.cn) **讯飞iFlyCode。** 代码大模型，支持讯飞AI能力，具有业界领先的代码大模型能力。
1. [[⭐] https://jam.dev/jamgpt](https://jam.dev/jamgpt) **JamGPT。** AI Debug调试助手，快速找到解决方案
1. [[⭐] https://latitude.io](https://latitude.io) **Latitude。** Latitude将成为人们访问人工智能驱动体验的唯一场所
1. [[⭐] https://mutable.ai](https://mutable.ai) **Mutable AI。** 一款更全面的 GitHub Copilot 替代品
1. [[⭐] https://play.aidungeon.io/main/home](https://play.aidungeon.io/main/home) **AI Dungeon。** 拥有更流畅的体验，更快的模型，堪比免费版本的Steam平台
1. [[⭐] https://replit.com](https://replit.com) **Replit。** 利用人工智能的能力，可以在任何设备上协同构建软件。
1. [[⭐] https://www.askcodi.com](https://www.askcodi.com) **AskCodi。** AskCodi上可以帮助你完成任何编码工作
1. [[⭐] https://www.codium.ai](https://www.codium.ai) **CodiumAI。** 超实用的技术编程句子补全工具
1. [[⭐] https://www.hiddendoor.co](https://www.hiddendoor.co) **Hidden Door。** 热门！小说作品生成在线社交角色扮演游戏
1. [[⭐] https://www.marsx.dev](https://www.marsx.dev) **MarsX。** 使用无代码和零编码技能开始构建微应用程序
1. [[⭐] https://www.mindspore.cn](https://www.mindspore.cn) **昇思 MindSpore。** 通过社区合作，面向全场景构建最佳昇腾匹配、支持多处理器架构的开放AI架构，为算法工程师和数据科学家提供开发友好、运行高效、部署灵活的体验，帮助人工智能软硬件应用生态繁荣发展。
1. [[⭐] https://www.paddlepaddle.org.cn](https://www.paddlepaddle.org.cn) **百度飞桨。** 飞桨致力于让深度学习技术的创新与应用更简单。
1. [[⭐] https://www.theculturedao.com](https://www.theculturedao.com) **Theculturedao。** 技术优势！快速打造 AI的迪士尼漫画、游戏、电影和 Gepetto
1. [[⭐] https://www.warp.dev](https://www.warp.dev) **Warp。** 内置AI命令搜索！21世纪的终端工具
1. [[⭐] https://www.zelinai.com](https://www.zelinai.com) **ZelinAI。** ZelinAI零代码构建你的AI应用，ZelinAI目前接入了微软合规的GPT3.5、GPT4大智能体以及文心一言、星火等国内知名的大智能体
1. [[🚀] https://ludo.ai](https://ludo.ai) **Ludo AI。** 快速帮助游戏开发者进行创造过程
1. [[🚀] https://www.cursor.so](https://www.cursor.so) **Cursor。** 基于GPT的代码生成工具

### AI 网站生成 (3)

1. [[⭐] https://tilda.cc](https://tilda.cc) **Tilda。** Tilda能快速创建一个令人印象深刻的网站，特别适用于商业和媒体领域。
1. [[⭐] https://webflow.com](https://webflow.com) **Webflow。** Webflow是利用AI搭建的一个非常强大的视觉开发平台。
1. [[⭐] https://www.dora.run](https://www.dora.run) **Dora AI。** Dora AI可以做到使用自然语言生成、定制和部署网站，所有这些都在Dora强大的无代码编辑器中完成，他能在几秒钟内生成令人惊叹的、完全可编辑的网站，将静态设计转换为3D，自动化您的动画过程。

### AI 电商工具 (1)

1. [[⭐] https://www.weshop.com](https://www.weshop.com) **WeShop。** AI商拍工具，在WeShop再也不会受到模特限制，鼠标就是快门，点击就看成片。

### AI 会议助手 (1)

1. [[⭐] https://www.notta.ai](https://www.notta.ai) **Notta。** Notta可以在在线会议、面对面销售会议等场景中快速转录您的音频或视频文件为文字内容。

### AI 综合工具 (11)

1. [[⭐⭐⭐] https://ai-nav.lzw.me](https://ai-nav.lzw.me) **AI网址导航。** 收集了当前最新的AI人工智能相关的网站网址，定时任务每日更新，检测验证可用性
1. [[⭐] https://aitools.run](https://aitools.run) **AI帮个忙。** AI帮个忙是打工人的多功能小帮手，有多个AI写作和图片工具，可以用AI生成小红书文案，文章，PPT大纲等，支持改写，润色,续写,扩写
1. [[⭐] https://saasaitools.com](https://saasaitools.com) **Saasaitools。** 随时了解每日 AI 新闻和工具: Discover your next generative AI tool
1. [[⭐] https://toolfolio.io](https://toolfolio.io) **Toolfolio。** 国外热门工具集合站
1. [[⭐] https://toolscout.ai](https://toolscout.ai) **Toolscout。** 每天更新，最快最新的人工智能工具
1. [[⭐] https://topai.tools](https://topai.tools) **Topai。** 发现最好的新型 AI 工具: Find the perfect AI tool for every task `[error][403]Forbidden`
1. [[⭐] https://www.88sheji.cn/ai](https://www.88sheji.cn/ai) **Ai导航。** 专为设计师打造的AI工具箱，提供智能设计辅助、创意激发和设计效率提升等功能 `[error][-1]getaddrinfo ENOTFOUND www.88sheji.cn`
1. [[⭐] https://www.aicpw.cn](https://www.aicpw.cn) **Khanmigo。** 收录热门AI产品
1. [[⭐] https://www.powerfulai.tools](https://www.powerfulai.tools) **Powerfulai。** 全球最大的人工智能工具目录: DISCOVER POWERFUL AI TOOLS. World's Largest AI Tool Directory, Updated Daily. `存在人机验证`
1. [[⭐] https://www.stackradar.co](https://www.stackradar.co) **Stackradar.co。** 互联网上最好的技术工具的精选
1. [[🚀] https://huggingface.co](https://huggingface.co) **Hugging Face。** 下载开源的SD模型

### AI 开源工具 (4)

1. [[⭐] https://github.com/features/copilot](https://github.com/features/copilot) **GitHub Copilot。** 热门！GitHub AI编程工具
1. [[⭐] https://github.com/pAIrprogio/vscode-ui-sketcher](https://github.com/pAIrprogio/vscode-ui-sketcher) **UI Sketcher。** VSCode插件,借助GPT-4V的多模态能力,在插件中画出界面草图,就能生成一个基于ReactNative的UI界面
1. [[⭐] https://github.com/tldraw/make-real](https://github.com/tldraw/make-real) **Makereal Tldraw。** 通过草图生成可交互的UI界面和代码
1. [[🚀] https://huggingface.co](https://huggingface.co) **Hugging Face。** 下载开源的SD模型

### AI 国外工具 (54)

1. [[⭐] https://aicolors.co](https://aicolors.co) **AIcolors。** 根据文本生成调色板，提供配色案例参考
1. [[⭐] https://app.recraft.ai/community](https://app.recraft.ai/community) **Recraft。** 便捷的AI生成矢量图像生成工具
1. [[⭐] https://boolpic.fun/background-remover](https://boolpic.fun/background-remover) **Toolkit。** 多功能的AI图片处理工具箱
1. [[⭐] https://contentatscale.ai/ai-prompt-library](https://contentatscale.ai/ai-prompt-library) **Content at scale。** 收录最佳的ChatGPT prompt提示词
1. [[⭐] https://fliki.ai](https://fliki.ai) **Fliki。** 高效帮用户创建视频，具有文本转语音功能
1. [[⭐] https://gamma.app](https://gamma.app) **Gamma。** Gamma是幻灯片演示的一种替代方式-一种快速、简单的分享和展示工作的方法。创建引人入胜的演示文稿、备忘录、简报和文档，易于实时讨论或异步分享。全部在您的浏览器中完成，无需下载或安装任何内容。
1. [[⭐] https://github.com/features/copilot](https://github.com/features/copilot) **GitHub Copilot。** 热门！GitHub AI编程工具
1. [[⭐] https://github.com/pAIrprogio/vscode-ui-sketcher](https://github.com/pAIrprogio/vscode-ui-sketcher) **UI Sketcher。** VSCode插件,借助GPT-4V的多模态能力,在插件中画出界面草图,就能生成一个基于ReactNative的UI界面
1. [[⭐] https://github.com/tldraw/make-real](https://github.com/tldraw/make-real) **Makereal Tldraw。** 通过草图生成可交互的UI界面和代码
1. [[⭐] https://hix.ai](https://hix.ai) **HIX.AI。** HIX.AI是一款由先进的GPT-3.5/4技术驱动的全能人工智能写作助手。
1. [[⭐] https://hocoos.com](https://hocoos.com) **Hocoos。** 无代码AI智能在线快速创建网站
1. [[⭐] https://huemint.com/brand-intersection](https://huemint.com/brand-intersection) **Huemint。** 用AI自定义和谐配色
1. [[⭐] https://imagecreator.alkaidvision.com](https://imagecreator.alkaidvision.com) **ImageCreator。** PS中免费使用的SD神级插件
1. [[⭐] https://looka.com](https://looka.com) **Looka。** AI辅助logo和品牌设计
1. [[⭐] https://mubert.com](https://mubert.com) **Mubert。** 使用人工智能为您的视频内容、播客和应用程序生成音乐。
1. [[⭐] https://noty.ai](https://noty.ai) **Noty AI。** ChatGPT驱动的AI会议转录工具
1. [[⭐] https://openart.ai/home](https://openart.ai/home) **Openart。** 实用！SD艺术创作提示词 `[error][-1]timeout`
1. [[⭐] https://play.aidungeon.io/main/home](https://play.aidungeon.io/main/home) **AI Dungeon。** 拥有更流畅的体验，更快的模型，堪比免费版本的Steam平台
1. [[⭐] https://play.ht](https://play.ht) **PlayHT。** 基于人工智能将文本转位逼真的语音
1. [[⭐] https://promptalot.com](https://promptalot.com) **Promptalot。** 超好用的MJ提示词辅助插件
1. [[⭐] https://qoqo.ai](https://qoqo.ai) **QoQo。** AI快速创建用户旅程地图
1. [[⭐] https://saasaitools.com](https://saasaitools.com) **Saasaitools。** 随时了解每日 AI 新闻和工具: Discover your next generative AI tool
1. [[⭐] https://speaking.ai](https://speaking.ai) **Speaking AI。** 一键克隆！效果真实的文本转语音神器 `[error][-1]write EPROTO D06E0000:error:0A000410:SSL routines:ssl3_read_bytes:sslv3 alert handshake failure:c:\ws\deps\openssl\openssl\ssl\record\rec_layer_s3.c:1590:SSL alert number 40
`
1. [[⭐] https://toolfolio.io](https://toolfolio.io) **Toolfolio。** 国外热门工具集合站
1. [[⭐] https://toolscout.ai](https://toolscout.ai) **Toolscout。** 每天更新，最快最新的人工智能工具
1. [[⭐] https://topai.tools](https://topai.tools) **Topai。** 发现最好的新型 AI 工具: Find the perfect AI tool for every task `[error][403]Forbidden`
1. [[⭐] https://uberduck.ai](https://uberduck.ai) **uberduck。** 开源的AI语音生成平台
1. [[⭐] https://vocalremover.org](https://vocalremover.org) **Vocal Remover。** Vocal Remover使用强大的AI算法免费将歌曲中的人声与音乐分离。
1. [[⭐] https://www.chai-research.com](https://www.chai-research.com) **Chai Research。** 领先的AI聊天平台
1. [[⭐] https://www.illostration.com](https://www.illostration.com) **illostration。** 几秒内创建不同风格插图
1. [[⭐] https://www.nvidia.cn/studio/canvas](https://www.nvidia.cn/studio/canvas) **NVIDIA Canvas。** 用AI将简单的勾勒转化成逼真的图像
1. [[⭐] https://www.powerfulai.tools](https://www.powerfulai.tools) **Powerfulai。** 全球最大的人工智能工具目录: DISCOVER POWERFUL AI TOOLS. World's Largest AI Tool Directory, Updated Daily. `存在人机验证`
1. [[⭐] https://www.stableaudio.com](https://www.stableaudio.com) **Stable Audio。** Stability Al最新推出的音乐生成工具
1. [[⭐] https://www.stackradar.co](https://www.stackradar.co) **Stackradar.co。** 互联网上最好的技术工具的精选
1. [[⭐] https://www.tracejourney.com](https://www.tracejourney.com) **Tracejourney。** 拯救MJ渣画质！图片一键转矢量
1. [[⭐] https://www.unscreen.com](https://www.unscreen.com) **Unscreen。** 智能AI去除视频背景在线神器
1. [[⭐] https://www.veed.io](https://www.veed.io) **Veed。** 视频编辑变得简单。只需单击即可创建出色的视频。添加字幕，转录音频，浏览AI工具，使用模板等等。
1. [[⭐] https://www.zmo.ai](https://www.zmo.ai) **ZMO.AI。** ZMO可以轻松的生成令人惊叹的动漫、艺术或图像。
1. [[🚀] https://cn.bing.com/create](https://cn.bing.com/create) **Bing Image Creator。** 基于Dalle的AI绘画工具，Edge的侧边栏可直接使用。中国区不可用
1. [[🚀] https://changestyleai.com](https://changestyleai.com) **Change Style AI。** 人工智能多风格肖像生成器！能够AI生成30种照片
1. [[🚀] https://creator.nightcafe.studio](https://creator.nightcafe.studio) **NightCafe。** 用AI生成惊艳的艺术品
1. [[🚀] https://designer.microsoft.com](https://designer.microsoft.com) **Microsoft Designer。** 微软推出的AI平面设计工具，实现快速完成设计加工。中国区不可用。
1. [[🚀] https://flowgpt.com](https://flowgpt.com) **Flowgpt。** 专注于分享聊天指令的社区网站
1. [[🚀] https://imagine.meta.com](https://imagine.meta.com) **Imagine with Meta。** Meta 推出的免费AI绘画工具
1. [[🚀] https://lexica.art](https://lexica.art) **Lexica。** AI图像生成+SD提示词
1. [[🚀] https://ludo.ai](https://ludo.ai) **Ludo AI。** 快速帮助游戏开发者进行创造过程
1. [[🚀] https://lumalabs.ai](https://lumalabs.ai) **Luma Labs。** 将视频转为游戏资产
1. [[🚀] https://prompthero.com](https://prompthero.com) **PromptHero。** 最受欢迎的AI提示词网站
1. [[🚀] https://scribblediffusion.com](https://scribblediffusion.com) **Scribble Diffusion。** 有趣！将鼠绘草图变成精美照片
1. [[🚀] https://skybox.blockadelabs.com](https://skybox.blockadelabs.com) **Text to Skybox。** AI生成360°无缝环境贴图
1. [[🚀] https://waifulabs.com](https://waifulabs.com) **WaifuLabs。** 一键生成动漫二次元头像
1. [[🚀] https://www.cursor.so](https://www.cursor.so) **Cursor。** 基于GPT的代码生成工具
1. [[🚀] https://www.dreamup.com](https://www.dreamup.com) **Dreamup。** 知名站点Deviantart发布的AI绘画工具
1. [[🚀] https://www.prompthunt.com/explore](https://www.prompthunt.com/explore) **Prompt Hunt。** 按主题分类的SD提示词

## License

`chatgpt-nav` is released under the MIT license.

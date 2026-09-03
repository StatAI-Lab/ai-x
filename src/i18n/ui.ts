// 站点全部 UI 文案集中在这里。
// 增加新词条：两种语言都填，TypeScript 会保证 key 一致。
// 内容（讲座、组织者信息）放在 src/content/ 里，那里有自己的 schema。

export const languages = {
  zh: "中文",
  en: "English",
} as const;

export const defaultLang = "zh" as const;
export type Lang = keyof typeof languages;

export const ui = {
  zh: {
    // 全站
    "site.name": "AI+X Seminar",
    "site.tagline": "聚焦 AI 交叉领域的线上学术研讨会",
    "site.description":
      "AI+X Seminar 是一个聚焦人工智能交叉领域的线上学术研讨会，关注 AI 与各学科的融合创新。",

    // 导航
    "nav.home": "首页",
    "nav.about": "关于",
    "nav.info": "须知",
    "nav.talks": "往期讲座",
    "nav.contact": "联系我们",
    "nav.signup": "讲者报名",

    // 首页 Hero
    "hero.title": "AI+X Seminar",
    "hero.subtitle":
      "每周一次，聚焦 AI 与其他领域的交叉创新，涵盖 AI+Science、跨模态、学科交叉等前沿方向。",
    "hero.time": "周四晚 8:00 / 周五早 10:00（北京时间）",
    "hero.cta.upcoming": "查看近期讲座",
    "hero.cta.subscribe": "订阅讲座通知",

    // 首页 Features
    "features.title": "研讨会概况",
    "features.subtitle":
      "面向中文学术社区,搭建高质量的 AI 基础研究交流平台。",
    "features.f1.title": "每周一讲",
    "features.f1.desc":
      "周四晚八点与周五早十点开讲,每场聚焦一位讲者的近期工作,深入而非浮光掠影。",
    "features.f2.title": "中文学术社区",
    "features.f2.desc":
      "以中文为主要交流语言,讲者来自全球各大研究机构,服务中文学术社区。",
    "features.f3.title": "录播回放",
    "features.f3.desc":
      "讲座内容通过哔哩哔哩、微信公众号与小红书同步发布,会后可观看回放,论文链接公开分享。",
    "features.f4.title": "前沿话题",
    "features.f4.desc":
      "覆盖机器学习理论、大模型、强化学习、AI for Science 等基础研究方向。",
    "features.f5.title": "开放参与",
    "features.f5.desc":
      "观众可通过微信公众号、哔哩哔哩与小红书关注讲座通知与内容更新。",
    "features.f6.title": "讲者自荐",
    "features.f6.desc":
      "欢迎在读博士生及青年研究者通过报名通道申请分享自己的工作。",

    // 首页 Logos
    "logos.title": "合作单位",

    // 首页 CTA
    "cta.title": "加入我们的社区",
    "cta.desc":
      "关注 AI+X seminar 的微信公众号、哔哩哔哩与小红书账号，获取最新讲座通知。",
    "cta.button": "了解参与方式",

    // About 页
    "about.title": "关于 AI+X Seminar",
    "about.desc": "一个由青年研究者自发组织的线上学术研讨会。",
    "about.intro.h":
      "为中文社区的 AI 基础研究,搭建一个长期的、严肃的交流平台。",
    "about.intro.p":
      "AI+X Seminar 创立于 2026 年,定期邀请活跃在 AI 交叉领域的一线研究者分享其近期工作。我们关注 AI+Science、跨模态、学科交叉等前沿方向,以中文为主要语言,面向全球中文研究社区开放。",
    "about.logistics.title": "基础信息",
    "about.logistics.time": "时间",
    "about.logistics.time.value": "周四晚 8:00，周五早 10:00（北京时间）",
    "about.logistics.lang": "语言",
    "about.logistics.lang.value": "中文(讲述);幻灯片中英皆可",
    "about.logistics.platform": "平台",
    "about.logistics.platform.value":
      "哔哩哔哩 + 微信公众号 + 小红书",
    "about.logistics.archive": "归档",
    "about.logistics.archive.value":
      "讲座内容通过哔哩哔哩、微信公众号与小红书账号 AI+X seminar 发布",
    "about.organizers.title": "组织者",
    "about.organizers.desc":
      "AI+X Seminar 由来自不同高校和研究机构的青年研究者共同组织。",

    // Info(原 Pricing)页 — 须知
    "info.title": "参会须知",
    "info.desc": "面向观众与讲者的须知。",
    "info.audience.title": "观众须知",
    "info.audience.f1": "讲座时间为周四晚 8:00 或周五早 10:00（北京时间）",
    "info.audience.f2": "关注微信公众号、哔哩哔哩与小红书账号 AI+X seminar 获取通知",
    "info.audience.f3": "直播中可使用弹幕或评论提问,讲者会在 QA 环节回应",
    "info.audience.f4": "讲座结束后回放将通过哔哩哔哩发布",
    "info.audience.f5": "论文/讲义链接见公众号或对应平台发布内容",
    "info.audience.f6": "提倡尊重讲者、文明讨论",
    "info.audience.cta": "联系我们",
    "info.speaker.title": "讲者须知",
    "info.speaker.f1": "本研讨会面向 AI 交叉领域研究,关注 AI+Science、跨模态与学科交叉等方向",
    "info.speaker.f2": "讲座时长 45 分钟 + 15 分钟 QA",
    "info.speaker.f3": "鼓励分享尚未发表或刚刚发表的工作",
    "info.speaker.f4": "讲述语言为中文,幻灯片中英皆可",
    "info.speaker.f5": "需在讲前一周提交讲座标题、摘要、个人简介、论文链接",
    "info.speaker.f6": "讲座内容允许在哔哩哔哩、微信公众号与小红书发布或留存",
    "info.speaker.cta": "申请讲者",

    // Talks(原 Blog)页 — 往期讲座
    "talks.title": "往期讲座",
    "talks.desc":
      "按学期划分的历次讲座存档。点击任意一场进入讲座详情与录像。",
    "talks.back": "← 返回讲座列表",
    "talks.speaker": "讲者",
    "talks.affiliation": "所属机构",
    "talks.date": "时间（北京时间）",
    "talks.paper": "论文",
    "talks.video": "录像",
    "talks.slides": "幻灯片",
    "talks.viewMore": "查看更多",
    "talks.empty": "讲座信息整理中。",

    // Contact 页
    "contact.title": "联系我们",
    "contact.desc": "讲者报名、合作咨询、其他事宜都欢迎与我们联系。",
    "contact.intro.h": "与 AI+X Seminar 联系",
    "contact.intro.p":
      "我们欢迎:(1)有意向分享工作的讲者自荐;(2)希望成为合作伙伴的机构;(3)对研讨会的建议与反馈。请通过下方表单或邮件与我们联系。",
    "contact.email": "邮箱",
    "contact.wechat": "微信公众号",
    "contact.wechat.value": "AI+X seminar",
    "contact.bilibili": "哔哩哔哩",
    "contact.bilibili.value": "AI+X seminar",
    "contact.xiaohongshu": "小红书",
    "contact.xiaohongshu.value": "AI+X seminar",
    "contact.form.name": "姓名",
    "contact.form.email": "邮箱",
    "contact.form.message": "留言(若为讲者自荐,请简述拟讲内容与论文链接)",
    "contact.form.submit": "发送",
    "contact.form.errName": "请填写姓名",
    "contact.form.errEmail": "请填写有效邮箱",
    "contact.form.errEmailValid": "请填写有效邮箱",
    "contact.form.errMessage": "请填写留言内容",

    // Footer
    "footer.copyright": "AI+X Seminar 保留所有权利。",
  },

  en: {
    "site.name": "AI+X Seminar",
    "site.tagline": "An online seminar on cross-disciplinary AI research",
    "site.description":
      "AI+X Seminar is an online academic seminar focused on the intersection of AI with other fields, covering AI+Science, cross-modality, and interdisciplinary innovation.",

    "nav.home": "Home",
    "nav.about": "About",
    "nav.info": "Guidelines",
    "nav.talks": "Past Talks",
    "nav.contact": "Contact",
    "nav.signup": "Apply as Speaker",

    "hero.title": "AI+X Seminar",
    "hero.subtitle":
      "Exploring the intersection of AI with other fields, covering AI+Science, cross-modality, and interdisciplinary innovation.",
    "hero.time": "Thursday 8:00 PM / Friday 10:00 AM (Beijing Time, UTC+8)",
    "hero.cta.upcoming": "View Upcoming Talks",
    "hero.cta.subscribe": "Subscribe",

    "features.title": "About the Seminar",
    "features.subtitle":
      "Building a high-quality forum for foundational AI research in the Chinese-speaking academic community.",
    "features.f1.title": "Weekly Talks",
    "features.f1.desc":
      "Talks run on Thursday evenings and Friday mornings, each session focused on one speaker's recent work.",
    "features.f2.title": "Chinese-Speaking Community",
    "features.f2.desc":
      "Talks are delivered in Chinese, with speakers from research institutions worldwide. Serves the global Chinese-speaking academic community.",
    "features.f3.title": "Recordings",
    "features.f3.desc":
      "Talk content is published through Bilibili, WeChat, and Xiaohongshu. Recordings and paper links are shared after each talk.",
    "features.f4.title": "Foundational Topics",
    "features.f4.desc":
      "Covers ML theory, large models, reinforcement learning, AI for Science, and adjacent foundational directions.",
    "features.f5.title": "Open Participation",
    "features.f5.desc":
      "Audience can follow AI+X seminar on WeChat, Bilibili, and Xiaohongshu for talk updates.",
    "features.f6.title": "Open Speaker Sign-up",
    "features.f6.desc":
      "We welcome PhD students and early-career researchers to apply through our speaker sign-up channel.",

    "logos.title": "Partners",

    "cta.title": "Join the Community",
    "cta.desc":
      "Follow AI+X seminar on WeChat, Bilibili, and Xiaohongshu for the latest talk announcements.",
    "cta.button": "How to Participate",

    "about.title": "About AI+X Seminar",
    "about.desc":
      "A grass-roots online academic seminar organized by early-career researchers.",
    "about.intro.h":
      "Building a long-running, serious forum for foundational AI research in the Chinese-speaking community.",
    "about.intro.p":
      "AI+X Seminar was founded in 2026. We regularly invite researchers working at the frontiers of cross-disciplinary AI to share recent work. We focus on AI+Science, cross-modality, interdisciplinary research, and related directions. Talks are primarily in Chinese and open to the global Chinese-speaking research community.",
    "about.logistics.title": "Logistics",
    "about.logistics.time": "When",
    "about.logistics.time.value": "Thursday 8:00 PM, Friday 10:00 AM (Beijing Time, UTC+8)",
    "about.logistics.lang": "Language",
    "about.logistics.lang.value":
      "Talk delivered in Chinese; slides may be in Chinese or English",
    "about.logistics.platform": "Platform",
    "about.logistics.platform.value":
      "Bilibili + WeChat + Xiaohongshu",
    "about.logistics.archive": "Archive",
    "about.logistics.archive.value":
      "Talk content is published through AI+X seminar on Bilibili, WeChat, and Xiaohongshu",
    "about.organizers.title": "Organizers",
    "about.organizers.desc":
      "AI+X Seminar is organized by early-career researchers from universities and research institutes.",

    "info.title": "Guidelines",
    "info.desc": "Guidelines for audience members and speakers.",
    "info.audience.title": "For Audience",
    "info.audience.f1":
      "Talks run at Thursday 8:00 PM or Friday 10:00 AM Beijing Time",
    "info.audience.f2":
      "Follow AI+X seminar on WeChat, Bilibili, and Xiaohongshu for notifications and paper links",
    "info.audience.f3":
      "Audience can ask questions through live comments; the speaker responds during the QA segment",
    "info.audience.f4":
      "Recordings are published on Bilibili after each talk",
    "info.audience.f5":
      "Paper and slide links are shared through the relevant platform post",
    "info.audience.f6": "Please be respectful to the speaker and other viewers",
    "info.audience.cta": "Contact Us",
    "info.speaker.title": "For Speakers",
    "info.speaker.f1":
      "The seminar focuses on cross-disciplinary AI, including AI+Science, cross-modality, and interdisciplinary research",
    "info.speaker.f2": "Each session is 45 min talk + 15 min Q&A",
    "info.speaker.f3":
      "Sharing in-progress or recently-published work is encouraged",
    "info.speaker.f4":
      "Talks are delivered in Chinese; slides may be in either language",
    "info.speaker.f5":
      "Please submit title, abstract, bio, and paper link one week before your talk",
    "info.speaker.f6":
      "Talk content may be published or archived on Bilibili, WeChat, and Xiaohongshu",
    "info.speaker.cta": "Apply as Speaker",

    "talks.title": "Past Talks",
    "talks.desc":
      "Archive of past sessions, grouped by semester. Click any talk to view details and recording.",
    "talks.back": "← Back to Talks",
    "talks.speaker": "Speaker",
    "talks.affiliation": "Affiliation",
    "talks.date": "Time (Beijing Time, UTC+8)",
    "talks.paper": "Paper",
    "talks.video": "Recording",
    "talks.slides": "Slides",
    "talks.viewMore": "View more",
    "talks.empty": "Talk information is being prepared.",

    "contact.title": "Contact",
    "contact.desc":
      "Reach out for speaker applications, partnership inquiries, or any feedback.",
    "contact.intro.h": "Get in touch with AI+X Seminar",
    "contact.intro.p":
      "We welcome: (1) researchers interested in giving a talk; (2) institutions interested in partnership; (3) feedback and suggestions about the seminar. Please use the form below or contact us by email.",
    "contact.email": "Email",
    "contact.wechat": "WeChat Channel",
    "contact.wechat.value": "AI+X seminar",
    "contact.bilibili": "Bilibili",
    "contact.bilibili.value": "AI+X seminar",
    "contact.xiaohongshu": "Xiaohongshu",
    "contact.xiaohongshu.value": "AI+X seminar",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message":
      "Message (for speaker applications, briefly describe the talk and include paper link)",
    "contact.form.submit": "Send",
    "contact.form.errName": "Please provide your name",
    "contact.form.errEmail": "Please provide your email",
    "contact.form.errEmailValid": "Please provide a valid email",
    "contact.form.errMessage": "Please enter your message",

    "footer.copyright": "AI+X Seminar. All rights reserved.",
  },
} as const;

// 类型推断:所有 key 在 zh 字典里出现,en 必须有同样的 key
export type UIKey = keyof (typeof ui)["zh"];

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
    "site.name": "AI+X",
    "site.tagline": "连接 AI 与不同学科的学术交流平台",
    "site.description":
      "AI+X 是面向海内外研究者、青年学者、学生与相关领域实践者的学术交流平台，连接 AI 的理论探索、科学研究与应用实践。目前以 Seminar 专题报告与开放讨论为主要形式。",

    // 导航
    "nav.home": "首页",
    "nav.about": "基础信息",
    "nav.info": "须知",
    "nav.talks": "往期讲座",
    "nav.contact": "联系我们",
    "nav.signup": "讲者报名",

    // 首页 Hero
    "hero.title": "AI+X Seminar",
    "hero.slogan": "AI 是起点，X 是我们共同探索的未知。",
    "hero.subtitle":
      "AI+X 是面向海内外研究者、青年学者、学生及实践者的学术交流平台。我们聚焦 AI 与不同学科的交叉研究，通过专题学术报告与开放讨论，分享新工作、探讨新问题，促进交流与合作。",
    "hero.time": "具体时间以每场活动通知为准（北京时间）",
    "hero.cta.upcoming": "查看近期讲座",
    "hero.cta.subscribe": "订阅讲座通知",

    // 首页 Features
    "features.title": "我们在这里交流",
    "features.subtitle":
      "AI 是起点，X 是我们共同探索的未知。",
    "features.f1.title": "专题报告与开放讨论",
    "features.f1.desc":
      "目前以 Seminar 为主要形式，邀请研究者分享工作，并为提问与交流预留时间。",
    "features.f2.title": "不同背景，共同参与",
    "features.f2.desc":
      "面向海内外研究者、青年学者、学生及相关领域实践者，以中文为主要交流语言。",
    "features.f3.title": "方法背后的思考",
    "features.f3.desc":
      "一个新的模型或算法，试图解决什么问题？我们关注研究问题、方法选择与背后的思考。",
    "features.f4.title": "真实场景的挑战",
    "features.f4.desc":
      "当 AI 融入领域知识，如何推动科学研究的发展？在理论、科学与应用之间展开讨论。",
    "features.f5.title": "跨学科研究的实践",
    "features.f5.desc":
      "探索不同领域如何建立共同语言，并形成有价值的交流与合作。",
    "features.f6.title": "尚在探索中的想法",
    "features.f6.desc":
      "欢迎成熟成果，也欢迎值得讨论的初步发现、研究困惑与开放问题。",

    // 首页 Logos
    "logos.title": "合作单位",

    // 首页 CTA
    "cta.title": "加入我们的社区",
    "cta.desc":
      "分享一项工作，旁听一场报告，或加入讨论。",
    "cta.button": "了解参与方式",

    // About 页
    "about.title": "基础信息",
    "about.desc": "一个连接 AI 与不同学科的学术交流平台。",
    "about.intro.h":
      "AI 是起点，X 是我们共同探索的未知。",
    "about.intro.p":
      "AI+X 面向海内外研究者、青年学者、学生及相关领域实践者，聚焦 AI 与不同学科的交叉研究。我们希望连接理论探索、科学研究与应用实践，持续分享新工作、讨论新问题，让不同研究阶段、不同学科背景的参与者有机会相识、交流与合作。目前以 Seminar 专题报告与开放讨论为主要形式；未来计划逐步开展主题讨论、青年研究者交流与跨领域对谈。",
    "about.logistics.title": "Seminar 参与信息",
    "about.logistics.time": "时间",
    "about.logistics.time.value": "具体时间以每场活动通知为准（北京时间）",
    "about.logistics.lang": "语言",
    "about.logistics.lang.value": "中文讲述；幻灯片中英皆可",
    "about.logistics.platform": "平台",
    "about.logistics.platform.value":
      "哔哩哔哩 + 微信公众号 + 小红书",
    "about.logistics.archive": "归档",
    "about.logistics.archive.value":
      "讲座内容通过哔哩哔哩、微信公众号与小红书账号 AI+X Seminar 发布",
    "about.organizers.title": "组织者",
    "about.organizers.desc":
      "AI+X 由来自不同高校和研究机构的研究者共同组织。",

    // Info(原 Pricing)页 — 须知
    "info.title": "参会须知",
    "info.desc": "目前活动以 Seminar 为主，以下为观众与讲者的参与须知。",
    "info.audience.title": "观众须知",
    "info.audience.f1": "讲座日期、时间与参与方式以每场活动通知为准（北京时间）",
    "info.audience.f2": "关注微信公众号【AI+X Seminar】获取具体活动通知，也可通过哔哩哔哩与小红书关注内容更新",
    "info.audience.f3": "报告设有提问与交流时间，欢迎围绕研究问题参与讨论",
    "info.audience.f4": "讲座结束后回放将通过哔哩哔哩发布",
    "info.audience.f5": "论文/讲义链接见公众号或对应平台发布内容",
    "info.audience.f6": "提倡尊重讲者、文明讨论",
    "info.audience.cta": "联系我们",
    "info.speaker.title": "讲者须知",
    "info.speaker.f1": "欢迎分享 AI 与不同学科的交叉研究，连接理论探索、科学研究与应用实践",
    "info.speaker.f2": "讲座时长 45 分钟 + 15 分钟 QA",
    "info.speaker.f3": "欢迎成熟成果、初步发现、研究困惑与开放问题",
    "info.speaker.f4": "讲述语言为中文，幻灯片中英皆可",
    "info.speaker.f5": "需在讲前一周提交讲座标题、摘要、个人简介、论文链接",
    "info.speaker.f6": "讲座内容允许在哔哩哔哩、微信公众号与小红书发布或留存",
    "info.speaker.cta": "申请讲者",

    // Talks(原 Blog)页 — 往期讲座
    "talks.title": "往期讲座",
    "talks.desc":
      "近期报告与历次讲座记录，汇集报告详情、论文及回放。",
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
    "contact.intro.h": "与 AI+X 联系",
    "contact.intro.p":
      "欢迎有意分享工作的研究者自荐，也欢迎提出合作设想、活动建议与反馈。无论你致力于 AI 基础理论、探索 AI 驱动的科学研究，还是推动技术落地，都欢迎与我们交流。",
    "contact.email": "邮箱",
    "contact.wechat": "微信公众号",
    "contact.wechat.value": "AI+X Seminar",
    "contact.bilibili": "哔哩哔哩",
    "contact.bilibili.value": "AI+X Seminar",
    "contact.xiaohongshu": "小红书",
    "contact.xiaohongshu.value": "AI+X Seminar",
    "contact.form.name": "姓名",
    "contact.form.email": "邮箱",
    "contact.form.message": "留言(若为讲者自荐,请简述拟讲内容与论文链接)",
    "contact.form.submit": "发送",
    "contact.form.errName": "请填写姓名",
    "contact.form.errEmail": "请填写有效邮箱",
    "contact.form.errEmailValid": "请填写有效邮箱",
    "contact.form.errMessage": "请填写留言内容",

    // Footer
    "footer.copyright": "AI+X 保留所有权利。",
  },

  en: {
    "site.name": "AI+X",
    "site.tagline": "A forum connecting AI with research across disciplines",
    "site.description":
      "AI+X is an academic exchange platform for researchers, early-career scholars, students, and practitioners worldwide, connecting AI theory, scientific research, and applications. Our current focus is research seminars and open discussion.",

    "nav.home": "Home",
    "nav.about": "Information",
    "nav.info": "Guidelines",
    "nav.talks": "Past Talks",
    "nav.contact": "Contact",
    "nav.signup": "Apply as Speaker",

    "hero.title": "AI+X Seminar",
    "hero.slogan": "AI is the starting point. X is the unknown we explore together.",
    "hero.subtitle":
      "AI+X is an academic forum for researchers, early-career scholars, students, and practitioners worldwide. Through research seminars and open discussion, we explore the intersections of AI and other disciplines, share new work and questions, and encourage exchange and collaboration.",
    "hero.time": "See each event announcement for the date and time (Beijing Time, UTC+8)",
    "hero.cta.upcoming": "View Upcoming Talks",
    "hero.cta.subscribe": "Subscribe",

    "features.title": "Our Discussions",
    "features.subtitle":
      "AI is our starting point; X is what we explore together.",
    "features.f1.title": "Seminars and Open Discussion",
    "features.f1.desc":
      "Our current focus is research seminars, with time for questions and conversation after each presentation.",
    "features.f2.title": "A Community Across Disciplines",
    "features.f2.desc":
      "Open to researchers, early-career scholars, students, and practitioners worldwide. Talks are primarily in Chinese.",
    "features.f3.title": "Thinking Behind the Methods",
    "features.f3.desc":
      "What problem does a new model or algorithm address? We discuss the research questions and choices behind the method.",
    "features.f4.title": "Challenges in Real Settings",
    "features.f4.desc":
      "How can AI and domain knowledge advance scientific research? We connect questions from theory, science, and practice.",
    "features.f5.title": "Interdisciplinary Research in Practice",
    "features.f5.desc":
      "Exploring how different fields can build a shared language and develop meaningful collaborations.",
    "features.f6.title": "Ideas Still Taking Shape",
    "features.f6.desc":
      "We welcome established results, preliminary findings, research challenges, and open questions.",

    "logos.title": "Partners",

    "cta.title": "Join the Community",
    "cta.desc":
      "Share your work, attend a talk, or join the discussion.",
    "cta.button": "How to Participate",

    "about.title": "Basic Information",
    "about.desc":
      "A forum connecting AI with research across disciplines.",
    "about.intro.h":
      "AI is our starting point; X is what we explore together.",
    "about.intro.p":
      "AI+X brings together researchers, early-career scholars, students, and practitioners worldwide to explore the intersections of AI and other disciplines. We connect theoretical inquiry, scientific research, and applications through new work and open questions, creating opportunities for people at different career stages and from different fields to meet and collaborate. Our current focus is research seminars and open discussion. We plan to expand into thematic discussions, early-career researcher exchanges, and conversations across disciplines.",
    "about.logistics.title": "Seminar Information",
    "about.logistics.time": "When",
    "about.logistics.time.value": "See each event announcement for the date and time (Beijing Time, UTC+8)",
    "about.logistics.lang": "Language",
    "about.logistics.lang.value":
      "Talk delivered in Chinese; slides may be in Chinese or English",
    "about.logistics.platform": "Platform",
    "about.logistics.platform.value":
      "Bilibili + WeChat + Xiaohongshu",
    "about.logistics.archive": "Archive",
    "about.logistics.archive.value":
      "Talk content is published through AI+X Seminar on Bilibili, WeChat, and Xiaohongshu",
    "about.organizers.title": "Organizers",
    "about.organizers.desc":
      "AI+X is organized by researchers from universities and research institutes.",

    "info.title": "Guidelines",
    "info.desc": "Our current activities are seminars. Find participation guidelines for audience members and speakers below.",
    "info.audience.title": "For Audience",
    "info.audience.f1":
      "See each event announcement for the date, time, and participation details (Beijing Time, UTC+8)",
    "info.audience.f2":
      "Follow the WeChat official account AI+X Seminar for event announcements, and Bilibili and Xiaohongshu for content updates",
    "info.audience.f3":
      "Each presentation includes time for questions and exchange. Contributions to the research discussion are welcome",
    "info.audience.f4":
      "Recordings are published on Bilibili after each talk",
    "info.audience.f5":
      "Paper and slide links are shared through the relevant platform post",
    "info.audience.f6": "Please be respectful to the speaker and other viewers",
    "info.audience.cta": "Contact Us",
    "info.speaker.title": "For Speakers",
    "info.speaker.f1":
      "We welcome research at the intersection of AI and other disciplines, connecting theory, scientific research, and applications",
    "info.speaker.f2": "Each session is 45 min talk + 15 min Q&A",
    "info.speaker.f3":
      "Established results, preliminary findings, research challenges, and open questions are all welcome",
    "info.speaker.f4":
      "Talks are delivered in Chinese; slides may be in either language",
    "info.speaker.f5":
      "Please submit title, abstract, bio, and paper link one week before your talk",
    "info.speaker.f6":
      "Talk content may be published or archived on Bilibili, WeChat, and Xiaohongshu",
    "info.speaker.cta": "Apply as Speaker",

    "talks.title": "Past Talks",
    "talks.desc":
      "Recent and past seminars, with talk details, papers, and recordings.",
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
    "contact.intro.h": "Get in touch with AI+X",
    "contact.intro.p":
      "We welcome researchers interested in sharing their work, ideas for collaboration, and suggestions for future activities. Whether you study AI foundations, explore AI-driven science, or work on practical applications, we would like to hear from you.",
    "contact.email": "Email",
    "contact.wechat": "WeChat Channel",
    "contact.wechat.value": "AI+X Seminar",
    "contact.bilibili": "Bilibili",
    "contact.bilibili.value": "AI+X Seminar",
    "contact.xiaohongshu": "Xiaohongshu",
    "contact.xiaohongshu.value": "AI+X Seminar",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message":
      "Message (for speaker applications, briefly describe the talk and include paper link)",
    "contact.form.submit": "Send",
    "contact.form.errName": "Please provide your name",
    "contact.form.errEmail": "Please provide your email",
    "contact.form.errEmailValid": "Please provide a valid email",
    "contact.form.errMessage": "Please enter your message",

    "footer.copyright": "AI+X. All rights reserved.",
  },
} as const;

// 类型推断:所有 key 在 zh 字典里出现,en 必须有同样的 key
export type UIKey = keyof (typeof ui)["zh"];

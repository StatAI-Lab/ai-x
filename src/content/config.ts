// AI-x Seminar 内容集合定义
//
// talks       — 每场讲座一篇 markdown,放在 src/content/talks/
// organizers  — 每位组织者一篇 markdown,放在 src/content/organizers/
//
// 注意:讲者姓名、机构、论文标题在中英文页面都直接展示同一份字符串
// (按 FAI-Seminar 的实际做法:讲者姓名用中文,论文标题保持英文原文)。
// 如果将来要做完全本地化,可以在每个字段后加 _en 后缀字段。

import { z, defineCollection } from "astro:content";

const talks = defineCollection({
  schema: z.object({
    draft: z.boolean().default(false),

    // 讲座基础信息
    title: z.string(), // 讲座标题(通常是论文标题或中文化标题)
    speaker: z.string(), // 讲者姓名(优先中文)
    affiliation: z.string(), // 所属机构,可包含中英文,如 "上海财经大学 (SUFE)"

    // 时间
    date: z
      .string()
      .transform((s) => new Date(s)), // ISO 日期 / 日期时间
    semester: z.string(), // 学期标记,如 "2026 R01"

    // 摘要 / 概要(可选,详情页用)
    abstract: z.string().optional(),

    // 链接(可选)
    paperUrl: z.string().url().optional(),
    videoUrl: z.string().url().optional(),
    slidesUrl: z.string().url().optional(),
    talkInfoUrl: z.string().url().optional(), // 微信公众号详情推文链接

    // 主题标签
    tags: z.array(z.string()).default([]),
  }),
});

const organizers = defineCollection({
  schema: z.object({
    draft: z.boolean().default(false),
    name: z.string(), // 姓名(中文)
    nameEn: z.string().optional(), // 拼音 / 英文名
    affiliation: z.string(), // 中文机构
    affiliationEn: z.string().optional(), // 英文机构
    avatar: z.string().optional(), // public 下的头像路径,如 /organizers/name.jpg
    homepage: z.string().url().optional(),
    order: z.number().default(99), // 显示顺序(数字小的排前面)
  }),
});

export const collections = {
  talks,
  organizers,
};

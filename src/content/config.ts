// AI+X Seminar 内容集合定义
//
// talks       — 每场讲座一篇 markdown,放在 src/content/talks/
// organizers  — 每位组织者一篇 markdown,放在 src/content/organizers/
//
// 讲座可提供 En 后缀的英文内容；缺省时回退到对应中文字段。

import { z, defineCollection } from "astro:content";

const talks = defineCollection({
  schema: z.object({
    draft: z.boolean().default(false),

    // 讲座基础信息
    title: z.string(), // 中文讲座标题
    titleEn: z.string().optional(),
    speaker: z.string(), // 中文讲者姓名
    speakerEn: z.string().optional(),
    affiliation: z.string(), // 中文所属机构
    affiliationEn: z.string().optional(),

    // 时间
    date: z
      .string()
      .transform((s) => new Date(s)), // ISO 日期 / 日期时间
    semester: z.string(), // 学期标记,如 "2026 R01"

    // 首页简述、完整摘要与讲者简介（可选）
    summary: z.string().optional(),
    summaryEn: z.string().optional(),
    abstract: z.string().optional(),
    abstractEn: z.string().optional(),
    bio: z.string().optional(),
    bioEn: z.string().optional(),

    // 参会信息与 public 下的活动图片路径（可选）
    meetingId: z.string().optional(),
    speakerImage: z.string().optional(),
    poster: z.string().optional(),
    groupQr: z.string().optional(),

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

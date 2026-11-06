# AI+X 品牌与海报设计草稿

**状态：DRAFT / 草稿，待选型与进一步设计。** 归档日期：2026-11-02。

这里保存本轮 Logo、配色、字体和学术报告海报探索，供团队查看与讨论。

## HTML 展示页

| 文件 | 内容 | 当前状态 |
| --- | --- | --- |
| [Logo 方案集](AI-X-logo-gallery.html) | A–N，共 14 个 Logo 视觉方向 | 历史方案；后续沿用 K「开放书页」图形继续探索 |
| [Logo 配色对比](AI-X-logo-colors.html) | 固定原图形与文字，比较 6 种配色 | 已选择 01 浅雾蓝 `#9BC9E5` |
| [Logo 字体与字号对比](AI-X-logo-typography.html) | 36 种字体 × 2 个字号，共 72 个版本；新增方案 S–AJ | 当前选型稿；固定浅雾蓝图形，去掉 SEMINAR，字体尚未确定 |

HTML 已内嵌图片和字体，下载完整文件后可用浏览器离线打开、直接转发。GitHub 文件页显示源码，需通过 **Download raw file** 下载后查看。页面支持放大预览与下载单张 PNG。

## 素材目录

- [`logo-concepts/`](logo-concepts/)：14 张 Logo 概念图、生成提示词记录、展示页模板与构建脚本。
- [`logo-colors/`](logo-colors/)：选中图形的绿色原图、颜色替换逻辑与展示页构建脚本。
- [`logo-typography/`](logo-typography/)：字体对比页构建脚本、新增字体文件、字体来源与许可说明。
- [`poster-concepts/`](poster-concepts/)：3 张早期海报概念图及提示词。**这些方案未被选用，仅作为历史草稿保存。**
- [`poster-concepts/source/jian-huang-portrait.png`](poster-concepts/source/jian-huang-portrait.png)：用户提供的黄坚教授照片。
- [`poster-concepts/source/landscape-poster-reference.png`](poster-concepts/source/landscape-poster-reference.png)：用户提供的横版学术报告海报参考，作为后续版式方向参考。
- [`../confinfo/title and abstract_JH_revised.docx`](<../confinfo/title and abstract_JH_revised.docx>)：用户提供的报告题目、摘要与嘉宾简介。
- 根目录下 `*-preview.jpg` 和 `logo-typography-round-3.jpg`：不同阶段的浏览器预览截图，以最新 HTML 为当前完整版本。

## 后续设计方向

Logo 继续在浅雾蓝图形与 AI+X 字标组合上选型，暂不保留 SEMINAR。海报后续参考横版「左侧照片、右侧报告信息」布局，重新优化文字层级、间距和视觉风格；当前尚无选定的最终海报模板。

## 重新生成 HTML

在仓库根目录运行：

```bash
node output/logo-concepts/build-gallery.mjs
node output/logo-colors/build.mjs
node output/logo-typography/build.mjs
```

前两个脚本仅需 Node.js。字体页脚本另需项目的 Fontsource 依赖，以及脚本所列的 Linux 系统字体路径；已生成的 HTML 本身不依赖这些本机文件。新增 18 款字体已经归档，无需联网重新下载。`fetch-extra-fonts.py` 仅用于主动刷新这些新增字体。

新增字体的许可证与来源保存在 [`logo-typography/fonts/`](logo-typography/fonts/) 和 `extra-fonts.json`，原有字体的许可说明保存在 [`logo-typography/licenses/`](logo-typography/licenses/)。

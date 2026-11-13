import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const specs = [
  ['A', '几何字标', '粗笔画与蓝色加号，强调直接、清晰的文字识别。', ['几何', '字标'], 1, 'A-geometric-wordmark.png'],
  ['B', '交汇符号', '四个方向围绕中心留白，表现学科之间的交汇。', ['几何', '独立图形'], 1, 'B-intersection-symbol.png'],
  ['C', '方形组合', '将 AI 与 +X 紧凑排列，形成适合头像的方形结构。', ['组合', '头像'], 1, 'C-square-monogram.png'],
  ['D', '学术衬线', '黑蓝衬线字标，延续学术刊物的稳重气质。', ['衬线', '字标'], 1, 'D-editorial-serif.png'],
  ['E', '字母融合', 'A 与 X 融合为紧凑图形，用中央留白保留加号。', ['融合', '独立图形'], 2, 'round-2/E-ligature.png'],
  ['F', '数学括号', '开放的角括框住字标，以符号和留白表达研究空间。', ['数学', '字标'], 2, 'round-2/F-notation.png'],
  ['G', '交织曲线', '两条曲线交叠成 X，强调不同领域之间的联系。', ['曲线', '交织'], 2, 'round-2/G-woven.png'],
  ['H', '轨道交汇', '环绕 X 的单一轨道，延续原有标志的探索意象。', ['轨道', '独立图形'], 2, 'round-2/H-orbit.png'],
  ['I', '现代印章', '酒红色圆形承载 AI+X，形成完整、醒目的头像轮廓。', ['印章', '头像'], 2, 'round-2/I-seal.png'],
  ['J', '倾斜字标', '倾斜字母搭配直立加号，在统一字标中加入动感。', ['动感', '字标'], 2, 'round-2/J-forward.png'],
  ['K', '开放书页', '书页般的开放几何，表现知识展开与跨领域交流。', ['书页', '独立图形'], 3, 'round-3/K-open-pages.png'],
  ['L', '等高线交汇', '以连续曲线构成 X，探索带有数学气质的轮廓。', ['曲线', '数学'], 3, 'round-3/L-contour.png'],
  ['M', '采样点阵', '离散圆点组成交叉图形，用点阵表达数据与采样。', ['点阵', '数据'], 3, 'round-3/M-sampling.png'],
  ['N', '小写字标', '小写 ai+x 与柔和字形，呈现更亲近的学术社区气质。', ['小写', '字标'], 3, 'round-3/N-lowercase.png'],
];

const logos = await Promise.all(specs.map(async ([id,title,description,tags,round,file]) => {
  const bytes = await fs.readFile(path.join(root,file));
  if (bytes.toString('hex', 0, 8) !== '89504e470d0a1a0a') throw new Error(`Invalid PNG: ${file}`);
  return {id,title,description,tags,round,isNew:round===3,image:'data:image/png;base64,'+bytes.toString('base64')};
}));
const template = await fs.readFile(path.join(root,'gallery-template.html'),'utf8');
if (template.split('__LOGO_DATA__').length !== 2) throw new Error('Expected exactly one data placeholder');
const html = template.replace('__LOGO_DATA__', JSON.stringify(logos).replace(/</g,'\\u003c'));
const out = path.join(root,'..','AI-X-logo-gallery.html');
await fs.writeFile(out,html);
console.log(JSON.stringify({file:out,logos:logos.length,bytes:Buffer.byteLength(html),ids:logos.map(l=>l.id).join('')}));

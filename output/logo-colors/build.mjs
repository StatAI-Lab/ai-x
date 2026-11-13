import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {palette,tintGreen} from './color-core.mjs';
const dir=path.dirname(fileURLToPath(import.meta.url));
const image='data:image/png;base64,'+(await fs.readFile(path.join(dir,'original.png'))).toString('base64');
const html=String.raw`<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light"><link rel="icon" href="data:,">
<title>AI+X Logo 配色对比</title>
<style>
*{box-sizing:border-box}body{margin:0;background:#f6f6f5;color:#202124;font-family:Arial,"Microsoft YaHei","Noto Sans CJK SC",sans-serif}main{max-width:1320px;margin:auto;padding:34px 26px 50px}h1{font-size:24px;margin:0 0 10px;letter-spacing:-.5px}header p{font-size:14px;color:#666;margin:0 0 24px;line-height:1.7}.original{margin:0 0 26px;max-width:620px}.label{display:flex;align-items:center;gap:9px;font-size:14px;margin-bottom:10px}.label small{color:#777;font-size:12px}.original img{display:block;width:100%;height:auto;background:white;border:1px solid #e7e7e7}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}.variant{margin:0;background:white;border:1px solid #e1e1e1;border-radius:5px;overflow:hidden}.meta{display:flex;align-items:center;gap:10px;padding:13px 16px;border-bottom:1px solid #eee;font-size:14px}.swatch{height:15px;width:15px;border-radius:50%;box-shadow:inset 0 0 0 1px #0001}.meta code{font-size:12px;color:#777}.download{margin-left:auto;background:none;border:0;color:#555;font:inherit;font-size:12px;cursor:pointer;padding:5px}.download:hover{color:#155ac4}.zoom{display:block;padding:0;width:100%;border:0;background:white;cursor:zoom-in}.zoom canvas{display:block;width:100%;height:auto}.note{font-size:12px;color:#777;margin:22px 0 0;line-height:1.8}button:focus-visible,a:focus-visible{outline:2px solid #2976c3;outline-offset:3px}dialog{padding:0;border:1px solid #ddd;border-radius:5px;width:min(1320px,calc(100% - 24px));max-width:none;background:white;color:#202124;max-height:calc(100dvh - 24px)}dialog::backdrop{background:#0008}.dialog-head{padding:12px 16px;display:flex;align-items:center;justify-content:space-between;font-size:14px;border-bottom:1px solid #eee}.close{border:0;background:none;font-size:24px;line-height:1;cursor:pointer;color:#555;padding:2px 6px}dialog img{display:block;width:100%;height:auto;max-height:calc(100dvh - 100px);object-fit:contain}.error{color:#a32121;font-size:14px}footer{font-size:12px;color:#888;margin-top:30px}@media(max-width:700px){main{padding:25px 16px 36px}h1{font-size:22px}.grid{grid-template-columns:1fr;gap:18px}.meta{padding:11px 12px;gap:8px}.meta code{font-size:11px}.original{margin-bottom:23px}}@media print{@page{size:A4 landscape;margin:10mm}body{background:white}main{padding:0;max-width:none}.original{display:none}header p{margin-bottom:14px}.grid{gap:12px}.variant{break-inside:avoid}.download,.note,dialog,footer{display:none}h1{font-size:20px}.meta{padding:8px}.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
</style>
</head>
<body><main>
<header><h1>AI+X Logo 配色对比</h1><p>仅替换原图中的绿色区域，图形、字体和排版保持不变。</p></header>
<figure class="original"><figcaption class="label">原版 <small>绿色参考</small></figcaption><img id="original" alt="AI+X 原版绿色 Logo" width="1274" height="502"></figure>
<div id="status" role="status" class="note">正在准备配色…</div>
<section class="grid" id="grid" aria-label="六种配色"></section>
<p class="note">点击图片放大查看，点击“下载 PNG”保存对应配色。色号为主色参考，保留原图细微的明暗变化。</p>
<footer>图片已内嵌，可离线打开与转发。</footer>
</main>
<dialog id="preview" aria-labelledby="preview-title"><div class="dialog-head"><span id="preview-title"></span><button class="close" type="button" aria-label="关闭大图">×</button></div><img id="preview-image" alt=""></dialog>
<noscript><p>请在启用 JavaScript 的浏览器中打开此文件，以查看配色。</p></noscript>
<script>
const source=__SOURCE__;
const colors=__COLORS__;
__TINT__
const original=document.getElementById('original');
const grid=document.getElementById('grid');
const modal=document.getElementById('preview');
const previewImage=document.getElementById('preview-image');
let lastTrigger=null;
const variants=new Map();
original.onload=()=>{
  const base=document.createElement('canvas');base.width=original.naturalWidth;base.height=original.naturalHeight;
  const ctx=base.getContext('2d',{willReadFrequently:true});ctx.drawImage(original,0,0);
  const pixels=ctx.getImageData(0,0,base.width,base.height);
  for(const color of colors){
    const card=document.createElement('article');card.className='variant';
    const meta=document.createElement('div');meta.className='meta';
    const swatch=document.createElement('span');swatch.className='swatch';swatch.style.background=color.hex;swatch.setAttribute('aria-hidden','true');
    const label=document.createElement('strong');label.textContent=color.id+' '+color.name;
    const code=document.createElement('code');code.textContent=color.hex;
    const save=document.createElement('button');save.className='download';save.type='button';save.textContent='下载 PNG';save.setAttribute('aria-label','下载'+color.name+' PNG');
    const zoom=document.createElement('button');zoom.className='zoom';zoom.type='button';zoom.setAttribute('aria-label','放大'+color.name);
    const canvas=document.createElement('canvas');canvas.width=base.width;canvas.height=base.height;canvas.setAttribute('role','img');canvas.setAttribute('aria-label',color.name+' AI+X Logo');
    canvas.getContext('2d').putImageData(new ImageData(tintGreen(pixels.data,base.width,base.height,color.hex),base.width,base.height),0,0);
    variants.set(color.id,canvas);
    save.addEventListener('click',()=>{canvas.toBlob(blob=>{if(!blob)return;const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='AI-X-'+color.id+'-'+color.name+'.png';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);},'image/png');});
    zoom.addEventListener('click',()=>{lastTrigger=zoom;document.getElementById('preview-title').textContent=color.id+' '+color.name+'  '+color.hex;previewImage.src=canvas.toDataURL('image/png');previewImage.alt=color.name+' AI+X Logo';modal.showModal();modal.querySelector('button').focus();});
    meta.append(swatch,label,code,save);zoom.append(canvas);card.append(meta,zoom);grid.append(card);
  }
  document.getElementById('status').hidden=true;
};
original.onerror=()=>{const el=document.getElementById('status');el.textContent='图片加载失败，请重新打开完整的 HTML 文件。';el.className='error';};
original.src=source;
modal.querySelector('.close').addEventListener('click',()=>modal.close());
modal.addEventListener('close',()=>lastTrigger?.focus());
modal.addEventListener('click',event=>{if(event.target!==modal)return;const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)modal.close();});
</script></body></html>`;
const out=html.replace('__SOURCE__',JSON.stringify(image)).replace('__COLORS__',JSON.stringify(palette)).replace('__TINT__',tintGreen.toString());
const target=path.join(dir,'..','AI-X-logo-colors.html');
await fs.writeFile(target,out);
console.log(JSON.stringify({path:target,bytes:Buffer.byteLength(out),variants:palette.length}));

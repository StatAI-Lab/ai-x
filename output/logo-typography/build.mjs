import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {tintGreen} from '../logo-colors/color-core.mjs';
const dir=path.dirname(fileURLToPath(import.meta.url));
const repo=path.resolve(dir,'../..');
const fontSpecs=[
 ['A','Inter','现代无衬线',700,'node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2','font/woff2'],
 ['B','URW Gothic','几何无衬线',600,'/usr/share/fonts/opentype/urw-base35/URWGothic-Demi.otf','font/otf'],
 ['C','Bricolage Grotesque','柔和无衬线',600,'node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2','font/woff2'],
 ['D','Nimbus Sans Narrow','窄体无衬线',700,'/usr/share/fonts/opentype/urw-base35/NimbusSansNarrow-Bold.otf','font/otf'],
 ['E','Noto Serif','学术衬线',600,'/usr/share/fonts/truetype/noto/NotoSerif-SemiBold.ttf','font/ttf'],
 ['F','DejaVu Sans Mono','等宽无衬线',700,'/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf','font/ttf'],
 ['G','Ubuntu','圆润人文无衬线',500,'/usr/share/fonts/truetype/ubuntu/Ubuntu[wdth,wght].ttf','font/ttf'],
 ['H','Linux Biolinum','书卷感无衬线',700,'/usr/share/fonts/opentype/linux-libertine/LinBiolinum_RB.otf','font/otf'],
 ['I','Carlito','柔和人文无衬线',700,'/usr/share/fonts/truetype/crosextra/Carlito-Bold.ttf','font/ttf'],
 ['J','Nimbus Sans','简洁轻盈无衬线',400,'/usr/share/fonts/opentype/urw-base35/NimbusSans-Regular.otf','font/otf'],
 ['K','Noto Sans Display','超窄粗黑体',900,'/usr/share/fonts/truetype/noto/NotoSansDisplay-ExtraCondensedBlack.ttf','font/ttf'],
 ['L','Ubuntu Mono','圆润等宽体',500,'/usr/share/fonts/truetype/ubuntu/UbuntuMono[wght].ttf','font/ttf'],
 ['M','Linux Libertine','古典书籍衬线',600,'/usr/share/fonts/opentype/linux-libertine/LinLibertine_RZ.otf','font/otf'],
 ['N','P052','宽舒人文衬线',400,'/usr/share/fonts/opentype/urw-base35/P052-Roman.otf','font/otf'],
 ['O','URW Bookman','饱满复古衬线',600,'/usr/share/fonts/opentype/urw-base35/URWBookman-Demi.otf','font/otf'],
 ['P','C059','圆弧粗衬线',700,'/usr/share/fonts/opentype/urw-base35/C059-Bold.otf','font/otf'],
 ['Q','Noto Serif Display','细线展示衬线',300,'/usr/share/fonts/truetype/noto/NotoSerifDisplay-Light.ttf','font/ttf'],
 ['R','Caladea','紧凑现代衬线',700,'/usr/share/fonts/truetype/crosextra/Caladea-Bold.ttf','font/ttf'],
];
const extraFonts=JSON.parse(await fs.readFile(path.join(dir,'extra-fonts.json'),'utf8'));
const specs=[...fontSpecs.map(([id,name,style,weight,file,mime])=>({id,name,style,weight,file,mime,isNew:false})),...extraFonts];
const fonts=await Promise.all(specs.map(async font=>({...font,family:'AIXFont'+font.id,data:'data:'+font.mime+';base64,'+(await fs.readFile(path.resolve(repo,font.file))).toString('base64')})));
const source='data:image/png;base64,'+(await fs.readFile(path.join(dir,'../logo-colors/original.png'))).toString('base64');
const html=String.raw`<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><link rel="icon" href="data:,"><title>AI+X 字体与大小对比</title>
<style>
*{box-sizing:border-box}body{margin:0;background:#f6f6f5;color:#202124;font-family:Arial,"Microsoft YaHei","Noto Sans CJK SC",sans-serif}main{max-width:1320px;margin:auto;padding:32px 26px 44px}h1{font-size:24px;margin:0 0 10px}header p{font-size:14px;color:#666;line-height:1.8;margin:0 0 18px}.legend{display:flex;align-items:center;gap:9px;margin:0 0 26px;color:#666;font-size:12px}.swatch{width:14px;height:14px;border-radius:50%;background:#9bc9e5;border:1px solid #0001}.group{margin-bottom:28px}.group h2{font-size:16px;font-weight:600;margin:0 0 11px;display:flex;align-items:baseline;gap:10px}.group h2 small{font-size:12px;color:#777;font-weight:400}.row{display:grid;grid-template-columns:1fr 1fr;gap:20px}.card{background:white;border:1px solid #e2e2e2;border-radius:4px;overflow:hidden}.meta{display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid #eee;font-size:13px}.meta strong{font-size:14px}.meta span{color:#666}.download{margin-left:auto;border:0;background:none;color:#666;font:inherit;font-size:12px;cursor:pointer;padding:5px}.download:hover{color:#2366b2}.zoom{display:block;width:100%;padding:0;border:0;background:white;cursor:zoom-in}.zoom canvas{display:block;width:100%;height:auto}.note{font-size:12px;color:#777;line-height:1.8;margin:20px 0 0}button:focus-visible{outline:2px solid #2874bf;outline-offset:3px}dialog{width:min(1320px,calc(100% - 24px));max-width:none;padding:0;border:1px solid #ddd;border-radius:4px;background:white;color:#202124;max-height:calc(100dvh - 24px)}dialog::backdrop{background:#0008}.dialog-head{padding:12px 16px;display:flex;justify-content:space-between;align-items:center;font-size:14px;border-bottom:1px solid #eee}.close{border:0;background:none;font-size:24px;cursor:pointer;color:#555;line-height:1;padding:3px 6px}dialog img{display:block;width:100%;height:auto;max-height:calc(100dvh - 90px);object-fit:contain}.error{color:#a32424;font-size:14px}#status{font-size:14px;color:#777;padding:20px 0}@media(max-width:700px){main{padding:24px 16px 32px}h1{font-size:22px}.row{grid-template-columns:1fr;gap:13px}.group{margin-bottom:25px}.group h2{flex-wrap:wrap;gap:6px 10px}.meta{padding:9px 12px}}@media print{@page{size:A4 landscape;margin:9mm}body{background:#fff}main{padding:0}header{margin-bottom:12px}.legend{margin-bottom:14px}.download,.note,dialog{display:none}.group{break-inside:avoid;margin-bottom:12px}.row{grid-template-columns:1fr 1fr;gap:12px}.group h2{font-size:12px;margin-bottom:6px}.meta{padding:5px 10px}.zoom canvas{max-height:47mm;object-fit:contain}}
</style></head><body><main>
<header><h1>AI+X 字体与大小对比</h1><p>固定浅雾蓝图形，去掉 SEMINAR，仅比较右侧 AI+X 的字体和大小。<br>每组左边为小号、右边为中号，两档均比原版字标小；宽体字按比例缩小以保留留白。<br>原有 A–R 保留；本次新增 S–AJ，共 18 种字体。 <a href="#font-S" style="color:#2366b2">跳到新增字体 ↓</a> · <a href="#font-AA" style="color:#2366b2">直接看科技字体 ↓</a></p><div class="legend"><span class="swatch" aria-hidden="true"></span><span>浅雾蓝 #9BC9E5</span><span>·</span><span>36 种字体 × 2 个字号</span></div></header>
<div id="status" role="status">正在准备嵌入字体…</div><section id="groups" aria-label="七十二款字标对比"></section>
<p class="note">点击图片放大，点击“下载 PNG”保存对应方案。字体与图片均已内嵌，可离线打开与转发。</p>
</main><dialog id="preview" aria-labelledby="preview-title"><div class="dialog-head"><span id="preview-title"></span><button type="button" class="close" aria-label="关闭大图">×</button></div><img id="preview-image" alt=""></dialog>
<noscript><p>请在启用 JavaScript 的浏览器中打开此文件。</p></noscript>
<script>
const source=__SOURCE__;
const fonts=__FONTS__;
__TINT__
const sizes=[{id:'1',name:'小号',height:145},{id:'2',name:'中号',height:165}];
const modal=document.getElementById('preview');let lastTrigger=null;
const fontPromises=fonts.map(async font=>{const face=new FontFace(font.family,'url('+font.data+')',{weight:String(font.weight),style:'normal'});await face.load();document.fonts.add(face);});
const imagePromise=new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=reject;img.src=source;});
Promise.all([Promise.all(fontPromises),imagePromise]).then(([,img])=>{
 const base=document.createElement('canvas');base.width=img.naturalWidth;base.height=img.naturalHeight;const baseCtx=base.getContext('2d',{willReadFrequently:true});baseCtx.drawImage(img,0,0);const pixels=baseCtx.getImageData(0,0,base.width,base.height);baseCtx.putImageData(new ImageData(tintGreen(pixels.data,base.width,base.height,'#9BC9E5'),base.width,base.height),0,0);
 for(const font of fonts){
  const group=document.createElement('section');group.className='group';group.id='font-'+font.id;
  const heading=document.createElement('h2');heading.textContent=font.id+' · '+font.name;const detail=document.createElement('small');detail.textContent=font.style+(font.isNew?' · 新增':'');heading.append(detail);
  const row=document.createElement('div');row.className='row';
  for(const size of sizes){
   const id=font.id+size.id;const canvas=document.createElement('canvas');canvas.width=base.width;canvas.height=base.height;canvas.setAttribute('role','img');canvas.setAttribute('aria-label',id+' '+font.name+' '+size.name+' 浅雾蓝 AI+X');
   const ctx=canvas.getContext('2d');ctx.fillStyle='#ffffff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(base,0,0,510,base.height,0,0,510,base.height);
   ctx.fillStyle='#202124';ctx.textBaseline='alphabetic';ctx.textAlign='left';ctx.fontKerning='normal';ctx.font=font.weight+' 100px '+font.family;const initial=ctx.measureText('AI+X');const heightSize=size.height*100/(initial.actualBoundingBoxAscent+initial.actualBoundingBoxDescent);const widthSize=(canvas.width-592)*100/(initial.actualBoundingBoxLeft+initial.actualBoundingBoxRight)*size.height/165;const fontSize=font.isNew?Math.min(heightSize,widthSize):heightSize;ctx.font=font.weight+' '+fontSize+'px '+font.family;const metrics=ctx.measureText('AI+X');const x=540+metrics.actualBoundingBoxLeft;const y=258+(metrics.actualBoundingBoxAscent-metrics.actualBoundingBoxDescent)/2;
   if(x+metrics.actualBoundingBoxRight>canvas.width-50)throw new Error('Wordmark overflow: '+id);
   ctx.fillText('AI+X',x,y);
   canvas.dataset.variant=id;canvas.dataset.font=font.name;canvas.dataset.capHeight=String(metrics.actualBoundingBoxAscent+metrics.actualBoundingBoxDescent);canvas.dataset.top=String(y-metrics.actualBoundingBoxAscent);canvas.dataset.bottom=String(y+metrics.actualBoundingBoxDescent);canvas.dataset.right=String(x+metrics.actualBoundingBoxRight);
   const card=document.createElement('article');card.className='card';const meta=document.createElement('div');meta.className='meta';const label=document.createElement('strong');label.textContent=id;const name=document.createElement('span');name.textContent=size.name;
   const save=document.createElement('button');save.type='button';save.className='download';save.textContent='下载 PNG';save.setAttribute('aria-label','下载 '+id+' PNG');
   save.addEventListener('click',()=>canvas.toBlob(blob=>{if(!blob)return;const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='AI-X-'+id+'-'+font.name.replaceAll(' ','-')+'.png';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);},'image/png'));
   const zoom=document.createElement('button');zoom.type='button';zoom.className='zoom';zoom.setAttribute('aria-label','放大 '+id+' '+font.name+' '+size.name);zoom.addEventListener('click',()=>{lastTrigger=zoom;document.getElementById('preview-title').textContent=id+' · '+font.name+' · '+size.name;const preview=document.getElementById('preview-image');preview.src=canvas.toDataURL('image/png');preview.alt=id+' '+font.name+' '+size.name;modal.showModal();modal.querySelector('.close').focus();});
   meta.append(label,name,save);zoom.append(canvas);card.append(meta,zoom);row.append(card);
  }
  group.append(heading,row);document.getElementById('groups').append(group);
 }
 document.getElementById('status').hidden=true;
}).catch(error=>{const el=document.getElementById('status');el.textContent='字体或图片未能载入，请用最新版浏览器重新打开完整 HTML 文件。';el.className='error';console.error(error);});
modal.querySelector('.close').addEventListener('click',()=>modal.close());modal.addEventListener('close',()=>lastTrigger?.focus());modal.addEventListener('click',event=>{if(event.target!==modal)return;const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)modal.close();});
</script></body></html>`;
const out=html.replace('__SOURCE__',JSON.stringify(source)).replace('__FONTS__',JSON.stringify(fonts)).replace('__TINT__',tintGreen.toString());
const target=path.join(dir,'..','AI-X-logo-typography.html');await fs.writeFile(target,out);
console.log(JSON.stringify({path:target,bytes:Buffer.byteLength(out),fonts:fonts.map(f=>f.name),variants:fonts.length*2}));

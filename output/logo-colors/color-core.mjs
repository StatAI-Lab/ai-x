export const palette = [
  {id:'01',name:'浅雾蓝',hex:'#9BC9E5'},
  {id:'02',name:'天空蓝',hex:'#74ADD2'},
  {id:'03',name:'学术蓝',hex:'#527EBC'},
  {id:'04',name:'深海蓝',hex:'#355C91'},
  {id:'05',name:'珊瑚红',hex:'#CE6A65'},
  {id:'06',name:'酒红',hex:'#A94E59'},
];

// Recolor only green chroma in the two original accent regions.
// The original image, letterforms, silhouette and dimensions stay intact.
export function tintGreen(input,width,height,hex) {
  const output = new Uint8ClampedArray(input);
  const target = [1,3,5].map(i=>parseInt(hex.slice(i,i+2),16));
  const source = [140,160,132];
  for(let y=0;y<height;y++) for(let x=0;x<width;x++) {
    const inUpper = x>=130 && x<=295 && y>=91 && y<=272;
    const inLower = x>=311 && x<=473 && y>=264 && y<=450;
    if(!inUpper && !inLower) continue;
    const i=(y*width+x)*4;
    const r=input[i],g=input[i+1],b=input[i+2];
    if(g<=r || g<=b) continue;
    const coverage=Math.min(1,(g-b)/28);
    for(let c=0;c<3;c++) output[i+c]=input[i+c]+coverage*(target[c]-source[c]);
  }
  return output;
}

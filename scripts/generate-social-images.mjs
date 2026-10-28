// Run with sharp installed, or set PORTFOLIO_SHARP_MODULE to a bundled sharp package.
import {createRequire} from 'node:module';
import {mkdir} from 'node:fs/promises';
import {createServer} from 'vite';
const sharp=createRequire(import.meta.url)(process.env.PORTFOLIO_SHARP_MODULE || 'sharp');
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function wrap(text,limit){
  const lines=[''];
  for(const word of text.split(' ')){
    const candidate=(lines.at(-1)+' '+word).trim();
    if(candidate.length>limit && lines.at(-1))lines.push(word);
    else lines[lines.length-1]=candidate;
  }
  return lines;
}
const server=await createServer({server:{middlewareMode:true},appType:'custom'});
try{
  const {metadataPaths,getPageMetadata}=await server.ssrLoadModule('/src/pageMetadata.js');
  await mkdir('public/social',{recursive:true});
  for(const path of metadataPaths){
    const meta=getPageMetadata(path),lines=wrap(meta.name,37).slice(0,4);
    const size=lines.length>3?45:lines.length>2?50:58;
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
      <rect width="1200" height="630" fill="#faf8f5"/>
      <path d="M940 100h150v150M940 130h120v120M940 160h90v90" fill="none" stroke="#c4d2df" stroke-width="2"/>
      <rect x="54" y="54" width="66" height="66" rx="5" fill="#202730"/>
      <text x="87" y="99" text-anchor="middle" fill="#faf8f5" font-family="Arial" font-size="33" font-weight="bold">HL</text>
      <text x="147" y="95" fill="#202730" font-family="Arial" font-size="23">LE DINH HOA</text>
      <text x="64" y="188" fill="#2868b0" font-family="Arial" font-size="17" letter-spacing="3">${escape(meta.category.toUpperCase())}</text>
      ${lines.map((line,i)=>`<text x="60" y="${268+i*65}" fill="#202730" font-family="Arial" font-size="${size}" font-weight="bold">${escape(line)}</text>`).join('')}
      <path d="M64 523h1072" stroke="#c8ced4"/>
      <text x="64" y="568" fill="#596d81" font-family="Arial" font-size="18">REVIT · ENGINEERING · SOFTWARE · AI</text>
      <text x="1135" y="568" text-anchor="end" fill="#596d81" font-family="Arial" font-size="18">hoa-le-portfolio.vercel.app</text>
    </svg>`;
    await sharp(Buffer.from(svg)).jpeg({quality:88,mozjpeg:true}).toFile('public'+new URL(meta.image).pathname);
  }
  console.log(`Generated ${metadataPaths.length} social preview images (1200x630).`);
}finally{await server.close();}

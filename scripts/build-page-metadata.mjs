import {createServer} from 'vite';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {dirname,resolve} from 'node:path';
const server=await createServer({server:{middlewareMode:true},appType:'custom'});
try{
 const {metadataPaths,getPageMetadata,renderMetadata,SITE_URL}=await server.ssrLoadModule('/src/pageMetadata.js');
 const template=await readFile('dist/index.html','utf8');
 if(!template.includes('<!-- page-metadata:start -->'))throw Error('Metadata template markers missing');
 for(const path of metadataPaths){
  const html=template.replace(/<!-- page-metadata:start -->[\s\S]*?<!-- page-metadata:end -->/,`<!-- page-metadata:start -->\n${renderMetadata(getPageMetadata(path))}\n<!-- page-metadata:end -->`);
  const destination=resolve('dist',path==='/'?'index.html':`${path.slice(1)}.html`);
  await mkdir(dirname(destination),{recursive:true});await writeFile(destination,html);
 }
 await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${metadataPaths.map(path=>`<url><loc>${SITE_URL}${path}</loc></url>`).join('')}</urlset>\n`);
 await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);
 console.log(`Generated static metadata for ${metadataPaths.length} pages, sitemap, and robots.txt.`);
}finally{await server.close();}

import { mkdir, writeFile } from 'node:fs/promises';
import { groups, toolGroups } from './src/dmitry/data.js';
const base = 'https://www.dmitrypuzatov.com';
const files = [
  ['/images/hero/hero-front-3840.webp','hero-front.webp'],
  ['/images/hero/hero-back-3840.webp','hero-back.webp'],
  ['/images/about/photo-2.webp','portrait.webp'],
  ...groups.flatMap(([,projects])=>projects.map(([, ,slug])=>[`/images/projects/${slug}/shelf.webp`,`${slug}.webp`])),
  ...toolGroups.flatMap(([,tools])=>tools.map(([,slug])=>[`/icons/tools/${slug}.svg`,`${slug}.svg`])),
];
await mkdir('public/dmitry',{recursive:true});
let next = 0;
await Promise.all(Array.from({length:6},async()=>{
  while(next<files.length){
    const [url,name] = files[next++];
    const response = await fetch(base+url);
    if(!response.ok) throw new Error(`${name}: ${response.status}`);
    await writeFile(`public/dmitry/${name}`,Buffer.from(await response.arrayBuffer()));
  }
}));
console.log(`Saved ${files.length} reference assets.`);

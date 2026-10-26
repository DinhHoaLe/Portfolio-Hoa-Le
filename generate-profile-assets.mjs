import { writeFile, mkdir } from 'node:fs/promises';
import { projects } from './src/profile.js';
await mkdir('public/profile',{recursive:true});
const escape = s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
for(const project of projects){
  const words = project.title.split(' '), lines=[];
  let line='';
  for(const word of words){if((line+' '+word).length>29 && line){lines.push(line);line=word;}else line+=(line?' ':'')+word;}
  if(line)lines.push(line);
  const title = lines.map((text,i)=>`<text x="48" y="${165+i*43}" font-size="33" fill="#ededed">${escape(text)}</text>`).join('');
  const diagram = project.category==='AEC Project Experience'
    ? '<path d="M495 410V102l92-44 136 95v257M495 102l136 93 92-42M631 195v215M518 150v230m26-214v214m27-196v196m27-177v177m55-155v155m27-173v173m25-190v190M495 210l136 94 92-43M495 304l136 94 92-43"/>'
    : '<rect x="498" y="120" width="215" height="250" rx="8"/><path d="M498 159h215M526 197h80m-80 30h151m-151 30h123m-123 30h144M526 330h60"/><circle cx="519" cy="139" r="3"/><circle cx="531" cy="139" r="3"/>';
  await writeFile('public'+project.image,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#111216"/><g stroke="#202329" stroke-width="1"><path d="M0 100h800M0 200h800M0 300h800M0 400h800M100 0v500M200 0v500M300 0v500M400 0v500M500 0v500M600 0v500M700 0v500"/></g><g fill="none" stroke="#59616c" stroke-width="1.3">${diagram}</g><g font-family="Arial,sans-serif"><text x="48" y="60" fill="#969da7" font-size="13" letter-spacing="3">${escape(project.category.toUpperCase())}</text>${title}<text x="48" y="410" fill="#9a9fa8" font-size="14">LE DINH HOA · ${project.number}</text><text x="48" y="456" fill="#6f7580" font-size="11" letter-spacing="1.5">PROJECT OVERVIEW · IMAGE TO BE ADDED</text></g></svg>`);
}
await writeFile('public/profile/mark.svg','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g fill="none" stroke="#000" stroke-width="4"><path d="M8 10v44M30 10v44M8 32h22M44 10v44h14"/></g></svg>');
console.log(`Created ${projects.length} project overview cards.`);

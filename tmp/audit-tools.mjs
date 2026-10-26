import fs from 'node:fs/promises';
import path from 'node:path';
const dataModule=code=>'data:text/javascript;base64,'+Buffer.from(code).toString('base64');
const detailsUrl=dataModule(await fs.readFile('src/dmitry/projectDetails.js','utf8'));
const profileUrl=dataModule((await fs.readFile('src/profile.js','utf8')).replace("'./dmitry/projectDetails'",JSON.stringify(detailsUrl)));
const dataUrl=dataModule((await fs.readFile('src/dmitry/data.js','utf8')).replace("'../profile.js'",JSON.stringify(profileUrl)));
const {groups,toolGroups}=await import(dataUrl);
const missing=[];
for(const [group,tools]of toolGroups){for(const [label,slug]of tools){if(!slug)continue;const p='/dmitry/'+(slug.endsWith('.png')?slug:slug+'.svg');try{await fs.access(path.join(process.cwd(),'public',p));}catch{missing.push({group,label,path:p});}}}
console.log(JSON.stringify({missingToolIcons:missing,groups:groups.map(([name,items])=>({name,count:items.length,company:items.filter(p=>p[6]==='DCMvn').length,outsource:items.filter(p=>p[6]==='Outsource').length}))},null,2));

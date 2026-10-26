import fs from 'node:fs/promises';
import path from 'node:path';
const root = process.cwd();
const dataModule = code=>'data:text/javascript;base64,'+Buffer.from(code).toString('base64');
const detailsUrl = dataModule(await fs.readFile('src/dmitry/projectDetails.js','utf8'));
const profileSource=(await fs.readFile('src/profile.js','utf8')).replace("'./dmitry/projectDetails'",JSON.stringify(detailsUrl));
const profileUrl=dataModule(profileSource);
const {projects,profile,links}=await import(profileUrl);
const {getProjectDetail}=await import(detailsUrl);
const roleSource=(await fs.readFile('src/dmitry/roles.js','utf8')).replace("'../profile'",JSON.stringify(profileUrl));
const {roles}=await import(dataModule(roleSource));
const assetPaths=[profile.portrait,profile.resume,...projects.flatMap(p=>[p.image,p.modelImage,...(p.modelGallery||[]).map(x=>x.image)])].filter(Boolean);
const missing=[];for(const asset of new Set(assetPaths)){try{await fs.access(path.join(root,'public',asset));}catch{missing.push(asset);}}
const dup=projects.filter((p,i)=>projects.findIndex(x=>x.id===p.id)!==i).map(p=>p.id);
await fs.writeFile('tmp/audit-portfolio.json',JSON.stringify({counts:projects.reduce((a,p)=>{if(!p.hideFromListing){const key=p.modelWorkflow||p.category;a[key]=(a[key]||0)+1;}return a;},{}),missingAssets:missing,duplicateIds:dup,roles:roles.map(r=>({company:r.company,period:r.date,projects:r.projects.map(p=>({id:p.id,title:p.title,context:getProjectDetail(p).customer}))})),externalLinks:[...new Set([...links.map(x=>x[1]),...projects.flatMap(p=>getProjectDetail(p).links.map(x=>x[1]))].filter(x=>x.startsWith('http')))]},null,2));


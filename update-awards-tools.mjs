import fs from 'node:fs';
const path='src/dmitry/Dmitry.jsx';
let text=fs.readFileSync(path,'utf8');
const start=text.indexOf('      <section className="dp-section" id="dp-recognition">');
const end=text.indexOf('</section>',start)+10;
text=text.slice(0,start)+text.slice(end);
const insert=text.indexOf('      <section className="dp-section" id="dp-principles">');
const awards=`      <section className="dp-section dp-awards-section" id="dp-awards"><Heading title="Awards & Certifications" label="Recognition"/><div className="dp-awards-feature"><div className="dp-awards-heading"><span className="dp-trophy" aria-hidden="true">✦</span><div><p className="dp-eyebrow">MINDX BATTLE CODE · 2024–2025</p><h3>Three competitions.<br/>Three first prizes.</h3><p>Recognized across frontend fundamentals, React, and backend development.</p></div><a href={links.find(([name])=>name==='Award links')[1]} target="_blank" rel="noreferrer">View awards ↗</a></div><div className="dp-prize-grid">{['Basic · HTML / CSS','ReactJS','Node.js'].map((name,i)=><article key={name}><span>0{i+1} / FIRST PRIZE</span><h4>{name}</h4><b>1<span>st</span></b></article>)}</div></div><div className="dp-certification-grid">{links.filter(([name])=>name.includes('Certificate')).map(([name,url],i)=><a key={name} href={url} target="_blank" rel="noreferrer"><span className="dp-certificate-number">0{i+1} · CERTIFICATION</span><h3>{name.replace(' Certificate','')}</h3><span>View certificate ↗</span></a>)}</div></section>\n`;
text=text.slice(0,insert)+awards+text.slice(insert);
const contact=text.indexOf('id="dp-contact"');
const contactEnd=text.indexOf('</section>',contact);
text=text.slice(0,contactEnd)+`<div className="dp-contact-references"><h3>Company References</h3><div>{references.map(([name,url],i)=><a key={name} href={url} target="_blank" rel="noreferrer"><span>0{i+1}</span><b>{name}</b><span>↗</span></a>)}</div></div>`+text.slice(contactEnd);
fs.writeFileSync(path,text);
const dataPath='src/dmitry/data.js';
let data=fs.readFileSync(dataPath,'utf8');
data=data.replace("'GitLab':'gitlab'", "'GitLab':'gitlab','Dynamo':'dynamobim','ACC':'acc'");
data=data.replace("export const toolGroups = skills.map(([name,tools])=>[name,tools.map(label=>[label,icons[label] || null])]);",`export const toolGroups = [
  ...skills.map(([name,tools])=>[name,[...tools,...(name==='Revit Add-in Development' ? ['Dynamo'] : name==='BIM / Coordination' ? ['ACC'] : [])].map(label=>[label,icons[label] || null])]),
  ['Standards',[['ISO 19650','iso19650'],['VDI 2552','vdi2552'],['BCF','bcf'],['IFC','ifc'],['LOI','loi']]],
  ['Design & AI',[['Figma','figma'],['Ollama','ollama'],['Affinity Designer','affinity-designer'],['Midjourney','midjourney'],['Photoshop','adobe-photoshop'],['Stable Diffusion','stable-diffusion'],['Claude','claude'],['Google AI Studio','google-ai-studio']]],
  ['Development',[['JavaScript','javascript'],['Git','git'],['React','react'],['GitHub','github'],['Next.js','next-js'],['VS Code','vscode'],['Tailwind CSS','tailwind-css'],['Visual Studio','visual-studio'],['Three.js','three-js']]],
];`);
fs.writeFileSync(dataPath,data);

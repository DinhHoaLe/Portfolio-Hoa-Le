import { projectPath, projectId } from './projectRoutes.js';
import { projects, profile } from './profile.js';
import { getProjectDetail } from './dmitry/projectDetails.js';
import { roles } from './dmitry/roles.js';
export const SITE_URL='https://hoa-le-portfolio.vercel.app';
export const metadataPaths=['/','/projects',...projects.map(p=>projectPath(p.id)),...roles.map(r=>`/experience/${r.id}`)];
export function getPageMetadata(pathname){
  const path=pathname.replace(/\/$/,'')||'/';
  const project=projects.find(p=>p.id===projectId(path));
  const role=roles.find(r=>path===`/experience/${r.id}`);
  const detail=project&&getProjectDetail(project);
  const name=project?detail.title:role?`${role.company} — ${role.title}`:path==='/projects'?'Projects':profile.role;
  const description=(detail?.description||role?.summary||(path==='/projects'?'Explore three featured projects and the full portfolio of Revit add-ins, MEP modeling, digital twins, and AI-assisted BIM workflows by Le Dinh Hoa.':'Le Dinh Hoa — BIM Automation Engineer. MEP Modeler, Full-stack Development and MEP Engineering.')).replace(/\s+/g,' ').trim().slice(0,240);
  return {path:project ? projectPath(project.id) : path,name,description,title:project||role||path==='/projects'?`${name} | ${profile.name}`:`${profile.name} | ${name}`,category:project?.category||(role?'PROFESSIONAL EXPERIENCE':path==='/projects'?'PROJECT PORTFOLIO':'BIM / SOFTWARE / AI'),url:SITE_URL+(project ? projectPath(project.id) : path),image:`${SITE_URL}/social/${project?.id||role?.id||(path==='/projects'?'projects':'portfolio')}.jpg`};
}
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function renderMetadata(meta){
 const tag=(attribute,key,value)=>`<meta ${attribute}="${key}" content="${escape(value)}"/>`;
 return [`<title>${escape(meta.title)}</title>`,`<link rel="canonical" href="${escape(meta.url)}"/>`,tag('name','description',meta.description),tag('property','og:type','website'),tag('property','og:site_name','Le Dinh Hoa Portfolio'),tag('property','og:title',meta.title),tag('property','og:description',meta.description),tag('property','og:url',meta.url),tag('property','og:image',meta.image),tag('property','og:image:width','1200'),tag('property','og:image:height','630'),tag('property','og:image:alt',`${meta.name} — Le Dinh Hoa portfolio`),tag('name','twitter:card','summary_large_image'),tag('name','twitter:title',meta.title),tag('name','twitter:description',meta.description),tag('name','twitter:image',meta.image)].join('\n');
}
export function applyPageMetadata(pathname){
 const meta=getPageMetadata(pathname);document.title=meta.title;
 const template=document.createElement('template');template.innerHTML=renderMetadata(meta);
 for(const tag of template.content.children){
  if(tag.tagName==='TITLE')continue;
  const selector=tag.tagName==='LINK'?'link[rel="canonical"]':`meta[${tag.hasAttribute('name')?'name':'property'}="${tag.getAttribute('name')||tag.getAttribute('property')}"]`;
  const existing=document.querySelector(selector);if(existing)existing.replaceWith(tag.cloneNode(true));else document.head.append(tag.cloneNode(true));
 }
}

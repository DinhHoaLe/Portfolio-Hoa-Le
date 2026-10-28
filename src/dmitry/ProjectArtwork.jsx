import React from 'react';
import { projects } from '../profile';

// Display regions from the supplied symbol sheet without changing its pixels.
export const addinSymbols = {
  'hoa-project-59': {image:'addin-symbol-sheet-v5.png', sheetWidth:1254, x:120, y:960, width:320, height:210},
  'hoa-project-60': {image:'addin-symbol-sheet-v5.png', sheetWidth:1254, x:470, y:960, width:320, height:210},
  'hoa-project-52': [62, 60],
  'hoa-project-2': 'up-and-down-symbol.png',
  'hoa-project-6': 'create-support-symbol.png',
  'hoa-project-34': [520, 60],
  'hoa-project-35': [978, 60],
  'hoa-project-37': [520, 402],
  'hoa-project-38': [978, 402],
  'hoa-project-39': [62, 744],
  'hoa-project-40': [520, 744],
  'hoa-project-41': [978, 744],
};

const webLogos = {
  'hoa-project-8': {image:'buildsense-logo.png'},
  'hoa-project-9': {image:'digital-twin-preview.png',width:2552,x:918,y:46,w:190,h:62},
  'hoa-project-11': {image:'elearning-preview.png',width:1278,x:20,y:20,w:94,h:38},
  'hoa-project-12': {image:'exclusive-preview.png',width:1278,x:14,y:61,w:104,h:31},
  'hoa-project-13': {image:'easyset-preview.png',width:2560,x:658,y:5,w:96,h:77},
};
const webNames = {'hoa-project-10':'OxiNote','hoa-project-14':'Cinema Booking','hoa-project-27':'Revit Family Library'};

export default function ProjectArtwork({projectId, src, alt, className = ''}) {
  const companyProject = projects.find(project=>project.id === projectId && project.textCard);
  if (companyProject) return <div className={`dp-company-card ${className}`}>
    <div className="dp-company-card-meta"><span>{companyProject.cardCategory || (companyProject.projectType === 'Training' ? 'MEP CALCULATION' : companyProject.modelWorkflow === 'Point Cloud / AutoCAD Plant 3D' ? 'PLANT 3D / POINT CLOUD' : 'REVIT / MEPF')}</span><span>{companyProject.number}</span></div>
    <strong>{companyProject.title}</strong>
    <div className="dp-company-card-footer"><span>{companyProject.cardFooter || (companyProject.projectType === 'Training' ? 'SIZING & PRESSURE LOSS' : companyProject.modelWorkflow === 'Point Cloud / AutoCAD Plant 3D' ? 'AS-BUILT MODELING' : 'MEPF MODELING')}<small>{companyProject.cardCredit || (companyProject.companyCard ? 'DCMvn — BKW Engineering' : 'Revit calculation practice')}</small></span><span aria-hidden="true">↗</span></div>
  </div>;
  if (src?.startsWith('/profile/symbols/')) {
    const logo = webLogos[projectId];
    return <div className={`dp-web-logo ${className}`} role="img" aria-label={`${alt} — project logo`}>
      {logo?.width ? <div className="dp-web-logo-crop" style={{aspectRatio:`${logo.w} / ${logo.h}`}}><img src={`/profile/edited/${logo.image}`} alt="" style={{width:`${logo.width / logo.w * 100}%`,left:`${-logo.x / logo.w * 100}%`,top:`${-logo.y / logo.h * 100}%`}}/></div> : logo ? <img className="dp-web-logo-original" src={`/profile/edited/${logo.image}`} alt=""/> : <span>{webNames[projectId]}</span>}
    </div>;
  }
  const region = addinSymbols[projectId];
  if (region && !Array.isArray(region) && typeof region === 'object') return <div className={`dp-addin-symbol dp-addin-custom ${className}`} role="img" aria-label={alt}><div className="dp-addin-region-frame" style={{aspectRatio:`${region.width} / ${region.height}`}}><img src={`/profile/edited/${region.image}`} alt="" style={{width:`${region.sheetWidth / region.width * 100}%`,left:`${-region.x / region.width * 100}%`,top:`${-region.y / region.height * 100}%`}}/></div></div>;
  if (typeof region === 'string') return <div className={`dp-addin-symbol dp-addin-single ${className}`} role="img" aria-label={alt}><img src={`/profile/edited/${region}`} alt="" loading="lazy"/></div>;
  if (!region && !className && src?.includes('/edited/')) return <div className="dp-model-thumbnail"><img src={src} alt={alt} loading="lazy"/></div>;
  if (!region) return <img className={className || undefined} src={src} alt={alt} loading="lazy"/>;
  return <div className={`dp-addin-symbol ${className}`} role="img" aria-label={alt}>
    <img src={`/profile/edited/${region[2] || 'addin-symbol-sheet.png'}`} alt="" style={{left:`${-region[0] / 420 * 100}%`,top:`${-region[1] / 240 * 100}%`}}/>
  </div>;
}

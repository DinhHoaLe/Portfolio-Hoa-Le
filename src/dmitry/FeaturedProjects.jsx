import PortfolioLink from '../PortfolioLink.jsx';
import React from 'react';
import ProjectArtwork from './ProjectArtwork';

export const featured = [
  {id:'hoa-project-39',name:'MEP Export BOM',focus:'REVIT API / QUANTITIES / EXCEL',
    image:'/profile/edited/bom-export-symbol.png',
    summary:'Review scoped quantities, trace source elements, and export BOM reports.',
    angle:'Model scope → Quantity review → Traceable delivery'},
  {id:'hoa-project-52',name:'Check Clash',focus:'REVIT API / GEOMETRY / COORDINATION',
    image:'/profile/edited/addin-symbol-sheet.png',
    summary:'Check intersections between two element sets and export coordination findings.',
    angle:'Define sets A/B → Inspect intersections → Report findings'},
  {id:'hoa-project-9',name:'AeroTwin',focus:'BIM / GIS / AIRPORT OPERATIONS',
    image:'/profile/symbols/aerotwin.svg',
    summary:'Explore airport BIM/GIS models and inspect assets in their 3D context.',
    angle:'Airport context → Model / asset selection → Contextual information'},
  {id:'hoa-project-8',name:'BuildSense',focus:'IOT / DATA ACQUISITION / MONITORING',
    image:'/profile/symbols/web-8.svg',
    summary:'Locate industrial sensors and monitor device status and changing measurements.',
    angle:'Sensor input → Data pipeline → Device monitoring'},
];

export default function FeaturedProjects() {
  return <section className="dp-featured-projects" aria-labelledby="featured-projects-title">
    <div className="dp-featured-heading"><div><p className="dp-eyebrow">A CLOSER LOOK AT MY WORK</p><h3 id="featured-projects-title">Four Featured Projects<span>/</span></h3></div><p>Engineering workflows.<br/>Model coordination.<br/>Spatial applications & sensor data.</p></div>
    <div className="dp-featured-grid">{featured.map((project,i)=><PortfolioLink key={project.id} className="dp-featured-card" href={`/projects/${project.id}`}>
      <div className="dp-featured-topline"><span>FEATURED / 0{i+1}</span><span aria-hidden="true">↗</span></div>
      <div className="dp-featured-art"><ProjectArtwork projectId={project.id} src={project.image} alt={`${project.name} project symbol`}/></div>
      <div className="dp-featured-copy"><p className="dp-featured-focus">{project.focus}</p><h4>{project.name}</h4><p>{project.summary}</p><span className="dp-featured-cta">View project <span aria-hidden="true">↗</span></span></div>
    </PortfolioLink>)}</div>
    <PortfolioLink className="dp-featured-browse" href="#project-directory">Browse the complete project directory ↓</PortfolioLink>
  </section>;
}

import React from 'react';
import ProjectArtwork from './ProjectArtwork';

const featured = [
  {id:'hoa-project-34',name:'Family Data Studio',focus:'REVIT API / C# / .NET',
    summary:'Family analysis, parameter review, and data transfer in one Revit workflow.',
    angle:'From repeated family inspection to a structured data workflow.'},
  {id:'hoa-project-9',name:'AeroTwin',focus:'FULL-STACK / GIS / DIGITAL TWIN',
    summary:'A web-based airport digital twin connecting 3D context, assets, and sensor information.',
    angle:'From separate data sources to a shared operational view.'},
  {id:'hoa-project-55',name:'AI-Assisted Pipe Creation from CAD',focus:'REVIT & AI / CAD-TO-BIM',
    summary:'An AI-assisted workflow for reviewing CAD routes and creating native Revit pipes.',
    angle:'From CAD input to reviewed BIM creation through AI and MCP.'},
];

export default function FeaturedProjects() {
  return <section className="dp-featured-projects" aria-labelledby="featured-projects-title">
    <div className="dp-featured-heading"><div><p className="dp-eyebrow">A CLOSER LOOK AT MY WORK</p><h3 id="featured-projects-title">Three Featured Projects<span>/</span></h3></div><p>Engineering knowledge.<br/>Software development.<br/>AI-assisted workflows.</p></div>
    <div className="dp-featured-grid">{featured.map((project,i)=><a key={project.id} className="dp-featured-card" href={`/projects/${project.id}`}>
      <div className="dp-featured-topline"><span>FEATURED / 0{i+1}</span><span aria-hidden="true">↗</span></div>
      <div className="dp-featured-art">{i===2 ? <div className="dp-featured-ai-flow" aria-label="AI to MCP to Revit"><b>AI</b><span>→</span><b>MCP</b><span>→</span><b>REVIT</b><small>CAD INPUT → NATIVE PIPES</small></div> : <ProjectArtwork projectId={project.id} src={i===0 ? '/profile/edited/addin-symbol-sheet.png' : '/profile/symbols/aerotwin.svg'} alt={`${project.name} project symbol`}/>}</div>
      <div className="dp-featured-copy"><p className="dp-featured-focus">{project.focus}</p><h4>{project.name}</h4><p>{project.summary}</p><p className="dp-featured-angle">{project.angle}</p><span className="dp-featured-cta">Explore project <span aria-hidden="true">↗</span></span></div>
    </a>)}</div>
    <a className="dp-featured-browse" href="#project-directory">Browse the complete project directory ↓</a>
  </section>;
}

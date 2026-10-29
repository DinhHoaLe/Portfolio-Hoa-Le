import PortfolioLink from '../PortfolioLink.jsx';
import React, { useState } from 'react';
import { profile } from '../profile';
import { roles } from './roles';

export default function RolePage() {
  const [menu,setMenu] = useState(false);
  const id = window.location.pathname.split('/').filter(Boolean).at(-1);
  const index = roles.findIndex(role=>role.id===id);
  const role = roles[index];
  if (!role) return <main className="dp-detail-missing"><h1>Role not found</h1><PortfolioLink href="/#experience">Back to experience →</PortfolioLink></main>;
  const next = roles[(index+1)%roles.length];
  const projectSections = role.id === 'dcmvn' ? [
    {title:'Projects', description:'MEPF modeling, coordination, and Point Cloud / AutoCAD Plant 3D projects.', items:role.projects.filter(project=>project.category !== 'BIM Automation')},
    {title:'Work', description:'Revit add-ins and BIM automation tools developed for production workflows.', items:role.projects.filter(project=>project.category === 'BIM Automation')},
  ] : [{title:'Projects & Work', description:role.context, items:role.projects}];
  return <div className="dp-site dp-detail dp-role-page">
    <PortfolioLink className="dp-skip" href="#role-content">Skip to main content</PortfolioLink>
    <header className="dp-header dp-detail-header"><PortfolioLink href="/" aria-label="Le Dinh Hoa home"><img src="/profile/mark.svg" alt=""/></PortfolioLink><nav className={menu ? 'dp-main-nav open' : 'dp-main-nav'} aria-label="Main navigation">{['about','services','projects','experience','contacts'].map(section=><PortfolioLink key={section} href={`/#${section}`}>{section}</PortfolioLink>)}</nav><button className="dp-menu-button" aria-label="Toggle menu" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu ? '×' : '☰'}</button></header>
    <main id="role-content">
      <section className="dp-role-hero"><div className="dp-detail-nav"><PortfolioLink href="/#experience">⟵ Back to experience</PortfolioLink><PortfolioLink href={profile.resume} download>Download CV ↓</PortfolioLink></div><div className="dp-role-title"><p className="dp-eyebrow">PROFESSIONAL EXPERIENCE · {String(index+1).padStart(2,'0')}</p><h1>{role.company}<span>/</span></h1><p className="dp-role-job">{role.title}</p><time>{role.date}</time><p className="dp-role-summary">{role.summary}</p></div></section>
      <div className="dp-detail-body">
        <section><h2>Role Overview<span>/</span></h2><div className="dp-detail-facts"><div><span>Company</span><p>{role.company}</p></div><div><span>Position</span><p>{role.title}</p></div><div><span>Period</span><p>{role.date}</p></div>{role.website && <div><span>Company Website</span><p><PortfolioLink className="dp-company-website" href={role.website} target="_blank" rel="noreferrer">www.makerpath.io ↗</PortfolioLink></p></div>}</div></section>
        <section><h2>Responsibilities<span>/</span></h2><ol className="dp-responsibilities">{role.responsibilities.map((task,i)=><li key={task}><span>{String(i+1).padStart(2,'0')}</span><p>{task}</p></li>)}</ol></section>
        <section><h2>Work Process<span>/</span></h2><div className="dp-work-process">{role.process.map(([title,description],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
        {projectSections.filter(section=>section.items.length > 0).map(({title,description,items})=><section key={title}><h2>{title}<span>/</span></h2><p>{description}</p><div className="dp-role-projects">{items.map(project=><PortfolioLink href={`/projects/${project.id}`} key={project.id}><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><b>Explore project ↗</b></PortfolioLink>)}</div></section>)}
        <section><h2>Tools & Skills<span>/</span></h2><div className="dp-tags dp-role-tags">{role.tools.map(tool=><span key={tool}>{tool}</span>)}</div></section>
        <section className="dp-detail-links"><h2>Get In Touch<span>/</span></h2><PortfolioLink href={`mailto:${profile.email}`}>{profile.email} ↗</PortfolioLink><PortfolioLink href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</PortfolioLink><PortfolioLink href={profile.gitlab} target="_blank" rel="noreferrer">GitLab ↗</PortfolioLink><PortfolioLink href={profile.resume} download>Download CV ↓</PortfolioLink></section>
        <nav className="dp-detail-pagination" aria-label="Experience navigation"><PortfolioLink href="/#experience"><span>⟵ Back</span><b>Professional Experience</b></PortfolioLink><PortfolioLink href={`/experience/${next.id}`}><span>Next role ⟶</span><b>{next.company}</b></PortfolioLink></nav>
      </div>
    </main>
  </div>;
}


import React, { useState } from 'react';
import { profile } from '../profile';
import { roles } from './roles';

export default function RolePage() {
  const [menu,setMenu] = useState(false);
  const id = window.location.pathname.split('/').filter(Boolean).at(-1);
  const index = roles.findIndex(role=>role.id===id);
  const role = roles[index];
  if (!role) return <main className="dp-detail-missing"><h1>Role not found</h1><a href="/dmitry#dp-experience">Back to experience →</a></main>;
  const next = roles[(index+1)%roles.length];
  return <div className="dp-site dp-detail dp-role-page">
    <a className="dp-skip" href="#role-content">Skip to main content</a>
    <header className="dp-header dp-detail-header"><a href="/dmitry" aria-label="Le Dinh Hoa home"><img src="/profile/mark.svg" alt=""/></a><nav className={menu ? 'dp-main-nav open' : 'dp-main-nav'} aria-label="Main navigation">{['about','services','projects','experience','contact'].map(section=><a key={section} href={`/dmitry#dp-${section}`}>{section}</a>)}</nav><button className="dp-menu-button" aria-label="Toggle menu" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu ? '×' : '☰'}</button></header>
    <main id="role-content">
      <section className="dp-role-hero"><div className="dp-detail-nav"><a href="/dmitry#dp-experience">⟵ Back to experience</a><a href={profile.resume} download>Download CV ↓</a></div><div className="dp-role-title"><p className="dp-eyebrow">PROFESSIONAL EXPERIENCE · {String(index+1).padStart(2,'0')}</p><h1>{role.company}<span>/</span></h1><p className="dp-role-job">{role.title}</p><time>{role.date}</time><p className="dp-role-summary">{role.summary}</p></div></section>
      <div className="dp-detail-body">
        <section><h2>Role Overview<span>/</span></h2><div className="dp-detail-facts"><div><span>Company</span><p>{role.company}</p></div><div><span>Position</span><p>{role.title}</p></div><div><span>Period</span><p>{role.date}</p></div></div></section>
        <section><h2>Responsibilities<span>/</span></h2><ol className="dp-responsibilities">{role.responsibilities.map((task,i)=><li key={task}><span>{String(i+1).padStart(2,'0')}</span><p>{task}</p></li>)}</ol></section>
        <section><h2>Work Process<span>/</span></h2><div className="dp-work-process">{role.process.map(([title,description],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
        {role.projects.length > 0 && <section><h2>Projects & Work<span>/</span></h2><p>{role.context}</p><div className="dp-role-projects">{role.projects.map(project=><a href={`/dmitry/projects/${project.id}`} key={project.id}><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><b>Explore project ↗</b></a>)}</div></section>}
        <section><h2>Tools & Skills<span>/</span></h2><div className="dp-tags dp-role-tags">{role.tools.map(tool=><span key={tool}>{tool}</span>)}</div></section>
        <section className="dp-detail-links"><h2>Get In Touch<span>/</span></h2><a href={`mailto:${profile.email}`}>{profile.email} ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.gitlab} target="_blank" rel="noreferrer">GitLab ↗</a><a href={profile.resume} download>Download CV ↓</a></section>
        <nav className="dp-detail-pagination" aria-label="Experience navigation"><a href="/dmitry#dp-experience"><span>⟵ Back</span><b>Professional Experience</b></a><a href={`/dmitry/experience/${next.id}`}><span>Next role ⟶</span><b>{next.company}</b></a></nav>
      </div>
    </main>
  </div>;
}


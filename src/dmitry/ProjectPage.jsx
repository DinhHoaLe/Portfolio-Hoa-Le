import React, { useState } from 'react';
import { projects, profile } from '../profile';
import { getProjectDetail } from './projectDetails';
import ProjectArtwork, { addinSymbols } from './ProjectArtwork';

export default function ProjectPage() {
  const [menu, setMenu] = useState(false);
  const id = window.location.pathname.split('/').filter(Boolean).at(-1);
  const index = projects.findIndex(p => p.id === id);
  if (!projects[index]) return <main className="dp-detail-missing"><h1>Project not found</h1><a href="/dmitry#dp-projects">Back to projects →</a></main>;
  const project = getProjectDetail(projects[index]);
  const areas = projects.filter(item=>item.parentId===project.id);
  const parent = projects.find(item=>item.id===project.parentId);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return <div className="dp-site dp-detail">
    <a className="dp-skip" href="#project-content">Skip to main content</a>
    <header className="dp-header dp-detail-header"><a href="/dmitry" aria-label="Le Dinh Hoa home"><img src="/profile/mark.svg" alt=""/></a><nav className={menu ? 'dp-main-nav open' : 'dp-main-nav'} aria-label="Main navigation">{['about','services','projects','experience','contact'].map(section => <a key={section} href={`/dmitry#dp-${section}`}>{section}</a>)}</nav><button className="dp-menu-button" aria-label="Toggle menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? '×' : '☰'}</button></header>
    <main id="project-content">
      <section className={`dp-detail-hero${project.modelImage ? ' dp-model-hero' : addinSymbols[project.id] ? ' dp-addin-hero' : ''}`}>
        <ProjectArtwork projectId={project.id} className={addinSymbols[project.id] ? 'dp-addin-hero-art' : 'dp-detail-cover'} src={project.modelImage || '/profile/detail-cover.svg'} alt={addinSymbols[project.id] ? `${project.title} symbol` : project.modelImage ? `${project.title} — MEP model` : ''}/>
        <div className="dp-detail-nav"><a href="/dmitry#dp-projects">⟵ Back</a><a href="/dmitry?projects=all#dp-projects">To all projects ⟶</a></div>
        <div className="dp-detail-title"><div className="dp-tags">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div><h1>{project.title}<span>/</span></h1><p>{project.category} · {project.number}</p></div>
      </section>
      <div className="dp-detail-body">{parent && <a className="dp-area-parent" href={`/dmitry/projects/${parent.id}`}>⟵ EKB project overview</a>}
        {areas.length > 0 && <section><h2>Project Areas<span>/</span></h2><p>Explore the individual site models within EKB.</p><div className="dp-area-grid">{areas.map(area=><a key={area.id} href={`/dmitry/projects/${area.id}`}><img src={area.image} alt={`EKB — ${area.siteName} site model`}/><div><span>EKB · SITE AREA</span><h3>{area.siteName}</h3><p>{area.description}</p><b>Explore area ↗</b></div></a>)}</div></section>}
        {project.modelImage && areas.length===0 && <section><h2>Project Model<span>/</span></h2>{(project.modelGallery || [{name:null,image:project.modelImage}]).map(({name,image})=><figure className="dp-site-model" key={image}>{name && <h3>{name}</h3>}<img className="dp-project-model-image" src={image} alt={`${project.title}${name ? ' — '+name : ''} — coordinated MEP model`} loading="lazy"/>{name && <figcaption>EKB · {name} · Site model overview</figcaption>}</figure>)}</section>}
        <section><h2>Project Overview<span>/</span></h2><p>{project.description}</p><div className="dp-detail-facts">{[['Discipline',project.category],['Client / Context',project.customer],['My Role',project.role],['Period',project.period],['Team Size',project.team]].filter(([,value])=>value).map(([label,value])=><div key={label}><span>{label}</span><p>{value}</p></div>)}</div>{project.scopeNote && <p className="dp-detail-note">{project.scopeNote}</p>}</section>
        {project.sections.length > 0 && <section><h2>My Responsibilities<span>/</span></h2><div className="dp-project-responsibilities">{project.sections.map(([title,tasks])=><article key={title}><h3>{title}</h3><ul>{tasks.map(task=><li key={task}>{task}</li>)}</ul></article>)}</div></section>}
        {project.tools.length > 0 && <section><h2>Tools & Technologies<span>/</span></h2><div className="dp-tags dp-role-tags">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div></section>}
        {project.links.length > 0 && <section><h2>Project Links<span>/</span></h2><div className="dp-project-resource-links">{project.links.map(([label,url])=><a key={url} href={url} target="_blank" rel="noreferrer">{label} ↗</a>)}</div></section>}
        <section className="dp-detail-links"><h2>Get In Touch<span>/</span></h2><p>Discuss this project or a similar workflow.</p><a href={`mailto:${profile.email}`}>{profile.email} ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub profile ↗</a><a href={profile.gitlab} target="_blank" rel="noreferrer">GitLab profile ↗</a><a href={profile.resume} download>Download CV ↓</a></section>
        <nav className="dp-detail-pagination" aria-label="Other projects"><a href={`/dmitry/projects/${previous.id}`}><span>⟵ Previous project</span><b>{previous.title}</b></a><a href={`/dmitry/projects/${next.id}`}><span>Next project ⟶</span><b>{next.title}</b></a></nav>
      </div>
    </main>

  </div>;
}



import React, { useState } from 'react';
import { projects, profile } from '../profile';
import { getProjectDetail } from './projectDetails';
import ProjectArtwork, { addinSymbols } from './ProjectArtwork';

export default function ProjectPage() {
  const [menu, setMenu] = useState(false);
  const id = window.location.pathname.split('/').filter(Boolean).at(-1);
  const index = projects.findIndex(p => p.id === id);
  if (!projects[index]) return <main className="dp-detail-missing"><h1>Project not found</h1><a href="/#dp-projects">Back to projects →</a></main>;
  const project = getProjectDetail(projects[index]);
  const isWeb = project.category === 'Web Development';
  const areas = projects.filter(item=>item.parentId===project.id);
  const parent = projects.find(item=>item.id===project.parentId);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return <div className="dp-site dp-detail">
    <a className="dp-skip" href="#project-content">Skip to main content</a>
    <header className="dp-header dp-detail-header"><a href="/" aria-label="Le Dinh Hoa home"><img src="/profile/mark.svg" alt=""/></a><nav className={menu ? 'dp-main-nav open' : 'dp-main-nav'} aria-label="Main navigation">{['about','services','projects','experience','contact'].map(section => <a key={section} href={`/#dp-${section}`}>{section}</a>)}</nav><button className="dp-menu-button" aria-label="Toggle menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? '×' : '☰'}</button></header>
    <main id="project-content">
      <section className={`dp-detail-hero${isWeb ? ' dp-web-hero' : addinSymbols[project.id] ? ' dp-addin-hero' : ' dp-model-hero'}`}>
        <ProjectArtwork projectId={project.id} className={isWeb ? 'dp-web-hero-art' : addinSymbols[project.id] ? 'dp-addin-hero-art' : 'dp-detail-cover'} src={isWeb ? project.image : project.previewImage || project.modelImage || project.image} alt={isWeb || addinSymbols[project.id] ? `${project.title} symbol` : project.previewImage ? `${project.title} — application preview` : project.modelImage ? `${project.title} — MEP model` : project.title}/>
        <div className="dp-detail-nav"><a href="/#dp-projects">⟵ Back</a><a href="/projects">To all projects ⟶</a></div>
        <div className="dp-detail-title"><div className="dp-tags">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div><h1>{project.title}<span>/</span></h1><p>{project.category} · {project.number}</p></div>
      </section>
      <div className="dp-detail-body">{parent && <a className="dp-area-parent" href={`/projects/${parent.id}`}>⟵ EKB project overview</a>}
        {project.previewImage && <section><h2>Application Preview<span>/</span></h2>{project.status && <p className="dp-project-status">{project.status}</p>}<div className={project.previewFormat === 'mobile' ? 'dp-mobile-preview-gallery' : undefined}>{(project.previewGallery || [{image:project.previewImage,caption:project.previewCaption}]).map(({image,caption})=><figure key={image} className={`dp-application-preview${project.previewFormat === 'mobile' ? ' dp-mobile-preview' : ''}`}><div className="dp-model-image-frame"><img className="dp-project-model-image" src={image} alt={`${project.title} — ${caption || 'application interface'}`} loading="lazy"/></div>{caption && <figcaption>{caption}</figcaption>}</figure>)}</div></section>}
        {project.adminPreviewImage && <section><h2>Admin Page<span>/</span></h2><div className="dp-model-image-frame"><img className="dp-project-model-image" src={project.adminPreviewImage} alt={`${project.title} — admin login page`} loading="lazy"/></div></section>}
        {areas.length > 0 && <section><h2>Project Areas<span>/</span></h2><p>Explore the individual site models within EKB.</p><div className="dp-area-grid">{areas.map(area=><a key={area.id} href={`/projects/${area.id}`}><img src={area.image} alt={`EKB — ${area.siteName} site model`}/><div><span>EKB · SITE AREA</span><h3>{area.siteName}</h3><p>{area.description}</p><b>Explore area ↗</b></div></a>)}</div></section>}
        {project.modelImage && areas.length===0 && <section><h2>{project.galleryHeading || 'Project Model'}<span>/</span></h2>{(project.modelGallery || [{name:null,image:project.modelImage}]).map(({name,image})=><figure className="dp-site-model" key={image}>{name && <h3>{name}</h3>}<div className="dp-model-image-frame"><img className="dp-project-model-image" src={image} alt={`${project.title}${name ? ' — '+name : ''} — MEP model`} loading="lazy"/></div>{name && <figcaption>{project.galleryCaption ? `${name} · ${project.galleryCaption}` : `EKB · ${name} · Site model overview`}</figcaption>}</figure>)}</section>}
        <section><h2>Project Overview<span>/</span></h2><p>{project.description}</p><div className="dp-detail-facts">{[['Discipline',project.category],['Client / Context',project.customer],['My Role',project.role],['Period',project.period],['Team Size',project.team],['Residential Units',project.unitCount ? `${project.unitCount} units` : null]].filter(([,value])=>value).map(([label,value])=><div key={label}><span>{label}</span><p>{value}</p></div>)}</div>{project.scopeNote && <p className="dp-detail-note">{project.scopeNote}</p>}</section>
        {project.unitCodes?.length > 0 && <section><h2>Unit Codes<span>/</span></h2><p>{project.unitCount} residential units included in this project.</p><div className="dp-tags dp-role-tags">{project.unitCodes.map(code=><span key={code}>{code}</span>)}</div></section>}
        {project.toolContent?.map(({title,paragraphs,items})=><section key={title}><h2>{title}<span>/</span></h2>{paragraphs?.map((paragraph,i)=><p key={i}>{paragraph}</p>)}{items && <ul className="dp-tool-features">{items.map(item=><li key={item}>{item}</li>)}</ul>}</section>)}
        {project.sections.length > 0 && <section><h2>My Responsibilities<span>/</span></h2><div className="dp-project-responsibilities">{project.sections.map(([title,tasks])=><article key={title}><h3>{title}</h3><ul>{tasks.map(task=><li key={task}>{task}</li>)}</ul></article>)}</div></section>}
        {project.tools.length > 0 && <section><h2>Tools & Technologies<span>/</span></h2><div className="dp-tags dp-role-tags">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div></section>}
        {project.links.length > 0 && <section><h2>Project Links<span>/</span></h2><div className="dp-project-resource-links">{project.links.map(([label,url])=><a key={url} href={url} target="_blank" rel="noreferrer">{label} ↗</a>)}</div></section>}
        <section className="dp-detail-links"><h2>Get In Touch<span>/</span></h2><p>Discuss this project or a similar workflow.</p><a href={`mailto:${profile.email}`}>{profile.email} ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub profile ↗</a><a href={profile.gitlab} target="_blank" rel="noreferrer">GitLab profile ↗</a><a href={profile.resume} download>Download CV ↓</a></section>
        <nav className="dp-detail-pagination" aria-label="Other projects"><a href={`/projects/${previous.id}`}><span>⟵ Previous project</span><b>{previous.title}</b></a><a href={`/projects/${next.id}`}><span>Next project ⟶</span><b>{next.title}</b></a></nav>
      </div>
    </main>

  </div>;
}



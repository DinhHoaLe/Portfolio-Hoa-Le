import { projectId } from '../projectRoutes.js';
import PortfolioLink from '../PortfolioLink.jsx';
import React, { useState } from 'react';
import { projects, profile } from '../profile';
import { getProjectDetail } from './projectDetails';
import ProjectArtwork from './ProjectArtwork';
import { featuredWalkthroughs } from './featuredWalkthroughs';

export default function ProjectPage() {
  const [menu, setMenu] = useState(false);
  const id = projectId(window.location.pathname);
  const index = projects.findIndex(p => p.id === id);
  if (!projects[index]) return <main className="dp-detail-missing"><h1>Project not found</h1><PortfolioLink href="/#projects">Back to projects →</PortfolioLink></main>;
  const project = getProjectDetail(projects[index]);
  const walkthrough = featuredWalkthroughs[project.id];
  const isWeb = project.category === 'Web Development';
  const areas = projects.filter(item=>item.parentId===project.id);
  const parent = projects.find(item=>item.id===project.parentId);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return <div className="dp-site dp-detail">
    <PortfolioLink className="dp-skip" href="#project-content">Skip to main content</PortfolioLink>
    <header className="dp-header dp-detail-header"><PortfolioLink href="/" aria-label="Le Dinh Hoa home"><img src="/profile/mark.svg" alt=""/></PortfolioLink><nav className={menu ? 'dp-main-nav open' : 'dp-main-nav'} aria-label="Main navigation">{['about','services','projects','experience','contacts'].map(section => <PortfolioLink key={section} href={`/#${section}`}>{section}</PortfolioLink>)}</nav><button className="dp-menu-button" aria-label="Toggle menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? '×' : '☰'}</button></header>
    <main id="project-content">
      <section className={`dp-detail-hero dp-editorial-cover${project.textCard ? ' dp-cover-text-only' : ''}`}>
        <nav className="dp-cover-nav" aria-label="Project navigation"><PortfolioLink href="/#projects"><span aria-hidden="true">←</span> Back</PortfolioLink><PortfolioLink href="/projects">All projects <span aria-hidden="true">↗</span></PortfolioLink></nav>
        <div className="dp-cover-grid">
          <div className="dp-cover-copy"><p className="dp-cover-eyebrow">PROJECT {project.number} <span>/</span> {project.modelWorkflow || project.category}</p><h1>{project.title}</h1><p className="dp-cover-context">{project.customer || project.context}</p><div className="dp-tags dp-cover-tools">{project.tools.slice(0,4).map(tool=><span key={tool}>{tool}</span>)}{project.tools.length>4 && <span>+{project.tools.length-4}</span>}</div><PortfolioLink className="dp-cover-explore" href="#project-overview">Explore project <span aria-hidden="true">↓</span></PortfolioLink></div>
          {!project.textCard && <div className="dp-cover-visual"><ProjectArtwork projectId={project.id} className="dp-cover-artwork" src={isWeb ? project.image : project.previewImage || project.modelImage || project.image} alt={`${project.title} — project visual`}/></div>}
        </div>
      </section>
      <div className="dp-detail-body">{parent && <PortfolioLink className="dp-area-parent" href={`/projects/${parent.id}`}>⟵ EKB project overview</PortfolioLink>}
        {project.previewImage && <section><h2>Application Preview<span>/</span></h2>{project.status && <p className="dp-project-status">{project.status}</p>}<div className={project.previewFormat === 'mobile' ? 'dp-mobile-preview-gallery' : undefined}>{(project.previewGallery || [{image:project.previewImage,caption:project.previewCaption}]).map(({image,caption})=><figure key={image} className={`dp-application-preview${project.previewFormat === 'mobile' ? ' dp-mobile-preview' : ''}`}><div className="dp-model-image-frame"><img className="dp-project-model-image" src={image} alt={`${project.title} — ${caption || 'application interface'}`} loading="lazy"/></div>{caption && <figcaption>{caption}</figcaption>}</figure>)}</div></section>}
        {project.adminPreviewImage && <section><h2>Admin Page<span>/</span></h2><div className="dp-model-image-frame"><img className="dp-project-model-image" src={project.adminPreviewImage} alt={`${project.title} — admin login page`} loading="lazy"/></div></section>}
        {areas.length > 0 && <section><h2>Project Areas<span>/</span></h2><p>Explore the individual site areas within EKB.</p><div className="dp-area-grid">{areas.map(area=><PortfolioLink key={area.id} href={`/projects/${area.id}`}><ProjectArtwork projectId={area.id} src={area.image} alt={area.title}/><div><span>EKB · SITE AREA</span><h3>{area.siteName}</h3><p>{area.description}</p><b>Explore area ↗</b></div></PortfolioLink>)}</div></section>}
        {project.modelImage && areas.length===0 && <section><h2>{project.galleryHeading || 'Project Model'}<span>/</span></h2>{(project.modelGallery || [{name:null,image:project.modelImage}]).map(({name,image})=><figure className="dp-site-model" key={image}>{name && <h3>{name}</h3>}<div className="dp-model-image-frame"><img className="dp-project-model-image" src={image} alt={`${project.title}${name ? ' — '+name : ''} — MEP model`} loading="lazy"/></div>{name && <figcaption>{project.galleryCaption ? `${name} · ${project.galleryCaption}` : `EKB · ${name} · Site model overview`}</figcaption>}</figure>)}</section>}
        <section id="project-overview"><h2>Project Overview<span>/</span></h2><p>{project.description}</p><div className="dp-detail-facts">{[['Discipline',project.category],['Client / Context',project.customer],['My Role',project.role],['Period',project.period],['Team Size',project.team],['Residential Units',project.unitCount ? `${project.unitCount} units` : null]].filter(([,value])=>value).map(([label,value])=><div key={label}><span>{label}</span><p>{value}</p></div>)}</div>{project.scopeNote && <p className="dp-detail-note">{project.scopeNote}</p>}</section>
        {walkthrough && <section className="dp-walkthrough" aria-labelledby="project-walkthrough-title"><h2 id="project-walkthrough-title">Project Walkthrough<span>/</span></h2><p>{walkthrough.introduction}</p><div className="dp-walkthrough-contribution"><h3>My Contribution</h3><p>{walkthrough.contribution}</p></div><div className="dp-walkthrough-steps">{walkthrough.steps.map(([title,description],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{description}</p></article>)}</div><p className="dp-walkthrough-value">{walkthrough.value}</p></section>}
        {project.testCases?.length > 0 && <section><h2>Revit MCP Test Scenarios<span>/</span></h2><p className="dp-project-status">{project.status}</p><p>AI assistant → MCP tool call → Revit API → Structured result</p><div className="dp-test-cases">{project.testCases.map((test,i)=><details key={test.id} open={i===0}><summary><span className="dp-test-case-id">{test.id} · {test.mode}</span><h3>{test.title}</h3></summary><dl><div><dt>Input / Setup</dt><dd>{test.input}</dd></div>{test.prompt && <div><dt>Example Prompt</dt><dd>{test.prompt}</dd></div>}<div><dt>Test Steps</dt><dd>{test.steps}</dd></div><div><dt>Expected Result</dt><dd>{test.expected}</dd></div><div><dt>Actual Result</dt><dd>Not yet recorded.</dd></div></dl></details>)}</div></section>}
        {project.unitCodes?.length > 0 && <section><h2>Unit Codes<span>/</span></h2><p>{project.unitCount} residential units included in this project.</p><div className="dp-tags dp-role-tags">{project.unitCodes.map(code=><span key={code}>{code}</span>)}</div></section>}
        {project.toolContent?.map(({title,paragraphs,items})=><section key={title}><h2>{title}<span>/</span></h2>{paragraphs?.map((paragraph,i)=><p key={i}>{paragraph}</p>)}{items && <ul className="dp-tool-features">{items.map(item=><li key={item}>{item}</li>)}</ul>}</section>)}
        {project.sections.length > 0 && <section><h2>My Responsibilities<span>/</span></h2><div className="dp-project-responsibilities">{project.sections.map(([title,tasks])=><article key={title}><h3>{title}</h3><ul>{tasks.map(task=><li key={task}>{task}</li>)}</ul></article>)}</div></section>}
        {project.tools.length > 0 && <section><h2>Tools & Technologies<span>/</span></h2><div className="dp-tags dp-role-tags">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div></section>}
        {project.links.length > 0 && <section><h2>Project Links<span>/</span></h2><div className="dp-project-resource-links">{project.links.map(([label,url])=><PortfolioLink key={url} href={url} target="_blank" rel="noreferrer">{label} ↗</PortfolioLink>)}</div></section>}
        <section className="dp-detail-links"><h2>Get In Touch<span>/</span></h2><p>Discuss this project or a similar workflow.</p><PortfolioLink href={`mailto:${profile.email}`}>{profile.email} ↗</PortfolioLink><PortfolioLink href={profile.github} target="_blank" rel="noreferrer">GitHub profile ↗</PortfolioLink><PortfolioLink href={profile.gitlab} target="_blank" rel="noreferrer">GitLab profile ↗</PortfolioLink><PortfolioLink href={profile.resume} download>Download CV ↓</PortfolioLink></section>
        <nav className="dp-detail-pagination" aria-label="Other projects"><PortfolioLink href={`/projects/${previous.id}`}><span>⟵ Previous project</span><b>{previous.title}</b></PortfolioLink><PortfolioLink href={`/projects/${next.id}`}><span>Next project ⟶</span><b>{next.title}</b></PortfolioLink></nav>
      </div>
    </main>

  </div>;
}



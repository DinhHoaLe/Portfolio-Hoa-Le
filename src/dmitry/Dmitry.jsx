import React, { useEffect, useState } from 'react';
import { services, groups, values, toolGroups, toolColors } from './data';
import { roles } from './roles';
import { profile, links, references, education, highlights } from '../profile';
import EngineeringDiagram from './EngineeringDiagram';

function Heading({ title, label, action }) {
  return <div className="dp-section-head"><h2>{title}<span>/</span></h2><div className="dp-section-meta"><span>—— {label} ——</span>{action}</div></div>;
}

const projectGroupNames = ['BIM / MEP Projects', 'Revit Add-ins', 'Web & Applications'];

function projectSections(items, index) {
  return groups[index][0] === 'BIM / MEP Projects'
    ? [['DCMvn Projects', items.filter(project=>project[6]==='DCMvn')], ['Outsource Projects', items.filter(project=>project[6]==='Outsource')]]
    : [[null, items]];
}

function SelectedProjects({items,index}) {
  return projectSections(items,index).map(([title,projects])=><React.Fragment key={title || 'projects'}>
    {title && <h4 className="dp-project-subheading">{title}</h4>}
    {projects.slice(0,3).map(project=><a className="dp-project-tile" key={project[2]} href={`/dmitry/projects/${project[2]}`} aria-label={`Open ${project[0]}`}><img src={project[3]} alt={project[0]} loading="lazy"/><div className="dp-project-caption"><h3>{project[0]}</h3><p>{project[1]}</p><span>Explore project ↗</span></div></a>)}
  </React.Fragment>);
}

function AllProjects() {
  return <div className="dp-project-directory">
    <nav className="dp-project-group-links" aria-label="All project categories">{groups.map(([,items],i)=><a key={projectGroupNames[i]} href={`#dp-all-group-${i}`}>{projectGroupNames[i]} <span>{items.length}</span></a>)}</nav>
    {groups.map(([name,items],i)=><section className="dp-project-group" id={`dp-all-group-${i}`} aria-labelledby={`dp-all-heading-${i}`} key={name}>
      <div className="dp-project-group-heading"><h3 id={`dp-all-heading-${i}`}><span>0{i+1}</span>{projectGroupNames[i]}</h3><p>{items.length} projects</p></div>
      {projectSections(items,i).map(([title,projects])=><div className="dp-project-subgroup" key={title || name}>
        {title && <h4 className="dp-project-subheading">{title} <span>{projects.length} projects</span></h4>}
        <div className="dp-all-projects">{projects.map(project=><a className="dp-grid-project" key={project[2]} href={`/dmitry/projects/${project[2]}`}><img src={project[3]} alt={project[0]} loading="lazy"/><h4>{project[0]}</h4><p>{project[1]}</p></a>)}</div>
      </div>)}
    </section>)}
  </div>;
}

export default function Dmitry() {
  const [menu,setMenu] = useState(false);
  const [service,setService] = useState(0);
  const [group,setGroup] = useState(0);
  const [allProjects,setAllProjects] = useState(new URLSearchParams(window.location.search).get('projects') === 'all');
  const [formStatus,setFormStatus] = useState('');
  const [pastHero,setPastHero] = useState(false);
  useEffect(()=>{
    const observer = new IntersectionObserver(([entry])=>setPastHero(!entry.isIntersecting));
    observer.observe(document.getElementById('dp-top'));
    if (window.location.hash) document.getElementById(window.location.hash.slice(1))?.scrollIntoView({behavior:'instant'});
    return ()=>observer.disconnect();
  },[]);
  return <div className="dp-site">
    <a className="dp-skip" href="#dp-main">Skip to main content</a>
    <header className={`dp-header${pastHero ? ' dp-header-dark' : ''}`}><a href="#dp-top" aria-label="Le Dinh Hoa home"><img src="/profile/mark.svg" alt=""/></a><nav className={menu ? 'dp-main-nav open' : 'dp-main-nav'} aria-label="Main navigation">{['about','services','projects','experience','contact'].map(id=><a key={id} href={`#dp-${id}`} onClick={()=>setMenu(false)}>{id}</a>)}</nav><button className="dp-menu-button" aria-label="Toggle menu" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu ? '×' : '☰'}</button></header>
    <main id="dp-main">
      <section className="dp-hero" id="dp-top"><div className="dp-crosshair" aria-hidden="true"><i/><i/><b>+</b></div><span className="dp-coordinates" aria-hidden="true">X . 0000.00  Y . 0000.00</span><div className="dp-hero-title"><h1>Le Dinh Hoa</h1><p>Revit Software Developer</p><p>BIM Automation Engineer · MEP Engineer</p></div></section>
      <section className="dp-section" id="dp-about"><Heading title="About Me" label="About Me" action={<a className="dp-text-link" href={profile.resume} target="_blank" rel="noreferrer">Download CV ⟵</a>}/><div className="dp-about-grid"><img className="dp-portrait" src={profile.portrait} alt={profile.name} loading="lazy"/><div className="dp-profile"><dl><div><dt>Based in</dt><dd>{profile.location}</dd></div><div><dt>Languages</dt><dd>English</dd></div><div><dt>Profile</dt><dd>{profile.summary}</dd></div></dl></div></div></section>
      <section className="dp-section dp-services" id="dp-services"><Heading title="What I Do" label="Services"/><p className="dp-intro">{profile.intro}</p><div className="dp-services-layout"><div className="dp-service-nav" role="tablist" aria-label="Services">{services.map(([name],i)=><button key={name} id={`dp-service-tab-${i}`} role="tab" aria-selected={service===i} aria-controls="dp-service-content" onClick={()=>setService(i)}>{name}<span>/</span></button>)}</div><div className="dp-service-art"><EngineeringDiagram active={service}/></div><div className="dp-service-content" id="dp-service-content" role="tabpanel" aria-labelledby={`dp-service-tab-${service}`}><p>{services[service][1]}</p><p>{services[service][2]}</p><div className="dp-tags">{services[service][3].map(t=><span key={t}>{t}</span>)}</div></div></div><div className="dp-experience-strip" aria-label="Experience at a glance">{highlights.map(([name,value])=><div key={name}><span>{name}</span><strong>{value}</strong></div>)}</div></section>
      <section className="dp-section dp-work" id="dp-projects"><Heading title="Selected Work" label="Selected Work" action={<button className="dp-text-link" onClick={()=>setAllProjects(!allProjects)}>{allProjects ? 'Show selected work' : 'See all projects'} ⟶</button>}/>{allProjects ? <AllProjects/> : <div className="dp-project-shelf" role="tablist" aria-label="Project disciplines">{groups.map(([name,items],i)=><React.Fragment key={name}><button className="dp-discipline" role="tab" id={`dp-discipline-${i}`} aria-selected={group===i} aria-controls={`dp-project-panel-${i}`} onClick={()=>setGroup(i)}><span>0{i+1}</span><b>{name}</b></button>{group===i && <div className="dp-project-panel" role="tabpanel" id={`dp-project-panel-${i}`} aria-labelledby={`dp-discipline-${i}`}><SelectedProjects items={items} index={i}/></div>}</React.Fragment>)}</div>}</section>
      <section className="dp-section" id="dp-experience"><Heading title="Professional Experience" label="Experience"/><div className="dp-timeline dp-alternating">{roles.map(role=><article key={role.id}><div className="dp-timeline-card"><h3>{role.company}</h3><p className="dp-timeline-role">{role.title}</p><time>{role.date}</time><p>{role.summary}</p><a className="dp-role-more" href={`/dmitry/experience/${role.id}`}>More about this role +</a></div></article>)}</div></section>
      <section className="dp-section" id="dp-education"><Heading title="Education & Training" label="Education"/><div className="dp-timeline dp-alternating dp-education-timeline">{education.slice(0,3).sort((a,b)=>Number(b[0].slice(0,4))-Number(a[0].slice(0,4))).map(([date,title,org])=><article key={org}><div className="dp-timeline-card"><h3>{org}</h3><p className="dp-timeline-role">{title}</p><time>{date}</time></div></article>)}</div><a className="dp-text-link" href={links.find(([name])=>name==='Degree links')[1]} target="_blank" rel="noreferrer">View degree documents ↗</a></section>
      <section className="dp-section dp-awards-section" id="dp-awards"><Heading title="Awards & Certifications" label="Recognition"/><div className="dp-awards-feature"><div className="dp-awards-heading"><span className="dp-trophy" aria-hidden="true">✦</span><div><p className="dp-eyebrow">MINDX BATTLE CODE · 2024–2025</p><h3>Three competitions.<br/>Three first prizes.</h3><p>Recognized across frontend fundamentals, React, and backend development.</p></div><a href={links.find(([name])=>name==='Award links')[1]} target="_blank" rel="noreferrer">View awards ↗</a></div><div className="dp-prize-grid">{['Basic · HTML / CSS','ReactJS','Node.js'].map((name,i)=><article key={name}><span>0{i+1} / FIRST PRIZE</span><h4>{name}</h4><b>1<span>st</span></b></article>)}</div></div><div className="dp-certification-grid">{links.filter(([name])=>name.includes('Certificate')).map(([name,url],i)=><a key={name} href={url} target="_blank" rel="noreferrer"><span className="dp-certificate-number">0{i+1} · CERTIFICATION</span><h3>{name.replace(' Certificate','')}</h3><span>View certificate ↗</span></a>)}</div></section>
      <section className="dp-section" id="dp-principles"><Heading title="How I Work" label="Engineering Focus"/><div className="dp-values">{values.map(([name,desc],i)=><details key={name}><summary><span>0{i+1}</span><h3>{name}</h3><b>+</b></summary><p>{desc}</p></details>)}</div></section>
      <section className="dp-section" id="dp-technologies"><Heading title="Tools & Technologies" label="Tools & Technologies"/><p className="dp-tools-intro">Tools and technologies I work with</p><div className="dp-tool-groups">{toolGroups.map(([name,tools])=><div className="dp-tool-group" key={name}><h3>{name}</h3><div>{tools.map(([label,slug])=><div className="dp-tool" key={label} title={label} data-tool={label}>{slug ? <img src={`/dmitry/${slug.endsWith(".png") ? slug : `${slug}.svg`}`} alt="" loading="lazy"/> : <b className="dp-tool-initial" style={{'--tool-color': toolColors[label] || '#6185c7'}}>{label.slice(0,2)}</b>}<span>{label}</span></div>)}</div></div>)}</div></section>

      <section className="dp-section" id="dp-contact"><Heading title="Get In Touch" label="Contact"/><div className="dp-contact-grid"><div className="dp-contact-info"><p>Let’s discuss Revit automation, BIM workflows, or your next application.</p><a className="dp-contact-mail" href={`mailto:${profile.email}`}>{profile.email}</a><a className="dp-contact-phone" href="tel:+84985671678">{profile.phone}</a><div className="dp-contact-socials">{links.filter(([name])=>['GitHub','GitLab','CV'].includes(name)).map(([name,url])=><a href={url} key={name} target={name==='CV' ? undefined : '_blank'} rel="noreferrer" download={name==='CV'}>{name==='CV' ? 'Download CV ↓' : name+' ↗'}</a>)}</div></div><form onSubmit={e=>{e.preventDefault();const data=new FormData(e.currentTarget);const body="Name: "+data.get("name")+"\nEmail: "+data.get("email")+"\n\n"+data.get("message");window.location.href=`mailto:${profile.email}?subject=${encodeURIComponent(data.get("subject"))}&body=${encodeURIComponent(body)}`;setFormStatus("Email draft requested. Send it from your email app.");}}><div className="dp-form-row"><label className="dp-sr" htmlFor="dp-name">Your Name</label><input id="dp-name" name="name" autoComplete="name" required placeholder="Your Name"/><label className="dp-sr" htmlFor="dp-email">Your Email</label><input id="dp-email" name="email" type="email" autoComplete="email" required placeholder="Your Email"/></div><label className="dp-sr" htmlFor="dp-subject">Subject</label><input id="dp-subject" name="subject" required placeholder="Subject"/><label className="dp-sr" htmlFor="dp-message">Your Message</label><textarea id="dp-message" name="message" required placeholder="Your Message"/><button className="dp-send">Open Email Draft ⟶</button><p className="dp-form-status" role="status">{formStatus}</p></form></div><div className="dp-contact-references"><h3>Company References</h3><div>{references.map(([name,url],i)=><a key={name} href={url} target="_blank" rel="noreferrer"><span>0{i+1}</span><b>{name}</b><span>↗</span></a>)}</div></div></section>
    </main>

  </div>;
}







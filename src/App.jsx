import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { skills, projects, experience, education, links, resume, profile } from './data';
import { highlights } from './profile';
import crow from './art/crow.svg?raw';
import crowWire from './art/crow-wire.svg?raw';
import crowLight from './art/crow-light.svg?raw';
import feather from './art/feather.svg?raw';

const navigation = [['about','About'],['skills','Skills'],['work','Work'],['experience','Journey'],['education','Learning'],['contact','Contact']];
const Art = ({ type = 'crow', className = '' }) => <span className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: { crow, wire: crowWire, light: crowLight, feather }[type] }} />;

function Reveal({ children, className = '', as: Tag = 'div', ...props }) {
  return <Tag className={`${className} in`} {...props}>{children}</Tag>;
}
function TitleBlock({ end = false }) {
  return <div className="titleblock"><div className="tb-seal"><Art type="light" /></div>{[
    ['Project','Le Dinh Hoa · Portfolio'],['Drawn by',profile.name],['Medium','ink on paper'],['Date','2026'],['Sheet',end ? 'A-999 · end' : 'A-001'],
  ].map(([label,value])=><div key={label}><small>{label}</small>{value}</div>)}</div>;
}

function Section({ id, number, title, emphasis, meta, children }) {
  return <section id={id}><div className="wrap"><div className="sheet"><div className="sh"><span className="no">{number}</span><h2>{title} <em>{emphasis}</em></h2><span className="meta">{meta}</span></div>{children}</div></div></section>;
}

function RoleLabel() {
  return <p className="typer">Revit Software Developer</p>;
}
function Hero() {
  return <section className="hero" id="top"><div className="wrap"><div className="sheet"><div className="hero-sheet"><div className="hero-left">
    <span className="tag"><span>SHEET A-001</span><span>·</span><span>PORTFOLIO</span></span>
    <div className="portrait-row"><div className="enso"><img className="mono" src={profile.portrait} alt="Le Dinh Hoa" width="400" height="400"/><span aria-hidden="true"><svg viewBox="0 0 200 200" className="ink"><circle cx="100" cy="100" r="88" fill="none" stroke="#151515" strokeWidth="9" strokeLinecap="round" pathLength="1000" transform="rotate(-70 100 100)" /></svg></span></div><span className="note">fig. 01 · the developer<br/>Ho Chi Minh City, Vietnam<br/>BIM Automation · MEP</span></div>
    <h1>Le Dinh <em>Hoa</em></h1><RoleLabel/><p className="sub">{profile.intro}</p>
    <div className="actions"><a className="b solid" href="#work">view_work →</a><a className="b" href="#contact">contact()</a><a className="b" href={resume} target="_blank" rel="noreferrer">résumé ↓</a></div>
  </div><div className="hero-right"><Art className="watermark"/><div className="draw"><span className="dim dim-h">study no. 1 · Corvus cornix · scale 1:1</span><span className="dim dim-v">h = 1.00 crow</span><span className="callout c1">beak: sharp</span><span className="callout c2">drawn in ink</span><Art type="wire"/></div></div></div><TitleBlock/></div></div></section>;
}

function ProjectModal({ project, onClose }) {
  const panel = useRef(null);
  useEffect(() => {
    const previous = document.activeElement;
    document.documentElement.classList.add('pm-lock');
    panel.current?.querySelector('button')?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        const items = panel.current.querySelectorAll('button, a[href]');
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown',onKey);
    return () => { document.documentElement.classList.remove('pm-lock'); document.removeEventListener('keydown',onKey); previous?.focus(); };
  }, [onClose]);
  return createPortal(<div className="pm" onClick={e=>{if(e.target === e.currentTarget) onClose();}}><div className="pm-panel" ref={panel} role="dialog" aria-modal="true" aria-labelledby="project-title"><button className="pm-close" aria-label="Close project" onClick={onClose}>×</button><div className="pm-media"><img className="pm-main" src={project.image} alt={project.title}/><p className="note">fig. 01 · {project.title}</p></div><div className="pm-body"><p className="pm-no">PRJ-{project.number} · {project.category}</p><h3 className="pm-title" id="project-title">{project.title}</h3><p className="pm-short">{project.description}</p><h4>Tools & technologies</h4><ul className="pm-tools">{project.tools.map(t=><li key={t}>{t}</li>)}</ul><h4>Project context</h4><p>{project.context}</p><p className="note">{project.stats} · Project image to be added.</p><div className="pm-links"><a className="b solid" href={profile.github} target="_blank" rel="noreferrer">GitHub source code ↗</a></div></div></div></div>,document.body);
}

function ContactForm() {
  const [status,setStatus] = useState('');
  function submit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    const href = `mailto:dinhhoa.0701@gmail.com?subject=${encodeURIComponent(data.get('subject'))}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setStatus('Email draft requested. Send it from your email app.');
  }
  return <form className="term" onSubmit={submit}><p className="cmd">$ send_message --to dinhhoa.0701@gmail.com</p><div className="row"><label>--name<input name="name" required autoComplete="name" maxLength={120}/></label><label>--email<input name="email" type="email" required autoComplete="email"/></label></div><label>--subject<input name="subject" required maxLength={200}/></label><label>--message<textarea name="message" required maxLength={4000}/></label><button type="submit">run ↵</button><p className="form-note" role="status">{status}</p></form>;
}

export default function App() {

  const [selected,setSelected] = useState(null);
  const closeProject = useCallback(() => setSelected(null), []);

  return <div className="site">
    <svg width="0" height="0" aria-hidden="true" style={{position:'absolute'}}><filter id="ink" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="7"/><feGaussianBlur stdDeviation=".35"/></filter></svg>
    <header className="nav"><div className="wrap"><a className="mark" aria-label="Le Dinh Hoa, home" href="#top"><span className="logo"><img src="/profile/mark.svg" alt=""/></span><span>Le Dinh Hoa</span></a><nav aria-label="Sections"><ul>{navigation.map(([id,label],i)=><li key={id}><a href={`#${id}`}><span>0{i+1}</span>{label}</a></li>)}</ul></nav></div></header>
    <main><Hero/>
    <Section id="about" number="01" title="About" emphasis="the maker" meta="profile.md"><div className="about"><Reveal><p className="big">{profile.summary}</p><div className="quote"><Art type="light" className="seal"/>Reliable automation. Consistent models. Efficient delivery.</div></Reveal><Reveal><dl className="kv">{[['role',profile.role],['industry','AEC · BIM · MEP'],['focus','Revit add-ins · BIM automation'],['Revit development','~3 years'],['BIM / MEP modeling','5+ years'],['based_in',profile.location],['language','English'],['web development','~2 years']].map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></Reveal></div></Section>
    <Section id="skills" number="02" title="Skills" emphasis="— bill of materials" meta={`${skills.length} groups`}><table className="bom"><thead><tr><th>Item</th><th>Group</th><th>Components</th></tr></thead><tbody>{skills.map(([group,items],i)=><tr key={group}><td>S-0{i+1}</td><td><span className="g"><Art type="feather" className="ink"/>{group}</span></td><td><ul className="tags">{items.map(item=><li key={item}>{item}</li>)}</ul></td></tr>)}</tbody></table><div className="segs">{highlights.map(([name,value])=><div className="seg" key={name}><div className="top"><span>{name}</span></div><strong className="experience-value">{value}</strong></div>)}</div></Section>
    <Section id="work" number="03" title="Things I’ve" emphasis="built" meta={`${projects.length} projects · click to open`}><div className="specs">{projects.map(project=><Reveal as="a" href={`#project-${project.id}`} className="spec mono-host" key={project.id} onClick={e=>{e.preventDefault();setSelected(project);}}><div className="spec-h"><span>PRJ-{project.number}</span><span>{project.category}</span></div><div className="spec-img"><img className="mono" src={project.image} alt={`${project.title}: ${project.description}`} loading="lazy"/></div><h3>{project.title}</h3><p>{project.description}</p><div className="chips">{project.tools.map(t=><span key={t}>{t}</span>)}</div><div className="spec-f"><span>{project.stats}</span><span>open_sheet →</span></div></Reveal>)}<a className="spec-more gap3-1" href="#contact"><Art type="wire"/><b>Your project goes here.</b><span>let’s build something →</span></a></div></Section>
    <Section id="experience" number="04" title="The journey" emphasis="— revision history" meta="latest first"><ol className="rev"><li className="rev-head" aria-hidden="true">{['Rev','Date','Role','Changes'].map(x=><div key={x}>{x}</div>)}</li>{experience.map(([date,role,org,where,changes],i)=><Reveal as="li" key={org}><div><span className="dot"><span aria-hidden="true"><svg viewBox="0 0 20 20" className="ink"><circle cx="10" cy="10" r="8.5" fill="#151515"/></svg></span><span>R{experience.length-i}</span></span></div><div className="when">{date}</div><div><h3>{role}</h3><p className="org">{org}</p><p className="where">{where}</p></div><div><ul>{changes.map(c=><li key={c}>{c}</li>)}</ul></div></Reveal>)}</ol></Section>
    <Section id="education" number="05" title="Where I" emphasis="learned" meta="education & training"><div className="certs">{education.map(([date,title,org,award])=><Reveal className="cert" key={title}><span className="note">{date}</span><h3>{title}</h3><p>{org}</p>{award && <span className="stamp"><Art type="feather" className="ink"/>{award}</span>}</Reveal>)}</div></Section>
    <Section id="contact" number="06" title="Say" emphasis="hello" meta="open for projects"><div className="contact"><div><Reveal className="perched"><Art type="wire"/></Reveal><p className="big">Let’s draft<br/><em>your next tool.</em></p><a className="mail" href="mailto:dinhhoa.0701@gmail.com">dinhhoa.0701@gmail.com</a><ul className="links">{links.map(([name,url,icon])=><li key={name}><a href={url} target={url.startsWith('https') ? '_blank' : undefined} rel="noreferrer"><span>{name}</span><span>{icon}</span></a></li>)}</ul></div><ContactForm/></div></Section>
    </main><footer className="site-footer"><div className="wrap"><div className="sheet"><TitleBlock end/></div></div></footer>
    {selected && <ProjectModal project={selected} onClose={closeProject}/>}
  </div>;
}


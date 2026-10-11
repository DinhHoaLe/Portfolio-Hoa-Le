import React, { useState } from 'react';
import { AllProjects } from './Dmitry';

export default function ProjectsPage() {
  const [menu, setMenu] = useState(false);
  return <div className="dp-site dp-projects-page">
    <a className="dp-skip" href="#dp-main">Skip to main content</a>
    <header className="dp-header dp-detail-header">
      <a href="/" aria-label="Le Dinh Hoa home"><img src="/profile/mark.svg" alt=""/></a>
      <nav className={menu ? 'dp-main-nav open' : 'dp-main-nav'} aria-label="Main navigation">{['about','services','projects','experience','contact'].map(section=><a key={section} href={`/#dp-${section}`}>{section}</a>)}</nav>
      <button className="dp-menu-button" aria-label="Toggle menu" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu ? '×' : '☰'}</button>
    </header>
    <main className="dp-section" id="dp-main">
      <div className="dp-section-head"><h2>All Projects<span>/</span></h2><div className="dp-section-meta"><span>—— PROJECT DIRECTORY ——</span><a className="dp-text-link" href="/#dp-projects">Show selected work ⟶</a></div></div>
      <AllProjects/>
    </main>
  </div>;
}

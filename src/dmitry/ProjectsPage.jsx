import PortfolioLink from '../PortfolioLink.jsx';
import React, { useState } from 'react';
import { AllProjects } from './Dmitry';
import FeaturedProjects from './FeaturedProjects';

export default function ProjectsPage() {
  const [menu, setMenu] = useState(false);
  return <div className="dp-site dp-projects-page">
    <PortfolioLink className="dp-skip" href="#main">Skip to main content</PortfolioLink>
    <header className="dp-header dp-detail-header">
      <PortfolioLink href="/" aria-label="Le Dinh Hoa home"><img src="/profile/mark.svg" alt=""/></PortfolioLink>
      <nav className={menu ? 'dp-main-nav open' : 'dp-main-nav'} aria-label="Main navigation">{['about','services','projects','experience','contacts'].map(section=><PortfolioLink key={section} href={`/#${section}`}>{section}</PortfolioLink>)}</nav>
      <button className="dp-menu-button" aria-label="Toggle menu" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu ? '×' : '☰'}</button>
    </header>
    <main className="dp-section" id="main">
      <div className="dp-section-head"><h1>All Projects<span>/</span></h1><div className="dp-section-meta"><span>—— PROJECT DIRECTORY ——</span><PortfolioLink className="dp-text-link" href="/#projects">Show selected work ⟶</PortfolioLink></div></div>
      <FeaturedProjects/>
      <div id="project-directory"><AllProjects/></div>
    </main>
  </div>;
}

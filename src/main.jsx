import React, { useEffect } from 'react';
import { canonicalProjectPath } from './projectRoutes.js';
import { PENDING_SECTION } from './PortfolioLink.jsx';
import { createRoot } from 'react-dom/client';
import ComparisonSwitcher from './ComparisonSwitcher.jsx';
import { applyPageMetadata } from './pageMetadata.js';

const legacyPath = window.location.pathname;
if (legacyPath === '/dmitry' || legacyPath.startsWith('/dmitry/projects') || legacyPath.startsWith('/dmitry/experience/')) {
  const canonicalPath = legacyPath.replace(/^\/dmitry/, '') || '/';
  window.history.replaceState(null, '', canonicalPath + window.location.search + window.location.hash);
}
const originalPath = window.location.pathname.replace(/\/$/, '') || '/';
const path = canonicalProjectPath(originalPath);
const initialSection = window.location.hash.slice(1).replace(/^dp-/, '').replace(/^contact$/, 'contacts');
if (path !== window.location.pathname || window.location.hash) window.history.replaceState(null, '', path + window.location.search);
function RestoreSection() {
  useEffect(() => {
    let section = initialSection;
    try { section ||= sessionStorage.getItem(PENDING_SECTION); sessionStorage.removeItem(PENDING_SECTION); } catch { /* Storage is optional. */ }
    if (section) document.getElementById(section)?.scrollIntoView({behavior:'instant'});
  }, []);
  return null;
}
const { default: App } = await import(path === '/projects' ? './dmitry/ProjectsPage.jsx' : path.startsWith('/projects/') ? './dmitry/ProjectPage.jsx' : path.startsWith('/experience/') ? './dmitry/RolePage.jsx' : './dmitry/Dmitry.jsx');
await import('./dmitry/dmitry.css');
await import('./dmitry/layout.css');
let savedTheme = 'dark';
try { savedTheme = localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'; } catch { /* Storage may be unavailable. */ }
document.documentElement.dataset.theme = savedTheme;
applyPageMetadata(path);
document.querySelector('link[rel="icon"]').href = '/profile/mark.svg';

createRoot(document.getElementById('root')).render(<React.StrictMode><App /><ComparisonSwitcher /><RestoreSection /></React.StrictMode>);


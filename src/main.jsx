import React from 'react';
import { createRoot } from 'react-dom/client';
import ComparisonSwitcher from './ComparisonSwitcher.jsx';
import { applyPageMetadata } from './pageMetadata.js';

const legacyPath = window.location.pathname;
if (legacyPath === '/dmitry' || legacyPath.startsWith('/dmitry/projects') || legacyPath.startsWith('/dmitry/experience/')) {
  const canonicalPath = legacyPath.replace(/^\/dmitry/, '') || '/';
  window.history.replaceState(null, '', canonicalPath + window.location.search + window.location.hash);
}
const path = window.location.pathname.replace(/\/$/, '') || '/';
const legacyHash = window.location.hash;
if (legacyHash.startsWith('#dp-') || legacyHash === '#contact') {
  const cleanHash = legacyHash.replace(/^#dp-/, '#').replace(/^#contact$/, '#contacts');
  window.history.replaceState(null, '', window.location.pathname + window.location.search + cleanHash);
}
const { default: App } = await import(path === '/projects' ? './dmitry/ProjectsPage.jsx' : path.startsWith('/projects/') ? './dmitry/ProjectPage.jsx' : path.startsWith('/experience/') ? './dmitry/RolePage.jsx' : './dmitry/Dmitry.jsx');
await import('./dmitry/dmitry.css');
await import('./dmitry/layout.css');
let savedTheme = 'dark';
try { savedTheme = localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'; } catch { /* Storage may be unavailable. */ }
document.documentElement.dataset.theme = savedTheme;
applyPageMetadata(path);
document.querySelector('link[rel="icon"]').href = '/profile/mark.svg';

createRoot(document.getElementById('root')).render(<React.StrictMode><App /><ComparisonSwitcher /></React.StrictMode>);


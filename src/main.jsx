import React from 'react';
import { createRoot } from 'react-dom/client';
import ComparisonSwitcher from './ComparisonSwitcher.jsx';

const { default: App } = await import(window.location.pathname.startsWith('/dmitry/projects/') ? './dmitry/ProjectPage.jsx' : window.location.pathname.startsWith('/dmitry/experience/') ? './dmitry/RolePage.jsx' : './dmitry/Dmitry.jsx');
await import('./dmitry/dmitry.css');
await import('./dmitry/layout.css');
let savedTheme = 'dark';
try { savedTheme = localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'; } catch { /* Storage may be unavailable. */ }
document.documentElement.dataset.theme = savedTheme;
document.title = 'Le Dinh Hoa | Revit Software Developer';
document.querySelector('meta[name="description"]').content = 'Le Dinh Hoa — Revit Software Developer, BIM Automation Engineer and MEP Engineer. Ho Chi Minh City, Vietnam.';
document.querySelector('link[rel="icon"]').href = '/profile/mark.svg';

createRoot(document.getElementById('root')).render(<React.StrictMode><App /><ComparisonSwitcher /></React.StrictMode>);


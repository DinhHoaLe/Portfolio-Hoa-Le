import React from 'react';
import { canonicalProjectPath } from './projectRoutes.js';
export const PENDING_SECTION = 'portfolio-scroll-section';
export default function PortfolioLink({ href, onClick, children, ...props }) {
  const internal = typeof href === 'string' && href.startsWith('/') && !href.startsWith('//');
  const anchor = typeof href === 'string' && (href.startsWith('#') || internal && href.includes('#'));
  const [path, section] = anchor ? href.split('#') : [href, ''];
  const destination = canonicalProjectPath(path || window.location.pathname);
  return <a {...props} href={destination} onClick={event => {
    onClick?.(event);
    if (event.defaultPrevented || !anchor || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || props.target === '_blank') return;
    const target = section.replace(/^dp-/, '').replace(/^contact$/, 'contacts');
    if (destination === window.location.pathname) {
      event.preventDefault();
      const element = document.getElementById(target);
      element?.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
      if (props.className?.includes('skip') && element) { element.tabIndex = -1; element.focus({preventScroll:true}); }
      window.history.replaceState(null, '', destination + window.location.search);
    } else {
      try { sessionStorage.setItem(PENDING_SECTION, target); } catch { /* Navigation still works without storage. */ }
    }
  }}>{children}</a>;
}

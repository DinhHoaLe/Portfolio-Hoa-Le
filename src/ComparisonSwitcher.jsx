import React, { useState } from 'react';
import './comparison.css';

export default function ComparisonSwitcher() {
  const [theme, setTheme] = useState(document.documentElement.dataset.theme || 'dark');
  function changeTheme(value) {
    document.documentElement.dataset.theme = value;
    setTheme(value);
    try { localStorage.setItem('portfolio-theme', value); } catch { /* Keep the theme for this page when storage is unavailable. */ }
  }
  return <div className="comparison-switcher" role="group" aria-label="Color theme"><button aria-pressed={theme === 'light'} onClick={() => changeTheme('light')}><span className="theme-dot theme-dot-light"/>Light</button><button aria-pressed={theme === 'dark'} onClick={() => changeTheme('dark')}><span className="theme-dot theme-dot-dark"/>Dark</button></div>;
}

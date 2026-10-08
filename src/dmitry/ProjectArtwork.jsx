import React from 'react';

// Display regions from the supplied symbol sheet without changing its pixels.
export const addinSymbols = {
  'hoa-project-34': [520, 60],
  'hoa-project-35': [978, 60],
  'hoa-project-36': [62, 402],
  'hoa-project-37': [520, 402],
  'hoa-project-38': [978, 402],
  'hoa-project-39': [62, 744],
  'hoa-project-40': [520, 744],
  'hoa-project-41': [978, 744],
};

export default function ProjectArtwork({projectId, src, alt, className = ''}) {
  const region = addinSymbols[projectId];
  if (!region) return <img className={className || undefined} src={src} alt={alt} loading="lazy"/>;
  return <div className={`dp-addin-symbol ${className}`} role="img" aria-label={alt}>
    <img src="/profile/edited/addin-symbol-sheet.png" alt="" loading="lazy" style={{left:`${-region[0] / 420 * 100}%`,top:`${-region[1] / 240 * 100}%`}}/>
  </div>;
}

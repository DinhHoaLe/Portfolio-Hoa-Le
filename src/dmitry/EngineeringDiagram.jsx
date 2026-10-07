import React from 'react';

const disciplines = [
  ['MEP / BIM', 'Systems & coordination'],
  ['REVIT API', 'Models & parameters'],
  ['AUTOMATION', 'Rules & workflows'],
  ['WEB', 'Interfaces & data'],
];

export default function EngineeringDiagram({ active }) {
  return <div className="dp-engineering-diagram" aria-label="MEP, Revit API, automation and web connected through shared engineering data">
    <div className="dp-diagram-topline"><span>ENGINEERING WORKFLOW</span><span>01 — 04</span></div>
    <div className="dp-diagram-grid">
      <svg viewBox="0 0 400 320" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1"><path d="M90 65H200V255H310M310 65H200M90 255H200"/><circle cx="200" cy="160" r="43"/><circle cx="200" cy="160" r="49" strokeDasharray="2 6"/><path d="M180 160H220M200 140V180"/></g></svg>
      {disciplines.map(([title,description], i) => <div key={title} className={`dp-diagram-node${[[1,2],[0],[0],[3]][i].includes(active) ? ' is-active' : ''}`}><span>0{i+1}</span><strong>{title}</strong><small>{description}</small></div>)}
      <span className="dp-diagram-center">DATA</span>
    </div>
    <div className="dp-diagram-bottomline"><span>MODEL → LOGIC → DELIVERY</span><span>HL / SYSTEMS</span></div>
  </div>;
}

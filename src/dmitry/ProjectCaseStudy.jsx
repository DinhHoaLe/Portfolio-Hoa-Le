import React from 'react';
export default function ProjectCaseStudy({study}) {
  return <>
    <section className="dp-case-study"><h2>My Contribution<span>/</span></h2><p>{study.contribution}</p></section>
    <section className="dp-case-study"><h2>Engineering Problem<span>/</span></h2><p>{study.problem}</p></section>
    <section className="dp-case-study"><h2>Solution & Architecture<span>/</span></h2><p>{study.solution}</p>
      <ol className="dp-case-architecture" aria-label="Solution architecture">{study.architecture.map(([title,description],i)=><li key={title}><span className="dp-case-number">0{i+1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
    </section>
    <section className="dp-case-study"><h2>Workflow<span>/</span></h2><div className="dp-walkthrough-steps">{study.workflow.map(([title,description],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="dp-case-study"><h2>Validation & Limitations<span>/</span></h2><p>{study.validation}</p><ul className="dp-tool-features">{study.limitations.map(item=><li key={item}>{item}</li>)}</ul></section>
  </>;
}

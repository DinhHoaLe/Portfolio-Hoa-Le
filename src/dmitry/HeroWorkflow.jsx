import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import './heroWorkflow.css';
const MepModel3D=lazy(()=>import('./MepModel3D'));

function WebDashboard(){
  return <div className="hw-dashboard">
    <div className="hw-pane-heading">WEB APPLICATION</div>
    <div className="hw-dashboard-window">
      <div className="hw-dashboard-bar"><span className="hw-window-dots" aria-hidden="true"><i/><i/><i/></span><span>Engineering Dashboard</span><span className="hw-dashboard-demo">DEMO</span></div>
      <div className="hw-dashboard-content"><div className="hw-dashboard-title"><strong>Building systems</strong><span>Model data</span></div>
        <div className="hw-dashboard-stats"><div><span>Systems</span><b>03</b></div><div><span>Pumps</span><b>03</b></div><div><span>Model</span><b>MEP</b></div></div>
        <div className="hw-dashboard-bottom"><div className="hw-dashboard-systems"><span><i/>HVAC</span><span><i/>Piping</span><span><i/>Electrical</span></div><svg viewBox="0 0 120 40" role="img" aria-label="Illustrative model data chart"><path d="M0 35H120M0 20H120M0 5H120" fill="none" stroke="#e2e8ee"/><path d="M2 32L20 29L35 30L52 19L68 22L85 10L100 13L118 5L118 38H2Z" fill="#e7eff8"/><path d="M2 32L20 29L35 30L52 19L68 22L85 10L100 13L118 5" fill="none" stroke="#377cb8" strokeWidth="2"/></svg></div>
      </div>
      <div className="hw-dashboard-foot">MODEL → DATA → WEB <span>Illustrative data</span></div>
    </div>
    <div className="hw-web-wire" aria-hidden="true"><span>Data API</span><i/></div>
  </div>;
}

export const WORKFLOW_CODE = `using var tx = new Transaction(
    doc, "Create MEP");

tx.Start();

Pipe.Create(doc,
    systemId, typeId, levelId,
    start, end);

tx.Commit();`;
export const WORKFLOW_PROMPT = 'Create MEP elements from the approved layout.';
export const WORKFLOW_DURATION = 16000;

export function workflowFrame(elapsed, reduced = false) {
  const time = ((elapsed % WORKFLOW_DURATION) + WORKFLOW_DURATION) % WORKFLOW_DURATION;
  const phase = reduced ? 'idle' : time < 6500 ? 'code' : time < 8300 ? 'api' : time < 11500 ? 'prompt' : time < 13500 ? 'mcp' : 'result';
  return {
    phase,
    code: WORKFLOW_CODE.slice(0, reduced ? WORKFLOW_CODE.length : Math.min(WORKFLOW_CODE.length, Math.floor(time / 6500 * WORKFLOW_CODE.length))),
    prompt: WORKFLOW_PROMPT.slice(0, reduced ? WORKFLOW_PROMPT.length : Math.min(WORKFLOW_PROMPT.length, Math.max(0, Math.floor((time - 8300) / 3200 * WORKFLOW_PROMPT.length)))),
  };
}

function ColoredCode({ text }) {
  return text.split(/("[^"\n]*"|\b(?:using|var|new|Transaction|Pipe)\b)/g).map((token, i) =>
    <span key={i} className={token.startsWith('"') ? 'hw-string' : /^(using|var|new)$/.test(token) ? 'hw-keyword' : /^(Transaction|Pipe)$/.test(token) ? 'hw-type' : undefined}>{token}</span>);
}

export default function HeroWorkflow() {
  const root = useRef(null);
  const [elapsed, setElapsed] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => setReduced(preference.matches);
    const syncVisibility = () => setPageVisible(!document.hidden);
    syncMotion();
    syncVisibility();
    preference.addEventListener('change', syncMotion);
    document.addEventListener('visibilitychange', syncVisibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold:0.15 });
    observer.observe(root.current);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', syncMotion);
      document.removeEventListener('visibilitychange', syncVisibility);
    };
  }, []);

  const running = visible && pageVisible && !paused && !reduced;
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setElapsed(value => (value + 40) % WORKFLOW_DURATION), 40);
    return () => window.clearInterval(timer);
  }, [running]);

  const frame = workflowFrame(elapsed, reduced);
  const labels = {code:'Typing C# code', api:'Code → Revit API → Model', prompt:'Typing an AI prompt', mcp:'AI → MCP → Model', result:'Workflow complete', idle:'Code + AI / MCP → Revit model'};
  return <figure ref={root} className="dp-hero-workflow" data-phase={frame.phase} data-running={running} aria-label="Animated illustration of code and AI interacting with a Revit MEP model">
    <div className="hw-grid">
      <div className="hw-pane hw-code-pane" aria-hidden="true">
        <div className="hw-pane-heading">CODE AUTOMATION</div>
        <div className="hw-code-window">
          <div className="hw-window-bar"><span className="hw-window-dots"><i/><i/><i/></span><span>C# / Revit API</span></div>
          <pre className="hw-code"><code><ColoredCode text={frame.code}/>{frame.phase === 'code' && <span className="hw-caret"/>}</code></pre>
          <div className="hw-code-footer">{['api','result'].includes(frame.phase) ? 'Transaction preview' : 'MEP automation.cs'}</div>
        </div>
      </div>
      <div className="hw-wire hw-wire-code" aria-hidden="true"><span className="hw-wire-label">Revit API</span><i className="hw-travel-dot"/></div>
      <div className="hw-model-column"><WebDashboard/><div className="hw-model"><Suspense fallback={<img className="hw-model-fallback" src="/profile/edited/revit-mep-model-cutout.webp" alt="Loading illustrative MEP model"/>}><MepModel3D running={running} phase={frame.phase}/></Suspense><span>INTERACTIVE MEP MODEL <small>Original 3D illustration</small></span></div></div>
      <div className="hw-wire hw-wire-ai" aria-hidden="true"><span className="hw-wire-label">MCP</span><i className="hw-travel-dot"/></div>
      <div className="hw-pane hw-ai-pane" aria-hidden="true">
        <div className="hw-pane-heading">AI-ASSISTED WORKFLOWS</div>
        <div className="hw-ai-window">
          <div className="hw-window-bar"><span className="hw-window-dots"><i/><i/><i/></span><span>AI Assistant</span></div>
          <div className="hw-ai-content"><span className="hw-ai-mark">AI</span><div className="hw-prompt">{frame.prompt || <span className="hw-placeholder">Describe a Revit task…</span>}{frame.phase === 'prompt' && <span className="hw-caret"/>}</div><div className="hw-ai-status"><span className="hw-status-dot"/>{frame.phase === 'mcp' ? 'MCP tool request' : frame.phase === 'result' ? 'Model response' : 'Prompt → Tool call → Result'}</div></div>
        </div>
      </div>
    </div>
    <figcaption className="hw-footer"><span>DEMO ANIMATION <span className="hw-phase-label">/ {labels[frame.phase]}</span></span>{!reduced && <button type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused}>{paused ? 'Play animation' : 'Pause animation'}</button>}</figcaption>
  </figure>;
}

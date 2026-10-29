import React, { useEffect, useRef, useState } from 'react';
import './heroWorkflow.css';
function WebDashboard() {
  return <div className="hw-web-preview" aria-label="Illustrative web dashboard">
    <div className="hw-web-preview-bar"><span className="hw-window-dots" aria-hidden="true"><i/><i/><i/></span><span>Engineering Dashboard</span><span className="hw-web-preview-label">WEB UI</span></div>
    <div className="hw-web-preview-body"><div className="hw-web-metrics"><div><span>Systems</span><b>03</b></div><div><span>Pumps</span><b>03</b></div><div><span>Model</span><b>MEP</b></div></div><div className="hw-web-chart"><span>Model insights</span><svg viewBox="0 0 120 36" aria-hidden="true"><path d="M1 30H119M1 15H119" fill="none" stroke="#e4eaf0"/><path d="M2 29 20 25 36 27 52 17 68 20 85 10 100 13 118 4V35H2Z" fill="#e8f0f8"/><path d="M2 29 20 25 36 27 52 17 68 20 85 10 100 13 118 4" fill="none" stroke="#377cb8" strokeWidth="1.8"/></svg></div></div>
    <div className="hw-web-preview-foot"><span>MODEL → DATA → WEB</span><span>Illustrative data</span></div>
  </div>;
}
export const WORKFLOW_CODE = `using var tx =
    new Transaction(doc,
        "Create MEP");
tx.Start();
Pipe.Create(
    doc, systemId, typeId,
    levelId, start, end);
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
  const [revitLink, setRevitLink] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const grid = root.current.querySelector('.hw-grid');
    const model = grid.querySelector('.hw-model img');
    const code = grid.querySelector('.hw-code-window');
    const ai = grid.querySelector('.hw-ai-window');
    const dashboard = grid.querySelector('.hw-web-preview');
    let active = true;
    const syncLink = () => {
      if (!active || !model.isConnected || !code.isConnected || !ai.isConnected || !dashboard.isConnected) return;
      const bounds = grid.getBoundingClientRect();
      const image = model.getBoundingClientRect();
      const window = code.getBoundingClientRect();
      const assistant = ai.getBoundingClientRect();
      const web = dashboard.getBoundingClientRect();
      const webX = web.right - bounds.left + 8;
      const webY = web.top - bounds.top + web.height * .5;
      const codeX = window.left - bounds.left - 8;
      const codeY = window.top - bounds.top + window.height * .78;
      const webBend = (webX + codeX) / 2;
      const ratio = (model.naturalWidth || 1016) / (model.naturalHeight || 1040);
      const imageWidth = Math.min(image.width, image.height * ratio);
      const imageHeight = Math.min(image.height, image.width / ratio);
      const targetX = image.left - bounds.left + image.width / 2 + imageWidth * .35;
      const targetY = image.top - bounds.top + (image.height - imageHeight) / 2 + imageHeight * .68;
      const startX = window.left - bounds.left;
      const startY = window.top - bounds.top + window.height * .5;
      const bendX = targetX + (startX - targetX) * .52;
      const aiX = assistant.left - bounds.left;
      const aiY = assistant.top - bounds.top + assistant.height * .5;
      setRevitLink({webPath:`M ${webX} ${webY} H ${webBend} V ${codeY} H ${codeX}`,webLabelX:webBend,webLabelY:Math.max(webY,codeY) + 20,width:bounds.width,height:bounds.height,path:`M ${startX} ${startY} H ${bendX} V ${targetY} H ${targetX}`,labelX:(bendX + startX) / 2,labelY:startY - 11,mcpPath:`M ${aiX} ${aiY} H ${targetX}`,mcpLabelX:(targetX + aiX) / 2,mcpLabelY:aiY - 11});
    };
    const observer = new ResizeObserver(syncLink);
    [grid, model, code, ai, dashboard].forEach(element => observer.observe(element));
    model.addEventListener('load', syncLink);
    document.fonts.ready.then(syncLink);
    syncLink();
    return () => { active = false; observer.disconnect(); model.removeEventListener('load', syncLink); };
  }, []);

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
      {revitLink && <svg className="hw-revit-connector" viewBox={`0 0 ${revitLink.width} ${revitLink.height}`} aria-hidden="true"><defs><marker id="hw-revit-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M2 1L8 5L2 9" fill="none" stroke="#7797b7" strokeWidth="1.2"/></marker><marker id="hw-web-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#7797b7" strokeWidth="1.2"/></marker></defs><path className="hw-revit-route" d={revitLink.path} markerEnd="url(#hw-revit-arrow)"/><circle className="hw-revit-signal" r="2.5" style={{offsetPath:`path('${revitLink.path}')`}}/><text x={revitLink.labelX} y={revitLink.labelY} textAnchor="middle">Revit API</text><path className="hw-revit-route" d={revitLink.mcpPath} markerEnd="url(#hw-revit-arrow)"/><circle className="hw-revit-signal hw-mcp-signal" r="2.5" style={{offsetPath:`path('${revitLink.mcpPath}')`}}/><path className="hw-revit-route" d={revitLink.webPath} markerStart="url(#hw-web-arrow)" markerEnd="url(#hw-revit-arrow)"/><text x={revitLink.webLabelX} y={revitLink.webLabelY} textAnchor="middle">Web API</text><text x={revitLink.mcpLabelX} y={revitLink.mcpLabelY} textAnchor="middle">MCP</text></svg>}
      <div className="hw-model-column"><div className="hw-model"><img src="/profile/edited/revit-mep-model-cutout.webp" alt="Revit MEP model illustration with ductwork, blue piping and mechanical equipment" fetchPriority="high"/><span>REVIT MODEL</span></div><div className="hw-model-web-link" aria-label="Model and dashboard exchange data through a database"><span>Database</span><i aria-hidden="true"/></div><WebDashboard/></div>
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

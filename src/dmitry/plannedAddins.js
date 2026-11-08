// Platform roadmap and repository-backed add-in details.
const planned = {
  customer:'Personal product concept', role:'Architecture & roadmap planning',
  status:'Planned platform — implementation and testing pending',
  tools:['C#','.NET','Revit API','WPF'],
  scopeNote:'This is a proposed platform roadmap, not completed software. The initial release is intentionally limited; later modules require separate implementation and validation. Supported Revit versions and in-model test results have not yet been recorded.',
  sections:[], links:[],
};

export const plannedAddins = {
  'hoa-project-59': {
    ...planned,
    title:'BIM Data & Standards Platform',
    description:'A proposed Revit platform for project-wide parameter governance, family data consistency, standards checking, reviewed batch updates, and traceable BIM data delivery.',
    toolContent:[
      {title:'Product Vision',paragraphs:['Connect model data collection, standards validation, change review, and delivery reporting in one workflow, with reusable rule profiles across projects.']},
      {title:'Planned Modules',items:[
        'Model inventory: collect scoped elements, families, types, parameters, levels, and systems.',
        'Standards profiles: manage required parameters, naming conventions, permitted values, and shared-parameter identity.',
        'Data synchronization: compare approved external data with model values and preview changes before applying them.',
        'Review and reporting: group issues by rule, category, and element ID; export traceable review reports.',
        'Delivery checks: prepare model-data snapshots and compare changes between recorded review runs.',
      ]},
      {title:'Initial Release Scope',paragraphs:['Start with the active document, an explicit element scope, required-parameter checks, JSON rule profiles, and a before/after preview for selected writable parameter updates. Keep cross-project synchronization, a shared web dashboard, and automated corrections as later milestones.']},
      {title:'Proposed Architecture',paragraphs:['A Revit adapter collects data and applies approved transactions. Separate data contracts, a rule engine, and a change-plan layer keep validation independent from the WPF review interface and report exporters. Persistent storage and multi-user access are later design decisions.']},
      {title:'Workflow',paragraphs:['Choose scope and rule profile → Collect model data → Validate → Review issues and proposed changes → Apply approved edits → Read back results → Export review snapshot.']},
      {title:'Validation Plan',items:[
        'Use demo models with known parameter and naming issues; reconcile all report rows against actual element IDs.',
        'Test missing/shared/read-only parameters, invalid value types, duplicate identifiers, and changed elements between preview and apply.',
        'Verify that updates affect only approved targets, failed transactions roll back, and reports distinguish completed, skipped, and failed changes.',
      ]},
    ],
  },
  'hoa-project-60': {
    title:'MEP Live Clash Monitor',
    customer:'Personal Revit add-in project',
    role:'Revit Add-in Developer',
    status:'Revit 2023 add-in — native Revit integration validation pending',
    description:'A Revit 2023 add-in that checks physical clashes when drawing or moving pipes, ducts, cable trays, and conduits. It checks host geometry and directly placed loaded Revit links before transaction commit, with an Ignore/Cancel review dialog and session-based recognition of accepted clash regions.',
    tools:['C# 7.3','.NET Framework 4.8','Revit 2023 API','WPF / XAML'],
    scopeNote:'Source project: MEP_Warning_Clash_ver1. Detection runs at transaction commit, not during mouse-move preview. Build and standalone regression checks do not establish native Revit transaction, geometry, link-transform, or UI correctness.',
    sections:[],
    links:[['Source code','https://github.com/DinhHoaLe/MEP_Warning_Clash_ver1']],
    toolContent:[
      {title:'Problem',paragraphs:['Drawing or moving MEP elements can introduce physical overlaps with architectural, structural, or MEP geometry. This add-in brings a clash review into the current editing operation so the user can accept the reported overlap or cancel the operation.']},
      {title:'Key Features',items:[
        'Start monitoring once, then use normal Revit drawing and Move tools; no preselection or Finish step is required.',
        'Check added or geometry-changed host pipes, ducts, cable trays, and conduits against supported host elements and directly placed loaded RVT links.',
        'Filter candidates by category and bounding box, then check positive-volume solid intersections; exclude direct and one-fitting-hop host connections.',
        'Review a WPF dialog with expandable element IDs, Revit Link names, and linked target IDs. Ignore accepts the reported clashes for that operation; Cancel, Esc, or closing the dialog rolls back the current transaction.',
        'Remember accepted element pairs and overlap regions per document for the current session. An unchanged accepted crossing avoids repeated prompts; a changed region, new target, or recurrence after a committed resolution requires review again.',
        'Keep unrelated native Revit errors and geometry-validation errors blocking; only the reviewed custom clash warnings are handled.',
        'Provide Start/Stop commands and an optional selected-element clash audit.',
      ]},
      {title:'Workflow',paragraphs:['Start monitor → Draw or move MEP normally → Filter changed-element candidates → Check solid intersections in the host and loaded links → Review Ignore/Cancel → Commit the accepted operation or roll back the current transaction.']},
      {title:'Implementation',paragraphs:['C# 7.3, .NET Framework 4.8, x64, Revit 2023 API, and WPF/XAML, with no NuGet dependencies. An IUpdater detects changed MEP geometry; a startup failure-processing handler presents the clash decision. Commit finalizers promote accepted regions only after a successful commit. Linked solids are transformed into host coordinates, and acceptance keys distinguish separate placements of the same linked model.']},
      {title:'Installation & Operation',paragraphs:['For Add-In Manager (Manual), install the matching V3 startup helper and restart Revit, then load the main DLL and run StartMonitorCommand. Stop through the same host before rebuilding or switching hosts. Alternatively, install the full application package for automatic startup and ribbon Start/Stop controls.']},
      {title:'Validation Status',paragraphs:['The repository reports builds against Revit 2023 assemblies and 40 standalone bookkeeping/acceptance assertions, including linked-ID collisions and repeated link instances. These checks do not execute native Revit Boolean geometry, link transforms, failure UI, or transaction finalizer order. The Ignore/Cancel interaction and host/link integration checklist still require live Revit validation.']},
      {title:'Current Limitations',items:[
        'Physical volume overlaps only; touching without overlap is not a clash. Clearance solving and automatic rerouting are not implemented.',
        'No initial full-model scan. Moving only an obstacle or moving/reloading a link does not independently scan stationary host MEP.',
        'Only directly placed loaded RVT links are checked; nested links are not traversed, and host-view phase/design-option visibility matching is not implemented.',
        'Mirrored links and complex Boolean geometry require native integration validation. Geometry extraction/intersection errors remain blocking validation errors.',
        'Detection is synchronous before commit; large edits or complex geometry can pause Revit. Cancel can roll back multiple changes within the same native transaction.',
        'Accepted regions are session-only and are not saved in RVT files. Stop, Undo/Redo, document close, and relevant deletion events clear the corresponding acceptance state.',
      ]},
    ],
  },
};

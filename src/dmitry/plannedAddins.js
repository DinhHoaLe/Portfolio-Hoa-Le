// Product-scale roadmap concepts, not implemented or tested add-ins.
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
    ...planned,
    title:'MEP Coordination & Routing Platform',
    description:'A proposed Revit platform for inspecting MEP system topology, reviewing coordination issues, comparing route alternatives, and applying approved routing changes with connection verification.',
    toolContent:[
      {title:'Product Vision',paragraphs:['Bring MEP network inspection, coordination findings, route planning, preview, and post-change validation into a single engineering workflow. Proposed routes remain subject to engineering review.']},
      {title:'Planned Modules',items:[
        'System topology: build a connector-based network view and identify open ends or disconnected branches.',
        'Coordination review: inspect supported host/link geometry and report verified conflicts and clearance-rule findings.',
        'Route planning: propose alternatives for a bounded straight rigid pipe or duct segment using explicit offsets, exclusions, and fitting constraints.',
        'Change preview: compare existing and proposed geometry, affected elements, and connection requirements before applying a route.',
        'Post-change checks: verify connections, types, dimensions, system information, and remaining coordination issues.',
      ]},
      {title:'Initial Release Scope',paragraphs:['Start with a single selected horizontal rigid pipe or duct in a demo model, a small explicit obstacle set, and reviewed vertical-offset alternatives. Exclude complete network regeneration, flexible or branched routes, fabrication parts, and claims of globally optimal routing from the initial release.']},
      {title:'Proposed Architecture',paragraphs:['Use a Revit geometry/connector adapter, a scoped network graph, configurable engineering constraints, a route-candidate generator, a preview interface, and a transaction-based change executor. Separate geometry checks from route ranking and from engineering approval.']},
      {title:'Workflow',paragraphs:['Select system scope → Inspect network and obstacles → Set constraints → Generate and compare supported alternatives → Review route → Apply → Verify connections and geometry → Report results.']},
      {title:'Validation Plan',items:[
        'Use seeded demo clashes and known network connections to check detection coverage and route feasibility.',
        'Test rotated links, incompatible fittings, insufficient clearance, minimum segment lengths, and unsatisfied connection constraints.',
        'Confirm that rejected or failed routes leave the original model intact. Record unresolved issues rather than reporting an unverified clash-free result.',
      ]},
    ],
  },
};

// Project descriptions supplied in Description Tool.txt.
export const toolDescriptions = {
  "hoa-project-41": {
    "description": "A Revit add-in I developed to simplify sheet management and drawing layout preparation.",
    "role": "Revit Add-in Developer",
    "customer": "MEP tool collection",
    "tools": [
      "C#",
      "Revit API",
      "WPF",
      ".NET Framework 4.8",
      "ExternalEvent"
    ],
    "sections": [],
    "toolContent": [
      {
        "title": "Problem",
        "paragraphs": [
          "Creating sheets, assigning floor plans, and adjusting layouts require repetitive manual work, especially when projects use different drawing standards."
        ]
      },
      {
        "title": "Key Features",
        "items": [
          "Create sheets manually or import sheet numbers and names from Excel or JSON.",
          "Search, filter, rename, delete sheets, and edit parameters.",
          "Assign, replace, or remove floor plan viewports.",
          "Preview layouts with title block selection, four-sided padding, and alignment controls.",
          "Save reusable setups and transfer them through JSON or CSV.",
          "Manage revisions and create or duplicate floor plans.",
          "Track pending changes and errors, with Stop available between placement steps."
        ]
      },
      {
        "title": "Workflow",
        "paragraphs": [
          "Load project data → Prepare sheets → Select floor plans and layouts → Review → Apply changes."
        ]
      },
      {
        "title": "Technologies",
        "paragraphs": [
          "C# · Revit API · WPF · .NET Framework 4.8\nExternalEvent handles document operations, while transactions control changes and rollback."
        ]
      },
      {
        "title": "Benefits",
        "paragraphs": [
          "Consolidates repetitive tasks, supports consistent layouts, and allows users to review placement before modifying the project."
        ]
      },
      {
        "title": "Current Limitations",
        "paragraphs": [
          "The current build targets Revit 2023. Automated data and interface checks have passed; the latest changes still require runtime verification in Revit. Imports do not transfer model content or families. Previews exclude title block text and logos."
        ]
      }
    ]
  },
  "hoa-project-38": {
    "title": "MEP Tool — Create & Update MEP Elements from IFC",
    "description": "A Revit add-in for creating and updating supported native MEP elements from linked IFC models, including ducts, pipes, conduits, cable trays, and duct fitting family instances. It tracks IFC changes and supports updates to eligible elements across supported categories.",
    "role": "Revit Add-in Developer",
    "customer": "MEP tool collection",
    "tools": [
      "C#",
      "Revit API",
      "WPF",
      ".NET Framework 4.8"
    ],
    "sections": [],
    "toolContent": [
      {
        "title": "Problem",
        "paragraphs": [
          "Linked IFC elements are not always directly editable as native Revit MEP components. Manual reconstruction involves repeatedly checking geometry, dimensions, system information, and placement. Later IFC revisions also require identifying changes while protecting manual edits."
        ]
      },
      {
        "title": "Key Features",
        "items": [
          "Search by element ID or name, with filtering, sorting, and selection controls.",
          "Inspect IFC properties across multiple elements, displaying shared values or <varies>.",
          "Preview individual source elements and locate them using Zoom to IFC Source.",
          "Configure Revit types, systems, and levels for supported creation workflows.",
          "Check for tracked duplicates and geometric overlaps in supported workflows.",
          "Compare source elements with existing geometry, dimensions, profile orientation, and mapped system types.",
          "Map element types, system types, levels, and worksets, with project-stored mappings.",
          "Follow existing project system types or create new types using a template or classification.",
          "Preview tracked IFC changes and update eligible MEP elements across supported categories.",
          "Provide optional duct fitting and host air-terminal connections using Revit Routing Preferences.",
          "Report creation results with configurable rollback or partial-success handling.",
          "Export selected elements to CSV, TSV, JSON, and XML, preserving individual parameter values."
        ]
      },
      {
        "title": "Workflow",
        "paragraphs": [
          "Select IFC link and category → Review sources and tracked changes → Configure mappings → Create or update MEP elements → Review results and exclusions → Continue with another batch."
        ]
      },
      {
        "title": "Technologies",
        "paragraphs": [
          "C#, .NET Framework 4.8, WPF, and the Revit API handle source inspection, element creation, and updates. Extensible Storage records source identity and revision snapshots. Builds target Windows x64 and Revit 2023/2024."
        ]
      },
      {
        "title": "Benefits",
        "paragraphs": [
          "Reduces repetitive reconstruction and revision work by keeping source inspection, mapping, creation, updates, and data export within one workflow, with visible exclusions and failures."
        ]
      },
      {
        "title": "Current Limitations",
        "paragraphs": [
          "Geometry support is limited to implemented representations in STEP IFC2X3/IFC4. Duct fitting placement depends on compatible families. Pipes, conduits, and cable trays do not automatically connect fittings. Unsupported geometry and complete network reconstruction remain outside scope. IFC System Name is retained as metadata rather than assigned as the Revit system name. Builds and automated data-processing and interface checks do not establish correctness across real Revit models; in-application validation of creation and updates remains necessary."
        ]
      }
    ]
  },
  "hoa-project-52": {
    "description": "Clash Solution identifies hard clashes between two configurable element sets in the current Revit model and loaded links, supporting MEP and structural coordination.",
    "role": "Revit Add-in Developer",
    "customer": "MEP tool collection",
    "tools": [
      "C#",
      "Revit API",
      "WPF / XAML",
      "ExternalEvent",
      ".NET Framework 4.8",
      ".NET 8"
    ],
    "sections": [],
    "toolContent": [
      {
        "title": "Problem",
        "paragraphs": [
          "Coordination requires repeatedly selecting model sources, filtering elements, inspecting intersections, and recording findings. The tool brings these tasks into a modeless interface with reusable settings."
        ]
      },
      {
        "title": "Key Features",
        "items": [
          "Configure sets A/B by source, category, model/view/level scope, and independent parameter rules with AND/OR logic.",
          "Detect solid intersections using spatial-grid candidate filtering, configurable overlap thresholds, and optional exclusion of directly connected MEP pairs.",
          "Run intersection checks in batches with progress reporting and cancellation.",
          "Inspect paired elements in a colored 3D preview and navigate to clashes using Revit section boxes.",
          "Apply and restore view color overrides for host elements.",
          "Save, import, and export JSON profiles; export results to CSV and formatted XLSX."
        ]
      },
      {
        "title": "Workflow",
        "paragraphs": [
          "Select sources → Define sets and criteria → Run checks → Inspect clashes → Export results."
        ]
      },
      {
        "title": "Technologies",
        "paragraphs": [
          "C#, Revit API, WPF/XAML, and ExternalEvent; .NET Framework 4.8 for Revit 2023/2024 and .NET 8 for Revit 2025."
        ]
      },
      {
        "title": "Benefits",
        "paragraphs": [
          "Reusable profiles support consistent checks, while navigation and exports connect model inspection with coordination reporting."
        ]
      },
      {
        "title": "Current Limitations",
        "paragraphs": [
          "Separate builds target Revit 2023–2025. Detection covers positive-volume intersections, excluding face contact and clearance checks. Linked-element visibility filtering is approximate; view coloring supports host elements only. Initial collection is synchronous. Documented builds, automated core checks, and XAML rendering passed; geometry, navigation, cancellation, and color overrides still require validation inside Revit with real models."
        ]
      }
    ]
  },
  "hoa-project-6": {
    "description": "MEP Create Support places pipe support families along a selected straight pipe, using a selected floor underside to calculate vertical support heights.",
    "role": "Revit Add-in Developer",
    "customer": "MEP tool collection",
    "tools": [
      "C#",
      "Revit API",
      "WPF / XAML",
      ".NET Framework 4.8",
      "MSBuild"
    ],
    "sections": [],
    "toolContent": [
      {
        "title": "Problem",
        "paragraphs": [
          "Manual support placement requires repeated positioning, spacing, rotation, and parameter adjustments. Sloped pipes and different family orientations add further setup work."
        ]
      },
      {
        "title": "Key Features",
        "items": [
          "Configurable spacing and starting offset in millimeters.",
          "Distance measurement along the 3D pipe or its XY projection.",
          "Elevation interpolation for sloped pipes and floor-intersection height calculation.",
          "Connector-based orientation with manual X/Y axis and family-origin options.",
          "Optional first-support preview with 90-degree rotation adjustments.",
          "Parameter validation, transaction rollback, and created/skipped position reporting."
        ]
      },
      {
        "title": "Workflow",
        "paragraphs": [
          "Configure settings → Select pipe → Select floor underside → Optionally adjust preview → Create supports → Review results."
        ]
      },
      {
        "title": "Technologies",
        "paragraphs": [
          "C# and .NET Framework 4.8 provide the application logic. The Revit API handles selection, geometry, family placement, and transactions. WPF/XAML provides the interface; MSBuild creates separate Revit 2023 and 2024 builds."
        ]
      },
      {
        "title": "Benefits",
        "paragraphs": [
          "Reduces repetitive placement and parameter editing while giving users control over spacing, orientation, and insertion height."
        ]
      },
      {
        "title": "Current Limitations",
        "paragraphs": [
          "Supports straight, nonvertical pipes and floors in the current model. Requires the TEST/Standard Mechanical Equipment family, unhosted and level-based, with writable Pipe Diameter and Height instance parameters. Supports remain upright; existing placements are not automatically updated.",
          "Both version builds and automated layout, rotation, and WPF checks passed. User-provided Revit screenshots show execution, but comprehensive geometry and family-behavior testing across both versions remains unverified."
        ]
      }
    ]
  },
  "hoa-project-2": {
    "description": "A Revit tool for creating vertical offsets and moving rigid ducts, pipes, cable trays and conduits through a modeless interface.",
    "role": "Revit Add-in Developer",
    "customer": "MEP tool collection",
    "tools": [
      "C#",
      "Revit API",
      "WPF / XAML",
      ".NET Framework 4.8",
      "ExternalEvent"
    ],
    "sections": [],
    "toolContent": [
      {
        "title": "Problem",
        "paragraphs": [
          "Adjusting MEP elevations involves repeated element selection, segment creation, fitting placement and connection checks. The tool combines these steps into a configurable workflow."
        ]
      },
      {
        "title": "Key Features",
        "items": [
          "Cut Up/Down operations with 45° or 90° transitions and four elbow fittings.",
          "Move Up/Down for multiple elements and associated fittings.",
          "Offset input in millimeters with positive-value validation.",
          "Source-element copying to retain types, section dimensions and instance parameters.",
          "Connection checks, transaction rollback and selection cancellation handling.",
          "Dynamic route previews, 24 exported symbols and a custom application icon."
        ]
      },
      {
        "title": "Workflow",
        "paragraphs": [
          "Select MEP category → Choose operation, angle and offset → Apply → Pick two points or select elements → Complete or review the error message."
        ]
      },
      {
        "title": "Technologies",
        "paragraphs": [
          "C#, Autodesk Revit API and .NET Framework 4.8 implement element operations and transactions. WPF/XAML provides the interface; ExternalEvent handles modeless requests. MSBuild and PowerShell support compilation and preview rendering."
        ]
      },
      {
        "title": "Benefits",
        "paragraphs": [
          "Provides a consistent workflow for elevation adjustments, with visual guidance and explicit handling of invalid inputs or failed connections."
        ]
      },
      {
        "title": "Current Limitations",
        "paragraphs": [
          "Targets Revit 2024 on x64. Cut requires straight, horizontal elements and compatible configured elbows; flexible, curved, branched, pinned and grouped elements are excluded. Move remains subject to Revit constraints. Insulation, lining and geometry-dependent parameters require model verification. Automated builds and preview rendering passed; geometry and fitting operations have not been tested inside Revit."
        ]
      }
    ]
  },
  "hoa-project-35": {
    "description": "A Revit add-in for reviewing project health and configurable BIM standards. It analyzes selected rules in the active project and exports findings to JSON or an HTML dashboard.",
    "role": "Revit Add-in Developer",
    "customer": "MEP tool collection",
    "tools": [
      "C#",
      "Revit API",
      "WPF",
      ".NET Framework 4.8",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "sections": [],
    "toolContent": [
      {
        "title": "Problem",
        "paragraphs": [
          "Project reviews require repeated inspection of warnings, naming conventions, links, documentation, and MEP systems. The tool organizes these checks and connects findings to relevant element identifiers."
        ]
      },
      {
        "title": "Key Features",
        "items": [
          "Selectable checks for warnings, CAD/Revit links, families, views, sheets, rooms, and spaces.",
          "Configurable JSON profiles for naming patterns, required worksets, base-point values, and tolerances.",
          "Checks for unpinned levels/grids, duplicate geometry, and duct/pipe system assignment or connectivity.",
          "Grouped results, recommendations, Element IDs, and copy controls.",
          "Health scoring that separates assessed standards from review-only checks.",
          "A responsive, 12-section HTML dashboard with search, filters, pagination, JSON import/download, and browser printing."
        ]
      },
      {
        "title": "Workflow",
        "paragraphs": [
          "Open Revit project → Configure profile → Select checks → Run analysis → Review findings → Export JSON/HTML."
        ]
      },
      {
        "title": "Technologies",
        "paragraphs": [
          "C# and .NET Framework 4.8 implement the add-in; the Revit API accesses model data. WPF provides the desktop interface. HTML, CSS, and JavaScript provide local report viewing."
        ]
      },
      {
        "title": "Benefits",
        "paragraphs": [
          "Centralizes review findings, supports consistent project standards, and provides shareable reports for follow-up."
        ]
      },
      {
        "title": "Current Limitations",
        "paragraphs": [
          "Targets Windows and Revit 2023. Analysis covers selected rules without automatic corrections or history tracking. MEP checks exclude fabrication. Known issues include missed duplicate-level pairs and rejected profiles with omitted tolerances. Compilation and automated browser checks using sample data passed; operation inside Revit remains unverified."
        ]
      }
    ]
  },
  "hoa-project-37": {
    "description": "A Revit tool collection for creating ducts, cable trays, pipes, conduits, and lines from CAD drawings. The round-duct workflow converts paired CAD boundaries into native duct segments using imports or links from the current model or directly loaded Revit links.",
    "role": "Revit Add-in Developer",
    "customer": "MEP tool collection",
    "tools": [
      "C#",
      "Revit API",
      "WPF",
      ".NET Framework 4.8",
      "Open XML"
    ],
    "sections": [],
    "toolContent": [
      {
        "title": "Problem",
        "paragraphs": [
          "Rebuilding MEP routes from CAD requires repetitive tracing and element creation. The collection covers ducts, cable trays, pipes, conduits, and lines. In the round-duct workflow, paired CAD boundaries provide centerlines and diameters for review before creation."
        ]
      },
      {
        "title": "Key Features",
        "items": [
          "Create ducts, cable trays, pipes, conduits, and lines from CAD input through the corresponding creation workflows.",
          "Select source models, CAD files, boundary layers, and connector layers for the round-duct workflow.",
          "Detect boundary pairs with adjustable length and endpoint tolerances.",
          "Preview route lengths, diameters, and start/end coordinates.",
          "Configure duct type, mechanical system type, level, and centerline offset.",
          "Skip existing matching ducts and validate created geometry and dimensions.",
          "Create batches in one transaction, with rollback on failure and progress indicators.",
          "Review created elements and export an Excel report without requiring Excel."
        ]
      },
      {
        "title": "Workflow",
        "paragraphs": [
          "Select CAD source → Choose the target category (Duct, Cable Tray, Pipe, Conduit, or Line) → Review CAD geometry → Create the corresponding Revit elements.",
          "Round ducts: select CAD source → Choose layers → Review detected routes → Configure ducts → Create batch → Review or export results."
        ]
      },
      {
        "title": "Technologies",
        "paragraphs": [
          "C#, .NET Framework 4.8, Revit API for model access and duct creation, WPF for the interface, PowerShell for build and installation, and Open XML packaging for Excel export."
        ]
      },
      {
        "title": "Benefits",
        "paragraphs": [
          "Reduces repetitive geometry entry and provides consistent batch configuration, duplicate checks, and traceable creation reports."
        ]
      },
      {
        "title": "Current Limitations",
        "paragraphs": [
          "Round-duct workflow: targets Revit 2023/2024 and supports straight, horizontal round duct segments. Fittings are not connected automatically; curves and nested block boundaries are excluded. Implemented runtime checks do not establish test coverage; representative in-Revit testing remains unconfirmed in the available evidence."
        ]
      }
    ]
  },
  "hoa-project-34": {
    "title": "Family Data Studio",
    "description": "Family Data Studio analyzes Revit family files, exports their data to JSON, and supports parameter transfer into the currently open family.",
    "role": "Revit Add-in Developer",
    "customer": "MEP tool collection",
    "tools": [
      "C#",
      "Revit API",
      "WPF / XAML",
      ".NET Framework 4.8",
      "Newtonsoft.Json"
    ],
    "sections": [],
    "toolContent": [
      {
        "title": "Problem",
        "paragraphs": [
          "Reviewing multiple families and recreating parameter definitions requires repeated inspection and manual entry. The tool brings source data, destination previews, and transfer options into one workflow."
        ]
      },
      {
        "title": "Key Features",
        "items": [
          "Analyze .rfa files in a selected folder and export a reusable JSON report.",
          "Inspect family metadata, parameter definitions, formulas, formatting, and per-Type values.",
          "Apply predefined checks for file size, specific parameters, and nested families.",
          "Search, filter, and sort family and parameter lists.",
          "Transfer parameter definitions with optional group, instance/type scope, unit, precision, and symbol changes.",
          "Copy values between selected or matching Types, or copy formulas with dependency and Revit assignment checks."
        ]
      },
      {
        "title": "Workflow",
        "paragraphs": [
          "Select folder or JSON report → Review families → Select parameters → Configure and validate transfer → Apply to open family."
        ]
      },
      {
        "title": "Technologies",
        "paragraphs": [
          "C# and .NET Framework 4.8; Revit 2023 API for family access and transactions; WPF/XAML for the interface; Newtonsoft.Json for report serialization."
        ]
      },
      {
        "title": "Benefits",
        "paragraphs": [
          "Supports consistent parameter review and reuse while reducing repeated data entry."
        ]
      },
      {
        "title": "Current Limitations",
        "paragraphs": [
          "Targets Revit 2023 on Windows x64. Folder analysis excludes subfolders; health rules are predefined. Element references cannot be copied. Shared parameters require matching GUIDs in Revit’s configured file. Format changes affect other parameters of the same data type. Debug/Release builds and image-resource checks passed; these automated checks do not establish runtime correctness inside Revit. No automated test suite or documented in-Revit validation results are available."
        ]
      }
    ]
  },
  "hoa-project-40": {
    "description": "A Revit add-in that places loaded equipment families at CAD block insertion points, using drawings imported or linked into the host model or a directly loaded Revit link.",
    "role": "Revit Add-in Developer",
    "customer": "MEP tool collection",
    "tools": [
      "C#",
      "Revit API",
      "WPF",
      ".NET Framework 4.8",
      "AutoLISP"
    ],
    "sections": [],
    "toolContent": [
      {
        "title": "Problem",
        "paragraphs": [
          "Transferring equipment locations from CAD into Revit involves repetitive placement, elevation entry and duplicate checking. The tool groups these tasks into a selectable, layer-based workflow."
        ]
      },
      {
        "title": "Key Features",
        "items": [
          "Layer filtering, block selection and CAD geometry previews, including mirrored blocks.",
          "Category, family, type, level and offset selection, with supported host picking.",
          "Optional workset and Comments assignment.",
          "Existing-equipment checks within a 1 mm XYZ tolerance.",
          "Per-row and overall progress, with transaction rollback on failure.",
          "Optional completion reports and Excel export; the window remains open for subsequent layers."
        ]
      },
      {
        "title": "Workflow",
        "paragraphs": [
          "Select CAD source → Choose layer and blocks → Configure placement → Place equipment → Optionally review/export report → Continue with another layer."
        ]
      },
      {
        "title": "Technologies",
        "paragraphs": [
          "C#, .NET Framework 4.8 and the Revit API handle geometry and placement; WPF provides the interface. PowerShell supports builds and installation. An optional AutoCAD CoreConsole/AutoLISP exporter supplies verified DWG attributes through JSON."
        ]
      },
      {
        "title": "Benefits",
        "paragraphs": [
          "Centralizes placement settings, supports review before creation and helps avoid placing equipment at occupied coordinates."
        ]
      },
      {
        "title": "Current Limitations",
        "paragraphs": [
          "Targets Revit 2023/2024. Exploded symbols, tilted blocks, nested Revit links, linked hosts and unsupported family placement types are excluded. CAD rotation/mirroring affects previews only; placed families retain default orientation. Attribute supplementation assumes millimetres and top-level model-space blocks. Builds and automated UI/mock-geometry checks passed; these do not establish successful placement in a live Revit model."
        ]
      }
    ]
  }
};

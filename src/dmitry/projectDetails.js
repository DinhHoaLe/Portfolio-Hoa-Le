// Project facts and responsibilities from Le-Dinh-Hoa-SD.pdf (pages 2–10).
const gitlab = path => [['Source code', `https://gitlab.com/dinhhoa.0701/${path}`]];
const github = path => `https://github.com/DinhHoaLe/${path}`;
const webStack = ['JavaScript', 'React', 'Node.js', 'MongoDB'];
const webResponsibilities = [
  ['Frontend', ['Build reusable web components and responsive interfaces.', 'Design application UI/UX and integrate backend APIs.', 'Optimize frontend performance, review code, and resolve interface issues.']],
  ['Backend', ['Design database models and develop APIs and backend services.', 'Implement middleware and authentication.', 'Review backend code, improve performance, and debug application issues.']],
];
const personal = { customer:'Personal', period:'2025', role:'Developer', team:'1 developer' };
const fullstack = { role:'Full-Stack Developer', team:'3 members' };
export const projectDetails = {
  'hoa-project-34': {
  "title": "MEP Tool — Check Data from Family",
  "description": "Review data from Revit families.",
  "customer": "MEP tool collection",
  "role": "Revit Add-in Developer",
  "tools": [
    "C#",
    ".NET",
    "Revit API"
  ],
  "scopeNote": "Project folder: MEP_Check_Data_From_Family_ver1",
  "sections": [],
  "links": []
},
  'hoa-project-35': {
  "title": "MEP Tool — Check Healthy Project",
  "description": "Check the health of a Revit project.",
  "customer": "MEP tool collection",
  "role": "Revit Add-in Developer",
  "tools": [
    "C#",
    ".NET",
    "Revit API"
  ],
  "scopeNote": "Project folder: MEP_Check_Healthy_Project_ver1",
  "sections": [],
  "links": []
},
  'hoa-project-36': {
  "title": "MEP Tool — Create Cable Tray from CAD",
  "description": "Create Revit cable trays from CAD input.",
  "customer": "MEP tool collection",
  "role": "Revit Add-in Developer",
  "tools": [
    "C#",
    ".NET",
    "Revit API"
  ],
  "scopeNote": "Project folder: MEP_Create_CableTray_From_CAD_ver1",
  "sections": [],
  "links": []
},
  'hoa-project-37': {
  "title": "MEP Tool — Create Duct from CAD",
  "description": "Create Revit ducts from CAD input.",
  "customer": "MEP tool collection",
  "role": "Revit Add-in Developer",
  "tools": [
    "C#",
    ".NET",
    "Revit API"
  ],
  "scopeNote": "Project folder: MEP_Create_Duct_From_CAD_ver1",
  "sections": [],
  "links": []
},
  'hoa-project-38': {
  "title": "MEP Tool — Create Duct from IFC",
  "description": "Create Revit ducts from IFC input.",
  "customer": "MEP tool collection",
  "role": "Revit Add-in Developer",
  "tools": [
    "C#",
    ".NET",
    "Revit API"
  ],
  "scopeNote": "Project folder: MEP_Create_Duct_From_IFC_ver1",
  "sections": [],
  "links": []
},
  'hoa-project-39': {
  "title": "MEP Tool — Export Data from Family",
  "description": "Export data from Revit families.",
  "customer": "MEP tool collection",
  "role": "Revit Add-in Developer",
  "tools": [
    "C#",
    ".NET",
    "Revit API"
  ],
  "scopeNote": "Project folder: MEP_Export_Data_From_Family_ver1",
  "sections": [],
  "links": []
},
  'hoa-project-40': {
  "title": "MEP Tool — Place Element from CAD",
  "description": "Place Revit elements from CAD input.",
  "customer": "MEP tool collection",
  "role": "Revit Add-in Developer",
  "tools": [
    "C#",
    ".NET",
    "Revit API"
  ],
  "scopeNote": "Project folder: MEP_Place_Element_From_CAD_ver1",
  "sections": [],
  "links": []
},
  'hoa-project-41': {
  "title": "MEP Tool — Sheet Manager",
  "description": "Manage sheets in a Revit project.",
  "customer": "MEP tool collection",
  "role": "Revit Add-in Developer",
  "tools": [
    "C#",
    ".NET",
    "Revit API"
  ],
  "scopeNote": "Project folder: MEP_Sheet_Manager_ver1",
  "sections": [],
  "links": []
},
  'hoa-project-1': {
    ...personal, title:'MEP Tool — Set Params',
    description:'A data synchronization tool for updating parameters across thousands of BIM elements using external data sources.',
    tools:['C#', '.NET', 'Revit API', 'LINQ', 'Transaction Management'],
    sections:[['User Interface', ['Create a validation interface that highlights discrepancies and missing values between model data and input data.']], ['Revit Automation', ['Batch-update parameters such as Mark, Comments, and System Abbreviation.', 'Use transactions and TransactionGroup to manage updates and reduce interruptions to the user interface.']]],
    links:gitlab('mep-set-params-project'),
  },
  'hoa-project-2': {
    ...personal, title:'MEP Tool — Up and Down',
    description:'A geometry utility for creating vertical offsets in MEP runs to avoid structural clashes.',
    tools:['C#', '.NET', 'Revit API', 'Trigonometry', 'Vector Math'],
    sections:[['User Interface', ['Develop a floating window for entering offset heights and elbow angles of 30°, 45°, and 90°.']], ['Geometry & Connectivity', ['Calculate vector transformations to split MEP curves and insert elbows at the required angles while maintaining system flow.']]],
    links:gitlab('mep-up-and-down-project'),
  },
  'hoa-project-3': {
    ...personal, title:'MEP Tool — Create Sheet from Excel',
    description:'A Revit utility that batch-generates sheets and viewports from an external Excel schedule.',
    tools:['C#', '.NET', 'Revit API', 'Excel Interop / ClosedXML', 'WPF'],
    sections:[['User Interface', ['Build a WPF file picker and data-preview table.', 'Map Excel columns for sheet number, sheet name, and title block to Revit parameters before execution.']], ['Revit Automation', ['Parse structured data from .xlsx files.', 'Use ViewSheet.Create() and Viewport.Create() to generate sheets and place floor plans or 3D views at defined coordinates.']]],
    links:gitlab('mep-create-sheet-from-excel'),
  },
  'hoa-project-4': {
    ...personal, title:'MEP Tool — Place Family',
    description:'A CAD-to-Revit placement tool that converts 2D block references into 3D MEP components such as valves, sensors, and sprinklers.',
    tools:['C#', '.NET', 'Revit API', 'AutoCAD Interop', 'Geometry Transformation'],
    sections:[['Selection & Mapping', ['Identify linked DWG files and select CAD blocks.', 'Map blocks to Revit families and symbol types.', 'Provide placement inputs for elevation, target level, and system type.']], ['Geometry & Placement', ['Extract block insertion points and rotation angles using GeometryElement and GeometryInstance.', 'Transform CAD coordinates into Revit project coordinates.', 'Create instances with NewFamilyInstance and assign level, system name, and offset parameters within a transaction.']]],
    links:gitlab('mep-place-family-project'),
  },
  'hoa-project-5': {
    ...personal, title:'MEP Tool — Split Duct',
    description:'A Revit utility that divides continuous duct or pipe runs into standard commercial lengths and inserts union fittings to preserve connectivity.',
    tools:['C#', '.NET', 'Revit API', 'WPF', 'Computational Geometry'],
    sections:[['User Interface', ['Provide inputs for segment lengths, such as 1120 mm or 1200 mm, and minimum short-piece thresholds.']], ['Segmentation & Fittings', ['Calculate split points along the duct location line using a recursive segmentation algorithm.', 'Insert couplings at each split with Document.Create.NewUnionFitting.']]],
    links:gitlab('mep-split-duct-project'),
  },
  'hoa-project-6': {
    title:'MEP Tool — Create Support', customer:'Personal MEP tool collection', role:'Developer',
    description:'A support-creation tool included in the MEP automation project collection.', tools:[],
    sections:[], links:gitlab('mep-create-support-project'),
  },
  'hoa-project-7': {
    title:'MEP Tool — QA', customer:'Personal MEP tool collection', role:'Developer',
    description:'A QA tool included in the MEP automation project collection.', tools:[],
    sections:[], links:gitlab('mep-QA-Family.git'),
  },
  'hoa-project-8': {
    ...fullstack, title:'BuildSense — GIS & Real-Time Sensor Monitoring', period:'Jan 2026 — Present', customer:'BuildSense',
    description:'A GIS-based platform for real-time sensor monitoring and data acquisition across factory sites.',
    tools:['ArcGIS API', 'React', 'Node.js', 'TypeScript', 'WebSockets', 'PostgreSQL / PostGIS', 'Git'],
    sections:[['Frontend', ['Integrate ArcGIS Maps SDK to visualize spatial sensor data and 3D building models.', 'Build React dashboards displaying live temperature, humidity, and device status through WebSockets.']], ['Backend', ['Design a pipeline to collect and process high-frequency IoT sensor data.', 'Design database schemas for geospatial coordinates and historical time-series data.', 'Implement authentication and role-based access control for sensor configuration and site access.']]],
    links:[['Frontend repository',github('BuildSense-FE')], ['Live platform','https://buildsense-v7kn.onrender.com/map']],
  },
  'hoa-project-9': {
    ...fullstack, title:'Digital Twin & Smart Infrastructure Platform', period:'Jan 2026 — Present', customer:'Digital Twin & Smart Infrastructure Platform',
    description:'A digital twin platform connecting GIS, BIM, and IoT data to represent infrastructure and its operational information.',
    tools:['ArcGIS API', 'React', 'Node.js', 'TypeScript', 'WebSockets', 'PostgreSQL / PostGIS', 'Git'],
    sections:[['GIS & BIM Interface', ['Synchronize 2D spatial maps with 3D digital twin scenes using ArcGIS Maps SDK for JavaScript.', 'Position airport IFC/Revit models in the GIS environment.', 'Implement hit testing and object selection for 3D building components and IoT objects.']], ['Backend & Data', ['Model spatial relationships, indoor BIM attributes, and high-frequency IoT data in PostgreSQL/PostGIS.', 'Maintain persistent connections through Node.js and Socket.io.', 'Build REST APIs for device inventories, BIM technical specifications, and configurable alert thresholds.']]],
    links:[['Frontend repository',github('Digital-Twin-Airport-FE.git')], ['Backend repository',github('Digital-Twin-Airport-BE.git')], ['Live platform','https://digital-twin-vaa.vercel.app/map']],
  },
  'hoa-project-10': {
    ...fullstack, title:'OxiNote — Cross-Platform Note-Taking Application', period:'Jun 2025 — Present', customer:'MakerPath',
    description:'A React Native application for iOS and Android that manages Markdown notes, attachments, and local data with offline support.',
    tools:['React Native', 'Node.js', 'JavaScript', 'TypeScript', 'JSON-based storage', 'Markdown', 'Git'],
    sections:[['Architecture & UX', ['Research the technical foundation, scalability, and note-management UX patterns.', 'Structure the app around a feature-based architecture and define its local data strategy.']], ['Frontend', ['Develop React Native components and a reusable design system with consistent typography and UI patterns.', 'Build the note editor and image/file import features with custom resizing and previews.']], ['Local Data & Storage', ['Implement authentication and note CRUD operations.', 'Design a local JSON database for profiles, tags, and settings.', 'Store notes as individual Markdown files and link images and attachments through stable internal references.']]], links:[],
  },
  'hoa-project-11': {
    ...fullstack, title:'E-Learning Platform', period:'Jun 2024 — Sep 2024', customer:'E-Learning',
    description:'An online learning application with lesson progress tracking, instructor dashboards, and interactive quizzes.', tools:webStack,
    sections:[['Frontend', ['Build a video player with saved lesson progress and bookmarks.', 'Use Redux Toolkit to manage lesson and course state.', 'Develop instructor and admin dashboards for curriculum, enrollments, and revenue charts.', 'Build quizzes with countdown timers and automated grading.']], ['Backend', ['Integrate cloud media storage and delivery for educational videos.', 'Develop APIs, middleware, and authentication.', 'Review code and resolve backend issues while improving performance and security.']]],
    links:[['Application repository',github('Edu-Learning-FE')], ['Demo repository',github('portfolio-e-learning')], ['Live demo','https://portfolio-e-learning.vercel.app/']],
  },
  'hoa-project-12': {
    ...fullstack, title:'Exclusive — E-Commerce Website', period:'Jun 2024 — Sep 2024', customer:'Exclusive',
    description:'An e-commerce web application developed across frontend interfaces, backend services, and database models.', tools:webStack, sections:webResponsibilities,
    links:[['Source code',github('Ecommerce-system')], ['Live website','https://exclusive-3h.netlify.app/']],
  },
  'hoa-project-13': {
    ...fullstack, title:'EasySet — Flight Booking Website', period:'2024 — 2025', customer:'EasySet',
    description:'A flight-booking web application with separate user and administration interfaces.', tools:webStack, sections:webResponsibilities,
    links:[['User frontend repository',github('Booking_Flight_GIS_FE')], ['Admin frontend repository',github('Booking-Admin-FE-1')], ['User website','https://booking-fe-4rk8.onrender.com/'], ['Admin website','https://booking-admin-fe.onrender.com/']],
  },
  'hoa-project-14': {
    ...fullstack, title:'Cinema Booking Website', period:'2024 — 2025', customer:'Cinema-Booking',
    description:'A cinema-booking application with synchronized seat selection, browsing filters, and user/admin access.', tools:[...webStack,'Socket.io','Redux Toolkit','JWT'],
    sections:[['Frontend', ['Build an interactive seat map with immediate selection feedback.', 'Synchronize seat selections with Socket.io and lock seats during the selection process.', 'Provide filters for movie genres, languages, and showtimes.', 'Manage booking steps, snack add-ons, and checkout state using Redux Toolkit.']], ['Backend', ['Develop booking logic to handle concurrent requests.', 'Model cinemas, halls, showtimes, and seat status in MongoDB.', 'Implement JWT authentication with user and admin roles.']]],
    links:[['User frontend repository',github('Cinema-Booking-FE-User')], ['Admin frontend repository',github('Cinema-Booking-FE-Admim')]],
  },
  'hoa-project-27': {
    title:'Revit Family Library', period:'Jan 2026 — Present', customer:'Revit Family Library', role:'Full-Stack Developer', team:'2 members',
    description:'A centralized platform for organizing, versioning, synchronizing, and distributing Revit family files across BIM projects.',
    tools:['React', 'TypeScript', 'Node.js', 'RESTful API', 'PostgreSQL', 'Git', 'Revit API'],
    sections:[['Frontend', ['Build interfaces for browsing, searching, and managing a centralized family library.', 'Implement .rfa upload and download workflows between local environments and the library.', 'Provide categorization, version tracking, metadata, and file-status management.']], ['Backend', ['Build REST APIs for uploading, downloading, updating, and managing Revit family files.', 'Implement centralized storage and synchronization for approved family versions.', 'Track metadata and version changes and control access to family distribution.']]],
    links:[['Open family library','https://rfa.dcm-vn.com/login']],
  },
  'hoa-project-28': {
    title:'Dormitory — England',
    description:'MEP model for a dormitory project in England.',
    customer:'Outsource project',
    scopeNote:'Completed independently, outside company assignments.',
    tools:[], sections:[], links:[],
  },
  'hoa-project-29': {
    title:'Manor Central Park — High Rise 4-CT1',
    description:'MEP model for Manor Central Park — High Rise 4-CT1.',
    customer:'Outsource project',
    scopeNote:'Completed independently, outside company assignments.',
    tools:[], sections:[], links:[],
  },
  'hoa-project-30': {
    title:'Manor Central Park — High Rise 16-CT2',
    description:'MEP model for Manor Central Park — High Rise 16-CT2.',
    customer:'Outsource project',
    scopeNote:'Completed independently, outside company assignments.',
    tools:[], sections:[], links:[],
  },
  'hoa-project-31': {
    title:'Manor Central Park — High Rise 5-CT1',
    description:'MEP model for Manor Central Park — High Rise 5-CT1.',
    customer:'Outsource project',
    scopeNote:'Completed independently, outside company assignments.',
    tools:[], sections:[], links:[],
  },
  'hoa-project-32': {
    title:'Gladstone & Loretta',
    description:'MEP model for Gladstone & Loretta.',
    customer:'Outsource project',
    scopeNote:'Completed independently, outside company assignments.',
    tools:[], sections:[], links:[],
  },
};

export function getProjectDetail(project) {
  const detail = projectDetails[project.id];
  if (detail) return { ...project, ...detail };
  const isCadian = project.context.startsWith('CADIAN');
  const isArmo = project.context.startsWith('ARMO');
  const isPointCloud = project.modelWorkflow === 'Point Cloud / AutoCAD Plant 3D';
  const company = project.context;
  return {
    ...project, customer:company,
    role:isCadian ? 'CAD Operator' : isArmo ? 'Electrical Engineer' : 'MEPF Modeler',
    description:project.parentId ? project.description : `Project experience on ${project.title} at ${company}.`,
    tools:isCadian ? ['AutoCAD'] : isArmo ? ['Revit', 'MEP Coordination'] : isPointCloud ? ['AutoCAD Plant 3D', 'Point Cloud'] : ['Revit', 'AutoCAD', 'Revizto', 'Navisworks', 'BIMcollab'],
    scopeNote:'The project list identifies this assignment; the responsibilities below describe the corresponding company role.',
    sections:[[isCadian ? 'CAD & Electrical Documentation' : isArmo ? 'Electrical Engineering & Coordination' : isPointCloud ? 'Point Cloud & As-Built Modeling' : 'BIM / MEPF Modeling & Coordination',
      isCadian ? ['Draft electrical systems according to customer requirements.', 'Calculate equipment quantities and support renovation work.'] : isArmo ? ['Design electrical systems and develop Revit models.', 'Calculate equipment quantities and coordinate electrical systems with mechanical and plumbing disciplines.', 'Resolve clashes and collaborate with multidisciplinary teams.'] : isPointCloud ? ['Develop BIM models from point-cloud scans for as-built and renovation work.', 'Coordinate point-cloud data with model geometry and existing site conditions.'] : ['Design and model MEPF systems and produce 2D/3D drawings and schematic diagrams.', 'Perform calculations and equipment estimations using customer data.', 'Identify and resolve multidisciplinary clashes and review BIM model quality.']]], links:[],
  };
}

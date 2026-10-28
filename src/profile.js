import { projectDetails } from './dmitry/projectDetails';
// Shared profile content; project details updated from Le-Dinh-Hoa-SD.pdf.
export const profile = {
  name: 'Le Dinh Hoa', firstName: 'Le Dinh', lastName: 'Hoa',
  role: 'BIM Automation Engineer', subtitle: 'MEP Modeler · Full-stack Development · MEP Engineering',
  location: 'Ho Chi Minh City, Vietnam', email: 'dinhhoa.0701@gmail.com', phone: '0985 671 678',
  portrait: '/profile/edited/portrait-professional.png', resume: '/profile/Hoa-Dinh-Le-SD.docx',
  github: 'https://github.com/DinhHoaLe', gitlab: 'https://gitlab.com/dinhhoa.0701',
  intro: 'Revit add-ins, BIM automation, and full-stack applications — built on practical MEP engineering experience.',
  summary: 'My goal is to grow as a BIM Automation and AI Engineer, building intelligent tools that connect engineering knowledge, Revit, and web-based platforms. Drawing on my MEP engineering and software development experience, I aim to advance my work in Revit API development, MCP integration, and AI-assisted BIM workflows. I want to turn repetitive modeling, model validation, and engineering data analysis into practical, reliable solutions that improve design accuracy, coordination, and productivity across the building lifecycle.',
};
export const skills = [
  ['Revit Add-in Development',['C#','.NET','Revit API','Revit SDK','WPF','Python']],
  ['Development Tools',['Visual Studio','VS Code','Git','GitHub','GitLab','Add-ins Manager']],
  ['BIM / Coordination',['Revit','AutoCAD','Navisworks','Revizto','BIMcollab','AutoCAD Plant 3D']],
  ['Software Engineering',['OOP','Debugging','Documentation','Version control']],
  ['Web / Data',['React','Next.js','Node.js','TypeScript','JavaScript','MongoDB','PostgreSQL']],
  ['AI-assisted Development',['ChatGPT','Gemini','GitHub Copilot','Codex']],
  ['Language & Office',['English','Word','Excel','PowerPoint','Power BI']],
];
export const highlights = [['Revit development','~3 years'],['BIM / MEP modeling','5+ years'],['MEP design','2+ years'],['Full-stack web','~2 years']];
export const education = [
  ['2023–2025',"Information Technology — Bachelor’s Degree",'HCMC University of Information Technology'],
  ['2014–2018',"Industrial Electricity — Bachelor’s Degree",'HCMC University of Industry and Trade'],
  ['2024–2025','Full-stack MERN — Graduation Certificate','MindX Technology School'],
  ['2020','Revit MEPF — Certificate of Completion','BIM Express Company Limited','Issued 11 October 2020 · Registration No. BIM2020/RVT-E/243'],
  ['2024–2025','Certifications & Honors','MindX Web Full-stack · Revizto · BIMcollab','Three-time First Prize winner at MindX Battle Code: Basic (HTML/CSS), ReactJS, and Node.js.'],
];
export const experience = [
  ['Jun 2025 — Present','Full-Stack Developer — Freelancer','MakerPath','OxiNote — Cross-Platform Note-Taking Application',[
    'Defined OxiNote’s technical foundation, feature-based architecture, local data strategy, and note-management UX patterns.',
    'Developed React Native components and a scalable design system for a consistent iOS and Android experience.',
    'Developed a Markdown editor and image/file import features with custom resize and preview behavior.',
    'Implemented authentication, CRUD operations, a JSON-based local database, and file/asset linking for offline use.',
    'Maintained data consistency and stable internal file references to prevent data loss and broken attachments.',
  ]],
  ['Dec 2021 — Present','BIM Automation Developer & MEPF Modeler','DCMvn — BKW Engineering','Munich Airport · ZAM München · Überseequartier · Konzerthaus München · Munich Re · EKB',[
    'Develop internal Revit add-ins and BIM automation tools using C#/.NET, Revit API, WPF, and Python.',
    'Translate BIM/MEP production requirements into practical software for sheet creation, family placement, parameter management, MEP element generation, routing, and model quality checks.',
    'Work with Revit elements, parameters, MEP systems, connectors, and geometry to automate repetitive modeling tasks and improve model consistency.',
    'Debug, maintain, and document tool code; manage source changes with Git and GitLab.',
    'Design and model coordinated MEPF systems in Revit and AutoCAD for multidisciplinary projects.',
    'Identify and resolve clashes using Revizto, Navisworks, and BIMcollab; review model performance and data quality.',
    'Create as-built BIM models from Point Cloud data and coordinate project updates with architecture, structure, and other MEP disciplines.',
  ]],
  ['Jan 2024 — Dec 2024','Full-Stack Developer — Internship / Training','MindX Technology School','Bac Thanh BHLD · Exclusive E-commerce · EasySet Flight Booking · Cinema Booking · E-Learning',[
    'Developed responsive ReactJS interfaces from Figma using reusable components, routing, state management, API integration, and form validation.',
    'Designed RESTful APIs with Node.js and Express.js; built MongoDB models and implemented JWT authentication and authorization.',
    'Developed middleware, request validation, CRUD operations, and business logic; debugged frontend and backend issues.',
    'Used Git workflows, participated in code reviews and technical discussions, and proposed practical improvements.',
  ]],
  ['Sep 2020 — Sep 2021','Electrical Engineer | MEPF Modeler','ARMO Vietnam — Kajima Group','Electrical engineering & MEP coordination',[
    'Designed electrical systems for MEP projects in compliance with customer requirements, industry standards, and safety regulations.',
    'Created Revit-based 3D electrical models and coordinated them with mechanical and plumbing disciplines.',
    'Performed calculations and equipment quantity estimations to support budgeting and procurement.',
    'Identified and resolved MEP clashes with multidisciplinary teams.',
    'Prepared electrical layouts, equipment arrangements, and coordinated drawings; updated designs based on project changes.',
  ]],
  ['Jan 2019 — Sep 2020','Electrical Engineer | CAD Operator','CADIAN Vietnam — Takamiya Group','Electrical CAD documentation',[
    'Designed and drafted automatic electrical systems according to customer requirements.',
    'Calculated and estimated project equipment quantities.',
    'Supported repair and renovation work for existing buildings.',
    'Produced and revised detailed CAD drawings, incorporating customer comments, project requirements, and existing site conditions.',
    'Coordinated drawing updates and checked documentation for consistency before delivery.',
  ]],
];
const bimTools = ['C#','.NET','Revit API','WPF','Python'];
const webTools = ['React','Node.js','JavaScript','TypeScript'];
const bimProjects = [
  ['IFC/CAD to MEP Generator','IFC/CAD-based MEP generation tool.'],
  ['Family Export and Comparison Tool','Revit family export and comparison tool.'],
  ['Sheet and Parameter Automation','Tools for sheet creation and parameter management.'],
  ['Family Placement Tool','Revit family placement automation.'],
  ['Duct and Pipe Editing Tools','Revit tools for duct and pipe editing.'],
  ['Insulation and Support Tools','BIM utilities for insulation and supports.'],
  ['Model QA and CAD Cleanup Utilities','Model quality checks and CAD cleanup utilities.'],
];
const webProjects = [
  ['BuildSense — Real-Time IoT Monitoring Platform','Real-time IoT monitoring platform.'],
  ['Digital Twin and Smart Infrastructure Platform','Digital twin and smart infrastructure platform.'],
  ['OxiNote Cross-Platform Application','React Native note-taking application with a Markdown editor, local JSON storage, file import, and offline asset linking.',['React Native','Node.js','TypeScript','Markdown','JSON storage']],
  ['E-Learning Platform','Web development project completed during full-stack training.'],
  ['Exclusive E-Commerce Website','E-commerce web development project.'],
  ['EasySet Flight Booking Website','Flight booking web development project.'],
  ['Cinema Booking Website','Cinema booking web development project.'],
];
const aecProjects = [
  ['Munich Airport — Terminal 1 Expansion','DCMvn',15],['ZAM München','DCMvn',16],['Überseequartier — Residential Quarter','DCMvn',18],['Konzerthaus München — Concert Hall','DCMvn',19],['Munich Re','DCMvn',22],['ABP MKK Bad Oeynhausen','DCMvn',33],['TuV Arena','DCMvn',42],['IBDH_SQ_FM','DCMvn',43],['Vienna Airport — FLUGHAFEN WIEN AKTIENGESELLSCHAFT','DCMvn',44],['EKB — Point Cloud / AutoCAD Plant 3D','DCMvn',23],
];
export const projects = [
  ...bimProjects.map(([title,description])=>({title,description,tools:bimTools,category:'BIM Automation',context:'Selected software project in the CV.'})),
  ...webProjects.map(([title,description,tools])=>({title,description,tools:tools || webTools,category:'Web Development',context: title.startsWith('OxiNote') ? 'MakerPath · Jun 2025 — Present' : 'Selected web development project in the CV.'})),
  ...aecProjects.map(([title,company,projectNumber])=>({title,projectNumber,projectType:'DCMvn',description:`Project experience at ${company}.`,tools:['Revit','AutoCAD','MEP coordination'],category:'BIM / MEP Projects',context:company})),
  {title:'Revit Family Library', description:'Centralized Revit family management.', tools:[], category:'Web Development', context:'Revit Family Library'},
  {title:'Dormitory — England', description:'MEP model for a dormitory project in England.', tools:[], category:'BIM / MEP Projects', projectType:'Outsource', context:'Outsource project', projectNumber:28},
  {title:'Manor Central Park — High Rise 4-CT1', description:'MEP model for Manor Central Park — High Rise 4-CT1.', tools:[], category:'BIM / MEP Projects', projectType:'Outsource', context:'Outsource project', projectNumber:29},
  {title:'Manor Central Park — High Rise 16-CT2', description:'MEP model for Manor Central Park — High Rise 16-CT2.', tools:[], category:'BIM / MEP Projects', projectType:'Outsource', context:'Outsource project', projectNumber:30},
  {title:'Manor Central Park — High Rise 5-CT1', description:'MEP model for Manor Central Park — High Rise 5-CT1.', tools:[], category:'BIM / MEP Projects', projectType:'Outsource', context:'Outsource project', projectNumber:31},
  {title:'Gladstone & Loretta', description:'MEP model for Gladstone & Loretta.', tools:[], category:'BIM / MEP Projects', projectType:'Outsource', context:'Outsource project', projectNumber:32},
  {title:'Duct Sizing & Pressure Loss Calculation — 01', description:'Revit ventilation calculation project reviewing airflow, duct velocity, friction loss, and pressure drop.', tools:['Revit','System Inspector'], category:'BIM / MEP Projects', projectType:'Training', context:'MEP calculation project', projectNumber:46},
  {title:'Duct Sizing & Pressure Loss Calculation — 02', description:'Revit ventilation models with Excel reports documenting duct sizes, airflow, velocity, and section pressure losses.', tools:['Revit','Excel'], category:'BIM / MEP Projects', projectType:'Training', context:'MEP calculation project', projectNumber:47},
  {title:'Pipe Sizing & Pressure Loss Calculation — 01', description:'Chilled-water piping calculation model with 12°C supply and 18°C return pressure loss reports.', tools:['Revit'], category:'BIM / MEP Projects', projectType:'Training', context:'MEP calculation project', projectNumber:51},
  {title:'Fire Pump Room', description:'BIM model of a fire pump room and associated fire protection piping.', tools:['Revit'], category:'BIM / MEP Projects', projectType:'Outsource', context:'Outsource project', projectNumber:45},
  {title:'Swanbay Dong Nai — Land Villas', description:'MEP model for the Land Villas residential project at Swanbay, Dong Nai.', tools:['Revit'], category:'BIM / MEP Projects', projectType:'Outsource', outsourceSector:'Residential', context:'Outsource project', projectNumber:48},
  {title:'Swanbay Dong Nai — Shop Villas', description:'MEP model for the Shop Villas residential project at Swanbay, Dong Nai.', tools:['Revit'], category:'BIM / MEP Projects', projectType:'Outsource', outsourceSector:'Residential', context:'Outsource project', projectNumber:49},
  {title:'Swanbay Dong Nai — Townhouse', description:'MEP model for the Townhouse residential project at Swanbay, Dong Nai.', tools:['Revit'], category:'BIM / MEP Projects', projectType:'Outsource', outsourceSector:'Residential', context:'Outsource project', projectNumber:50},
].map((p,i)=>{
  const projectNumber = p.projectNumber || (p.title === 'Revit Family Library' ? 27 : i+1);
  const id = `hoa-project-${projectNumber}`;
  const detail = projectDetails[id];
  const previewImage = {8:'/profile/edited/buildsense-map-preview.png',9:'/profile/edited/aerotwin-long-thanh-sensors.png',11:'/profile/edited/elearning-preview.png',12:'/profile/edited/exclusive-preview.png',13:'/profile/edited/easyset-preview.png'}[projectNumber];
  const modelImage = {
    28: '/profile/edited/dormitory-england-model.png',
    29: '/profile/edited/manor-central-park-4-ct1-model.png',
    30: '/profile/edited/manor-central-park-16-ct2-model.png',
    31: '/profile/edited/manor-central-park-5-ct1-model.png',
    32: '/profile/edited/gladstone-loretta-model.png',
    45: '/profile/edited/fire-pump-room-model.png',
    48: '/profile/edited/swanbay-land-villas-model.png',
    49: '/profile/edited/swanbay-shop-villas-model.png',
    50: '/profile/edited/swanbay-townhouse-model.png',
  }[projectNumber];
  return {...p, ...(detail ? {title:detail.title, description:detail.description, tools:detail.tools} : {}), id, number:String(projectNumber).padStart(2,'0'), image:p.category === 'Web Development' ? `/profile/symbols/web-${projectNumber}.svg` : modelImage || `/profile/project-${projectNumber}.svg`, previewImage, modelImage, stats:p.category};
});
// Revit add-in projects supplied in the folder screenshot.
for (const id of ['hoa-project-1','hoa-project-3','hoa-project-4','hoa-project-5','hoa-project-7','hoa-project-14','hoa-project-27']) {
  const index = projects.findIndex(project=>project.id===id);
  if (index >= 0) projects.splice(index,1);
}
// Separate production applications from outsourced demonstrations.
for (const project of projects) {
  if (project.category === 'Web Development') {
    project.projectType = ['hoa-project-10','hoa-project-8','hoa-project-9'].includes(project.id) ? 'Real-World' : 'Outsource Demo';
  }
}
const oxiNoteIndex = projects.findIndex(project=>project.id==='hoa-project-10');
const [oxiNote] = projects.splice(oxiNoteIndex,1);
projects.splice(projects.findIndex(project=>project.id==='hoa-project-8'),0,oxiNote);
projects.splice(0,0,...[
  ...['54','55','56','57','58','61'].map(number=>({
    ...projectDetails[`hoa-project-${number}`],
    id:`hoa-project-${number}`, number, category:'Revit & AI',
    context:'Personal Revit & AI project', projectType:'Personal',
    textCard:true, image:null, stats:'Revit & AI',
    cardCategory:'REVIT & AI', cardFooter:'AI-ASSISTED BIM WORKFLOW',
    cardCredit:'Personal project · Demo coming soon',
  })),
  ...['59','60'].map(number=>({
    ...projectDetails[`hoa-project-${number}`],
    id:`hoa-project-${number}`, number, category:'BIM Automation',
    context:'Personal prototype concept', projectType:'Prototype',
    textCard:false, image:'/profile/edited/addin-symbol-sheet-v5.png', stats:'BIM Automation',
    cardCategory:'REVIT ADD-IN', cardFooter:'PLANNED PROTOTYPE',
    cardCredit:'Implementation pending',
  })),
  {
    id: 'hoa-project-52', number: '52',
    title: 'MEP Tool — Check Clash',
    description: 'Check clashes between MEP elements in Revit.',
    folderName: 'MEP_Check_Clash_ver1',
    tools: ['C#', '.NET', 'Revit API'],
    category: 'BIM Automation', context: 'MEP tool collection',
    image: '/profile/edited/addin-symbol-sheet-v3.png', stats: 'BIM Automation',
  },
  {
    "id": "hoa-project-34",
    "number": "34",
    "title": "MEP Tool — Check Data from Family",
    "description": "Review data from Revit families.",
    "folderName": "MEP_Check_Data_From_Family_ver1",
    "tools": [
      "C#",
      ".NET",
      "Revit API"
    ],
    "category": "BIM Automation",
    "context": "MEP tool collection",
    "image": "/profile/project-34.svg",
    "stats": "BIM Automation"
  },
  {
    "id": "hoa-project-35",
    "number": "35",
    "title": "MEP Tool — Check Healthy Project",
    "description": "Check the health of a Revit project.",
    "folderName": "MEP_Check_Healthy_Project_ver1",
    "tools": [
      "C#",
      ".NET",
      "Revit API"
    ],
    "category": "BIM Automation",
    "context": "MEP tool collection",
    "image": "/profile/project-35.svg",
    "stats": "BIM Automation"
  },
  {
    "id": "hoa-project-37",
    "number": "37",
    "title": "MEP Tool — Create Duct / Cable Tray / Pipe / Conduit / Line from CAD",
    "description": "Create Revit ducts, cable trays, pipes, conduits, and lines from CAD input.",
    "folderName": "MEP_Create_Duct_From_CAD_ver1",
    "tools": [
      "C#",
      ".NET",
      "Revit API"
    ],
    "category": "BIM Automation",
    "context": "MEP tool collection",
    "image": "/profile/project-37.svg",
    "stats": "BIM Automation"
  },
  {
    "id": "hoa-project-38",
    "number": "38",
    "title": "MEP Tool — Create & Update MEP Elements from IFC",
    "description": "Create and update supported Revit MEP elements from linked IFC models, with tracked source changes.",
    "folderName": "MEP_Create_Duct_From_IFC_ver1",
    "tools": [
      "C#",
      ".NET",
      "Revit API"
    ],
    "category": "BIM Automation",
    "context": "MEP tool collection",
    "image": "/profile/project-38.svg",
    "stats": "BIM Automation"
  },
  {
    "id": "hoa-project-39",
    "number": "39",
    "title": "MEP Tool — Export Data from Family",
    "description": "Export data from Revit families.",
    "folderName": "MEP_Export_Data_From_Family_ver1",
    "tools": [
      "C#",
      ".NET",
      "Revit API"
    ],
    "category": "BIM Automation",
    "context": "MEP tool collection",
    "image": "/profile/project-39.svg",
    "stats": "BIM Automation"
  },
  {
    "id": "hoa-project-40",
    "number": "40",
    "title": "MEP Tool — Place Element from CAD",
    "description": "Place Revit elements from CAD input.",
    "folderName": "MEP_Place_Element_From_CAD_ver1",
    "tools": [
      "C#",
      ".NET",
      "Revit API"
    ],
    "category": "BIM Automation",
    "context": "MEP tool collection",
    "image": "/profile/project-40.svg",
    "stats": "BIM Automation"
  },
  {
    "id": "hoa-project-41",
    "number": "41",
    "title": "MEP Tool — Sheet Manager",
    "description": "Manage sheets in a Revit project.",
    "folderName": "MEP_Sheet_Manager_ver1",
    "tools": [
      "C#",
      ".NET",
      "Revit API"
    ],
    "category": "BIM Automation",
    "context": "MEP tool collection",
    "image": "/profile/project-41.svg",
    "stats": "BIM Automation"
  }
]);

// EKB areas have individual portfolio entries while retaining the project overview.
const ekbParent = projects.find(project=>project.id==='hoa-project-23');
const ekbAreas = [
  {id:'ekb-vt8',siteName:'VT8',number:'23.1'},
  {id:'ekb-agf',siteName:'AGF',number:'23.2'},
  {id:'ekb-vt16',siteName:'VT16',number:'23.3'},
].map(area=>({...ekbParent,...area,parentId:ekbParent.id,title:`EKB · ${area.siteName}`,description:`${area.siteName} site area within the EKB Point Cloud / AutoCAD Plant 3D project.`,tools:['AutoCAD Plant 3D','Point Cloud']}));
projects.splice(projects.indexOf(ekbParent)+1,0,...ekbAreas);

// Model workflows distinguish Revit production from point-cloud / Plant 3D work.
for (const project of projects) {
  if (project.category !== 'BIM / MEP Projects') continue;
  project.modelWorkflow = project.id.startsWith('ekb-') || project.id === 'hoa-project-23'
    ? 'Point Cloud / AutoCAD Plant 3D' : 'Revit Projects';
  if (project.modelWorkflow === 'Point Cloud / AutoCAD Plant 3D') project.tools = ['AutoCAD Plant 3D', 'Point Cloud'];
}
// Keep the EKB overview address available; show its VT8 site only once in listings.
ekbParent.hideFromListing = true;
// Company models are presented as text cards; source images stay outside public assets.
for (const project of projects.filter(item=>item.projectType === 'DCMvn')) {
  project.companyCard = true;
  project.textCard = true;
  project.image = null;
  delete project.modelImage;
  delete project.modelGallery;
  delete project.previewImage;
  project.description = project.modelWorkflow === 'Point Cloud / AutoCAD Plant 3D'
    ? 'Point Cloud-based as-built modeling and AutoCAD Plant 3D coordination.'
    : 'MEPF modeling and multidisciplinary coordination.';
}
for (const project of projects.filter(item=>item.projectType === 'Training' && item.category === 'BIM / MEP Projects')) {
  project.textCard = true;
  project.image = null;
  delete project.modelImage;
  delete project.modelGallery;
}
export const links = [
  ['phone','tel:+84985671678',profile.phone],['email',`mailto:${profile.email}`,profile.email],
  ['GitHub',profile.github,'↗'],['GitLab',profile.gitlab,'↗'],['CV',profile.resume,'↓'],
  ['Degree links','https://drive.google.com/drive/folders/10YL_ca2pBL43DaBqdEhgId2y6TGqs4BL?usp=drive_link','↗'],
  ['Award links','https://drive.google.com/drive/folders/1HOiVhryy_7RbgAgRFD5ik5Xpzh2ieN5f?usp=sharing','↗'],
  ['MindX Certificate','https://drive.google.com/file/d/1B1BLEvy26fcFZYF69W1uCthfV25ivkVQ/view?usp=drive_link','↗'],
  ['Revizto Certificate','https://drive.google.com/file/d/1qriPw-hB06_mLrh7sFnLPzbu-xTWc1CC/view?usp=sharing','↗'],
  ['BIMcollab Certificate','https://drive.google.com/file/d/1YnyerbfYISks-oCbvIvIkdtmboof_mv1/view?usp=drive_link','↗'],
  ['Revit MEPF Certificate','https://drive.google.com/file/d/15gsG5vCmOoDl8E4-ivkZLlluoG2iZe54/view?usp=sharing','↗', {
    issuer:'BIM Express Company Limited',
    issued:'2020-10-11', issuedLabel:'11 October 2020',
    credentialId:'BIM2020/RVT-E/243', folder:false,
  }],
];
export const references = [['DCMvn','https://dcmvn.com/'],['CADIAN','https://cadian.vn/'],['ARMO','https://acteng.com.vn/']];




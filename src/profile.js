import { projectDetails } from './dmitry/projectDetails';
// Shared profile content; project details updated from Le-Dinh-Hoa-SD.pdf.
export const profile = {
  name: 'Le Dinh Hoa', firstName: 'Le Dinh', lastName: 'Hoa',
  role: 'Revit Software Developer', subtitle: 'BIM Automation Engineer · MEP Engineer',
  location: 'Ho Chi Minh City, Vietnam', email: 'dinhhoa.0701@gmail.com', phone: '0985 671 678',
  portrait: '/profile/edited/portrait-cream.png', resume: '/profile/Hoa-Dinh-Le-SD.docx',
  github: 'https://github.com/DinhHoaLe', gitlab: 'https://gitlab.com/dinhhoa.0701',
  intro: 'Revit add-ins, BIM automation, and full-stack applications — built on practical MEP engineering experience.',
  summary: 'I aim to bridge MEP engineering and software development by building practical tools for the AEC industry. My focus is on Revit add-in development, BIM automation, and full-stack web applications that connect models, workflows, and project data. Drawing on my experience in MEP design and multidisciplinary coordination, I strive to reduce repetitive work, improve model quality, and make engineering processes more efficient.',
};
export const skills = [
  ['Revit Add-in Development',['C#','.NET','Revit API','Revit SDK','WPF','Python']],
  ['Development Tools',['Visual Studio','VS Code','Git','GitHub','GitLab','Add-ins Manager']],
  ['BIM / Coordination',['Revit','AutoCAD','Navisworks','Revizto','BIMcollab','AutoCAD Plant 3D']],
  ['Software Engineering',['OOP','Debugging','Documentation','Version control']],
  ['Web / Data',['React','Next.js','Node.js','TypeScript','JavaScript','MongoDB','PostgreSQL']],
  ['AI-assisted Development',['ChatGPT','Gemini','GitHub Copilot','Codex']],
  ['Language & Office',['English','Word','Excel','PowerPoint']],
];
export const highlights = [['Revit development','~3 years'],['BIM / MEP modeling','5+ years'],['MEP design','2+ years'],['Full-stack web','~2 years']];
export const education = [
  ['2023–2025',"Information Technology — Bachelor’s Degree",'HCMC University of Information Technology'],
  ['2014–2018',"Industrial Electricity — Bachelor’s Degree",'HCMC University of Industry and Trade'],
  ['2024–2025','Full-stack MERN — Graduation Certificate','MindX Technology School'],
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
  ['Dec 2021 — Present','BIM Automation Developer & MEPF Modeler','DCMvn','Munich Airport · ZAM München · Überseequartier · Konzerthaus München · Munich Re · EKB',[
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
  ['Munich Airport — Terminal 1 Expansion','DCMvn',15],['ZAM München','DCMvn',16],['Überseequartier — Residential Quarter','DCMvn',18],['Konzerthaus München — Concert Hall','DCMvn',19],['Munich Re','DCMvn',22],['EKB — Point Cloud / AutoCAD Plant 3D','DCMvn',23],
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
].map((p,i)=>{
  const projectNumber = p.projectNumber || (p.title === 'Revit Family Library' ? 27 : i+1);
  const id = `hoa-project-${projectNumber}`;
  const detail = projectDetails[id];
  const modelImage = {
    15: '/profile/edited/airport-model-white.png',
    16: '/profile/edited/zam-muenchen-model.png',
    18: '/profile/edited/ueberseequartier-model.png',
    19: '/profile/edited/mep-model-white.png',
    28: '/profile/edited/dormitory-england-model.png',
    29: '/profile/edited/manor-central-park-4-ct1-model.png',
    30: '/profile/edited/manor-central-park-16-ct2-model.png',
    31: '/profile/edited/manor-central-park-5-ct1-model.png',
    32: '/profile/edited/gladstone-loretta-model.png',
  }[projectNumber];
  return {...p, ...(detail ? {title:detail.title, description:detail.description, tools:detail.tools} : {}), id, number:String(projectNumber).padStart(2,'0'), image:modelImage || `/profile/project-${projectNumber}.svg`, modelImage, stats:p.category};
});
export const links = [
  ['phone','tel:+84985671678',profile.phone],['email',`mailto:${profile.email}`,profile.email],
  ['GitHub',profile.github,'↗'],['GitLab',profile.gitlab,'↗'],['CV',profile.resume,'↓'],
  ['Degree links','https://drive.google.com/drive/folders/10YL_ca2pBL43DaBqdEhgId2y6TGqs4BL?usp=drive_link','↗'],
  ['Award links','https://drive.google.com/drive/folders/1HOiVhryy_7RbgAgRFD5ik5Xpzh2ieN5f?usp=sharing','↗'],
  ['MindX Certificate','https://drive.google.com/file/d/1B1BLEvy26fcFZYF69W1uCthfV25ivkVQ/view?usp=drive_link','↗'],
  ['Revizto Certificate','https://drive.google.com/file/d/1qriPw-hB06_mLrh7sFnLPzbu-xTWc1CC/view?usp=sharing','↗'],
  ['BIMcollab Certificate','https://drive.google.com/file/d/1YnyerbfYISks-oCbvIvIkdtmboof_mv1/view?usp=drive_link','↗'],
];
export const references = [['DCMvn','https://dcmvn.com/'],['CADIAN','https://cadian.vn/'],['ARMO','https://acteng.com.vn/']];

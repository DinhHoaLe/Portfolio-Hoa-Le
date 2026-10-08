import { projects, experience, education, skills } from '../profile.js';
export const groups = ['Revit Projects','Point Cloud / AutoCAD Plant 3D','BIM Automation','Web Development'].map(category=>[category,projects.filter(p=>!p.hideFromListing && (p.modelWorkflow===category || p.category===category)).map(p=>[p.title,p.description,p.id,p.image,p.tools,p.context,p.projectType])]);
export const journey = [
  ...experience.map(([date,role,org,context,details])=>[org,role,date,details.join(' '),context]),
  ...education.map(([date,title,org,award])=>[org,title,date,award || 'Education and training listed in the CV.','Education & training']),
];
export const services = [
  ['Revit Automation','Develop Revit add-ins and BIM automation tools using C#/.NET, Revit API, WPF, and Python.','Translate production requirements into tools for sheet creation, family placement, parameter management, MEP generation, routing, and quality checks. Debug, maintain, and document code with Git and GitLab.',['C#','.NET','REVIT API','WPF','PYTHON']],
  ['BIM Coordination','Design and model coordinated MEPF systems in Revit and AutoCAD for multidisciplinary projects.','Identify and resolve clashes using Revizto, Navisworks, and BIMcollab. Review model performance and data quality, create as-built models from Point Cloud data, and coordinate updates with architecture and structure.',['REVIT','NAVISWORKS','REVIZTO','BIMCOLLAB','POINT CLOUD']],
  ['MEP Engineering','Electrical engineering experience with ARMO Vietnam — Kajima Group and CADIAN Vietnam — Takamiya Group.','Electrical system design, Revit modeling, equipment calculations and quantity estimations, coordinated drawings, and revisions based on customer requirements and project changes.',['AUTOCAD','REVIT','DIALUX EVO','BRICSCAD','EXCEL']],
  ['Full-Stack Web','Build responsive interfaces and RESTful APIs with React, Node.js, Express.js, and MongoDB.','Experience includes routing, state management, API integration, JWT authentication, authorization, validation, and CRUD operations. OxiNote adds React Native, Markdown editing, JSON-based local storage, and offline file linking.',['REACT','REACT NATIVE','NODE.JS','TYPESCRIPT','MONGODB']],
];
export const values = [
  ['Reduce repetitive work','Build Revit add-ins and automation tools for repetitive modeling tasks, sheet creation, family placement, and parameter management.'],
  ['Standardize workflows','Translate BIM/MEP production requirements into practical software and maintain consistent model parameters, geometry, and documentation.'],
  ['Improve model quality','Review model performance and data quality, identify clashes, and coordinate changes across architecture, structure, and MEP disciplines.'],
  ['Reliable application development','Debug, maintain, and document code. Use version control, code reviews, request validation, authentication, and stable local data references.'],
];
const icons = {'Revit':'autodesk-revit','AutoCAD':'autocad','Navisworks':'navisworks','BIMcollab':'bimcollab','Python':'python','C#':'csharp','.NET':'dotnet','React':'react','Next.js':'next-js','JavaScript':'javascript','Git':'git','GitHub':'github','VS Code':'vscode','Visual Studio':'visual-studio','Excel':'microsoft-excel','Node.js':'nodejs','TypeScript':'typescript','MongoDB':'mongodb','PostgreSQL':'postgresql','GitLab':'gitlab','Dynamo':'dynamobim','ACC':'acc','AutoCAD Plant 3D':'plant3d-user','Revizto':'revizto-user','ChatGPT':'chatgpt-user','Gemini':'gemini-user','GitHub Copilot':'copilot-user'};
Object.assign(icons, {'Revit API':'revit-api', 'Word':'microsoft-word', 'Codex':'codex', 'Stitch':'stitch.png', 'Tailwind CSS':'tailwind-css', 'Three.js':'three-js', 'Render':'render', 'Vercel':'vercel', 'Netlify':'netlify'});
const toolsFor = name => skills.find(([group]) => group === name)?.[1] || [];
const withIcons = labels => [...new Set(labels)].map(label => [label, icons[label] || null]);
export const toolGroups = [
  ['Revit Add-in Development', withIcons(['Revit API', ...toolsFor('Revit Add-in Development').filter(label => label !== 'Revit SDK'), 'Dynamo', 'Add-ins Manager'])],
  ['Development & Deployment', withIcons(['Git', 'GitHub', 'GitLab', 'Visual Studio', 'VS Code', 'Render', 'Vercel', 'Netlify'])],
  ['BIM / Coordination', withIcons([...toolsFor('BIM / Coordination'), 'ACC'])],
  ['Web / Data', withIcons([...toolsFor('Web / Data'), 'Tailwind CSS', 'Three.js'])],
  ['Office', withIcons(toolsFor('Language & Office').filter(label => label !== 'English'))],
  ['Standards', [['ISO 19650','iso19650'],['VDI 2552','vdi2552'],['BCF','bcf'],['IFC','ifc'],['LOI','loi']]],
  ['Design', [['Figma','figma'], ['Photoshop','adobe-photoshop'], ['Stitch',icons.Stitch]]],
  ['AI', [...withIcons(toolsFor('AI-assisted Development')), ['Claude','claude'], ['Google AI Studio','google-ai-studio']]],
];
export const toolColors = {'Revit API':'#287bb5','Revit SDK':'#245aa8','WPF':'#7455b8','GitLab':'#e96a2a','Add-ins Manager':'#2671a9','Revizto':'#75b836','AutoCAD Plant 3D':'#c5363e','OOP':'#8a63d2','Debugging':'#dd9a25','Documentation':'#397ab8','Version control':'#da5841','Node.js':'#4d933e','TypeScript':'#3178c6','MongoDB':'#3b9143','PostgreSQL':'#416e9b','ChatGPT':'#1b9678','Gemini':'#6b69d6','GitHub Copilot':'#5867a5','Codex':'#278871','English':'#506fc6','Word':'#185abd','PowerPoint':'#c64e29'};



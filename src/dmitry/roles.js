import { experience, projects } from '../profile';

// Workflow sections organize the responsibilities in the CV; they are not dated milestones.
const roleContent = [
  {id:'makerpath',website:'http://www.makerpath.io/',summary:'Develop OxiNote’s cross-platform interface, Markdown editor, and reliable offline storage.',tools:['React Native','TypeScript','Markdown','JSON storage'],projectNumbers:[10],process:[['Foundation & UX','Define the technical foundation, feature-based architecture, local data strategy, and note-management UX patterns.'],['Application development','Build reusable React Native components, the Markdown editor, and image/file import with resize and preview behavior.'],['Data reliability','Implement authentication, CRUD, local JSON storage, and stable file/asset references for offline use.']]},
  {id:'dcmvn',summary:'Translate BIM/MEP production requirements into Revit automation tools, alongside coordinated MEPF modeling and project delivery.',
    tools:['C# / .NET','Revit API','WPF','Python','Git / GitLab','Revit','AutoCAD','Revizto','Navisworks','BIMcollab'],
    projectNumbers:[52,34,35,36,37,38,40,41,2,4,5,6,7,15,16,18,19,22,23,33,42,43,44],
    responsibilityGroups:[
      {title:'Automation Development',items:[
        'Translate production requirements into Revit add-ins for sheets, family placement, parameters, MEP generation, routing, and model checks.',
        'Develop C#/.NET tools with Revit API and WPF, working with element data, geometry, connectors, systems, and transactions.',
        'Debug, maintain, and document tool code using Git and GitLab; support checks and revisions as production requirements change.',
      ]},
      {title:'BIM / MEP Delivery',items:[
        'Build and coordinate MEPF models across multidisciplinary projects.',
        'Review clashes and model data with coordination tools, resolve modeling issues, and incorporate project changes.',
        'Create as-built models from Point Cloud data and support coordinated model and drawing delivery.',
      ]},
    ],
    process:[['Requirements & scope','Identify the repetitive production task, required inputs, expected output, and model constraints with engineering requirements in view.'],['Development & review','Build and debug the Revit workflow; review element data, geometry, connectors, and the affected model changes.'],['Documentation & maintenance','Document usage, maintain code in Git / GitLab, and revise tools as production workflows evolve.']],
  },
  {id:'mindx',summary:'Build responsive React interfaces and REST APIs with authentication, validation, and database integration.',tools:['React','Node.js','Express.js','MongoDB','JWT','Git','Figma'],projectNumbers:[11,12,13,14],process:[['Frontend implementation','Translate Figma designs into responsive React interfaces with reusable components, routing, state management, and forms.'],['Backend integration','Design REST APIs and MongoDB models; implement JWT authentication, authorization, middleware, validation, and CRUD.'],['Review & improvements','Debug frontend/backend issues, use Git workflows, participate in code reviews, and propose practical improvements.']]},
  {id:'armo-vietnam',summary:'Design electrical systems, build Revit models, and coordinate electrical drawings with other MEP disciplines.',tools:['Revit','Electrical design','MEPF coordination','Quantity estimation'],projectNumbers:[],process:[['Design & estimation','Design electrical systems to customer requirements and calculate equipment quantities for budgeting and procurement.'],['Model coordination','Create 3D electrical models in Revit, coordinate with mechanical and plumbing disciplines, and resolve clashes.'],['Drawing delivery','Prepare electrical layouts, equipment arrangements, and coordinated drawings; revise designs as project requirements change.']]},
  {id:'cadian-vietnam',summary:'Draft electrical systems, estimate equipment quantities, and revise CAD documentation for project delivery.',tools:['CAD drafting','Electrical design','Quantity estimation','Drawing documentation'],projectNumbers:[],process:[['Requirements & quantities','Design and draft automatic electrical systems to customer requirements and estimate equipment quantities.'],['CAD documentation','Produce detailed CAD drawings and support repair and renovation work for existing buildings.'],['Revisions & checks','Incorporate customer comments and site conditions, coordinate drawing updates, and check documentation for consistency.']]},
];
export const roles = experience.map(([date,title,company,context,responsibilities],index)=>({date,title,company,context,responsibilities,...roleContent[index],projects:roleContent[index].projectNumbers.map(number=>projects.find(project=>project.id===`hoa-project-${number}`)).filter(Boolean)}));

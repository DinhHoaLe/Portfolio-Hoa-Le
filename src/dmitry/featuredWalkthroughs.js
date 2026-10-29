// Concrete examples from the documented project scope; no invented measurements.
export const featuredWalkthroughs={
  'hoa-project-34':{
    introduction:'A family-data workflow that brings inspection, parameter selection, and transfer review into one interface.',
    contribution:'Revit add-in development with C#/.NET and WPF, covering family analysis, JSON reporting, and the parameter-transfer workflow.',
    steps:[
      ['Example Input','A folder of .rfa files, the currently open destination family, and the parameter definitions or Type values selected for reuse.'],
      ['Implementation','Analyze family metadata and parameters, save the results as JSON, then review the destination preview and transfer settings before applying changes.'],
      ['Output & Review','A reusable JSON report and a reviewed parameter-transfer operation. Check definitions, formulas, Type mappings, and Revit assignment constraints.'],
    ],
    value:'The workflow makes source and destination data easier to compare and supports parameter reuse without repeatedly inspecting each family by hand.',
  },
  'hoa-project-9':{
    introduction:'An airport digital twin that brings spatial context, building information, and sensor monitoring into one web application.',
    contribution:'Full-stack development across the GIS/BIM interface, device APIs, spatial data, and live sensor communication.',
    steps:[
      ['Example Input','An airport selection, georeferenced BIM/IFC context, an asset inventory, and sensor readings associated with their locations.'],
      ['Implementation','Place building and asset information in the GIS scene, connect device data through APIs and persistent connections, and expose selection and monitoring views.'],
      ['Output & Review','An airport view with selectable assets and sensors, current readings, and trend information. The project gallery shows the Long Thanh and Vietnam Green Airport views.'],
    ],
    value:'Users can inspect where an asset is and review its operational information in the same spatial interface.',
  },
  'hoa-project-55':{
    introduction:'An AI-assisted CAD-to-BIM workflow with explicit engineering inputs and a review step before model creation.',
    contribution:'Development of the Revit & AI workflow, including CAD route interpretation, creation inputs, and review criteria for native Revit pipes.',
    steps:[
      ['Example Input','A selected DWG layer with pipe centerlines, drawing units, pipe and system types, diameter, level, and elevation offset.'],
      ['Workflow','Use the AI assistant and MCP tools to inspect routes and coordinates, present the proposed pipe settings, and create only the approved elements.'],
      ['Target Output','Native Revit pipes and a creation summary. Review endpoints, elevations, diameters, system assignments, and duplicate handling against the CAD source.'],
    ],
    value:'The project connects a natural-language request to a reviewable BIM operation. A recorded demonstration and implementation results will be added separately.',
  },
};

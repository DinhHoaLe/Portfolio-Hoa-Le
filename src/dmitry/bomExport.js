export const bomExportProject = {
  title:'MEP Tool — Export BOM from View',
  description:'A Revit 2023 add-in for reviewing scoped model quantities, exporting traceable Excel BOM reports, and previewing or creating native Revit schedules.',
  folderName:'MEP_Export_BOM_From_View_ver1',
  customer:'Personal Revit add-in project',
  context:'Personal Revit add-in project',
  projectType:'Personal',
  role:'Revit Add-in Developer',
  tools:['C#','.NET Framework 4.8','Revit 2023 API','WPF / XAML','Open XML'],
  image:'/profile/edited/bom-export-symbol.png',
  scopeNote:'Preview and Excel export do not persist model edits; temporary schedule previews roll back. Explicit schedule creation modifies the host model and can add supporting parameters or scope markers, depending on the selected settings. Linked models are not modified.',
  sections:[],
  links:[['Source code','https://github.com/DinhHoaLe/MEP_Export_BOM_From_View_ver1']],
  toolContent:[
    {title:'Key Features',items:[
      'Choose Entire Model, an orthographic 3D View, a Floor Plan, or a Scope Box; preview the scope before choosing categories.',
      'Include directly loaded Revit links, with source and link-instance identity retained for auditing.',
      'Group by source, category, type, system, exact size, and unit. Sum MEP curve lengths or count instances; configure supported length, area, and volume measurement rules.',
      'Inspect element IDs, instance/type properties, quality warnings, and Notes; select or zoom supported host and linked elements through the modeless interface.',
      'Export grouped BOM, element audit, and Notes to Excel without requiring Excel to be installed; support XLSX templates and explicit column mapping.',
      'Configure independent BOM and native-schedule fields, filters, sorting, grouping, and totals.',
      'Preview native schedules with rollback, explicitly create a selected schedule batch, or export existing schedules to separate worksheets.',
      'Save/load presets and BOM snapshots; compare compatible snapshots for Added, Removed, Changed, and quantity deltas.',
    ]},
    {title:'Installation & Operation',paragraphs:['Targets Revit 2023, .NET Framework 4.8, Windows x64. Load the DLL through Add-In Manager (Manual) and run MEP_Export_BOM_From_View_ver1.ExportBomCommand. Preview the selected scope, review Notes and categories, then export the BOM or explicitly create schedules. Use Refresh after model or scope changes.']},
  ],
};

export const bomExportCaseStudy = {
  contribution:'Develop the Revit quantity-collection workflow, WPF review interface, grouping and measurement rules, Excel export, and schedule preview/creation integration.',
  problem:'Quantity take-off needs an explicit model scope, consistent grouping and units, and a way to trace every grouped result back to its source elements. Manual copying between model views, schedules, and spreadsheets makes discrepancies harder to investigate.',
  solution:'Collect scoped host/link instances, review categories and warnings, then aggregate quantities with traceable identities. Keep BOM/Excel rules separate from native schedule configuration and distinguish preview from explicit model-changing operations.',
  architecture:[['Revit collection','Resolve model/view/Scope Box scope and host or loaded-link sources.'],['Quantity & grouping','Read supported quantities, preserve units, and aggregate with source identities.'],['WPF review','Inspect BOM rows, element IDs, properties, Notes, and schedule settings.'],['Delivery','Export XLSX reports or explicitly create a validated native-schedule batch.']],
  workflow:[['Input','Choose a scope and optional loaded links, run Preview BOM, then select categories and measurement rules.'],['Review','Inspect grouped quantities and source IDs; configure filters, fields, template mapping, or independent native-schedule settings.'],['Output','Export an Excel BOM with element audit and Notes, compare a compatible snapshot, or explicitly create host Revit schedules. Reconcile quantities against Properties or a schedule with matching conditions.']],
  validation:'The repository documents smoke tests for grouping and Excel export using synthetic data, plus WPF resource/binding and UI previews outside Revit. These checks do not verify runtime on a real model. Scoped collection, link transforms, native schedule behavior, modeless selection, batch rollback, and Undo still require in-Revit validation.',
  limitations:[
    'Spatial filtering uses bounding boxes and can include extra elements. An element crossing a scope boundary contributes its full quantity, not a clipped portion.',
    'Perspective 3D views, split floor-plan crops, and nested Revit links are unsupported. Linked-view overrides and phase mapping are not fully reproduced by the Revit 2023 collection workflow.',
    'Native schedule configuration and units are separate from BOM/Excel rules. Linked quantities belong in BOM/Excel rather than host-only native schedules; reconcile scope and totals explicitly.',
    'Review Notes for unreadable quantities, missing values, and varying parameters. Different measurement units are not combined into a single grand quantity.',
    'Template export requires an unencrypted XLSX with a writable output region; conflicting formulas, merged cells, protected data sheets, or tables can prevent export. The original template is preserved.',
    'Creating schedules can write host supporting parameters or scope membership. Preview rolls back temporary changes; explicit creation and Undo behavior need native integration testing.',
  ],
};

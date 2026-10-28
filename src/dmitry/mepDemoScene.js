import * as THREE from 'three';

// Original illustrative geometry, independent of any employer or client model.
export function createMepDemoScene() {
  const model=new THREE.Group();
  const material=(color,metalness=0,roughness=.65)=>new THREE.MeshStandardMaterial({color,metalness,roughness});
  const concrete=material('#dedbd3'), white=material('#eeede8'), steel=material('#b6bfc5',.55,.36);
  const blue=material('#2677b6',.35,.3), dark=material('#344551',.45,.4), copper=material('#ad8158',.55,.4), green=material('#4f7d6a');
  function mesh(geometry,mat,x,y,z,outlined=false){
    const item=new THREE.Mesh(geometry,mat);item.position.set(x,y,z);item.castShadow=true;item.receiveShadow=true;model.add(item);
    if(outlined){const lines=new THREE.LineSegments(new THREE.EdgesGeometry(geometry),new THREE.LineBasicMaterial({color:'#7d898e',transparent:true,opacity:.28}));item.add(lines);}
    return item;
  }
  const box=(w,h,d,x,y,z,mat=white,outlined=true)=>mesh(new THREE.BoxGeometry(w,h,d),mat,x,y,z,outlined);
  function cylinder(radius,length,x,y,z,mat=blue,axis='y'){
    const item=mesh(new THREE.CylinderGeometry(radius,radius,length,16),mat,x,y,z);
    if(axis==='x')item.rotation.z=Math.PI/2;
    if(axis==='z')item.rotation.x=Math.PI/2;
    return item;
  }
  function pipe(points,radius=.055,mat=blue){
    for(let i=1;i<points.length;i++){
      const start=new THREE.Vector3(...points[i-1]),end=new THREE.Vector3(...points[i]);
      const direction=end.clone().sub(start),mid=start.clone().add(end).multiplyScalar(.5);
      const segment=cylinder(radius,direction.length(),...mid.toArray(),mat);
      segment.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction.normalize());
    }
    points.slice(1,-1).forEach(point=>mesh(new THREE.SphereGeometry(radius*1.02,12,8),mat,...point));
  }
  box(5.2,.18,4.2,0,-.12,0,concrete);
  for(let x=-2.5;x<2.6;x+=.65)box(.008,.008,4.1,x,-.022,0,steel,false);
  for(let z=-2;z<2.1;z+=.65)box(5.1,.008,.008,0,-.02,z,steel,false);
  for(const x of [-2.35,2.35])for(const z of [-1.85,1.85]){
    box(.15,2.9,.15,x,1.4,z,concrete);
    box(.29,.09,.29,x,.04,z,white);
  }
  for(const z of [-1.85,1.85])box(4.85,.17,.15,0,2.8,z,white);
  for(const x of [-2.35,2.35])box(.15,.17,3.85,x,2.8,0,white);
  // Low rear wall keeps the service systems visible from every orbit angle.
  box(4.8,.65,.1,0,.3,-1.9,concrete);
  // Air handling unit and ductwork.
  box(1.8,.85,1.05,-.65,.62,-.95,white);
  box(1.84,.1,1.09,-.65,.15,-.95,dark);
  for(const x of [-1.23,-.66,-.09])box(.012,.72,.018,x,.63,-.414,steel,false);
  for(const x of [-1.1,-.25]){
    cylinder(.23,.035,x,.64,-.4,dark,'z');
    cylinder(.17,.05,x,.64,-.37,steel,'z');
    for(let a=0;a<4;a++){const blade=box(.035,.26,.015,x,.64,-.33,dark,false);blade.rotation.z=a*Math.PI/2+.45;}
  }
  box(.55,1.05,.5,-.7,1.57,-.95,steel);
  box(3.2,.4,.55,-.2,2.26,-.95,steel);
  box(.55,.4,2.35,1.15,2.26,-.05,steel);
  box(2.15,.4,.55,.35,2.26,1.05,steel);
  for(const x of [-1.5,-.9,-.3,.3,.9])box(.025,.43,.58,x,2.26,-.95,white);
  for(const z of [-.6,0,.6,1.05])box(.58,.43,.025,1.15,2.26,z,white);
  for(const x of [-1.1,.2,1.15]){
    cylinder(.012,.35,x,2.6,-.95,dark);
    box(.7,.025,.7,x,2.4,-.95,dark,false);
  }
  // Three pump sets, distribution headers, risers, and isolation valves.
  box(2.45,.11,.82,.5,.04,.85,concrete);
  for(const x of [-.35,.45,1.25]){
    box(.52,.12,.56,x,.16,.85,steel);
    cylinder(.14,.4,x,.39,.91,blue,'z');
    cylinder(.18,.07,x,.39,1.14,dark,'z');
    cylinder(.13,.22,x,.4,.55,blue);
    pipe([[x,.5,.55],[x,1.1,.55],[x,1.1,.15]],.055,blue);
    cylinder(.08,.07,x,.83,.55,steel);
    cylinder(.065,.025,x+.075,.83,.55,green,'x');
  }
  for(const [z,y,mat] of [[.15,1.1,blue],[-.08,1.35,copper]]){
    pipe([[-1.7,y,z],[1.8,y,z],[1.8,2.6,z],[1.8,2.6,-1.5],[-1.2,2.6,-1.5]],.067,mat);
    for(const x of [-1.1,.3,1.6])cylinder(.087,.055,x,y,z,steel,'x');
  }
  pipe([[-1.7,1.1,.15],[-1.7,.5,.15],[-1.7,.5,-.9]],.055,blue);
  pipe([[-1.7,1.35,-.08],[-1.7,.74,-.08],[-1.7,.74,-.9]],.055,copper);
  // Electrical cabinet and cable tray.
  box(.55,1.15,.38,-1.86,.61,1.15,white);
  box(.39,.2,.025,-1.86,.94,1.36,dark);
  for(let i=0;i<3;i++)cylinder(.027,.02,-1.99+i*.13,.72,1.36,i===0?green:blue,'z');
  for(let i=0;i<5;i++)box(.33,.018,.018,-1.86,.3+i*.05,1.36,steel,false);
  box(3.6,.04,.28,0,2.58,1.55,steel);
  for(let x=-1.75;x<1.8;x+=.18)box(.025,.09,.28,x,2.62,1.55,white,false);
  pipe([[-1.86,1.2,1.15],[-1.86,2.56,1.15],[-1.86,2.56,1.55]],.025,dark);
  model.userData={illustrative:true,systems:['HVAC','Piping','Electrical'],pumpCount:3};
  return model;
}

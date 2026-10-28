import React, {memo,useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createMepDemoScene} from './mepDemoScene';

function MepModel3D({running,phase}){
  const host=useRef(null),engine=useRef(null);
  const [fallback,setFallback]=useState(false);
  useEffect(()=>{
    const container=host.current;
    let renderer;
    try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});}
    catch{setFallback(true);return;}
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6));
    renderer.setClearColor(0x000000,0);
    renderer.shadowMap.enabled=true;
    renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    renderer.shadowMap.autoUpdate=false;
    renderer.shadowMap.needsUpdate=true;
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure=1.35;
    const canvas=renderer.domElement;
    canvas.setAttribute('aria-label','Illustrative 3D MEP model. Drag horizontally to rotate, or use the view buttons.');
    canvas.setAttribute('role','img');
    container.append(canvas);
    const scene=new THREE.Scene();
    const model=createMepDemoScene();scene.add(model);
    scene.add(new THREE.HemisphereLight(0xf7fbff,0xaaa293,2.6));
    const sun=new THREE.DirectionalLight(0xffffff,3.3);sun.position.set(-3,8,5);sun.castShadow=true;
    sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-5;sun.shadow.camera.right=5;sun.shadow.camera.top=5;sun.shadow.camera.bottom=-5;sun.shadow.normalBias=.04;scene.add(sun);
    const fill=new THREE.DirectionalLight(0xc1d7ee,1.5);fill.position.set(5,4,-4);scene.add(fill);
    const ground=new THREE.Mesh(new THREE.PlaneGeometry(16,16),new THREE.ShadowMaterial({opacity:.1}));ground.rotation.x=-Math.PI/2;ground.position.y=-.22;ground.receiveShadow=true;scene.add(ground);
    const camera=new THREE.OrthographicCamera(-4,4,4,-4,.1,60);camera.position.set(7,6.5,8);
    const controls=new OrbitControls(camera,canvas);controls.target.set(0,1.3,0);
    controls.enablePan=false;controls.enableZoom=false;controls.enableDamping=false;
    controls.minPolarAngle=Math.PI/6;controls.maxPolarAngle=Math.PI*.47;
    controls.autoRotateSpeed=.42;controls.update();controls.saveState();
    canvas.style.touchAction='pan-y';
    let raf=0,lastTime=0,disposed=false,dragging=false,active=false;
    function draw(time){
      raf=0;if(disposed)return;
      if(active&&lastTime&&time-lastTime<33){raf=requestAnimationFrame(draw);return;}
      const delta=lastTime?Math.min((time-lastTime)/1000,.08):0;lastTime=time;
      controls.autoRotate=active&&!dragging;
      controls.update(delta);renderer.render(scene,camera);
      if(active&&!raf)raf=requestAnimationFrame(draw);
    }
    function requestDraw(){if(!raf&&!disposed)raf=requestAnimationFrame(draw);}
    const onStart=()=>{dragging=true;requestDraw();},onEnd=()=>{dragging=false;requestDraw();};
    controls.addEventListener('start',onStart);controls.addEventListener('end',onEnd);controls.addEventListener('change',requestDraw);
    function resize(){const {width,height}=container.getBoundingClientRect();if(!width||!height)return;const aspect=width/height;const span=3.65;camera.left=-span*aspect;camera.right=span*aspect;camera.top=span;camera.bottom=-span;camera.updateProjectionMatrix();renderer.setSize(width,height);requestDraw();}
    const observer=new ResizeObserver(resize);observer.observe(container);resize();
    const contextLost=event=>{event.preventDefault();active=false;if(raf)cancelAnimationFrame(raf);raf=0;setFallback(true);};canvas.addEventListener('webglcontextlost',contextLost);
    engine.current={setRunning(value){active=value;lastTime=0;if(!value&&raf){cancelAnimationFrame(raf);raf=0;}requestDraw();},rotate(direction){const offset=camera.position.clone().sub(controls.target);offset.applyAxisAngle(new THREE.Vector3(0,1,0),direction*Math.PI/6);camera.position.copy(controls.target).add(offset);controls.update();requestDraw();},reset(){controls.reset();requestDraw();},render:requestDraw};
    requestDraw();
    return()=>{
      disposed=true;engine.current=null;if(raf)cancelAnimationFrame(raf);observer.disconnect();
      controls.removeEventListener('start',onStart);controls.removeEventListener('end',onEnd);controls.removeEventListener('change',requestDraw);controls.dispose();canvas.removeEventListener('webglcontextlost',contextLost);
      const geometries=new Set(),materials=new Set();scene.traverse(object=>{if(object.geometry)geometries.add(object.geometry);if(object.material)(Array.isArray(object.material)?object.material:[object.material]).forEach(m=>materials.add(m));});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());renderer.dispose();canvas.remove();
    };
  },[]);
  useEffect(()=>{engine.current?.setRunning(running);},[running]);
  useEffect(()=>{engine.current?.render();},[phase]);
  return <div className="hw-model-viewer">
    <div ref={host} className="hw-model-canvas" hidden={fallback}/>
    {fallback&&<img className="hw-model-fallback" src="/profile/edited/revit-mep-model-cutout.webp" alt="Illustrative MEP model"/>}
    <div className="hw-model-controls">{!fallback&&<><button type="button" aria-label="Rotate model left" onClick={()=>engine.current?.rotate(-1)}>↶</button><button type="button" onClick={()=>engine.current?.reset()}>Reset view</button><button type="button" aria-label="Rotate model right" onClick={()=>engine.current?.rotate(1)}>↷</button></>}<span>{fallback?'Model preview':'Drag to rotate'}</span></div>
  </div>;
}

export default memo(MepModel3D);

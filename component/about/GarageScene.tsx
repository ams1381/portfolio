'use client'
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";
import React, {Suspense, useRef, useState} from "react";
import * as THREE from "three";
import {DirectionalLightHelper} from "three";
// import {GarageModel} from "@/component/about/Garage";
import {CameraInitializer} from "@/component/about/CameraInitilizer";
import {CanvasLoader} from "@/component/CanvasLoader";
import {useControls} from "leva";
import {Bloom, DepthOfField, EffectComposer, Noise, Vignette} from "@react-three/postprocessing";
import {TAboutMeActiveView} from "@/types";
import { useWindowSize } from "@uidotdev/usehooks";
// import {EducationSection} from "@/component/about/education/Education";
import {WorkExperience} from "@/component/about/work-experienec/WorkExperience";
import dynamic from "next/dynamic";
import {useMediaQuery} from "react-responsive";
import {PostFX} from "@/component/about/SceneEffectComposer";
// import SceneEffectComposer from "@/component/about/SceneEffectComposer";
const EducationSection = dynamic(() => import("@/component/about/education/Education"),{ssr : false})
const GarageModel = dynamic(() => import("@/component/about/Garage"),{ssr : false})

// scale={72} position={[-500,0,-150]} rotation={[0,100,0]}
export default function GarageScene({setReadyToLoad}: { setReadyToLoad: any }) {
    const [activeView,setActiveView] = useState<TAboutMeActiveView>('initial');
    const {height} = useWindowSize();
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    return (
        <>
            <Canvas shadows={isMobile ?  undefined :'basic'}
                    resize={{ debounce: 200 }}
                    dpr={1}
                    gl={{ antialias: false, powerPreference: "high-performance" }}
                    camera={{position: [-90, 30, -500], fov: 60, near: 0.1, far: 2000}}
                    className={'h-full relative'} style={{height: height ? height - 70 : 900}}>

                <Environment files={'/models/dodge/envi.hdr'}/>
                <WorkExperience setActiveView={setActiveView} activeView={activeView}/>
                <EducationSection activeView={activeView} setActiveView={setActiveView}/>
                {/*<CanvasLoader setReadyToLoad={setReadyToLoad}/>*/}
                <CameraInitializer activeView={activeView} />
                <GarageModel
                    setActiveView={setActiveView}
                    activeView={activeView}
                    position={[0, -46, 0]}/>
                <LightsComponent/>
                {/*<CameraMover/>*/}
                <PostFX isMobile={isMobile} />
                {/*<SceneEffectComposer  />*/}

                {/*<OrbitControls enablePan={true}*/}
                {/*    // maxDistance={6}*/}
                {/*    // maxZoom={7}*/}
                {/*    // minPolarAngle={Math.PI / 5}        // lowest angle (0 = straight up)*/}
                {/*    // maxPolarAngle={Math.PI / 2.5}*/}
                {/*               enableZoom={true}*/}
                {/*               enableRotate={true} />*/}
            </Canvas>
        </>

    );
}
const CameraMover = () => {
    const { camera, mouse } = useThree();
    const isLerping = useRef(true); // Initialize ref to keep track of lerping state
    let v = new THREE.Vector3()
    useFrame(() => {
        if (isLerping.current) {
            camera.position.lerp(v.set(camera.position.x + mouse.x , camera.position.y - mouse.y / 3, camera.position.z + 0.09), 0.09);
        }
    });

    return null;
}
const LightsComponent = () => {
    const lightRef = useRef<any>();
    const targetRef = useRef<any>();

    // useHelper(lightRef,DirectionalLightHelper,4);

    return <>
        <ambientLight intensity={0.34}
                      position={[0, 900, 0]}
                      color={'#ffffff'}/>
        {/*<directionalLight ref={lightRef} position={position}*/}
        {/*                  castShadow={true}*/}
        {/*                  scale={10}*/}
        {/*                  // shadow-camera-left={-300}*/}
        {/*                  // shadow-camera-right={300}*/}
        {/*                  // shadow-camera-top={300}*/}
        {/*                  // shadow-camera-bottom={-300}*/}
        {/*                  intensity={intensity}*/}
        {/*                  color={color} />*/}
        {/*    <object3D ref={targetRef} castShadow={true}*/}
        {/*              position={targetPosition}/>*/}
        {/*</directionalLight>*/}
    </>
}

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
const EducationSection = dynamic(() => import("@/component/about/education/Education"),{ssr : false})
const GarageModel = dynamic(() => import("@/component/about/Garage"),{ssr : false})

// scale={72} position={[-500,0,-150]} rotation={[0,100,0]}
export default function GarageScene({setReadyToLoad}: { setReadyToLoad: any }) {
    const [activeView,setActiveView] = useState<TAboutMeActiveView>('initial');
    const {height} = useWindowSize();
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    return (
        <>
            <Canvas shadows={isMobile ?  undefined :'basic'} resize={{ debounce: 200 }} dpr={[1, 1.5]}
                    gl={{ antialias: false, powerPreference: "high-performance" }}
                    camera={{position: [-90, 30, -500], fov: 60, near: 0.1, far: 2000}}
                    className={'h-full relative'} style={{height: height ? height - 70 : 900}}>

                <Environment files={'/models/dodge/envi.hdr'}/>
                <Suspense fallback={<></>}>
                    <WorkExperience setActiveView={setActiveView} activeView={activeView}/>
                </Suspense>
                <Suspense fallback={<></>}>
                    <EducationSection activeView={activeView} setActiveView={setActiveView}/>
                </Suspense>
                <CanvasLoader setReadyToLoad={setReadyToLoad}/>
                <CameraInitializer activeView={activeView} />
                <Suspense fallback={<></>}>
                    <GarageModel
                        setActiveView={setActiveView}
                        activeView={activeView}
                        position={[0, -46, 0]}/>
                </Suspense>
                <LightsComponent/>
                <CameraMover/>

                <EffectComposer >
                    { !isMobile ? <DepthOfField
                        focusDistance={activeView === 'education' ? 0.01 : 10}
                        focalLength={0.02}    // طول لنز (هرچی بیشتر باشه، عمق میدان کمتر میشه)
                        bokehScale={activeView === 'education' ? 1 : 0}        // شدت بوکه (نقاط تار پشت صحنه)
                        height={480}          // کیفیت
                    /> : <></>}
                    <Bloom intensity={isMobile ? 0.1 : 0.2}      // strength of bloom
                        luminanceThreshold={0.2} // only glow emissive/bright materials
                        mipmapBlur={!isMobile}             // smoother glow
                    />
                    {!isMobile ? <Noise opacity={0.025} /> : <></>}
                    <Vignette eskil={false} offset={0.1} darkness={isMobile ? 0.05 : 0.07} />
                </EffectComposer>

                {/*<OrbitControls enablePan={true}*/}
                {/*    // maxDistance={6}*/}
                {/*    // maxZoom={7}*/}
                {/*    // minPolarAngle={Math.PI / 5}        // lowest angle (0 = straight up)*/}
                {/*    // maxPolarAngle={Math.PI / 2.5}*/}
                {/*               enableZoom={true}*/}
                {/*               enableRotate={true}/>*/}
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

'use client'

import * as THREE from 'three'
import {Canvas, useFrame} from '@react-three/fiber'

import {Sparkles} from '@react-three/drei'

import {EffectComposer, Bloom, Noise, Vignette} from '@react-three/postprocessing'

import {Html, useProgress} from '@react-three/drei'
import React, {memo, Suspense, useEffect} from "react";
import {Title, TitleL} from "@/component/canvas/3dTitle";
import {DiamondModel} from "@/component/canvas/3dModel";
import {CameraComponent} from "@/component/canvas/perspectiveCamera";
import {CanvasLoader} from "@/component/CanvasLoader";
import {Rig} from "@/component/canvas/Rig";
import {Lights} from "@/component/canvas/lights";


// function CanvasLoader({ setReadyToLoad }) {
//     const {active , loaded , progress} = useProgress();
//
//
//     useEffect(() => {
//         if(progress === 100)
//             setTimeout(() => {
//                 setReadyToLoad(true)
//             },500)
//     }, [progress]);
//
//     return <Html center> </Html>
// }

const TestComponent = memo(({ setReadyToLoad , pageStatus }) => {
    let isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return <Canvas
        colorManagement
        gl={{antialias: false, alpha: true}}
        // frameloop="demand"
        // camera={{position: [-5, 12, 5], fov: 40}}
        className={'!w-full !absolute top-0 h-full'}
    >
        <CameraComponent  pageStatus={pageStatus} />
        {/*<PerspectiveCamera*/}
        {/*    makeDefault*/}
        {/*    ref={cameraRef}*/}
        {/*    // position={pageStatus === 'home' ? [0, 13, 14] : pageStatus === 'projects' ? [10, 40, 10] : [0 , 0, 0]}*/}
        {/*    fov={25}*/}
        {/*    near={0.1}*/}
        {/*    far={80}*/}
        {/*/>*/}
        <Suspense>
        <CanvasLoader setReadyToLoad={setReadyToLoad} />
        <color attach='background' args={isDarkTheme ? ['#050505'] : ['#d5d5d5']} />
        <fog attach='fog' args={[0x050505, 0, 28]} />
        {/*<pointLight position={[0, 1.8, 1.8]} intensity={1}  distance={20} color={'rgba(255,255,255,0.56)'} castShadow={true}  />*/}
        {/*<pointLight position={[-1, 2, 4.8]} intensity={3}  distance={10} color={'rgba(255,0,0,0.71)'}  />*/}
        {/*<pointLight position={[1, 1, 4]} intensity={10} distance={20} color={'rgb(255,255,255)'} />*/}
        {/*    { pageStatus === 'projects' && <pointLight position={[1, 1, 2.9]} intensity={3} distance={20} color={'rgba(241,243,255,0.83)'} />}*/}
            {/*<Environment files="env.hdr"/>*/}
            <DiamondModel pageStatus={pageStatus} />
            { window.innerWidth > 480 && <Title pageStatus={pageStatus}>{`AMIR MOHAMMAD`}</Title>}
            { window.innerWidth > 480 && <TitleL pageStatus={pageStatus}>{`AMIR MOHAMMAD`}</TitleL>}
            <Sparkles count={200} scale={[20, 20, 10 , 40 , 60 , 6]}
                      size={isDarkTheme ? 1 : 3} speed={2}
                      color={isDarkTheme ? '#cbcbff' : '#1a0000'} />

        <EffectComposer multisampling={0} disableNormalPass={true}>
            { isDarkTheme ? <Bloom
                luminanceThreshold={0}
                luminanceSmoothing={1.9}
                height={300}
                opacity={2}
            /> : <></>}
            { isDarkTheme ? <Noise opacity={0.020}/> : <></>}
            <Vignette  eskil={false} offset={0.1} darkness={0.05} />
        </EffectComposer>
        { pageStatus === 'home' && <Rig/>}
        <Lights />
        </Suspense>
    </Canvas>


})




export default TestComponent;
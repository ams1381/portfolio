'use client'

import * as THREE from 'three'
import {Canvas, useFrame} from '@react-three/fiber'
import {Environment, Sparkles} from '@react-three/drei'
import {EffectComposer, Bloom, Noise, Vignette} from '@react-three/postprocessing'
import {Html, useProgress} from '@react-three/drei'
import React, {memo, Suspense, useEffect} from "react";
import {Title, TitleL} from "./3dTitle";
import {DiamondModel} from "./3dModel";
import {CameraComponent} from "./perspectiveCamera";
import {CanvasLoader} from "@/component/CanvasLoader";
import {Rig} from "./Rig";
import {Lights} from "./lights";
import {useMediaQuery} from "react-responsive";

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

const LandingScene = memo(({setReadyToLoad, pageStatus}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    let isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return <Canvas dpr={isMobile ? 1 :[1, 1.5]} colorManagement gl={{antialias: false, alpha: true,toneMapping: THREE.ACESFilmicToneMapping}}
                   className={'!w-full !absolute top-0 !h-[100dvh]'}>
        <CameraComponent pageStatus={pageStatus}/>
        <Suspense>
            <CanvasLoader setReadyToLoad={setReadyToLoad}/>
            <color attach='background' args={isDarkTheme ? ['#020009'] : ['#f3f3f3']} />
            <fog attach='fog' args={[0x050505, 0, 28]}/>
            {/*<pointLight position={[0, 1.8, 1.8]} intensity={1}  distance={20} color={'rgba(255,255,255,0.56)'} castShadow={true}  />*/}
            {/*<pointLight position={[-1, 2, 4.8]} intensity={3}  distance={10} color={'rgba(255,0,0,0.71)'}  />*/}
            {/*<pointLight position={[1, 1, 4]} intensity={10} distance={20} color={'rgb(255,255,255)'} />*/}
            {/*    { pageStatus === 'projects' && <pointLight position={[1, 1, 2.9]} intensity={3} distance={20} color={'rgba(241,243,255,0.83)'} />}*/}
            <Environment files={'/models/diamond/env.hdr'} />
            <DiamondModel pageStatus={pageStatus}/>
            {window.innerWidth > 480 && <Title pageStatus={pageStatus}>{`AMIR MOHAMMAD`}</Title>}
            {window.innerWidth > 480 && <TitleL pageStatus={pageStatus}>{`AMIR MOHAMMAD`}</TitleL>}
            <Sparkles count={500} scale={[20, 20, 10, 40, 60, 6]}
                      size={isDarkTheme ? 1 : 3} speed={2}
                      color={isDarkTheme ? '#cbcbff' : '#1a0000'}/>
            {/*<Sun />*/}
            <EffectComposer multisampling={0} disableNormalPass={true}>
                {isDarkTheme ?
                    <Bloom
                        luminanceThreshold={0}
                        luminanceSmoothing={1.9}
                        height={300}
                        opacity={2}
                    /> : <></>}
                {isDarkTheme ? <Noise opacity={0.020}/> : <></>}
                <Vignette eskil={false} offset={0.1} darkness={0.05}/>
            </EffectComposer>
            {<Rig/>}
            {isDarkTheme && <Lights/>}
        </Suspense>
    </Canvas>


})


export default LandingScene;
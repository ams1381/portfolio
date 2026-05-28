'use client'

import * as THREE from 'three'
import {Canvas} from '@react-three/fiber'
import {Environment, Sparkles} from '@react-three/drei'
import {EffectComposer, Bloom, Noise, Vignette} from '@react-three/postprocessing'
import React, {memo, Suspense} from "react";
import {Title, TitleL} from "./3dTitle";
import {DiamondModel} from "./3dModel";
import {CameraComponent} from "./PerspectiveCamera";
import {CanvasLoader} from "@/component/CanvasLoader";
import {Rig} from "./Rig";
import {Lights} from "./Lights";
import {useMediaQuery} from "react-responsive";

const LandingScene = memo(({setReadyToLoad} : {setReadyToLoad : any}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    let isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    return <Canvas dpr={isMobile ? 1 :[1, 1.5]} gl={{antialias: false, alpha: true,toneMapping: THREE.ACESFilmicToneMapping}}
                   className={'!w-full !absolute top-0 !h-[100dvh]'}>
        <CameraComponent />
        <Suspense>
            <CanvasLoader setReadyToLoad={setReadyToLoad}/>
            <color attach='background' args={isDarkTheme ? ['#020009'] : ['#f3f3f3']} />
            <fog attach='fog' args={[0x050505, 0, 28]}/>

            <Environment files={'./models/diamond/env.hdr'} />
            <DiamondModel />
            {!isMobile && <Title>{`AMIR MOHAMMAD`}</Title>}
            {!isMobile && <TitleL>{`AMIR MOHAMMAD`}</TitleL>}
            <Sparkles count={500} scale={[20, 20, 10, 40, 60, 6] as any}
                      size={isDarkTheme ? 1 : 3} speed={2}
                      color={isDarkTheme ? '#cbcbff' : '#1a0000'}/>
            {/*<Sun />*/}
            <EffectComposer multisampling={0} enableNormalPass={false}>
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
'use client'

import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";
import React, {useRef, useState} from "react";
import * as THREE from "three";
import {CameraInitializer} from "@/component/about/CameraInitilizer";
import {TAboutMeActiveView} from "@/types";
import { useWindowSize } from "@uidotdev/usehooks";
import {WorkExperience} from "@/component/about/work-experienec/WorkExperience";
import {useMediaQuery} from "react-responsive";
import EducationSection from "@/component/about/education/Education";
import GarageModel from "@/component/about/Garage";
import {SkillSection} from "@/component/about/skills/SkillSection";


// scale={72} position={[-500,0,-150]} rotation={[0,100,0]}
export default function GarageScene({setReadyToLoad}: { setReadyToLoad: any }) {
    const [activeView,setActiveView] = useState<TAboutMeActiveView>('initial');
    const {height} = useWindowSize();

    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    return (
        <>
            <Canvas shadows={'soft'}
                    resize={{ debounce: 200 }}
                    dpr={isMobile ? 1 : [1,1.15]}
                    gl={{powerPreference: "high-performance" }}
                    camera={{position: [-90, 30, -500], fov: 60, near: 0.1, far: 1500}}
                    className={'h-full relative'} style={{height: height ? height - 70 : 900}}>

                <Environment files={'/models/dodge/envi.hdr'}/>
                <SkillSection setActiveView={setActiveView} activeView={activeView} />
                <WorkExperience setActiveView={setActiveView} activeView={activeView}/>
                <EducationSection activeView={activeView} setActiveView={setActiveView}/>
                {/*{ activeView === 'skills' ?*/}
                {/*    <IronManModel setActiveView={setActiveView} scale={0.09} position={[-510, -50, -1000]}/> : <></>}*/}
                {/*<CanvasLoader setReadyToLoad={setReadyToLoad}/>*/}
                <CameraInitializer activeView={activeView} />
                <GarageModel
                    setActiveView={setActiveView}
                    activeView={activeView}
                    position={[0, -46, 0]}/>
                <ambientLight intensity={0.4}
                              position={[0, 900, 0]}
                              // ref={lightRef}
                              color={'#ffffff'}/>
                {/*<directionalLight*/}
                {/*    intensity={0.5}*/}
                {/*    color={'#fff'}*/}
                {/*    position={[ -595.6, 120.74, -660.5 ]} />*/}
                <CameraMover/>

                {/*<OrbitControls/>*/}
                {/*{ isMobile ? <OrbitControls*/}
                {/*    // position={[-582.61, 26.13,-796.97]}*/}
                {/*    // rotation={[3.066, -0.44, 3.10]}*/}

                {/*    // maxDistance={6}*/}
                {/*    // enableRotate={false}*/}
                {/*    // position={[-582.61, 26.13,-796.97]}*/}
                {/*    // autoRotate={false}*/}
                {/*    enablePan={false}*/}
                {/*    enableZoom={false}*/}
                {/*    // maxZoom={7}*/}
                {/*    maxPolarAngle={Math.PI /2}*/}

                {/*    // minPolarAngle={Math.PI / 6}*/}
                {/*    //             enableZoom={true}*/}
                {/*                // enableRotate={true}*/}
                {/*/> : <></>}*/}
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
            camera.position.lerp(v.set(camera.position.x + mouse.x * 1.2 , camera.position.y - mouse.y , camera.position.z + 0.09), 0.12);
        }
    });

    return null;
}

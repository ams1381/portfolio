'use client'


import {TestCar} from "@/component/about/car/CarModel";
import React from "react";
import {Canvas} from "@react-three/fiber";
import {useMediaQuery} from "react-responsive";
import {useWindowSize} from "@uidotdev/usehooks";
import {OrbitControls, ScrollControls} from "@react-three/drei";
import CarM1 from "@/component/about/car/CarModelTest";
import {CameraRig} from "@/component/test/CameraRig";

export const TestScene = () => {
    const {height} = useWindowSize();
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    return <Canvas shadows={'soft'}
                   resize={{debounce: 200}}
                   dpr={isMobile ? 1 : [1, 1.15]}
                   gl={{powerPreference: "high-performance"}}
                   // camera={{position: [-90, 30, -500], fov: 60, near: 0.1, far: 1500}}
                   className={'h-full relative'} style={{height: height ? height - 70 : 900}}>
        <ScrollControls  pages={5}>
            <CameraRig />
            <CarM1
                scale={1}
                position={[0,0,0]}
            />
        </ScrollControls>
        <pointLight
            position={[3,4,1]}
            color={'#ffffff'}
            decay={0.2}
        />
        <pointLight
            position={[-3,4,1]}
            color={'#ffffff'}
            decay={0.2}
        />
        <ambientLight intensity={6.4}
                      position={[0, 0, 0]}
            // ref={lightRef}
                      color={'#ffffff'}/>
        {/*<OrbitControls />*/}
    </Canvas>
}
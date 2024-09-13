'use client'


import {Canvas} from "@react-three/fiber";
import {Sparkles} from "@react-three/drei";
import React from "react";

const BackScene = () => {
    return <Canvas className={'!absolute top-0 left-0 !w-full !h-full !z-[-1]'}>
        <Sparkles
            count={100}
            position={[-4, 0, -1.5]}
            scale={[6, 9, 10]}
            size={1.1}
            speed={3}
        />
        <Sparkles
            count={100}
            position={[4, 0, -1.5]}
            scale={[6, 9, 10]}
            size={1.1}
            speed={3}
        />
    </Canvas>
}

export default BackScene;
'use client'


import {Canvas} from "@react-three/fiber";
import {Sparkles} from "@react-three/drei";
import React, {useMemo} from "react";

const BackScene = () => {
    let isDarkTheme = useMemo(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,[]);
    return isDarkTheme ? <Canvas className={'!absolute top-0 left-0 !w-full !h-full !z-[-1]'}>

        <color attach='background' args={isDarkTheme ? ['#050505'] : ['#d5d5d5']} />
        <Sparkles
            count={100}
            position={[-4, 0, -1.5]}
            scale={[6, 9, 10]}
            size={1.1}
            color={isDarkTheme ? 'white' : 'black'}
            speed={3}
        />
        <Sparkles
            count={100}
            position={[4, 0, -1.5]}
            scale={[6, 9, 10]}
            size={1.1}
            color={isDarkTheme ? 'white' : 'black'}
            speed={3}
        />
    </Canvas> : ''
}

export default BackScene;
'use client'
import {useFrame} from '@react-three/fiber'
import React, {useRef} from 'react'
import * as THREE from 'three'


export const Lights = ({}) => {
    const groupL = useRef(null)
    const groupR = useRef(null)
    const front = useRef<THREE.SpotLight>(null)

    useFrame(({ pointer  }) => {
        if(!front.current) return
        front.current.position.x = THREE.MathUtils.lerp(
            front.current.position.x,
            -0.6 + -pointer.x * -7,
            0.07
        )
    })

    return (
        <>
            <spotLight
                ref={groupL}
                color={'#0096e6'}
                distance={20}
                intensity={100}
                position={[-4,2,4]}

            />
            <spotLight
                ref={groupR}
                color={'#e445ff'}
                distance={20}
                intensity={100}
                position={[4,2,4]} />


            <spotLight
                castShadow
                ref={front}
                color={'#ffffff'}
                penumbra={0.75}
                angle={Math.PI / 6}
                position={[0, 1.5, 5]}
                distance={10}
                intensity={100}
            />
        </>
    )
}

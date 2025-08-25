'use client'
import {useFrame, useThree} from '@react-three/fiber'
import React, {useEffect, useRef} from 'react'
import * as THREE from 'three'
import { PointLightHelper, SpotLightHelper , AmbientLight } from 'three'
import { useHelper } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'


export const Lights = ({}) => {
    // const { width } = useThree();
    const groupL = useRef(null)
    const groupR = useRef(null)
    const front = useRef(null)
    // useHelper(groupR, SpotLightHelper,  'yellow')
    // useHelper(groupL, SpotLightHelper, 'red')
    // useHelper(front, SpotLightHelper, 'white')
    useFrame(({ pointer , viewport }) => {
        const x = pointer.x * viewport.width / 2;
        const y = pointer.y * viewport.height / 2;

        // groupL.current.rotation.y = THREE.MathUtils.lerp(
        //     groupL.current.rotation.y,
        //     -pointer.x * (Math.PI / 2),
        //     0.1
        // )
        //
        // groupR.current.rotation.y = THREE.MathUtils.lerp(
        //     groupR.current.rotation.y,
        //     pointer.x * (Math.PI / 2),
        //     0.1
        // )

        front.current.position.x = THREE.MathUtils.lerp(
            front.current.position.x,
            -0.6 + -pointer.x * -7,
            0.07
        )
        // front.current.position.y = THREE.MathUtils.lerp(
        //     front.current.position.y,
        //     6 + pointer.y * -1,
        //     0.07
        // )
    })

    return (
        <>
            {/* visual mesh */}
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

            {/*/>*/}
            {/*/!*<group ref={groupL}>*!/*/}
            {/*/!*    <pointLight color={'#0004ff'} position={[0, 7, 1]} distance={10} intensity={20} />*!/*/}
            {/*/!*</group>*!/*/}
            {/*/!*<group ref={groupR}>*!/*/}
            {/*/!*    <pointLight ref={groupR} position={[1, 3, 4]}  color={'#50b2ff'} distance={15} intensity={55} />*!/*/}
            {/*/!*</group>*!/*/}

            {/*/!*<group >*!/*/}
            {/*/!*    <pointLight position={[0, 0, 2]} color={'rgb(255,255,255)'} distance={10} intensity={100} />*!/*/}
            {/*/!*</group>*!/*/}
            <spotLight
                castShadow
                ref={front}
                color={'#ffffff'}
                penumbra={0.75}
                angle={Math.PI / 6}
                position={[0, 1.5, 5]}
                distance={10}
                intensity={100}
                // shadow-mapSize={[2048, 2048]}
            />
        </>
    )
}

'use client'

import {LightRing} from "@/component/about/LightRing";
import React, {useRef} from "react";
import {useHelper} from "@react-three/drei";
import {PointLightHelper} from "three";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";

export const CarLights = ({nodes,materials,engineOn} : any) => {
    const backLightRef  = useRef<any>();
    const rightLightMatRef = useRef<any>();

    const leftLightMatRef = useRef<any>();
    useHelper(rightLightMatRef,PointLightHelper,1,'red');

    useFrame(() => {
        if(!rightLightMatRef.current || !leftLightMatRef.current || !backLightRef.current) return;
        let intensity = THREE.MathUtils.lerp(0, engineOn ? 4.3 : 0, 0.53) //
        let opacity = THREE.MathUtils.lerp(0, engineOn ? 0.3 : 0, 0.53)
        rightLightMatRef.current.intensity = intensity;
        leftLightMatRef.current.intensity = intensity;
        backLightRef.current.opacity = opacity;
    })

    return <>
        <group receiveShadow>
            {/* Original mesh */}
            <mesh
                receiveShadow
                castShadow
                geometry={nodes.Object_1809.geometry}
                material={materials.dDodge_ChallengerSRTHellcat_2015LightA_Material1}
                position={[0, 0.109, -0.113]}
                scale={0.939}
            />
            <mesh
                geometry={nodes.Object_1809.geometry}
                position={[0, 0.109, -0.113]}
                scale={0.941} // tiny bit bigger
            >
                <meshStandardMaterial
                    color={'#330000'}
                    ref={backLightRef}
                    emissive={'#ef0000'}
                    emissiveIntensity={1.0}
                    transparent
                    opacity={0.0}
                    depthWrite={false} // helps avoid z-fighting
                    toneMapped={false}
                />
            </mesh>
            <rectAreaLight
                position={[-0.50,0.8,-2.4]} // adjust near tail light
                color={'#ff0000'}
                intensity={15}
                width={0.86}
                // ref={backLightRef}
                height={0.16}/>
            {/* Light casting */}
            <rectAreaLight
                position={[0.44,0.8,-2.4]} // adjust near tail light
                color={'#ff0000'}
                intensity={15}
                width={0.86}
                // ref={backLightRef}
                height={0.16}/>
            <pointLight
                position={[-0.55,0.8,-2.4]} // adjust near tail right light
                color={'#ff0000'}
                intensity={0}
                ref={rightLightMatRef}
                distance={15}
                decay={1.5}
            />
            <pointLight
                position={[0.44,0.8,-2.4]} // adjust near tail left light
                color={'#ff0000'}
                intensity={0}
                distance={15}
                ref={leftLightMatRef}
                decay={1.5}
            />
            {/* Fake glow mesh (slightly offset/duplicate) */}

        </group>
        <LightRing  position={[0.55, 0.65, 1.989]} scale={0.06} />
        <LightRing  position={[0.70, 0.64, 1.989]} scale={0.06} color={'#a6a6a6'} />
        <LightRing  position={[-0.55, 0.65, 1.970]} scale={0.06}  />
        <LightRing  position={[-0.70, 0.64, 1.989]} scale={0.06}  />
    </>
}
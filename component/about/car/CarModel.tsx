import React from 'react'
import {useGLTF} from '@react-three/drei'
import {LightRing} from "@/component/about/car/LightRing";
import * as THREE from "three";
import {GroupProps} from "@react-three/fiber";
import {TAboutMeActiveView} from "@/types";

export function CarModel(props : GroupProps & {activeView: TAboutMeActiveView}) {
    const {nodes, materials} : any = useGLTF('./models/carModel.glb');
    const backLightMaterial = new THREE.MeshStandardMaterial({
        color: '#bd0000',
        emissive: '#e80000',
        emissiveIntensity: 1.5,
    })

    return (
        <group {...props} dispose={null}>
            <mesh castShadow geometry={nodes.Object_4.geometry}
                  material={materials.PaletteMaterial001}
                  position={[0, 0.524, 2.238]} rotation={[Math.PI / 2, 0, 0]}/>
            <mesh castShadow geometry={nodes.Object_19.geometry} material={materials.Carbon} position={[0, 0.683, 0]}
                  rotation={[Math.PI / 2, 0, 0]}/>
            <mesh castShadow geometry={nodes.Object_29.geometry} material={materials.PaletteMaterial002}
                  position={[0, 0, -0.036]}/>
            <mesh castShadow geometry={nodes.Object_31.geometry} material={materials.PaletteMaterial003}
                  position={[0, 0, -0.036]}/>
            <mesh castShadow geometry={nodes.Object_12.geometry}
                  material={backLightMaterial}
                  position={[0, 0.712, -2.347]} rotation={[Math.PI / 2, 0, 0]}/>
            <mesh castShadow geometry={nodes.Object_42.geometry} material={materials.Tire}/>
            <LightRing position={[-0.75, 0.56, 2.28]} intensity={2} scale={0.07}/>
            <LightRing position={[0.75, 0.56, 2.28]} intensity={2} scale={0.07}/>
            <pointLight color={'#dc0000'}
                        position={[0.5, 0.75, -2.6]}
                        intensity={props.activeView === 'initial' ? 4 : 0} decay={0.65}/>
            <pointLight
                color={'#dc0000'}
                position={[-0.5, 0.75, -2.6]}
                intensity={props.activeView === 'initial' ? 4 : 0} decay={0.65}/>
        </group>
    )
}

useGLTF.preload('./models/carModel.glb')

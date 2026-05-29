import React, {useMemo} from 'react'
import {useGLTF} from '@react-three/drei'
import {LightRing} from "@/component/about/car/LightRing";
import {GroupProps} from "@react-three/fiber";
import {TAboutMeActiveView} from "@/types";

export default function CarModelTest(props : GroupProps & {activeView?: TAboutMeActiveView}) {
    const { nodes, materials } : any = useGLTF('./models/dodge/Untitled.glb')
    return useMemo(() => (
        <group {...props}>
            <mesh castShadow geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001}
                  rotation={[-1.586, 0, 0]} scale={0.025}/>
            <mesh castShadow geometry={nodes.Object_5.geometry} material={materials.Carbone} rotation={[-1.586, 0, 0]}
                  scale={0.025}/>
            <mesh castShadow geometry={nodes.Object_7.geometry} material={materials.PaletteMaterial002}
                  rotation={[-1.586, 0, 0]} scale={0.025}/>
            {props.activeView === 'education' ? <></> :
                <>
                    <mesh castShadow geometry={nodes.Object_53.geometry} material={materials.PaletteMaterial003}
                          rotation={[-1.586, 0, 0]} scale={0.025}/>
                    <mesh
                        geometry={nodes.Object_69.geometry}
                        rotation={[-1.586, 0, 0]}
                        scale={0.025}>
                        <meshStandardMaterial color={"#ff0000"}
                                              emissive={"#c00000"}
                                              emissiveIntensity={1.5}
                                              roughness={1.4} metalness={0.6}/>
                    </mesh>
                </>}
            <LightRing position={[-1.89, 1.87, 5.5]} intensity={8} color={'red'} scale={0.16}/>
            <LightRing position={[1.89, 1.87, 5.5]} intensity={8} color={'red'} scale={0.16}/>
        </group>
    ), [nodes, materials, props]);
}

useGLTF.preload('./models/dodge/Untitled.glb')
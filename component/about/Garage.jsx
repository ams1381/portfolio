import React, {Suspense, useRef} from 'react'
import {useGLTF, useHelper, useTexture} from '@react-three/drei'
import {SceneController} from "@/component/about/SceneController";
import dynamic from "next/dynamic";
import {OptimizedMesh} from "@/component/OptimizedMesh";
import {useMediaQuery} from "react-responsive";
import CarM1 from "@/component/about/car/CarM1";


export default function GarageModel(props) {
    const {nodes, materials} = useGLTF('/models/garage/output.glb', true, true);
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    return (
        <group {...props} casShadow>
            <CarM1
                scale={26.5}
                activeView={props.activeView}
                position={[-440, 0, -420]}
            />
            <SceneController activeView={props.activeView} setActiveView={props.setActiveView}/>
            <pointLight
                intensity={props.activeView === 'education' ? 20 : 30}
                scale={1}
                decay={0.8}
                position={props.activeView === 'education' ? [ -500.6, 222.74, -360.5 ] :
                    props.activeView === 'initial' ? [-472, 222, -590] : [-510,90,-700]}
                color={"#ffffff"}
                castShadow />
            <pointLight color={'#eeeeee'}
                        intensity={10}
                        // distance={100}

                        // casShadow
                        decay={0.8}
                        position={[250,90,0]} />
            {/*<mesh  geometry={nodes.Object_2.geometry} material={materials.Demirler} rotation={[-Math.PI / 2, 0, 0]} />*/}
            {/*<OptimizedMesh geometry={nodes.Object_2.geometry} material={materials.Demirler} casShadow rotation={[-Math.PI / 2, 0, 0]} />*/}
            <OptimizedMesh geometry={nodes.Object_3.geometry} casShadow material={materials.Duvarlar} rotation={[-Math.PI / 2, 0, 0]} />
            <OptimizedMesh geometry={nodes.Object_4.geometry} casShadow material={materials.Odunlar} rotation={[-Math.PI / 2, 0, 0]} />
            <OptimizedMesh geometry={nodes.Object_5.geometry} material={materials.Tavan} rotation={[-Math.PI / 2, 0, 0]} />
            <OptimizedMesh geometry={nodes.Object_6.geometry} material={materials.Zemin} receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} />
            {/*<OptimizedMesh geometry={nodes.Object_7.geometry} material={materials.ipler} rotation={[-Math.PI / 2, 0, 0]} />*/}
        </group>
    )
}

useGLTF.preload('/models/garage/output.glb', true, true)

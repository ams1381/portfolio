import React, {Suspense} from 'react'
import {useGLTF} from '@react-three/drei'
import {GarageCeilingLight} from "@/component/about/garage/CeilingLight";
import {SceneController} from "@/component/about/SceneController";
import dynamic from "next/dynamic";
import {OptimizedMesh} from "@/component/OptimizedMesh";

const CarM1 = dynamic(() =>
    import("@/component/about/car/CarM1"),{ssr: false});

export default function GarageModel(props) {
    const {nodes, materials} = useGLTF('/models/garage/mobile-garage.glb',true,true);

    return (
        <group {...props} >
            <CarM1
                scale={25.9}
                position={[-440, 0, -420]}
            />
            <SceneController activeView={props.activeView} setActiveView={props.setActiveView} />

            <GarageCeilingLight key={1}
                                helperLightColor={'red'}
                                pointLightDecay={1}
                                casShadow={true}
                                scale={props.activeView === 'education' || props.activeView === 'skills' ? 0 : 1}
                                position={[-472, 225, -125]}/>
            <GarageCeilingLight key={2}
                                helperLightColor={'blue'}
                                pointLightDecay={1}
                                casShadow={true}
                                scale={props.activeView === 'education' || props.activeView === 'skills' ? 0 : 1}
                                position={[-472, 228, 90]}/>
            <GarageCeilingLight key={3}
                                helperLightColor={'green'}
                                pointLightDecay={1}
                                casShadow={true}
                                scale={props.activeView === 'education' || props.activeView === 'skills' ? 0 : 1}
                                position={[-472, 224, -335]}/>
            <GarageCeilingLight key={4}
                                helperLightColor={'brown'}
                                pointLightDecay={1}
                                scale={props.activeView === 'initial' ? 0 : 1}
                                position={[-472, 222, -590]}/>
            <GarageCeilingLight key={5}
                                helperLightColor={'yellow'}
                                pointLightDecay={1}
                                scale={props.activeView === 'education' || props.activeView === 'skills' ? 1 : 0}
                                position={[-472, 235, -780]}/>
            <GarageCeilingLight key={5}
                                helperLightColor={'yellow'}
                                pointLightDecay={1}
                                pointLightIntensity={props.activeView === 'education' || props.activeView === 'skills' ? 70 : 1}
                                scale={props.activeView === 'education' || props.activeView === 'skills' ? 1 : 0}
                                position={[-472, 235, -965]}/>
            <GarageCeilingLight key={5}
                                helperLightColor={'yellow'}
                                pointLightDecay={1}
                                pointLightIntensity={props.activeView === 'education' || props.activeView === 'skills' ? 70 : 1}
                                scale={props.activeView === 'education' || props.activeView === 'skills' ? 1 : 0}
                                position={[-472, 235, -965]}/>
            <GarageCeilingLight key={5}
                                helperLightColor={'yellow'}
                                pointLightDecay={1}
                                pointLightIntensity={props.activeView === 'education' || props.activeView === 'skills' ? 70 : 1}
                                scale={props.activeView === 'education' || props.activeView === 'skills' ? 1 : 0}
                                position={[-472, 235, -1146]}/>
            {/*<mesh  geometry={nodes.Object_2.geometry} material={materials.Demirler} rotation={[-Math.PI / 2, 0, 0]} />*/}
            <OptimizedMesh castShadow={true} geometry={nodes.Object_3.geometry} material={materials.Duvarlar} rotation={[-Math.PI / 2, 0, 0]} />
            <OptimizedMesh  geometry={nodes.Object_4.geometry} material={materials.Odunlar} rotation={[-Math.PI / 2, 0, 0]} />
            <OptimizedMesh receiveShadow={true} geometry={nodes.Object_5.geometry} material={materials.Tavan} rotation={[-Math.PI / 2, 0, 0]} />
            <OptimizedMesh receiveShadow geometry={nodes.Object_6.geometry} material={materials.Zemin} rotation={[-Math.PI / 2, 0, 0]} />
            <OptimizedMesh castShadow={true} geometry={nodes.Object_7.geometry} material={materials.ipler} rotation={[-Math.PI / 2, 0, 0]} />
            <OptimizedMesh geometry={nodes.Object_2.geometry} material={materials.Demirler} rotation={[-Math.PI / 2, 0, 0]}/>
            {/*{Wall}*/}
            {/*/!*<mesh receiveShadow castShadow geometry={nodes.Object_3.geometry} material={materials.Duvarlar} rotation={[-Math.PI / 2, 0, 0]}/>*!/*/}
            {/*<mesh receiveShadow geometry={nodes.Object_4.geometry} material={materials.Odunlar} rotation={[-Math.PI / 2, 0, 0]}/>*/}
            {/*<mesh receiveShadow geometry={nodes.Object_5.geometry} material={materials.Tavan} rotation={[-Math.PI / 2, 0, 0]}/>*/}
            {/*{Floor}*/}
        </group>
    )
}

useGLTF.preload('/models/garage/mobile-garage.glb',true,true)

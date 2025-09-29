import React, {Suspense} from 'react'
import {useGLTF} from '@react-three/drei'
import {GarageCeilingLight} from "@/component/about/garage/CeilingLight";
import {MyText3D} from "@/component/about/3dText";
import {CarM1} from "@/component/about/car/CarM1";
import {SceneController} from "@/component/about/SceneController";

export default function GarageModel(props) {
    const {nodes, materials} = useGLTF('/models/garage/scene-transformed.glb',true,true);

    return (
        <group {...props} >
            <Suspense fallback={<></>}>
                <CarM1
                    scale={25.9}
                    position={[-440, 0, -420]}
                />
            </Suspense>
            <SceneController activeView={props.activeView} setActiveView={props.setActiveView} />

            <GarageCeilingLight key={1}
                                helperLightColor={'red'}
                                pointLightDecay={1}
                                position={[-472, 225, -125]}/>
            <GarageCeilingLight key={2}
                                helperLightColor={'blue'}
                                pointLightDecay={1}
                                position={[-472, 228, 90]}/>
            <GarageCeilingLight key={3}
                                helperLightColor={'green'}
                                pointLightDecay={1}
                                position={[-472, 224, -335]}/>
            {/*<GarageCeilingLight key={4}*/}
            {/*                    helperLightColor={'brown'}*/}
            {/*                    pointLightDecay={1}*/}
            {/*                    position={[-472, 220, -590]}/>*/}
            {/*<GarageCeilingLight key={5}*/}
            {/*                    helperLightColor={'yellow'}*/}
            {/*                    pointLightIntensity={50}*/}
            {/*                    pointLightScale={3}*/}
            {/*                    pointLightDecay={0.8}*/}
            {/*                    pointLightDistance={40}*/}
            {/*                    position={[-472, 235, -780]}/>*/}
            <mesh  geometry={nodes.Object_2.geometry} material={materials.Demirler} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh  geometry={nodes.Object_3.geometry} material={materials.Duvarlar} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh  geometry={nodes.Object_4.geometry} material={materials.Odunlar} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh  geometry={nodes.Object_5.geometry} material={materials.Tavan} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh receiveShadow geometry={nodes.Object_6.geometry} material={materials.Zemin} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.ipler} rotation={[-Math.PI / 2, 0, 0]} />
            {/*<mesh receiveShadow geometry={nodes.Object_2.geometry} material={materials.Demirler} rotation={[-Math.PI / 2, 0, 0]}/>*/}
            {/*{Wall}*/}
            {/*/!*<mesh receiveShadow castShadow geometry={nodes.Object_3.geometry} material={materials.Duvarlar} rotation={[-Math.PI / 2, 0, 0]}/>*!/*/}
            {/*<mesh receiveShadow geometry={nodes.Object_4.geometry} material={materials.Odunlar} rotation={[-Math.PI / 2, 0, 0]}/>*/}
            {/*<mesh receiveShadow geometry={nodes.Object_5.geometry} material={materials.Tavan} rotation={[-Math.PI / 2, 0, 0]}/>*/}
            {/*{Floor}*/}
        </group>
    )
}

useGLTF.preload('/models/garage/scene-transformed.glb',true,true)

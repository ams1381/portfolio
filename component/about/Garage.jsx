import React, {Suspense, useRef} from 'react'
import {useGLTF, useHelper, useTexture} from '@react-three/drei'
import {GarageCeilingLight} from "@/component/about/garage/CeilingLight";
import {SceneController} from "@/component/about/SceneController";
import dynamic from "next/dynamic";
import {OptimizedMesh} from "@/component/OptimizedMesh";
import {useMediaQuery} from "react-responsive";
import {PointLightHelper} from "three";
import {PostFX} from "@/component/about/SceneEffectComposer";

const CarM1 = dynamic(() =>
    import("@/component/about/car/CarM1"), {ssr: false});

export default function GarageModel(props) {
    const {nodes, materials} = useGLTF('/models/garage/output.glb', true, true);
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const lightRef = useRef(null);
    useHelper(lightRef,PointLightHelper,10)
    return (
        <group {...props} casShadow>
            <mesh position={[0,0,-1]}>
                <planeGeometry args={[2,2]} />
                <meshBasicMaterial map={useTexture("/images/textures/vignette.png")} transparent />
            </mesh>
            <CarM1
                scale={26.5}
                position={[-440, 0, -420]}
            />
            <SceneController activeView={props.activeView} setActiveView={props.setActiveView}/>
            <pointLight
                intensity={props.activeView === 'education' ? 10 : 30}
                scale={1}
                decay={0.8}
                ref={lightRef}
                position={props.activeView === 'education' ? [ -500.6, 222.74, -360.5 ] :
                    props.activeView === 'initial' ? [-472, 222, -590] : [-510,90,-700]}
                color={"#ffd2d2"}
                castShadow />
            <pointLight color={'#eeeeee'}
                        intensity={10}
                        // distance={100}

                        // casShadow
                        decay={0.8}
                        position={[250,90,0]} />
            <GarageCeilingLight key={1}
                                helperLightColor={'red'}
                                pointLightDecay={1}
                                casShadow={true}
                                scale={1}
                                position={[-472, 227, -125]}/>
            <GarageCeilingLight key={2}
                                helperLightColor={'blue'}
                                pointLightDecay={1}
                                casShadow={true}
                                scale={1}
                                position={[-472, 229, 90]}/>
            <GarageCeilingLight key={3}
                                helperLightColor={'green'}
                                pointLightDecay={1}
                                casShadow={true}
                                scale={1}
                                position={[-471, 224, -335]}/>
            <GarageCeilingLight key={4}
                                helperLightColor={'brown'}
                                pointLightDecay={1}
                                scale={1}
                                position={[-472, 222, -590]}/>
            <GarageCeilingLight key={5}
                                helperLightColor={'yellow'}
                                pointLightDecay={1}
                                scale={1}
                                position={[-472, 235, -780]}/>
            <GarageCeilingLight key={5}
                                helperLightColor={'yellow'}
                                pointLightDecay={1}
                                pointLightIntensity={1}
                                scale={props.activeView === 'education' || props.activeView === 'skills' ? 1 : 0}
                                position={[-472, 235, -965]}/>
            <GarageCeilingLight key={5}
                                helperLightColor={'yellow'}
                                pointLightDecay={1}
                                pointLightIntensity={1}
                                scale={props.activeView === 'education' || props.activeView === 'skills' ? 1 : 0}
                                position={[-472, 235, -965]}/>
            <GarageCeilingLight key={5}
                                helperLightColor={'yellow'}
                                pointLightDecay={1}
                                scale={1}
                                position={[-472, 235, -1146]}/>
            {/*<mesh  geometry={nodes.Object_2.geometry} material={materials.Demirler} rotation={[-Math.PI / 2, 0, 0]} />*/}
            <OptimizedMesh geometry={nodes.Object_2.geometry} material={materials.Demirler} casShadow rotation={[-Math.PI / 2, 0, 0]} />
            <OptimizedMesh geometry={nodes.Object_3.geometry} casShadow material={materials.Duvarlar} rotation={[-Math.PI / 2, 0, 0]} />
            <OptimizedMesh geometry={nodes.Object_4.geometry} casShadow material={materials.Odunlar} rotation={[-Math.PI / 2, 0, 0]} />
            <OptimizedMesh geometry={nodes.Object_5.geometry} material={materials.Tavan} rotation={[-Math.PI / 2, 0, 0]} />
            <OptimizedMesh geometry={nodes.Object_6.geometry} material={materials.Zemin} receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} />
            <OptimizedMesh geometry={nodes.Object_7.geometry} material={materials.ipler} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
    )
}

useGLTF.preload('/models/garage/output.glb', true, true)

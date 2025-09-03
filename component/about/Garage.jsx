import React, {useEffect, useMemo, useRef} from 'react'
import {Text, useGLTF, useHelper} from '@react-three/drei'
import {SpotLightHelper, Object3D, Vector3, MeshStandardMaterial} from "three";
import {GarageCeilingLight} from "@/component/about/garage/CeilingLight";
import {MyText3D} from "@/component/about/3dText";
import * as THREE from "three";
import {useThree} from "@react-three/fiber";

export function GarageModel(props) {
    const {nodes, materials} = useGLTF('/models/garage/scene-transformed.glb');
    const {camera} = useThree();
    let lightRef = useRef();
    const textRef = useRef();
    // const lookBack = useLookBack()
    useHelper(lightRef, SpotLightHelper,  'white');


    useEffect(() => {
        if (props.activeView === "education") {
            const dir = new THREE.Vector3();
            camera.getWorldDirection(dir);

            // Reverse it
            const lookBack = new THREE.Vector3().copy(camera.position).sub(dir);
            camera.lookAt(lookBack);
        }
    }, [props.activeView]);
    const GarageWall = useMemo(() => {
        return <mesh receiveShadow geometry={nodes.Object_6.geometry} material={materials.Zemin}
                     rotation={[-Math.PI / 2, 0, 0]}/>
    }, [nodes, materials])
    return (
        <group {...props} castShadow={true}>
            <MyText3D onClick={() => props.setActiveView('education')}
                      text={'Education'}
                      position={[50,166.2,-471.0]} />
            <MyText3D onClick={() => props.setActiveView('workExperience')}
                      text={'Work Experience'}
                      position={[50,120,-471.0]} />
            <MyText3D onClick={() => props.setActiveView('skills')}
                      text={'Skills'}
                      position={[50,73.8,-471.0]} />
            <GarageCeilingLight key={1} helperLightColor={'red'} position={[-472, 225, -125]}/>
            <GarageCeilingLight key={2} helperLightColor={'blue'} position={[-472, 225, 90]}/>
            <GarageCeilingLight key={3} helperLightColor={'green'} position={[-472, 225, -335]}/>
            <GarageCeilingLight key={4} helperLightColor={'brown'} position={[-472, 220, -590]}/>
            <GarageCeilingLight key={5} helperLightColor={'yellow'} position={[-472, 235, -780]}/>
            <mesh castShadow geometry={nodes.Object_2.geometry} material={materials.Demirler} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh castShadow geometry={nodes.Object_3.geometry} material={materials.Duvarlar} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh castShadow geometry={nodes.Object_4.geometry} material={materials.Odunlar} rotation={[-Math.PI / 2, 0, 0]} />
            <mesh castShadow geometry={nodes.Object_5.geometry} material={materials.Tavan} rotation={[-Math.PI / 2, 0, 0]} />
            {GarageWall}
            <mesh castShadow geometry={nodes.Object_7.geometry} material={materials.ipler} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
    )
}

useGLTF.preload('/models/garage/scene-transformed.glb')

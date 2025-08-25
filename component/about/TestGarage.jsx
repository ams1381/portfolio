import React, {useRef} from 'react'
import {Text, useGLTF, useHelper} from '@react-three/drei'
import {SpotLightHelper, Object3D, Vector3} from "three";
import {GarageCeilingLight} from "@/component/about/garage/CeilingLight";
import { useControls } from 'leva';
import {useFrame, useThree} from "@react-three/fiber";
import {MyText3D} from "@/component/about/3dText";

export function GarageModel(props) {
    const {nodes, materials} = useGLTF('/models/garage/scene-transformed.glb');
    let lightRef = useRef();
    const textRef = useRef();
    const {width} = useThree();
    // const { ambientIntensity,castShadow, ambientColor } = useControls('abient light',{
    //     ambientIntensity: { value: 0.12, min: 0, max: 2 },
    //     castShadow : false ,
    //     ambientColor: '#ffffff'
    // });
    const {position,distance,penumbra,rotation,color,intensity,angle , target} = useControls({
        position : [-28,143,-604],
        rotation : [0,0,0],
        color : "#f2f5ff" ,
        intensity : 10,
        penumbra : 0.5 ,
        distance : 27,
        angle : 1.01 ,
        target : Object3D
    })
    useHelper(lightRef, SpotLightHelper,  'white');

    useFrame(() => {
        if (textRef.current) {
            let targetPosition;
            // Interpolate the current position towards the target position
            // if(window.innerWidth < 480)
            //     targetPosition = new Vector3(0, -0.6, -2);
            // else
                targetPosition = new Vector3(2, 3.1, 5);
            textRef.current.position.lerp(targetPosition, 0.1); // 0.1 is the interpolation factor
            // diamondRef.current.rotation.y += 1;
        }
    });
    // {"color":"#f2f5ff"}
    return (
        <group {...props} dispose={null}>
            <MyText3D text={'Education'} position={[50,166.2,-471.0]} />
            <MyText3D text={'Work Experience'} position={[50,120,-471.0]} />
            <MyText3D text={'Skills'} position={[50,73.8,-471.0]} />
            {/*<ExtrudedText>*/}
            {/*    Education*/}
            {/*</ExtrudedText>*/}
            {/*<ambientLight intensity={ambientIntensity}*/}
            {/*              position={[0,900,0]}*/}
            {/*              castShadow={castShadow}*/}
            {/*              color={ambientColor} />*/}
            <pointLight position={[5,0,0]}
                        distance={10}
                        intensity={0.9}
                        color={'#fff'} />
            {/* Optional: Spot light for more directional lighting */}
            <spotLight
                color={color}
                ref={lightRef}
                rotation={rotation}
                position={position}
                target={target}
                castShadow={true}
                penumbra={penumbra}
                angle={angle}
                intensity={intensity}
                distance={distance}
            />
            <GarageCeilingLight key={1} helperLightColor={'red'} position={[-472, 220, -125]} />
            <GarageCeilingLight key={2} helperLightColor={'blue'} position={[-472, 220, 90]} />
            <GarageCeilingLight key={3} helperLightColor={'green'} position={[-472, 220, -335]} />
            <GarageCeilingLight key={4} helperLightColor={'brown'} position={[-472, 220, -590]} />
            <GarageCeilingLight key={5} helperLightColor={'yellow'} position={[-472, 237, -780]} />
            <mesh receiveShadow castShadow geometry={nodes.Object_2.geometry} material={materials.Demirler} rotation={[-Math.PI / 2, 0, 0]}/>
            <mesh receiveShadow castShadow geometry={nodes.Object_3.geometry} material={materials.Duvarlar} rotation={[-Math.PI / 2, 0, 0]}/>
            <mesh receiveShadow castShadow geometry={nodes.Object_4.geometry} material={materials.Odunlar} rotation={[-Math.PI / 2, 0, 0]}/>
            <mesh receiveShadow castShadow geometry={nodes.Object_5.geometry} material={materials.Tavan} rotation={[-Math.PI / 2, 0, 0]}/>
            <mesh receiveShadow castShadow geometry={nodes.Object_6.geometry}  material={materials.Zemin} rotation={[-Math.PI / 2, 0, 0]}/>
            {/*<mesh geometry={nodes.Object_6.geometry}  receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>*/}
            {/*    <planeGeometry  args={[100, 100]} />*/}
            {/*    <shadowMaterial opacity={0.3} />*/}
            {/*</mesh>*/}
            {/*<mesh receiveShadow castShadow geometry={nodes.Object_7.geometry} material={materials.ipler} rotation={[-Math.PI / 2, 0, 0]}/>*/}
        </group>
    )
}

useGLTF.preload('/models/garage/scene-transformed.glb')

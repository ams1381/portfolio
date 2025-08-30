import React, {useEffect, useMemo, useRef} from 'react'
import {Text, useGLTF, useHelper} from '@react-three/drei'
import {SpotLightHelper, Object3D, Vector3, MeshStandardMaterial} from "three";
import {GarageCeilingLight} from "@/component/about/garage/CeilingLight";
import { useControls } from 'leva';
// import {useFrame, useThree} from "@react-three/fiber";
import {MyText3D} from "@/component/about/3dText";

export function GarageModel(props) {
    const {nodes, materials} = useGLTF('/models/garage/model-opt.glb');
    let lightRef = useRef();
    const textRef = useRef();
    // const {width} = useThree();

    const {position,distance,penumbra,rotation,color,intensity,angle , target} = useControls('Texts Lights',{
        position : [-28,143,-604],
        rotation : [0,0,0],
        color : "#f2f5ff" ,
        intensity : 10,
        penumbra : 0.5 ,
        distance : 27,
        angle : 1.01 ,
        // target : Object3D
    })
    useHelper(lightRef, SpotLightHelper,  'white');
    const shitMaterial = new MeshStandardMaterial({
        color: '#ec0000',
        metalness: 0.3,
        roughness: 0.15,
        // emissive : '#808080',
        // emissiveIntensity : 0.1,

    });
    // useFrame(() => {
    //     if (textRef.current) {
    //         let targetPosition;
    //         // Interpolate the current position towards the target position
    //         // if(window.innerWidth < 480)
    //         //     targetPosition = new Vector3(0, -0.6, -2);
    //         // else
    //             targetPosition = new Vector3(2, 3.1, 5);
    //         textRef.current.position.lerp(targetPosition, 0.1); // 0.1 is the interpolation factor
    //         // diamondRef.current.rotation.y += 1;
    //     }
    // });
    const Wall = useMemo(() => (
        <mesh geometry={nodes.Object_3.geometry} material={materials.Duvarlar} rotation={[-Math.PI/2, 0, 0]} />
    ), [nodes, materials]);
    const Floor = useMemo(() => (
        <mesh receiveShadow geometry={nodes.Object_6.geometry} material={materials.Zemin}
              rotation={[-Math.PI / 2, 0, 0]}/>
    ), [nodes, materials])
    useEffect(() => {
        return () => {
            materials.Demirler?.dispose();
            materials.Tavan?.dispose();
            materials.Zemin?.dispose();
            nodes.Object_4.geometry?.dispose();
            nodes.Object_5.geometry?.dispose();
            nodes.Object_6.geometry?.dispose();
            nodes.Object_2.geometry?.dispose();
        };
    }, []);

    return (
        <group {...props} >
            <MyText3D text={'Education'} position={[50,166.2,-471.0]} />
            <MyText3D text={'Work Experience'} position={[50,120,-471.0]} />
            <MyText3D text={'Skills'} position={[50,73.8,-471.0]} />

            {/*<spotLight*/}
            {/*    color={color}*/}
            {/*    ref={lightRef}*/}
            {/*    rotation={rotation}*/}
            {/*    position={position}*/}
            {/*    // shadow-mapSize-width={512}*/}
            {/*    // shadow-mapSize-height={512}*/}
            {/*    // shadow-bias={-0.0001}*/}
            {/*    // target={target}*/}
            {/*    castShadow={true}*/}
            {/*    penumbra={penumbra}*/}
            {/*    angle={angle}*/}
            {/*    intensity={intensity}*/}
            {/*    distance={distance}*/}
            {/*/>*/}
            <GarageCeilingLight key={1} helperLightColor={'red'} position={[-472, 225, -125]}/>
            <GarageCeilingLight key={2} helperLightColor={'blue'} position={[-472, 225, 90]}/>
            <GarageCeilingLight key={3} helperLightColor={'green'} position={[-472, 225, -335]}/>
            <GarageCeilingLight key={4} helperLightColor={'brown'} position={[-472, 220, -590]}/>
            <GarageCeilingLight key={5} helperLightColor={'yellow'} position={[-472, 235, -780]}/>
            <mesh geometry={nodes.Object_2.geometry} material={materials.Demirler}
                  position={[-382.305, 131.053, -643.022]} receiveShadow castShadow  rotation={[-Math.PI / 2, 0, 0]} scale={747.94} />
            <mesh geometry={nodes.Object_3.geometry} receiveShadow castShadow material={materials.Duvarlar}
                  position={[-249.907, 146.582, -509.772]} rotation={[-Math.PI / 2, 0, 0]} scale={859.581}/>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Odunlar}
                  position={[-343.265, 199.488, -523.717]} rotation={[-Math.PI / 2, 0, 0]} scale={850.925}/>
            <mesh geometry={nodes.Object_5.geometry} material={materials.Tavan} position={[-243.799, 309.567, -509.772]}
                  rotation={[-Math.PI / 2, 0, 0]} receiveShadow castShadow  scale={859.581}/>
            <mesh geometry={nodes.Object_6.geometry} receiveShadow
                  material={materials.Zemin}
                  position={[-243.801, -0.009, -519.772]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={849.581}
            />
            <mesh geometry={nodes.Object_7.geometry} material={materials.ipler} position={[-173.768, 297.512, -615.26]}
                   rotation={[-Math.PI / 2, 0, 0]} receiveShadow castShadow  scale={705.772}/>
            {/*<mesh receiveShadow geometry={nodes.Object_2.geometry} material={materials.Demirler} rotation={[-Math.PI / 2, 0, 0]}/>*/}
            {/*{Wall}*/}
            {/*/!*<mesh receiveShadow castShadow geometry={nodes.Object_3.geometry} material={materials.Duvarlar} rotation={[-Math.PI / 2, 0, 0]}/>*!/*/}
            {/*<mesh receiveShadow geometry={nodes.Object_4.geometry} material={materials.Odunlar} rotation={[-Math.PI / 2, 0, 0]}/>*/}
            {/*<mesh receiveShadow geometry={nodes.Object_5.geometry} material={materials.Tavan} rotation={[-Math.PI / 2, 0, 0]}/>*/}
            {/*{Floor}*/}
        </group>
    )
}

useGLTF.preload('/models/garage/model-opt.glb')

import React, {useEffect, useRef} from 'react'
import {useGLTF, useHelper} from '@react-three/drei'
import {animated, useSpring} from "@react-spring/three";
import {DirectionalLightHelper, PointLightHelper, SpotLightHelper} from "three";
import {RectAreaLightHelper} from "three-stdlib";
import {useControls} from "leva";

export function GarageCeilingLight(props: any) {
    const lightRef = useRef<any>();
    const targetDirectionalRef = useRef();
    const directionalLightRef = useRef<any>();
    useHelper(lightRef,PointLightHelper,10,props.helperLightColor);
    useHelper(directionalLightRef, DirectionalLightHelper, 10, props.helperLightColor)
    const spotLightOptions = useControls('spotLight' + props.helperLightColor,{
        angle : Math.PI / 3,
        penumbra : 0.5,
        distance : 25,
        intensity : 1,

    });
    const pointLightOptions = useControls('pointLight' + props.helperLightColor,{
        scale : 1.5,
        decay : 1.5,
        intensity : 2,
        color : "#ffffff",
        distance :  10
    });
    useEffect(() => {
        if (directionalLightRef.current && targetDirectionalRef.current) {
            directionalLightRef.current.target = targetDirectionalRef.current;
        }
    }, []);

    return (
        <group {...props} >
            <mesh position={[0,props.position[1] - 220,0]}>
                <sphereGeometry args={[5.15, 16, 16]} />
                <meshStandardMaterial
                    emissive={"#ffffff"}
                    emissiveIntensity={2}
                    color={"#ffffff"}
                />
            </mesh>
            <spotLight
                angle={spotLightOptions.angle} // 60 degrees
                penumbra={spotLightOptions.penumbra}
                intensity={spotLightOptions.intensity}
                distance={spotLightOptions.distance}
                // castShadow
            />
            <pointLight
                intensity={pointLightOptions.intensity}
                scale={pointLightOptions.scale}
                ref={lightRef}
                decay={pointLightOptions.decay}
                color={pointLightOptions.color}
                castShadow={true}

            />
            {/*<directionalLight ref={directionalLightRef} position={[0,props.position[1] -150.5,0]}*/}
            {/*                  castShadow={true}*/}
            {/*                  intensity={0.4}*/}
            {/*                  color={'rgb(255,255,255)'} >*/}
            {/*    <object3D ref={targetDirectionalRef} castShadow={true} position={[-10,-1.8,-7]} />*/}
            {/*</directionalLight>*/}
        </group>

    )
}
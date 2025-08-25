import React, {useEffect, useRef} from 'react'
import {useGLTF, useHelper} from '@react-three/drei'
import {animated, useSpring} from "@react-spring/three";
import {PointLightHelper, SpotLightHelper} from "three";
import {RectAreaLightHelper} from "three-stdlib";
import {useControls} from "leva";

export function GarageCeilingLight(props: any) {
    const lightRef = useRef<any>();
    useHelper(lightRef,PointLightHelper,10,props.helperLightColor);
    const spotLightOptions = useControls('spotLight' + props.helperLightColor,{
        angle : Math.PI / 3,
        penumbra : 0.5,
        distance : 25,
        intensity : 1,
    });
    const pointLightOptions = useControls('pointLight' + props.helperLightColor,{
        scale : 1.5,
        decay : 1.8,
        intensity : 12,
        color : "#ffffff"
    });
    // useEffect(() => {
    //     if (props.start) {
    //         api.start({
    //             intensityAmb: 0.3,
    //             intensitySpot: 10,
    //         });
    //     }
    // }, [props.start]);
    return (
        <group {...props} dispose={null}>
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
                castShadow
            />
        </group>
    )
}


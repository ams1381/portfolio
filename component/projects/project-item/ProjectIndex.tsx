'use client'

import {useFrame, useThree, Vector3} from "@react-three/fiber";
import {Text} from "@react-three/drei";
import React, {useRef} from "react";
import * as THREE from "three";

type TProjectIndexProps = {
    position : number[] ,
    selected : boolean,
    index : number ,
    isDarkTheme? : boolean,
    hovered : boolean
}

export const ProjectIndex = (props : TProjectIndexProps) => {
    const projectIndexRef = useRef<any>();
    const { width } = useThree((state) => state.viewport);

    useFrame(() => {
        if (!projectIndexRef.current) return
        const current = 0
        let target = 0;
        if(props.hovered)
            target = 1
         else
            target = 0

        const next = THREE.MathUtils.lerp(current, target, 0.03) // 0.05 سرعت انیمیشن
        projectIndexRef.current.fillOpacity = next
    });

    return <>
        <Text
            ref={projectIndexRef}
            position={[-props.position[0], props.position[1], 0.4] as Vector3}
            strokeWidth={window.innerWidth < 480 ? props.hovered ? '0.7%' : '0.6%' : props.hovered ? '0.5%' : '0.3%'}
            strokeOpacity={props.selected ? 1 : window.innerWidth < 480 ? 0.7 : 0.4}
            strokeColor={props.isDarkTheme ? "#ffffff" : "#2c2c2c"}
            // color={'#c71b1b'}
            // fillOpacity={props. ? 1 : 0}
            font='./fonts/Audiowide-Regular.ttf'
            fontSize={props.selected ? width / 8 + 0.4 : width / 8}
            material-toneMapped={false}
            anchorX={`${props.position[0] === 0.1 ? 'right' : 'left'}` as any}
            anchorY='middle'
        >
            {props.index + 1}
        </Text>
    </>
}
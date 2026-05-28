'use client'



import {Text} from "@react-three/drei";
import {useFrame, useThree, Vector3} from "@react-three/fiber";
import React, {useRef, useState} from "react";
import * as THREE from "three";

type TProjectTitleProps = {
    title : string ,
    isDarkTheme? : boolean ,
    textOpacity : number ,
    selected : boolean,
    position : number[]
}

export const ProjectTitle = (props : TProjectTitleProps) => {
    const titleRef = useRef<any>();
    const { width } = useThree((state) => state.viewport);
    const [hovered, setHovered] = useState<boolean>(false);
    const { camera } = useThree();
    const [displayOpacity, setDisplayOpacity] = useState(0);

    useFrame(() => {
        if (!titleRef.current) return

        // وقتی props.textOpacity == 1، به صورت نرم افزایش بده
        const target = props.textOpacity
        const current = displayOpacity
        const next = THREE.MathUtils.lerp(current, target, 0.03) // 0.05 سرعت انیمیشن
        setDisplayOpacity(next)

        titleRef.current.fillOpacity = next
    })


    return  <Text
        position={[0, props.position[1], 0.2] as Vector3}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        // fillOpacity={props.textOpacity}
        color={props.isDarkTheme ? '#ffffff' : '#000025'}
        font='./fonts/Audiowide-Regular.ttf'
        fontSize={width / 16}
        material-toneMapped={false}
        anchorX='center'
        anchorY='middle'
        ref={titleRef}>
        {props.title}
    </Text>


}
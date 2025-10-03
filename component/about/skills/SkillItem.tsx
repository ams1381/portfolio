'use client'


import React from "react";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {Text} from "@react-three/drei";
import {useSpring , a} from "@react-spring/three";

type TSkillItemProps = {
    textureURL: string,
    title: string,
    position: number[],
    textPosition?: any,
    iconSize?: any,
    iconScale?: number,
    glowColor? : string,
}

export const SkillsItem = (props: TSkillItemProps) => {
    const texture = useLoader(TextureLoader, props.textureURL);
    const [hover, setHover] = React.useState(false);
    const { scale } = useSpring({
        scale: hover ? 1.09 : 1,
        config: { mass: 1, tension: 280, friction: 18 }
    })

    return <a.group onPointerEnter={() => {
                    document.body.style.cursor = 'pointer'
                    setHover(true);
                  }}
                  scale={scale}
                  onPointerLeave={(e) => {
                    document.body.style.cursor = 'auto'
                    setHover(false);
                  }}
                  position={props.position as any}>
        <mesh scale={props.iconScale ?? 10}
              rotation={[0, 1.5, 0]}
              position={[-16, 15, -56]}>
            <boxGeometry args={props.iconSize ?? [1.9, 1.9, 0]}/>
            <meshStandardMaterial opacity={hover ? 1 :0.95}
                                  emissive={hover ? props.glowColor || "#fff" : "#000"}
                                  emissiveIntensity={hover ? 0.2 : 0}
                                  map={texture} transparent/>
        </mesh>
        <Text fontSize={8}
              color={'#fff'}
              fillOpacity={hover ? 1 :0.95}
              position={props.textPosition ?? [-16, 14, -29]}
              rotation={[0, -1.56, 0]}
              font={'./fonts/Audiowide-Regular.ttf'}>
            {props.title}
        </Text>
    </a.group>
}
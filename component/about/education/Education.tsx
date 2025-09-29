'use client'

import {ImagePlane} from "@/component/about/education/UtLogo";
import React, {useRef, useState} from "react";
import {Text} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {Vector3} from "three";
import {TAboutMeActiveView} from "@/types";
import { a, useSpring } from "@react-spring/three";

const EducationSection = ({setActiveView,activeView}: { setActiveView: any,activeView : TAboutMeActiveView }) => {
    // TODO Texts and Elements comes in with an Animation when activeView === 'education'
    const springs : any = useSpring({
        position: activeView === "education" ? [ -495.6, 4.74, -260.5 ] : [ -495.6, -70, -260.5 ],
        opacity: activeView === "education" ? 1 : 0,
        config: { mass: 1, tension: 200, friction: 25 , duration : 400  }
    });

    return (
        <a.group position={springs.position as any}>
            <pointLight
                intensity={35}
                color={"#ffffff"}
                distance={25}
                decay={0.8}
                scale={1}
                position={[0, 30, 57]}
            />
            <ImagePlane activeView={"education"} />
            {
                // @ts-ignore
                <a.group opacity={springs.opacity as any} >
                    <Text
                        lineHeight={1.4}
                        position={[-15, 7, 48]}
                        font="./fonts/Audiowide-Regular.ttf"
                        rotation={[0, 0.7, 0]}
                        fontSize={2.5}
                        textAlign={"center"}
                        color={"#ffffff"}
                        maxWidth={55}>
                        {`Started Studying Computer Engineering back in October 2021 in the University Of Tehran \n Graduated with score of 16.2 in Summer 2025`}
                    </Text>
                    <EducationText
                        text={"<- Back"}
                        rotation={[0, -0.4, 0]}
                        onClick={() => setActiveView("initial")}
                        position={[120, 3, 42]}
                    />
                    <EducationText
                        text={"Skills"}
                        rotation={[0, -0.4, 0]}
                        onClick={() => setActiveView("skills")}
                        position={[120, 8, 42]}
                    />
                    <EducationText
                        text={"Work Experience"}
                        rotation={[0, -0.4, 0]}
                        onClick={() => setActiveView("workExperience")}
                        position={[120, 13, 42]}
                    />
                </a.group>
            }
        </a.group>
    );
}
const EducationText = ({text, position,rotation,onClick}: { text: string, position: any[],rotation : any[],onClick : any }) => {
    const textRef = useRef<any>();
    const [hovered, setHovered] = useState(false);
    const initialPosition = useRef(new Vector3(position[0], position[1], position[2]));
    const targetPosition = useRef(new Vector3(position[0], position[1], position[2]));
    useFrame(() => {
        if(textRef.current) {
            const mat = textRef.current.material as THREE.MeshStandardMaterial;
            mat.opacity = THREE.MathUtils.lerp(mat.opacity, hovered ? 1 : 0.8, 0.1);

            if (hovered)
                targetPosition.current.set(
                    initialPosition.current.x,
                    initialPosition.current.y,
                    initialPosition.current.z + 3
                );
            else
                targetPosition.current.copy(initialPosition.current);

            textRef.current.position.lerp(targetPosition.current, 0.2);
        }
    });

    return <Text lineHeight={1.3}
                 ref={textRef}
                 anchorX='center'
                 onClick={onClick}
                 onPointerEnter={() => setHovered(true)}
                 onPointerLeave={() => setHovered(false)}
                 color={'#ffffff'}
                 fontSize={4.1}
                 anchorY='middle'
                 font='./fonts/Audiowide-Regular.ttf'
                 rotation={rotation as any}
                 position={position as any}>
        {text}
    </Text>
}

export default EducationSection;
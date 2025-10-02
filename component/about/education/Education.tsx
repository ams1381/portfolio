'use client'

import {UniversitySection} from "@/component/about/education/UtLogo";
import React, {useRef, useState} from "react";
import {Text} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {Vector3} from "three";
import {TAboutMeActiveView} from "@/types";
import { a, useSpring } from "@react-spring/three";
import {useMediaQuery} from "react-responsive";
import {HighSchoolLogo} from "@/component/about/education/HighSchool";

const EducationSection = ({setActiveView,activeView}: { setActiveView: any,activeView : TAboutMeActiveView }) => {
    // TODO Texts and Elements comes in with an Animation when activeView === 'education'
    const springs : any = useSpring({
        position: activeView === "education" ? [ -495.6, 4.74, -260.5 ] : [ -495.6, -70, -260.5 ],
        opacity: activeView === "education" ? 1 : 0,
        // config: { mass: 1, tension: 200, friction: 25 , duration : 400  },
        scale : activeView === "education" ? 1 : 0
    });
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const isSmallMobile = useMediaQuery({query: '(max-width: 480px)'});
    return (
        <a.group scale={springs.scale} position={springs.position as any}>
            <pointLight
                intensity={activeView === 'education' ? isMobile ? 8 : 12 : 0}
                color={"#ffffff"}
                distance={25}
                decay={0.8}
                scale={1}
                position={[isSmallMobile ? 96 : isMobile ? 90 :0,isSmallMobile ? 68 : isMobile? 60 : 30, isMobile ? 56 : 57]}
            />
            <UniversitySection activeView={"education"} />
            <HighSchoolLogo />
            {
                // @ts-ignore
                <a.group opacity={springs.opacity as any} position={[-65,-15,40]} >

                    <EducationText
                        text={"<- Back"}
                        rotation={[0, isSmallMobile ? 0.1 : -0, 0]}
                        onClick={() => setActiveView("initial")}
                        position={[120,isSmallMobile ? -12 : 3,isSmallMobile ? 92 : 42]}
                    />
                    <EducationText
                        text={"Skills"}
                        rotation={[0, isSmallMobile ? 0.1 : -0, 0]}
                        onClick={() => setActiveView("skills")}
                        position={[120,isSmallMobile ? -18 : 8,isSmallMobile ? 92 : 42]}
                    />
                    <EducationText
                        text={"Work Experience"}
                        rotation={[0, isSmallMobile ? 0.1 : -0, 0]}
                        onClick={() => setActiveView("workExperience")}
                        position={[120, isSmallMobile ? -24 :13,isSmallMobile ? 92 : 42]}
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
            // const mat = textRef.current.material as THREE.MeshStandardMaterial;
            // mat.opacity = THREE.MathUtils.lerp(mat.opacity, hovered ? 1 : 0.8, 0.1);
            //
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
                 fillOpacity={1}
                 anchorY='middle'
                 font='./fonts/Audiowide-Regular.ttf'
                 rotation={rotation as any}
                 position={position as any}>
        {text}
    </Text>
}

export default EducationSection;
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"
import {TAboutMeActiveView} from "@/types";
import {useMediaQuery} from "react-responsive";
import React from "react";
import {Text} from "@react-three/drei";
// {"position":[23,-13,-4]}
//{"position":[-4,-58,-81]}
// {"rotation":[-1,3,4.8]}
export function UniversitySection({activeView} : {activeView : TAboutMeActiveView}) {
    const texture = useLoader(TextureLoader, "/images/ut logo.png") ;// path to your png
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const isSmallMobile = useMediaQuery({query: '(max-width: 480px)'});

    return (
        <group
              position={[isSmallMobile ? 96 : isMobile ? 90 :-15,isSmallMobile ? 68 : isMobile ? 60 :34,48]}
              rotation={[3.14,isSmallMobile ? 0.89 : isMobile ? 1.2 :0.55,1.69]} >
            <mesh scale={10} position={!isMobile ? [0,0,0] : [-30,31,-66]} rotation={!isMobile ? [0,0,0] : [0.6,-0.08,0]}>
                <cylinderGeometry args={[isSmallMobile ? 1.5 : 1.8, isSmallMobile ? 1.5 : 1.8, 0, 64]} />
                <meshStandardMaterial map={texture} transparent />
            </mesh>
            {/* radiusTop, radiusBottom, height, radialSegments */}

            <Text
                lineHeight={isSmallMobile ? 1.2 : 1.4}
                position={isMobile ? [-4,-58,-81] :  [23,-13,-4]}
                // position={[isSmallMobile ? 118 : isMobile ? 105 : -15,isSmallMobile ? 26 : isMobile ? 25 : 7, isMobile ? 90 :48]}
                font="./fonts/Audiowide-Regular.ttf"
                rotation={[-1,3,4.8]}
                fontSize={isMobile ? 2 :2.5}
                textAlign={"center"}
                color={"#ffffff"}
                maxWidth={isMobile ? 34 :55}>
                {`Started Studying Computer Engineering back in October 2021 in the University Of Tehran Graduated with score of 16.2 in Summer 2025`}
            </Text>
        </group>
    )
}


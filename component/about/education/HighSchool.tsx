'use client'


import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {useMediaQuery} from "react-responsive";
import {useControls} from "leva";
import {Text} from "@react-three/drei";
import React from "react";

export const HighSchoolLogo = () => {
    const texture = useLoader(TextureLoader, "/images/logo_fin5.png") // path to your png
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const isSmallMobile = useMediaQuery({query: '(max-width: 480px)'});
    const highSchoolOptions = useControls('hight school',{
        iconPosition : isMobile ? [-35,-106,6] : [0,0,0],
        iconRotation : isMobile ? [-0.8,0.12,0] : [0,0,0],
        textPosition : isMobile ? [-28,-94,44] : [23,-16,5],
        textRotation : isMobile ? [-2.6,3.1,4.62] : [-1.6,3.1,4.75]
    })
    const onClickHandler = () => {
        let LinkElement = document.createElement('a');
        LinkElement.className = 'hover:text-[red] transition-all'
        Object.assign(LinkElement, {
            target: '_blank',
            rel: 'noopener noreferrer',
            href: 'https://mandegarhs.ir',
        }).click()
    }

    return (
        <group position={[126,31,48]}
               rotation={[3.14,2.55,1.69]}>
            <mesh scale={10} onClick={onClickHandler}
                  onPointerEnter={(e) => document.body.style.cursor = 'pointer'}
                  onPointerLeave={(e) => document.body.style.cursor = 'auto'}
                  rotation={highSchoolOptions.iconRotation}
                  position={highSchoolOptions.iconPosition}>
                {/* radiusTop, radiusBottom, height, radialSegments */}
                <cylinderGeometry args={[isMobile ? 1: 1.8, isMobile ? 1: 1.8, 0, 64]} />
                <meshStandardMaterial map={texture} transparent />
            </mesh>
            <Text
                lineHeight={1.4}
                position={highSchoolOptions.textPosition}
                // position={[isMobile ? 118 : isMobile ? 105 : -15,isMobile ? 26 : isMobile ? 25 : 7, isMobile ? 90 :48]}
                font="./fonts/Audiowide-Regular.ttf"
                rotation={highSchoolOptions.textRotation}
                fontSize={isMobile ? 2 :2.5}
                textAlign={"center"}
                color={"#ffffff"}
                maxWidth={isMobile ? 36 : 55}>
                {`High School Diploma in Mathematics and Physics from Mandegar Imam Sadegh High School  ${!isMobile ? `\n` : ''}, graduated in 2021 with a GPA of 18.6/20`}
            </Text>
        </group>
    )
}

// [isSmallMobile ? 96 : isMobile ? 90 :-15,isSmallMobile ? 68 : isMobile ? 60 :34,48]
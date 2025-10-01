'use client'


import {Text, useTexture} from "@react-three/drei";
import {useMemo} from "react";
import * as THREE from 'three'
import {useMediaQuery} from "react-responsive";

const CodintoSection = () => {
    const texture = useTexture("/images/codinto.png");
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const geometry = useMemo(() => new THREE.CylinderGeometry(isMobile ? 1.8 : 2.2, isMobile ? 1.8 : 2.2, 0, 32), []);


    return (
        <group>
            <mesh scale={15} position={[230, 24, -0.4]} rotation={[3.25, -1.56, 1.69]}>
                {/*<pointLight intensity={10}*/}
                {/*            position={[0,-2,0]}*/}
                {/*            decay={0.8}*/}
                {/*            color={'#dee9ff'}*/}
                {/*            scale={0.8} />*/}
                {/* radiusTop, radiusBottom, height, radialSegments */}
                <primitive object={geometry} attach="geometry" />
                <meshStandardMaterial  map={texture} transparent/>

            </mesh>
            <Text fontSize={isMobile ? 8 : 11}
                  rotation={[0,Math.PI,0]}
                  position={[isMobile ? 171 : 156,52,-1]}
                  color={"#5e53c7"}
                  font="./fonts/Audiowide-Regular.ttf">
                Codinto
            </Text>
            <Text fontSize={isMobile ? 6 : 8}
                  rotation={[0,Math.PI,0]}
                  position={[isMobile ? 165 : 149,isMobile ? 42 : 40,-1]}
                  color={"#dcdcdc"}
                  font="./fonts/Audiowide-Regular.ttf">
                2022 - 2024
            </Text>
            <Text fontSize={isMobile ? 5.5 :7}
                  rotation={[0,Math.PI,0]}
                  maxWidth={isMobile ? 130 : 235}
                  position={[isMobile ? 124 : 62,13,-1]}
                  color={"#c2c2c2"}
                  font="./fonts/Audiowide-Regular.ttf">
                As a front - end developer I was responsible for creating advanced web applications using tools like Next JS and React JS.
                Worked on a variety of complex platforms, including polling systems,
                e-commerce websites, gold trading dashboards, and online news portals
            </Text>
        </group>

    )
}
useTexture.preload("/images/codinto.png");

export default CodintoSection;
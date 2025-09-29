'use client'


import {Text, useTexture} from "@react-three/drei";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {useMemo} from "react";
import * as THREE from "three";
import {useMediaQuery} from "react-responsive";

const SafeBrokerSection = () => {
    // const texture = useLoader(TextureLoader, "/images/safebroker.png") // path to your png
    const texture = useTexture("/images/safebroker.png");
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const geometry = useMemo(() => new THREE.CylinderGeometry(isMobile ? 1.8 : 2.2, isMobile ? 1.8 : 2.2, 0, 32), []);
    return <group position={[230, -130, -0.4]}>
        <mesh scale={15}  rotation={[3.25, -1.56, 1.69]}>
            {/*<pointLight intensity={10}*/}
            {/*            position={[0,-2,0]}*/}
            {/*            decay={0.8}*/}
            {/*            color={'#dee9ff'}*/}
            {/*            scale={0.8} />*/}
            {/* radiusTop, radiusBottom, height, radialSegments */}
            <primitive object={geometry} attach="geometry" />
            <meshStandardMaterial map={texture} transparent/>
        </mesh>
        <Text fontSize={isMobile ? 8 : 11}
              rotation={[0,Math.PI,0]}
              position={[isMobile ? -70 : -90,28,-1]}
              color={"#149b6f"}
              font="./fonts/Audiowide-Regular.ttf">
            Safe Broker
        </Text>
        <Text fontSize={isMobile ? 6 : 8}
              rotation={[0,Math.PI,0]}
              position={[isMobile ? -70 : -88,16,-1]}
              color={"#dcdcdc"}
              font="./fonts/Audiowide-Regular.ttf">
            2024 - present
        </Text>
        <Text fontSize={isMobile ? 5.6 :7}
              rotation={[0,Math.PI,0]}
              maxWidth={isMobile ? 130 :235}
              position={[isMobile ? -108 : -170,-3,-1]}
              color={"#c2c2c2"}
              font="./fonts/Audiowide-Regular.ttf">
            Contributed to the development of a high-traffic Forex market platform,
            optimizing user experience and real-time data handling for financial
        </Text>
    </group>
}
useTexture.preload("/images/safebroker.png");
export default SafeBrokerSection;
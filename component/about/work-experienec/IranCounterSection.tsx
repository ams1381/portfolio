'use client'


import {Text, useTexture} from "@react-three/drei";
import {useControls} from "leva";
import {useMemo} from "react";
import * as THREE from 'three'
import {useMediaQuery} from "react-responsive";

const IranCounterSection = () => {
    const texture = useTexture("/images/irancounter.png");

    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const geometry = useMemo(() => new THREE.BoxGeometry(isMobile ? 4 : 5 , isMobile ? 4 : 5 , 0), []);

    const onClickHandler = () => {
        let LinkElement = document.createElement('a');
        LinkElement.className = 'hover:text-[red] transition-all'
        Object.assign(LinkElement, {
            target: '_blank',
            rel: 'noopener noreferrer',
            href: 'http://irancounter.com/',
        }).click()
    }

    return <group>
        <pointLight intensity={10}
                    position={[0,-2,0]}
                    decay={0.8}
                    color={'#dee9ff'}
                    scale={0.8} />
        <mesh scale={15} onClick={onClickHandler}
              onPointerEnter={(e) => document.body.style.cursor = 'pointer'}
              onPointerLeave={(e) => document.body.style.cursor = 'auto'}
              position={[230,-54,0]}>
            <primitive object={geometry} attach="geometry" />
            <meshBasicMaterial map={texture} transparent />
        </mesh>
        <Text fontSize={isMobile ? 8 : 11}
              rotation={[0,Math.PI,0]}
              position={[isMobile ? 160 : 140,-30,-1]}
              color={"#c20c28"}
              font="./fonts/Audiowide-Regular.ttf">
            Iran Counter
        </Text>
        <Text fontSize={isMobile ? 6 : 8}
              rotation={[0,Math.PI,0]}
              position={[isMobile ? 165 : 148,-42,-1]}
              fillOpacity={0.95}
              color={"#ffffff"}
              font="./fonts/Audiowide-Regular.ttf">
            2024 - 2025
        </Text>
        <Text fontSize={isMobile ? 5.6 :7}
              rotation={[0,Math.PI,0]}
              position={[isMobile ? 122 :68,-63,-1]}
              maxWidth={isMobile ? 130 :220}
              fillOpacity={0.95}
              color={"#ffffff"}
              font="./fonts/Audiowide-Regular.ttf">
             I specialized in enhancing website performance through a strategic focus on
             SEO, server-side rendering (SSR), and overall web optimization
        </Text>
    </group>
}
useTexture.preload("/images/irancounter.png");
export default IranCounterSection;
// I specialized in enhancing website performance through a strategic focus on
// SEO, server-side rendering (SSR), and overall web optimization
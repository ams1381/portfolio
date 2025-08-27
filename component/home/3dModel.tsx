'use client'
import {Diamond} from "@/component/home/diamond";
import React, {useRef} from "react";
import {useFrame, useThree} from "@react-three/fiber";
import {TPageStatus} from "@/app/page";
import {OrbitControls} from "@react-three/drei";

export const DiamondModel = ({ pageStatus } : { pageStatus : TPageStatus }) => {
    const { width } = useThree((state) => state.viewport)
    const diamondRef : any = useRef();
    const baseScale = [2, 1.15, 2];
    const scaleFactor =  (-(width * 0.08) +  9.5) / (0.01 * width + 5.5) ;


    return <mesh ref={diamondRef as any} rotation={[0, -0.2, 0]}
                 scale={window.innerWidth < 480 ? [0.9, 0.6, 1] as any : baseScale.map(value => value / scaleFactor) as any}>
        {/*<DiamondModelTest  />*/}
        <Diamond pageStatus={pageStatus} />
        {window.innerWidth < 480 ?
            <OrbitControls enableZoom={false}
                           autoRotate={true}
                           enableRotate={false}
                           maxPolarAngle={Math.PI / 2}
                           minPolarAngle={Math.PI / 3}
                           enablePan={false} />
            : ''}
    </mesh>
}

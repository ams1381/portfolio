'use client'
import {Diamond} from "@/component/canvas/diamond";
import React, {useRef} from "react";
import {useFrame, useThree} from "@react-three/fiber";
import {TPageStatus} from "@/app/page";
import { Vector3 } from 'three';
import {OrbitControls} from "@react-three/drei";



export const DiamondModel = ({ pageStatus } : { pageStatus : TPageStatus }) => {
    const { width } = useThree((state) => state.viewport)
    const diamondRef : any = useRef();
    const baseScale = [2, 1.15, 2];
    const scaleFactor =  (-(width * 0.08) +  9.5) / (0.01 * width + 5.5) ;

    const targetPosition = new Vector3(pageStatus === 'home' ? 0 : -(width / 9), 0, pageStatus === 'home' ? 0 : 2);

    useFrame(() => {
        if (diamondRef.current && width > 3.9) {
            // Interpolate the current position towards the target position
            diamondRef.current.position.lerp(targetPosition, 0.1); // 0.1 is the interpolation factor

            // diamondRef.current.rotation.y += 1;
        }
    });


    return   <mesh
        ref={diamondRef as any}
        rotation={[0, -0.2, 0]}
        scale={window.innerWidth < 480 ? [0.9, 0.6, 1] as any : baseScale.map(value => value / scaleFactor) as any}
    >
        <Diamond pageStatus={pageStatus} />
        {window.innerWidth < 480 ?
            <OrbitControls enableZoom={false}
                            autoRotate={true}
                           enableRotate={false}
                           maxPolarAngle={Math.PI / 2}
                           minPolarAngle={Math.PI / 3}
                           maxAzimuthAngle={Math.PI / 2}
                           // maxAzimuthAngle={Math.PI / 3}
                           enablePan={false} />
            : ''}
    </mesh>
}
// scale={[2 / 1.5, 1.15 / 1.5, 2 / 1.5]}

// <Diamond
//     // rotation={[0, 0, 0]}
//     position={[0, 0, pageStatus === 'home' ? 0 : 1]}
//     rotation={[0, -0.2, 0]}
//     scale={baseScale.map(value => value / scaleFactor)}
//     // position={[0, 0.2, 0]}
// />
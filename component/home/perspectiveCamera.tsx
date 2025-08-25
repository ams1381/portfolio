import React, { useEffect, useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei'; // Make sure to import this if you're using @react-three/drei
import { useThree } from '@react-three/fiber';
import { Euler } from 'three';

export const CameraComponent = () => {
    // const { width } = useThree();


    // useEffect(() => {
    //     const handleOrientation = (event) => {
    //         console.log(event)
    //         const { alpha, beta, gamma } = event;
    //
    //         // Adjust these values to match your preferred sensitivity
    //         const sensitivity = 0.1;
    //
    //         // Calculate new camera rotation based on device orientation
    //         camera.rotation.set(
    //             (beta - initialOrientation.current.beta) * sensitivity,    // X-axis (tilt forward/backward)
    //             (gamma - initialOrientation.current.gamma) * sensitivity,   // Y-axis (tilt left/right)
    //             (alpha - initialOrientation.current.alpha) * sensitivity    // Z-axis (rotation around Z-axis)
    //         );
    //
    //         camera.updateProjectionMatrix();
    //     };
    //
    //     window.addEventListener("deviceorientation", handleOrientation, true);
    //     return () => window.removeEventListener('deviceorientation', handleOrientation);
    // }, [camera]);

    return (
        <>
            <PerspectiveCamera
                makeDefault
                position={[0, 13, 14]}
                fov={25}
                near={0.1}
                far={80}
            />
            { window.innerWidth < 480 && <pointLight position={[0.8, 0.5, 2]} intensity={6} distance={20} color={'rgba(241,243,255,0.91)'}/>}
        </>

    );
};

import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const CameraInitializer = ({ v = new THREE.Vector3() }) => {
    const { camera, mouse } = useThree();
    const isLerping = useRef(true); // Initialize ref to keep track of lerping state

    useFrame(() => {
        // if (isLerping.current) {
        camera.position.lerp(v.set(-6, 1.9, -16), 0.07);

        // Check if the camera position is close enough to the target to consider the lerp complete
        // if (camera.position.distanceTo(v) < 0.01) {
        //     isLerping.current = false; // Stop lerping
        // }
        // }
    });

    return null;
};

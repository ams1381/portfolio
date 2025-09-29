import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

/**
 * Smoothly rotates a camera to look at a target point.
 * @param {THREE.Camera} camera - The camera you want to rotate.
 * @param {THREE.Vector3} target - The point in world space to look at.
 * @param {number} speed - Interpolation speed (0 < speed < 1).
 */
export function useSmoothLookAt(camera, target, speed = 0.05) {
    const targetQuat = useRef(new THREE.Quaternion());

    useEffect(() => {
        if (!camera || !target) return;

        // Create a dummy camera to calculate the target quaternion
        const dummyCam = camera.clone();
        dummyCam.lookAt(target);
        targetQuat.current.copy(dummyCam.quaternion);
    }, [camera, target]);

    useFrame(() => {
        if (!camera || !target) return;
        camera.quaternion.slerp(targetQuat.current, speed);
    });
}

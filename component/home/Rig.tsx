import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Rig = ({ v = new THREE.Vector3() }) => {
    const { camera, mouse } = useThree();

    useFrame(() => {
        camera.position.lerp(v.set(-mouse.x / 2, mouse.y / 2, 10), 0.07);
    });

    return null;
};

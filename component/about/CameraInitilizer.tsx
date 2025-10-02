import {useRef} from 'react';
import {useThree, useFrame} from '@react-three/fiber';
import * as THREE from 'three';
import {TAboutMeActiveView} from "@/types";
import * as gsap from "gsap";
import {useMediaQuery} from "react-responsive";
import {useProgress} from "@react-three/drei";
// {
//     "x": -430.3505468079077,
//     "y": 22.163217778332307,
//     "z": -33.2690725155351
// }
//
// {
//     "isEuler": true,
//     "_x": 0.007477764261570695,
//     "_y": 0.03619280405759103,
//     "_z": -0.00027058721110696175,
//     "_order": "XYZ"
// }
export const CameraInitializer = ({activeView}: { activeView: TAboutMeActiveView }) => {
    const {camera, mouse} = useThree();
    const targetQuat = useRef(new THREE.Quaternion());
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const isSmallMobile = useMediaQuery({query: '(max-width: 480px)'});
    const v = new THREE.Vector3();
    const { progress } = useProgress();
    useFrame(() => {
        // console.log(camera.position,camera.rotation);
        // return
        switch (activeView) {
            case 'education' :
                if(isMobile) {
                    v.set(-430.35, 22.163, -33.26);
                    targetQuat.current.setFromEuler(
                        new THREE.Euler(0.0074, 0.0361,  -0.0002, "XYZ")
                    );
                } else {
                    v.set(-437.48, 19.89, -107.8);
                    targetQuat.current.setFromEuler(
                        new THREE.Euler(-0.14, 0.054, 0, "XYZ")
                    );
                }
                const mid = new THREE.Vector3().addVectors(camera.position, v).multiplyScalar(0.5);
                mid.y += 5; // lift up mid point for an arc
                camera.quaternion.slerp(targetQuat.current, 0.1);
                camera.position.lerpVectors(camera.position, mid, 0.1);
                // camera.position.lerp(v, 0.1);
                break;
            case 'skills' :
                if(isSmallMobile) {
                    v.set(-299.203, 4.981, -91.53);
                    targetQuat.current.setFromEuler(
                        new THREE.Euler(0.145, 0.521,  -0.072, "XYZ")
                    );
                }  else {
                    v.set(-360, 61.26, -600.77);
                    targetQuat.current.setFromEuler(
                        new THREE.Euler(-0.12, 0.27, 0.035, "XYZ")
                    );
                }

                camera.quaternion.slerp(targetQuat.current, 0.1);
                camera.position.lerp(v, 0.1);
                break;
            case 'workExperience':
                if(isSmallMobile) {
                    v.set(-528.57, 139.674, 13.28);
                    targetQuat.current.setFromEuler(
                        new THREE.Euler(-2.91, -0.152, -3.106, "XYZ")
                    );
                } else {
                    v.set(-662.61, 122.76, 49.57);
                    targetQuat.current.setFromEuler(
                        new THREE.Euler(-3.039, -0.055, -3.13, "XYZ")
                    );
                }
                camera.quaternion.slerp(targetQuat.current, 0.1);
                camera.position.lerp(v, 0.1);
                break;
            default:
                if (isSmallMobile) {
                    v.set(-582.61, 26.13, -796.97);
                    targetQuat.current.setFromEuler(new THREE.Euler(3.066, -0.44, 3.10));
                } else if (isMobile) {
                    v.set(-538.0, 44.52, -765.02);
                    targetQuat.current.setFromEuler(new THREE.Euler(-3.12, -0.38, -3.13)); // default orientation maybe?
                }
                else  {
                    v.set(-356.6, 35.2, -781.4);
                    targetQuat.current.setFromEuler(new THREE.Euler(-3.08, -0.17, -3.13)); // default orientation maybe?
                }

                camera.quaternion.slerp(targetQuat.current, 0.1);
                camera.position.lerp(v, 0.07);
                break;
        }


        // smoothly rotate
        // camera.quaternion.slerp(targetQuat.current, 0.1);
    });

    return null;
};

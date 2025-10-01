import {useRef} from 'react';
import {useThree, useFrame} from '@react-three/fiber';
import * as THREE from 'three';
import {TAboutMeActiveView} from "@/types";
import * as gsap from "gsap";
import {useMediaQuery} from "react-responsive";
import {useProgress} from "@react-three/drei";

export const CameraInitializer = ({activeView}: { activeView: TAboutMeActiveView }) => {
    const {camera, mouse} = useThree();
    const targetQuat = useRef(new THREE.Quaternion());
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const isSmallMobile = useMediaQuery({query: '(max-width: 480px)'});
    const v = new THREE.Vector3();
    const { progress } = useProgress();
    useFrame(() => {
        // return
        switch (activeView) {
            case 'education' :
                if(isMobile) {
                    v.set(-327.5, 9.82, -65.51);
                    targetQuat.current.setFromEuler(
                        new THREE.Euler(0.026, 0.399,  -0.010, "XYZ")
                    );
                } else {
                    v.set(-397.6, 4.74, -144.5);
                    targetQuat.current.setFromEuler(
                        new THREE.Euler(-0.006, 0.33, 0.002, "XYZ")
                    );
                }

                camera.quaternion.slerp(targetQuat.current, 0.1);
                camera.position.lerp(v, 0.1);
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

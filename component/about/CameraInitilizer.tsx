import {useRef} from 'react';
import {useThree, useFrame} from '@react-three/fiber';
import * as THREE from 'three';
import {TAboutMeActiveView} from "@/types";
import * as gsap from "gsap";

export const CameraInitializer = ({activeView}: {activeView: TAboutMeActiveView}) => {
    const {camera, mouse} = useThree();
    const targetQuat = useRef(new THREE.Quaternion());
    const v = new THREE.Vector3();
    useFrame(() => {
        // console.log(camera.rotation)
        // define target position + rotation
        // console.log(camera.rotation,camera.position)
        if (activeView === "education") {
            v.set(-177.7, 29.03, -24.4);

            // use a temp Euler → Quaternion
            // targetQuat.current.setFromEuler(new THREE.Euler(-0.2, Math.PI, 0));
            // targetQuat.current.setFromEuler(
            //     new THREE.Euler(-0.51928174129267237, Math.PI,2.052740967574868326,"XYZ")
            // );
            gsap.gsap.to(camera.rotation, {
                y: Math.PI + 2,
                duration: 2,
                ease: "power2.inOut",
            });
            // camera.quaternion.slerp(targetQuat.current, 0.1);
            // camera.rotateY(Math.PI);
            camera.position.lerp(v, 0.1);
        } else {
            v.set(-147.2, 48, -452);
            targetQuat.current.setFromEuler(new THREE.Euler(0, 0, 0)); // default orientation maybe?
            camera.position.lerp(v, 0.07);
        }

        // smoothly rotate
        // camera.quaternion.slerp(targetQuat.current, 0.1);
    });

    return null;
};
// {
//     "isEuler": true,
//     "_x": 0.07775621862496754,
//     "_y": 0.6098921981993728,
//     "_z": -0.04459752113681014,
//     "_order": "XYZ"
// }
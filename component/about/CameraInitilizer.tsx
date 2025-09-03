import {useRef} from "react";
import {useThree, useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {TAboutMeActiveView} from "@/types";
import * as gsap from "gsap";

export const CameraInitializer = ({activeView}: { activeView: TAboutMeActiveView }) => {
    const {camera, mouse} = useThree();
    const targetQuaternion = useRef(new THREE.Quaternion());
    const v = new THREE.Vector3();
    useFrame(() => {
        // console.log(camera.position,camera.rotation);
        switch (activeView) {
            case "education":
                v.set(-177.7, 29.03, -24.4);
                // camera.lookAt(v)
                camera.position.lerp(v, 0.07);
                break;
            case "initial":
                v.set(-147.2, 48, -452);
                camera.position.lerp(v, 0.07);
                break;
            case "skills":
                v.set(-254.3, 60.3, -312.3);
                camera.position.lerp(v, 0.07);
                break;
        }

        // if (activeView === "education") {
        //     v.set(-177.7, 29.03, -24.4);
        //     // const dir = new THREE.Vector3();
        //     // camera.getWorldDirection(dir);
        //     //
        //     // // Reverse it
        //     // const lookBack = new THREE.Vector3().copy(camera.position).sub(dir);
        //     // camera.lookAt(lookBack);
        //     // use a temp Euler → Quaternion
        //     // targetQuat.current.setFromEuler(new THREE.Euler(-0.2, Math.PI, 0));
        //     // targetQuaternion.current.setFromEuler(
        //     //     new THREE.Euler(
        //     //         -0.03440813251322209,
        //     //         0.5698667092747846,
        //     //         0.01856906463072399,
        //     //         "XYZ"
        //     //     )
        //     // );
        //     // camera.quaternion.slerp(targetQuaternion.current, 0.1);
        //     // camera.rotateY(Math.PI);
        //     camera.position.lerp(v, 0.1);
        // } else {
        //     v.set(-147.2, 48, -452);
        //     // targetQuat.current.setFromEuler(new THREE.Euler(0, 0, 0)); // default orientation maybe?
        //     camera.position.lerp(v, 0.07);
        // }
        // smoothly rotate
        // camera.quaternion.slerp(targetQuat.current, 0.1);
    });

    return null;
};

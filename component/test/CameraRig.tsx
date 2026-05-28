import {PerspectiveCamera, useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {LegacyRef, useRef} from "react";
import {PerspectiveCameraJSON} from "three";

export function CameraRig() {
    const scroll = useScroll()
    const camRef = useRef<any>()

    // useFrame هر فریم اجرا میشه، اینجا اسکرول رو دنبال می‌کنیم
    useFrame(() => {
        if(!camRef.current) return
        const scrollY = scroll.offset // بین 0 تا 1

        const targetPos = [scrollY * 10, (2 - scrollY) , 12 - scrollY * 5]
        const targetRot = [scrollY * 0.5, scrollY, 0]

        camRef.current.position.lerp({ x: targetPos[0], y: targetPos[1], z: targetPos[2] }, 0.1)
        // camRef.current.rotation.x = targetRot[0]
        camRef.current.rotation.y = targetRot[1]
    })

    return (
        <PerspectiveCamera ref={camRef} makeDefault position={[0, 0, 10]} fov={45} />
    )
}

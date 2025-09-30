import { Text3D } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";
import {useEffect, useRef, useState} from "react";
import {Box3, MeshStandardMaterial, Vector3} from "three";
import * as THREE from "three";
import {useMediaQuery} from "react-responsive";

type TMyText3DProps = {
    text: string,
    position : number[],
    onClick : () => void,
    size? : number,
    rotation? : any[]
}

export function MyText3D(props : TMyText3DProps) {
    const [hovered, setHovered] = useState(false);
    const textRef = useRef<any>();
    const [box, setBox] = useState<{ size: number[]; center: number[] } | null>(null);
    const initialPosition = useRef(new Vector3(props.position[0], props.position[1], props.position[2]));
    const targetPosition = useRef(new Vector3(props.position[0], props.position[1], props.position[2]));
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    useEffect(() => {
        if (textRef.current) {
            textRef.current.geometry.computeBoundingBox();
            const bbox : Box3 = textRef.current.geometry.boundingBox;
            // console.log(bbox)
            if (bbox) {
                const size = new THREE.Vector3();
                const center = new THREE.Vector3();
                let boxSizes = bbox.getSize(size);
                let boxCenter = bbox.getCenter(center);


                setBox({
                    size: [boxSizes.x, boxSizes.y, boxSizes.z],
                    // @ts-ignore
                    center: [boxCenter.x, boxCenter.y - isMobile ? -4 : 20, boxCenter.z + isMobile ? -10 : 0],
                });
            }
        }
    }, [props.text]);

    useFrame(() => {
        if(textRef.current) {
            // const target = props.textOpacity
            // const current = displayOpacity
            const mat = textRef.current.material as THREE.MeshStandardMaterial;
            mat.opacity = THREE.MathUtils.lerp(mat.opacity, hovered ? 1 : 0.8, 0.1);
            // let targetPosition = new Vector3(position[0],position[1],position[2]);
            if (hovered) {
                targetPosition.current.set(
                    initialPosition.current.x,
                    initialPosition.current.y,
                    initialPosition.current.z - 10
                );
            } else {
                targetPosition.current.copy(initialPosition.current);
            }
            // console.log(targetPosition.current)
            textRef.current.position.lerp(targetPosition.current, 0.2);
            // textRef.current.fillOpacity = next
        }
    })

    return (
        <group onClick={props.onClick}>
            <Text3D
                font="/fonts/Audiowide-Regular.json" // Path to font file
                size={props.size ?? 25}
                position={props.position as any}
                ref={textRef}
                height={0.2} // Thickness
                curveSegments={12}
                bevelEnabled
                receiveShadow={true}
                bevelThickness={0.02}
                rotation={props.rotation as any ?? [0,3.55,0] as any}
                frustumCulled={false}
                bevelSize={ 0.02}
                bevelOffset={0}
                bevelSegments={5}>
                {props.text}
                {/*<meshStandardMaterial attach="material"*/}
                {/*                       opacity={1} color={'#ffffff'} />*/}
            </Text3D>
            {box && (
                <mesh
                    position={box.center.map((c, i) => props.position[i] - c) as any}
                    rotation={props.rotation as any ?? [0,3.55,0] as any}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >
                    <boxGeometry args={box.size as any} />
                    <meshBasicMaterial transparent opacity={0} />
                </mesh>
            )}
        </group>
    )
}
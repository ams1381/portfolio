import { Text3D } from '@react-three/drei'
import {useControls} from "leva";
import {useFrame} from "@react-three/fiber";
import {useEffect, useRef, useState} from "react";
import {Box3, MeshStandardMaterial, Vector3} from "three";
import * as THREE from "three";

// {"position":[177,166.2,-358]}
// {"rotation":[0,3.4,0]}
export function MyText3D({text,position,onClick} : {text: string,position : number[],onClick : () => void}) {
    const [hovered, setHovered] = useState(false);
    const textRef = useRef<any>();
    const [box, setBox] = useState<{ size: number[]; center: number[] } | null>(null);
    const initialPosition = useRef(new Vector3(position[0], position[1], position[2]));
    const targetPosition = useRef(new Vector3(position[0], position[1], position[2]));
    const {size,height,bevelSize,bevelThickness,curveSegments,rotation} = useControls({
        // Testposition :op
        size :25 ,
        height : 0.2,
        bevelSize : 0.02 ,
        bevelThickness : 0.02,
        curveSegments : 12,
        rotation : [0,3.55,0]
    });

    useEffect(() => {
        if (textRef.current) {
            // باکس هندسه رو حساب می‌کنیم
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
                    center: [boxCenter.x, boxCenter.y - 20, boxCenter.z],
                });
            }
        }
    }, [text]);

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
        <group onClick={onClick}>
            <Text3D
                font="/fonts/Audiowide-Regular.json" // Path to font file
                size={size}
                position={position as any}
                ref={textRef}
                height={height} // Thickness
                curveSegments={curveSegments}
                bevelEnabled
                receiveShadow={true}
                bevelThickness={bevelThickness}
                rotation={rotation}
                frustumCulled={false}
                bevelSize={bevelSize}
                bevelOffset={0}
                bevelSegments={5}>
                {text}
                {/*<meshStandardMaterial attach="material"*/}
                {/*                       opacity={1} color={'#ffffff'} />*/}
            </Text3D>
            {box && (
                <mesh
                    position={box.center.map((c, i) => position[i] - c) as any}
                    rotation={rotation}
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
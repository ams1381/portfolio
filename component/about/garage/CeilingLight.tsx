import React, {useEffect, useRef} from 'react'

export function GarageCeilingLight(props: any) {
    const lightRef = useRef<any>();


    return (
        <group {...props} >
            <mesh position={[0,props.position[1] - 220,0]}>
                <sphereGeometry args={[5.15, 16, 16]} />
                <meshStandardMaterial
                    emissive={"#ffffff"}
                    emissiveIntensity={2}
                    color={"#ffffff"}
                />
            </mesh>
            {/*<pointLight*/}
            {/*    ref={lightRef}*/}
            {/*    intensity={props.pointLightIntensity ?? 2}*/}
            {/*    distance={props.pointLightDistance ?? 10}*/}
            {/*    decay={props.pointLightDecay ?? 2}*/}
            {/*    color={"#ffffff"}*/}
            {/*    castShadow={false} // keep shadows off on mobile*/}
            {/*/>*/}
            {/*<spotLight*/}
            {/*    angle={Math.PI / 3} // 60 degrees*/}
            {/*    penumbra={props.spotLightPenumbrav ?? 0.5}*/}
            {/*    intensity={1}*/}
            {/*    distance={25}*/}
            {/*    // castShadow*/}
            {/*/>*/}
            {/*<pointLight*/}
            {/*    intensity={props.pointLightIntensity ?? 40}*/}
            {/*    scale={props.pointLightScale ?? 1.5}*/}
            {/*    ref={lightRef}*/}
            {/*    decay={props.pointLightDecay ?? 1.5}*/}
            {/*    color={ "#ffffff"}*/}
            {/*    castShadow={props.casShadow ?? false}*/}

            {/*/>*/}
        </group>

    )
}
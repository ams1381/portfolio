'use client'
import * as THREE from 'three'

import React, {
    // useMemo,
    useRef,
    useState,
    useEffect
} from 'react'

import {useFrame} from '@react-three/fiber'

import {
    useGLTF,
    // Caustics,
    CubeCamera,
    // MeshRefractionMaterial, OrbitControls,
} from '@react-three/drei'

import { RGBELoader } from 'three-stdlib'


export function Diamond(props) {
    const group = useRef()
    const { nodes }  = useGLTF('diamond1.gltf');
    const [envMap, setEnvMap] = useState(null);
    const [resolution, setResolution] = useState(64);

    // Load the initial HDR environment texture
    useEffect(() => {
        new RGBELoader().load('env.hdr', (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;

            setEnvMap(texture);
        });
    }, []);

    // Example of changing the HDR texture based on some condition
    useEffect(() => {
        const newTexture = new RGBELoader().load('newEnv.hdr', (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            setEnvMap(texture);
        });

        // Clean up the previous texture when it changes
        return () => {
            if (newTexture) newTexture.dispose();
        };
    }, [/* dependency array, such as props or state that triggers HDR change */]);
    useFrame(({ gl, scene, camera }) => {

        camera.lookAt(0, 0.5, 0)
        gl.render(scene, camera)
    })

    useFrame(({ pointer }) => {

        group.current.rotation.y = THREE.MathUtils.lerp(
            group.current.rotation.y,
            pointer.x * (Math.PI / 16),
            0.005
        )
        group.current.rotation.x = THREE.MathUtils.lerp(
            group.current.rotation.x,
            pointer.y * -(Math.PI / 16),
            0.005
        )
    })
    return (
        <group>
            <group ref={group} receiveShadow castShadow position={props.position}>
                {/*<mesh receiveShadow castShadow geometry={nodes.Cylinder.geometry} {...props}>*/}
                {/*    <meshStandardMaterial*/}
                {/*        roughness={0} metalness={0.5} color='#474747'/>*/}
                {/*</mesh>*/}
                { envMap && <CubeCamera resolution={resolution} frames={1} envMap={envMap}>
                    {(texture) => (<mesh receiveShadow castShadow geometry={nodes.Cylinder.geometry} {...props}>
                        <meshStandardMaterial
                            envMap={texture}

                            bounces={1}
                            aberrationStrength={0.2}
                            roughness={0}
                            fresnel={0}
                            metalness={0}
                            color={props.pageStatus === 'home' ? '#434343' : '#434343'}/>
                    </mesh>)}
                </CubeCamera>}
            </group>
        </group>
    )
}

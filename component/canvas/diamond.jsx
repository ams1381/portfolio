'use client'
import * as THREE from 'three'

import React, {
    // useMemo,
    useRef,
    useState,
    useEffect, useMemo
} from 'react'

import {useFrame} from '@react-three/fiber'

import {
    useGLTF,
    // Caustics,
    CubeCamera, MeshRefractionMaterial, Caustics,
    MeshReflectorMaterial, Stats, OrbitControls
    // MeshRefractionMaterial, OrbitControls,
} from '@react-three/drei'

import {RGBELoader} from 'three-stdlib'


export function Diamond(props) {
    const group = useRef()
    const {nodes} = useGLTF('diamond1.gltf');
    const [envMap, setEnvMap] = useState(null);
    const resolution = useMemo(() => 64, [])
    // let isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    useEffect(() => {
        const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        setIsDarkTheme(darkTheme)
    }, [])
    // Load the initial HDR environment texture
    // useEffect(() => {
    //     new RGBELoader().load('env.hdr', (texture) => {
    //         texture.mapping = THREE.EquirectangularReflectionMapping;
    //         setEnvMap(texture);
    //     });
    // }, []);

    // Example of changing the HDR texture based on some condition
    useEffect(() => {
        const newTexture = new RGBELoader().load('env.hdr', (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            texture.encoding = THREE.sRGBEncoding; // Adjusts color output to match sRGB color space
            texture.anisotropy = 6; // Optional: increase texture clarity at oblique angles

            // Optional: Apply post-processing on the HDR map to control its intensity
            texture.exposure = 9.0;
            setEnvMap(texture);
        });

        // Clean up the previous texture when it changes
        return () => {
            if (newTexture) newTexture.dispose();
        };
    }, [/* dependency array, such as props or state that triggers HDR change */]);
    useFrame(({gl, scene, camera}) => {

        camera.lookAt(0, 0.5, 0)
        gl.render(scene, camera)
    })

    useFrame(({pointer}) => {
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
        <>
            <group>
                <group ref={group} receiveShadow castShadow position={props.position}>
                    {/*<mesh receiveShadow castShadow geometry={nodes.Cylinder.geometry} {...props}>*/}
                    {/*    <meshStandardMaterial*/}
                    {/*        roughness={0} metalness={0.5} color='#474747'/>*/}
                    {/*</mesh>*/}
                    {envMap && <CubeCamera resolution={32} frames={1} envMap={envMap}>
                        {(texture) => (<Caustics worldRadius={0.1}
                                                 causticsOnly={false}
                                                 intensity={0} backside>
                            <mesh geometry={nodes.Cylinder.geometry} {...props}>
                                {
                                    <MeshRefractionMaterial
                                        color={isDarkTheme ? '#575757' : '#ffffff'}
                                        aberrationStrength={0.01}
                                        bounces={1}
                                        fresnel={0.2}
                                        envMapIntensity={1}
                                        fastChroma={true}
                                        envMap={texture}
                                        toneMapped={false}
                                    />
                                    // isDarkTheme ? <meshStandardMaterial
                                    //         envMap={texture}
                                    //         bounces={0.5}
                                    //         aberrationStrength={2.2}
                                    //         roughness={0}
                                    //         fresnel={0.4}
                                    //         metalness={0.2}
                                    //         envMapIntensity={1.5}
                                    //         color={'#484848'}/> :
                                    //     <MeshRefractionMaterial
                                    //         color={'#ffffff'}
                                    //         aberrationStrength={0.01}
                                    //         bounces={1}
                                    //         fresnel={0.2}
                                    //         envMapIntensity={1}
                                    //         fastChroma={true}
                                    //         envMap={texture}
                                    //         toneMapped={false}
                                    //     />
                                }
                            </mesh>
                        </Caustics>)}
                    </CubeCamera>}
                </group>

            </group>
        </>

    )
}

// : <Caustics worldRadius={0.1} intensity={0}>
//     <mesh receiveShadow castShadow={false} ref={ref} geometry={nodes.Cylinder.geometry} {...props}>
//         <MeshRefractionMaterial
//             color={'red'}
//             aberrationStrength={7.1}
//             bounces={1}
//             fresnel={0}
//             fastChroma={true}
//             envMap={texture}
//             toneMapped={false}
//         />
//     </mesh>
// </Caustics>
'use client'
import * as THREE from 'three'

import React, {
    // useMemo,
    useRef,
    useState,
    useEffect, useMemo
} from 'react'

import {useFrame} from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';
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
    const {nodes,materials} = useGLTF('/models/diamond/diamond1.gltf');
    const [envMap, setEnvMap] = useState(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    useEffect(() => {
        const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        setIsDarkTheme(darkTheme)
    }, [])
    console.log(isMobile)
    const optimizedTexture = useMemo(() => {
        const texture = new THREE.TextureLoader().load('/images/diamondTexture.jpg');
        texture.generateMipmaps = false;
        texture.minFilter =  THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        // texture.generateMipmaps = !isMobile;
        // texture.minFilter =  THREE.LinearMipmapLinearFilter;
        // texture.magFilter = THREE.LinearFilter;
        // texture.resolution =512
        return texture;
    }, [isMobile]);
    // Example of changing the HDR texture based on some condition
    useEffect(() => {

        const newTexture = new RGBELoader().load('/models/diamond/env.hdr', (texture) => {
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
    });

    useEffect(() => {
        return () => {
            // cleanup materials and textures
            materials.DiamondOutside?.dispose();
            nodes.Cylinder.geometry?.dispose();
        };
    }, []);

    return (
        <>

            <group>
                {!isMobile && <>
                    <pointLight position={[3, 2, 1]} intensity={1.5} color={'#00c9c9'} />
                    <pointLight position={[-2, -1, 2]} intensity={1} color={'#af00af'} />
                </>}
                <group ref={group} receiveShadow castShadow position={props.position}>
                    {envMap && <CubeCamera resolution={isMobile ? 16 : 32} frames={1} envMap={envMap}>
                        {(texture) => (<Caustics worldRadius={0.1}
                                                 causticsOnly={false}
                                                 intensity={0} backside>
                            <mesh material={materials.DiamondOutside} geometry={nodes.Cylinder.geometry} {...props}>
                                {
                                    <MeshRefractionMaterial
                                        color={isDarkTheme ? '#5780ff' : '#ffffff'}
                                        aberrationStrength={isMobile ? 0.1 : 0.25}
                                        bounces={isMobile ? 2 : 6}
                                        fresnel={isMobile? 0.4 :0.7}
                                        envMapIntensity={isMobile ? 1 : 2}
                                        fastChroma={true}
                                        envMap={texture}
                                        toneMapped={true}
                                    />
                                }
                            </mesh>
                        </Caustics>)}
                    </CubeCamera>}
                </group>
                {/*{ (isMobile && envMap) ? <group  ref={group} receiveShadow castShadow position={props.position}>*/}
                {/*    <mesh  geometry={nodes.Cylinder.geometry} {...props}>*/}
                {/*        <meshStandardMaterial*/}
                {/*            // color={'#ff0000'}*/}
                {/*            envMapIntensity={1.5}*/}
                {/*            // color={isDarkTheme ? '#5780ff' : '#ffffff'}*/}
                {/*            metalness={0.9}*/}
                {/*            roughness={0.1}*/}
                {/*            envMap={envMap}*/}
                {/*            map={optimizedTexture}*/}
                {/*        />*/}
                {/*    </mesh>*/}
                {/*</group>: <group ref={group} receiveShadow castShadow position={props.position}>*/}
                {/*    {envMap && <CubeCamera resolution={isMobile ? 16 : 32} frames={1} envMap={envMap}>*/}
                {/*        {(texture) => (<Caustics worldRadius={0.1}*/}
                {/*                                 causticsOnly={false}*/}
                {/*                                 intensity={0} backside>*/}
                {/*            <mesh material={materials.DiamondOutside} geometry={nodes.Cylinder.geometry} {...props}>*/}
                {/*                {*/}
                {/*                    <MeshRefractionMaterial*/}
                {/*                        color={isDarkTheme ? '#5780ff' : '#ffffff'}*/}
                {/*                        aberrationStrength={isMobile ? 0.1 : 0.25}*/}
                {/*                        bounces={6}*/}
                {/*                        fresnel={0.7}*/}
                {/*                        envMapIntensity={isMobile ? 1 : 2}*/}
                {/*                        fastChroma={true}*/}
                {/*                        envMap={texture}*/}
                {/*                        toneMapped={true}*/}
                {/*                    />*/}
                {/*                }*/}
                {/*            </mesh>*/}
                {/*        </Caustics>)}*/}
                {/*    </CubeCamera>}*/}
                {/*</group>}*/}
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
'use client'
import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import {useGLTF, CubeCamera, MeshRefractionMaterial, Caustics} from '@react-three/drei'
import { RGBELoader } from 'three-stdlib'
import { getDeviceCapability } from "@/utils/functions";

export function Diamond(props) {
    const group = useRef()

    // Load the diamond model (geometry + materials) from GLTF
    const { nodes, materials } = useGLTF('/models/diamond/diamond1.gltf');

    // Store environment map (HDR texture)
    const [envMap, setEnvMap] = useState(null);

    // Detect if user is on a small screen device
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // Detects if the system is in dark mode (used for material color tint)
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // Estimate device GPU capability (low / medium / high)
    const capability = getDeviceCapability();

    // Use capability to scale number of refraction bounces (expensive effect)
    const bounces = capability === "high" ? 6 : capability === "medium" ? 4 : 2;

    // Detect theme once on mount
    useEffect(() => {
        const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        setIsDarkTheme(darkTheme)
    }, [])

    // Load HDR environment map for reflections/refractions
    useEffect(() => {
        const newTexture = new RGBELoader().load('/models/diamond/env.hdr', (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping; // makes HDR usable as env map
            texture.encoding = THREE.sRGBEncoding; // proper color space
            texture.anisotropy = 6; // improves clarity at oblique angles (costly)
            texture.exposure = 9.0; // boosts brightness
            setEnvMap(texture);
        });

        // Clean up texture when component unmounts or re-renders
        return () => {
            if (newTexture) newTexture.dispose();
        };
    }, [])

    // Always keep camera aimed at the diamond
    useFrame(({ camera }) => {
        camera.lookAt(0, 0.5, 0)
    })

    // Rotate the diamond smoothly based on pointer movement
    useFrame(({ pointer }) => {
        group.current.rotation.y = THREE.MathUtils.lerp(
            group.current.rotation.y,
            pointer.x * (Math.PI / 16),
            isMobile ? 0.1 : 0.005 // make lerp faster on mobile (smoother at low fps)
        )
        group.current.rotation.x = THREE.MathUtils.lerp(
            group.current.rotation.x,
            pointer.y * -(Math.PI / 16),
            isMobile ? 0.1 : 0.005
        )
    });

    // Cleanup diamond materials and geometry when component unmounts
    useEffect(() => {
        return () => {
            materials.DiamondOutside?.dispose();
            nodes.Cylinder.geometry?.dispose();
        };
    }, []);

    return (
        <group>
            {/* Decorative point lights for color accents */}
            <pointLight position={[3, 2, 1]} intensity={1.5} color={'#00c9c9'} />
            <pointLight position={[-2, -1, 2]} intensity={1} color={'#af00af'} />

            {/* Group containing the diamond, can rotate via pointer */}
            <group ref={group} receiveShadow castShadow position={props.position}>
                {/* Only render when envMap is loaded */}
                {envMap && (
                    <CubeCamera resolution={isMobile ? 10 : 28} frames={1} envMap={envMap}>
                        {(texture) => (
                            <Caustics worldRadius={0.1} causticsOnly={false} intensity={0} backside>
                                <mesh
                                    material={materials.DiamondOutside}
                                    geometry={nodes.Cylinder.geometry}
                                    {...props}
                                >
                                    {/* Custom diamond material with refraction + chromatic effects */}
                                    <MeshRefractionMaterial
                                        color={isDarkTheme ? '#5780ff' : '#ffffff'} // tint diamond based on theme
                                        aberrationStrength={isMobile ? 0.1 : 0.25} // chromatic aberration
                                        bounces={isMobile ? 1.5 : bounces} // refraction depth, GPU heavy
                                        fresnel={isMobile ? 0.4 : 0.7} // reflection intensity at edges
                                        envMapIntensity={isMobile ? 1 : 2} // env map brightness
                                        fastChroma={true} // performance optimization
                                        envMap={texture} // reflections from cube camera
                                        toneMapped={true}
                                    />
                                </mesh>
                            </Caustics>
                        )}
                    </CubeCamera>
                )}
            </group>
        </group>
    )
}
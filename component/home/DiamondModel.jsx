import React, {useEffect, useRef, useState} from 'react'
import {Caustics, CubeCamera, MeshRefractionMaterial, useGLTF} from '@react-three/drei'
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {RGBELoader} from "three-stdlib";

export function DiamondModelTest(props) {
    const {nodes, materials} = useGLTF('/models/diamond/diamond.glb');
    const [envMap, setEnvMap] = useState(null);
    const group = useRef()
    const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    useEffect(() => {
        const newTexture = new RGBELoader().load('/models/diamond/env.hdr', (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            texture.encoding = THREE.sRGBEncoding; // Adjusts color output to match sRGB color space
            texture.anisotropy = 4; // Optional: increase texture clarity at oblique angles

            // Optional: Apply post-processing on the HDR map to control its intensity
            texture.exposure =4.0;
            setEnvMap(texture);
        });

        // Clean up the previous texture when it changes
        return () => {
            if (newTexture) newTexture.dispose();
        };
    }, []);
    useFrame(({gl, scene, camera}) => {

        camera.lookAt(0, 0.5, 0)
        gl.render(scene, camera)
    })
    // useFrame(({pointer}) => {
    //     group.current.rotation.y = THREE.MathUtils.lerp(
    //         group.current.rotation.y,
    //         pointer.x * (Math.PI / 16),
    //         0.005
    //     )
    //     group.current.rotation.x = THREE.MathUtils.lerp(
    //         group.current.rotation.x,
    //         pointer.y * -(Math.PI / 16),
    //         0.005
    //     )
    // })

    return (
        <group>
            <group position={[0,0.4,0]}  receiveShadow castShadow ref={group}>
        {envMap && <CubeCamera resolution={30} frames={1} envMap={envMap}>
            {(texture) => (<Caustics worldRadius={1.6}
                                     causticsOnly={false}
                                     intensity={0}>
                <mesh geometry={nodes.pCone1_DiamondOutside_0.geometry}
                      scale={[1.2,2,1]}
                      material={materials.DiamondOutside}>
                    <MeshRefractionMaterial

                        color={darkTheme ? '' : '#ffffff'}
                        aberrationStrength={0.05}
                        bounces={50}
                        fresnel={0.2}
                        envMapIntensity={1}
                        fastChroma={true}
                        envMap={texture}
                        toneMapped={true}
                    />
                </mesh>
            </Caustics>)}
        </CubeCamera>}
</group>
        </group>

    )
}

useGLTF.preload('/models/diamond/diamond.glb')

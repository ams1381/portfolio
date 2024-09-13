'use client'
import * as THREE from 'three'
import { useFrame, extend, Vector3, Euler } from '@react-three/fiber'
import React, { useRef } from 'react'
import {shaderMaterial, Text} from '@react-three/drei'
// @ts-ignore
import vertex from '@/component/projects/glsl/shader.vert'
// @ts-ignore
import fragment from '@/component/projects/glsl/shader.frag'
// @ts-ignore
import lightModeFragment from '@/component/projects/glsl/lighShader.frag'
import { DoubleSide } from 'three'

extend({ PlaneGeometry: THREE.PlaneGeometry })
interface ShaderProps {
    url?: string
    image: string
    pointer?: boolean
    position?: Vector3
    planeArgs: [
        width?: number,
        height?: number,
        widthSegments?: number,
        heightSegments?: number
    ]
    wireframe?: boolean
    planeRotation: Euler
}

const Shader: React.FC<ShaderProps> = ({
                                           url,
                                           image,
                                           pointer,
                                           position,
                                           planeArgs,
                                           wireframe,
                                           planeRotation,
                                       }) => {
    const meshRef = useRef(null);
    let isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const ColorShiftMaterial = shaderMaterial(
        {
            uTime: 1,
            uTexture: new THREE.TextureLoader().load(image),
        },
        vertex,
        isDarkTheme ?  fragment : lightModeFragment
    )
    // This is the 🔑 that HMR will renew if this file is edited
    // It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
    // @ts-ignore

    ColorShiftMaterial.key = THREE.MathUtils.generateUUID()

    extend({ ColorShiftMaterial })


    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        // @ts-ignore
        if (meshRef.current.material) {
            // @ts-ignore
            meshRef.current.material.uniforms.uTime.value = time * 0.4
        }
    })

    const openInNewTab = (href: string) => {
        let LinkElement = document.createElement('a');
        LinkElement.className = 'hover:text-[red] transition-all'
        Object.assign(LinkElement, {
            target: '_blank',
            rel: 'noopener noreferrer',
            href: href,
        }).click()
    }

    return (
        <>
            <mesh
                ref={meshRef}
                onPointerEnter={(e) => {
                    if (pointer) document.body.style.cursor = 'pointer'
                    else return
                }}
                onPointerLeave={(e) => {
                    if (pointer) document.body.style.cursor = 'auto'
                    else return
                }}

                onClick={() => url && openInNewTab(url)}
                rotation={planeRotation}
                position={position}
            >
                <planeGeometry args={planeArgs} />
                {/* @ts-ignore */}
                <colorShiftMaterial
                    key={ColorShiftMaterial.key}
                    uTime={3}
                    attach="material" color="hotpink"
                    side={DoubleSide}
                    wireframe={wireframe}
                />
            </mesh>
        </>
    )
}

export default Shader

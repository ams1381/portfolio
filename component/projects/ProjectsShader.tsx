'use client'

import React, {Suspense, useEffect, useRef, useState} from 'react'
import {useThree} from '@react-three/fiber'
import {
    Html,
    PerspectiveCamera,
    Scroll,
    ScrollControls,
    Sparkles,
    Text, useProgress, useScroll,
} from '@react-three/drei'
import Shader from "@/component/projects/Shader";
import {ProjectItem} from "@/component/projects/ProjectItem";
import {projectsList} from "@/data/projects";
import * as THREE from 'three'
// import scrollSound from '@/public/sounds/underwater.mp3'

function CanvasLoader({setReadyToLoad}: any) {
    const {active, progress, loaded} = useProgress();

    useEffect(() => {
        if (progress === 100)
            setTimeout(() => {
                setReadyToLoad(true)
            }, 500)
    }, [progress]);

    return <Html center> </Html>
}

const ProjectsShader: any = ({setReadyToLoad}: { setReadyToLoad: any  }) => {
    const [activeProject, setActiveProject] = useState<number | null>(null);
    let isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const cameraRef = useRef<any>();
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const {width} = useThree((state) => state.viewport);
    const scrollData = useScroll()

    const prevOffset = useRef(0);

    // useEffect(() => {
    //     audioRef.current = new Audio()
    //     audioRef.current.src = '/sounds/underwater.mp3'
    //     audioRef.current.title = 'ocean wave'
    //     audioRef.current.volume = 0.56
    //     audioRef.current.play().then();
    // }, [width])


    const gradientTexture = React.useMemo(() => {
        const size = 512
        const canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext('2d')
        if (!ctx) return;
        const gradient = ctx.createLinearGradient(0, 0, size, 0) // horizontal
        gradient.addColorStop(0, '#06d2ff')
        gradient.addColorStop(1, '#e02aff')

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, size, size)

        const texture = new THREE.CanvasTexture(canvas)
        texture.needsUpdate = true
        return texture
    }, [])

    return (
        <>
            <PerspectiveCamera
                makeDefault
                position={[0, 0, 1]}
                fov={55}
                near={0.1}
                far={100}
                ref={cameraRef}
            />

            <ScrollControls
                pages={6.3}
                distance={1}
                damping={0.3}

                horizontal={false}
                enabled={scrollEnabled}
                infinite={false}
            >
                <color attach='background' args={[isDarkTheme ? '#020009' : '#f7f7fd']}/>
                {/*<fog attach='fog' color={'rgba(223,223,223,0.7)'} args={[0x050505, 0, 6]} />*/}
                <Scroll>
                    {/*<Noise opacity={0.40} />*/}
                    {/*<EffectComposer multisampling={1} disableNormalPass={true}>*/}
                    {/*    /!*<Noise opacity={0.40} />*!/*/}
                    {/*    <Vignette eskil={false} offset={0.1} darkness={0.3} />*/}
                    {/*</EffectComposer>*/}
                    <Sparkles
                        count={110}
                        position={[-0.5, -5, -3.5]}
                        scale={[6, 9, 10]}
                        size={1.1}
                        speed={2}
                    />
                    <Suspense>
                        <CanvasLoader setReadyToLoad={setReadyToLoad}/>
                        <Shader
                            image={'./images/texture.webp'}
                            planeArgs={[6, 4, 128, 128]}
                            planeRotation={[-Math.PI / 2.3, 0, 0]}
                            wireframe={true}
                            pointer={false}
                            position={[0, -0.2, -1]}
                        />

                        {projectsList.map((image, i) => {
                            const {position, src, title, url} = image

                            return (<ProjectItem url={url}
                                                 setActiveProject={setActiveProject}
                                                 position={position}
                                                 isDarkTheme={isDarkTheme}
                                                 title={title}
                                                 setScrollEnabled={setScrollEnabled}
                                                 index={i}
                                                 key={i}
                                                 src={src}/>)
                        })}
                        <Text
                            position={[0, 0.8, -3]}
                            rotation={[-0.3, 0, 0]}
                            lineHeight={1.3}
                            fillOpacity={1}
                            font='./fonts/Audiowide-Regular.ttf'
                            fontSize={width / 3}
                            material-toneMapped={false}
                            anchorX='center'
                            // color={isDarkTheme ? '#f7f7fd' : '#ff0000'}
                            anchorY='middle'>
                            <meshBasicMaterial map={gradientTexture} toneMapped={false}/>
                            Projects
                        </Text>
                    </Suspense>
                </Scroll>
            </ScrollControls>
        </>
    )
}

export default ProjectsShader

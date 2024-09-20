'use client'
import React, {Suspense, useEffect, useRef, useState} from 'react'
import {useFrame, useThree, Vector3} from '@react-three/fiber'
import {
    Html,
    Loader,
    PerspectiveCamera,
    Scroll,
    ScrollControls,
    Sparkles,
    Text, useProgress,
} from '@react-three/drei'
import Shader from "@/component/projects/Shader";
import {ProjectItem} from "@/component/projects/ProjectItem";
import {projectsList} from "@/data/projects";

function CanvasLoader({ setReadyToLoad } : any) {
    const {active, progress , loaded} = useProgress();

    useEffect(() => {
        if(progress === 100)
            setTimeout(() => {
                setReadyToLoad(true)
            },500)
    }, [progress]);

    return <Html center> </Html>
}

const ProjectsShader: any = ({ setReadyToLoad } : { setReadyToLoad : any }) => {
    const [ activeProject , setActiveProject ] = useState<number | null>(null);
    let isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const cameraRef = useRef<any>();
    const { width } = useThree((state) => state.viewport)
    // const targetPosition = [0, 0, 0.4];
    // useFrame(() => {
    //     if(activeProject !== null && cameraRef.current) {
    //         // cameraRef.current.
    //         const currentPos = cameraRef.current.position;
    //
    //         // Linear interpolation (lerp) towards target position
    //         currentPos.lerp(
    //             { x: targetPosition[0], y: targetPosition[1], z: targetPosition[2] },
    //             0.1 // Lerp factor, adjust for speed of movement (0.1 for slower, 1 for instant)
    //         );
    //     }
    // })

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
                pages={7.3}
                distance={1}
                damping={1}
                horizontal={false}
                infinite={false}
            >
                <color attach='background' args={[isDarkTheme ? '#000007' : '#f7f7fd']} />
                <fog attach='fog' color={'rgba(223,223,223,0.7)'} args={[0x050505, 0, 6]} />
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
                        <CanvasLoader setReadyToLoad={setReadyToLoad} />
                        <Shader
                            image={'./images/texture.webp'}
                            planeArgs={[6, 4, 64 , 64]}
                            planeRotation={[-Math.PI / 2.3, 0, 0]}
                            wireframe={true}
                            pointer={false}
                            position={[0, -0.2, -1]}
                        />

                        {projectsList.map((image, i) => {
                            const { position, src, title, url } = image

                            return (
                                <ProjectItem url={url}
                                             setActiveProject={setActiveProject}
                                             position={position}
                                             isDarkTheme={isDarkTheme}
                                             title={title}
                                             index={i}
                                             key={i}
                                             src={src} />
                            )
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
                            color={isDarkTheme ? '#f7f7fd' : '#ff0000'}
                            anchorY='middle'
                        >
                            Projects
                        </Text>
                    </Suspense>
                </Scroll>
            </ScrollControls>
        </>
    )
}

export default ProjectsShader

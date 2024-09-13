'use client'
import React, {Suspense, useEffect} from 'react'
import { useThree, Vector3 } from '@react-three/fiber'
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
import {Bloom, EffectComposer, Noise, Vignette} from "@react-three/postprocessing";
import {ImageLoader} from "@/component/ImageLoder";
import HodaIcon from '@/public/icons/hoda.svg'

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
    const posY = -0.5

    const images = [
        {
            title: 'Hoda',
            position: [-0.1, -1 + posY, -0.09],
            src: HodaIcon.src,
            url: 'http://panel.hudagold.ir/',
        },

        {
            title: 'Iran Counter',
            position: [0.1, -2 + posY, -0.09],
            src: './icons/irancounter.svg',
            url: 'http://irancounter.com/',
        },

        {
            title: 'Monada',
            position: [-0.1, -3 + posY, -0.09],
            src: './icons/monada.svg',
            url: 'https://monadacenter.ir/',
        },

        {
            title: 'Pedar Bozorg',
            position: [0.1, -4 + posY, -0.09],
            src: './icons/pbz.svg',
            url: 'https://pedarbozorg.shop/',
        },
        {
            title: 'Safe Broker',
            position: [-0.1, -5 + posY, -0.09],
            src: './icons/safe-logo.svg',
            url: 'http://safebroker.org/',
        },
        {
            title: 'Metric',
            position: [-0.1, -6 + posY, -0.09],
            src: './icons/metriq.svg',
            url: 'http://panel.metriq.ir/',
        },
    ]

    const { width } = useThree((state) => state.viewport)

    return (
        <>
            <PerspectiveCamera
                makeDefault
                position={[0, 0, 1]}
                fov={55}
                near={0.1}
                far={100}
            />

            <ScrollControls
                pages={7.3}
                distance={1}
                damping={1}
                horizontal={false}
                infinite={false}
            >
                <color attach='background' args={['#000007']} />
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
                            planeArgs={[6, 4, window.innerWidth < 480 ? 64 : 64, window.innerWidth < 480 ? 64 : 64]}
                            planeRotation={[-Math.PI / 2.3, 0, 0]}
                            wireframe={true}
                            pointer={false}
                            position={[0, -0.2, -1]}
                        />

                        {images.map((image, i) => {
                            const { position, src, title, url } = image

                            return (
                                <group key={url}>
                                    <Shader
                                                image={src}
                                                position={position as Vector3}
                                                planeArgs={[0.2, 0.2, 8, 8]}
                                                planeRotation={[0, 0, 0]}
                                                wireframe={false}
                                                pointer={true}
                                                url={url}
                                    />

                                    <Text
                                        position={[0, position[1], 0.1] as Vector3}
                                        fillOpacity={0.7}
                                        font='./fonts/Audiowide-Regular.ttf'
                                        fontSize={width / 16}
                                        material-toneMapped={false}
                                        anchorX='center'
                                        anchorY='middle'
                                    >
                                        {title}
                                    </Text>
                                    <Text
                                        position={[-position[0], position[1], 0.4] as Vector3}
                                        strokeWidth={window.innerWidth < 480 ? '0.6%' : '0.3%'}
                                        strokeOpacity={window.innerWidth < 480 ? 0.7 : 0.4}
                                        strokeColor='#ffffff'
                                        fillOpacity={0}
                                        font='./fonts/Audiowide-Regular.ttf'
                                        fontSize={width / 8}
                                        material-toneMapped={false}
                                        anchorX={`${position[0] === 0.1 ? 'right' : 'left'}` as any}
                                        anchorY='middle'
                                    >
                                        {i + 1}
                                    </Text>
                                </group>
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

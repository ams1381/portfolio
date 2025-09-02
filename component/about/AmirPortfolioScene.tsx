'use client'
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {Environment, OrbitControls, useHelper} from "@react-three/drei";
import React, {Suspense, useEffect, useRef, useState} from "react";
import * as THREE from "three";
import {DodgeCar} from "@/component/about/car/Car";
import {DirectionalLightHelper, PCFSoftShadowMap} from "three";
import {GarageModel} from "@/component/about/Garage";
import {CameraInitializer} from "@/component/about/CameraInitilizer";
import {CanvasLoader} from "@/component/CanvasLoader";
import {useControls} from "leva";
import {MyText3D} from "@/component/about/3dText";
import {Bloom, EffectComposer, Noise, Vignette} from "@react-three/postprocessing";
import {CarM1} from "@/component/about/car/CarM1";
import {TAboutMeActiveView} from "@/types";
import { useWindowSize } from "@uidotdev/usehooks";

// scale={72} position={[-500,0,-150]} rotation={[0,100,0]}
export default function AmirPortfolioScene({setReadyToLoad}: { setReadyToLoad: any }) {
    const [start, setStart] = useState(true);
    const [activeView,setActiveView] = useState<TAboutMeActiveView>('initial');
    const {height} = useWindowSize();
    return (
        <>
            <Canvas shadows={'soft'}
                    camera={{position: [-90, 30, -400], fov: 60, near: 0.1, far: 8000}}
                    className={'h-full relative'} style={{height: height ? height - 70 : 900}}>

                <Environment files={'/models/diamond/env.hdr'}/>
                {/*<AdaptiveDpr pixelated />*/}
                {/*/!* lowers resolution when FPS drops, smooths back up when stable *!/*/}

                {/*<AdaptiveEvents />*/}
                {/* disables pointer events when idle (saves CPU) */}
                <CanvasLoader setReadyToLoad={setReadyToLoad}/>
                <CameraInitializer activeView={activeView} />
                {/*<color attach='background' args={['#020009']}/>*/}
                {/*<Environment files={'/models/diamond/env.hdr'} />*/}
                {/*<GarageScene start={start} />*/}
                <Suspense fallback={<></>}>
                    <GarageModel
                        setActiveView={setActiveView}
                        scale={0.5}
                        // scale={0.1}
                        position={[0, 0, 0]}/>
                </Suspense>
                <LightsComponent/>
                {/*{ start ? <LightsComponent/> : ''}*/}
                <CameraMover/>
                <Suspense fallback={<></>}>
                    {/*<CarModelTest*/}
                    {/*    receiveShadow={true} castShadow={true}*/}
                    {/*    position={[-17,12,-75]}*/}
                    {/*    // rotation={[0,-0.2,0]}*/}
                    {/*    // position={[-221,105,-704]}*/}
                    {/*    // position={[-7,0,-7]}*/}
                    {/*    scale={0.08}*/}
                    {/*/>*/}
                    <CarM1
                        // scale={3.2}
                        scale={16.2}
                        receiveShadow={true}
                        castShadow={true}
                        position={[-200, 0, -210]}/>
                    {/*<HeavyCar scale={10}*/}
                    {/*          position={[-43,0,-38]}*/}
                    {/*          // position={[-337, 0, -515]}*/}
                    {/*          rotation={[Math.PI / 2, 0, 0.1]}/>*/}
                    {/*<DodgeCar scale={1.7} position={[-7,0,-7]}*/}
                    {/*          // receiveShadow={true} castShadow={true}*/}
                    {/*          start={start} setStart={setStart} />*/}
                </Suspense>
                <EffectComposer>
                    <Bloom
                        intensity={0.2}       // strength of bloom
                        luminanceThreshold={0.2} // only glow emissive/bright materials
                        mipmapBlur             // smoother glow
                    />
                    <Noise opacity={0.025}/>
                    <Vignette eskil={false} offset={0.1} darkness={0.07}/>
                </EffectComposer>

                {/*<OrbitControls enablePan={true}*/}
                {/*    // maxDistance={6}*/}
                {/*    // maxZoom={7}*/}
                {/*    // minPolarAngle={Math.PI / 5}        // lowest angle (0 = straight up)*/}
                {/*    // maxPolarAngle={Math.PI / 2.5}*/}
                {/*               enableZoom={true}*/}
                {/*               enableRotate={true}/>*/}
            </Canvas>
        </>

    );
}
const CameraMover = () => {
    const { camera, mouse } = useThree();
    const isLerping = useRef(true); // Initialize ref to keep track of lerping state
    let v = new THREE.Vector3()
    useFrame(() => {
        if (isLerping.current) {
            camera.position.lerp(v.set(camera.position.x + mouse.x , camera.position.y - mouse.y / 3, camera.position.z + 0.09), 0.09);
        }
    });

    return null;
}
const LightsComponent = () => {
    const ambientLightRef = useRef(null);
    const lightRef = useRef<any>();
    const light2Ref = useRef<any>();
    const targetRef = useRef<any>();
    const {ambientIntensity, ambientColor} = useControls('abient light', {
        ambientIntensity: {value: 0.54, min: 0, max: 2},
        ambientColor: '#ffffff'
    });
    const {
        position,
        intensity,
        color,
        shadowMapSize,
        shadowCameraNear,
        targetPosition,
        shadowCameraFar
    } = useControls('directional light', {
        intensity: 0.93,
        color: '#fff',
        "position": [5,1,10],
        targetPosition: [-43, 0, -38],
        shadowMapSize: 10,
        shadowCameraNear: 1,
        shadowCameraFar: 200
    })
    // useHelper(lightRef, A, 50, 'blue')
    // useHelper(lightRef, DirectionalLightHelper, 2, 'blue')
    // useHelper(light2Ref, DirectionalLightHelper, 1, 'red');

    return <>
        {/*<ambientLight intensity={ambientIntensity}*/}
        {/*    // position={[8, 90,5]}*/}
        {/*              ref={ambientLightRef}*/}
        {/*              color={ambientColor}/>*/}
        <ambientLight intensity={ambientIntensity}
                      position={[0, 900, 0]}
                      color={ambientColor}/>
        <directionalLight ref={lightRef} position={position}
                          castShadow={true}
            // scale={2}
            // shadow-mapSize-width={4048}
            // shadow-mapSize-height={4048}
                          shadow-camera-left={-300}
                          shadow-camera-right={300}
                          shadow-camera-top={300}
                          shadow-camera-bottom={-300}
                          intensity={intensity}
                          color={color}>
            <object3D ref={targetRef} castShadow={true}
                      position={targetPosition}/>
        </directionalLight>
    </>
}

import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {
    Environment,
    OrbitControls,BakeShadows,
    PerformanceMonitor,
    AdaptiveDpr,
    AdaptiveEvents,
    useGLTF,
    useHelper
} from "@react-three/drei";
import React, {Suspense, useEffect, useRef, useState} from "react";
import {RGBELoader} from "three-stdlib";
import * as THREE from "three";
import {DodgeCar} from "@/component/about/car/Car";
import {DirectionalLightHelper, PCFSoftShadowMap} from "three";
import {GarageModel} from "@/component/about/Garage";
import {CameraInitializer} from "@/component/about/CameraInitilizer";
import {CanvasLoader} from "@/component/CanvasLoader";
import {useControls} from "leva";
import {MyText3D} from "@/component/about/3dText";
import {Bloom, EffectComposer, Noise, Vignette} from "@react-three/postprocessing";
import {CarModelTest} from "@/component/about/car/TestCar";
import {HeavyCar} from "@/component/about/car/HeavyCar";

// scale={72} position={[-500,0,-150]} rotation={[0,100,0]}
export default function AmirPortfolioScene({setReadyToLoad}: { setReadyToLoad: any }) {
    const [start, setStart] = useState(true);

    return (
        <>
            {/*<View3D src={"/models/garage/scene-transformed.glb"}*/}
            {/*        poster="/images/damaged_concrete_floor_diff_2k" />*/}
            <Canvas shadows

                    camera={{position: [-30, 15, -100], fov: 60, near: 0.1, far: 8000}}
                    className={'h-full '} style={{height: 900}}>
                {/*<PerformanceMonitor*/}
                {/*    onIncline={() => console.log("FPS improving, maybe raise quality")}*/}
                {/*    onDecline={() => console.log("FPS dropping, maybe reduce quality")}*/}
                {/*/>*/}

                {/*<AdaptiveDpr pixelated />*/}
                {/*/!* lowers resolution when FPS drops, smooths back up when stable *!/*/}

                {/*<AdaptiveEvents />*/}
                {/* disables pointer events when idle (saves CPU) */}
                <CanvasLoader setReadyToLoad={setReadyToLoad}/>
                {/*<CameraInitializer />*/}
                {/*<color attach='background' args={['#020009']}/>*/}
                {/*<Environment files={'/models/diamond/env.hdr'} />*/}
                {/*<GarageScene start={start} />*/}
                <Suspense fallback={<></>}>
                    <GarageModel scale={0.1} position={[0,0,0]} />
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
                    <HeavyCar scale={10}
                              position={[-43,0,-38]}
                              // position={[-337, 0, -515]}
                              rotation={[Math.PI / 2, 0, 0.1]}/>
                    {/*<DodgeCar scale={1.7} position={[-7,0,-7]}*/}
                    {/*          // receiveShadow={true} castShadow={true}*/}
                    {/*          start={start} setStart={setStart} />*/}
                </Suspense>
                {/*<EffectComposer>*/}
                {/*    <Bloom*/}
                {/*        intensity={0.2}       // strength of bloom*/}
                {/*        luminanceThreshold={0.2} // only glow emissive/bright materials*/}
                {/*        mipmapBlur             // smoother glow*/}
                {/*    />*/}
                {/*    <Noise opacity={0.025}/>*/}
                {/*    <Vignette eskil={false} offset={0.1} darkness={0.07}/>*/}
                {/*</EffectComposer>*/}

                    <OrbitControls enablePan={true}
                    // maxDistance={6}
                    // maxZoom={7}
                    // minPolarAngle={Math.PI / 5}        // lowest angle (0 = straight up)
                    // maxPolarAngle={Math.PI / 2.5}
                               enableZoom={true}
                               enableRotate={true}/>
            </Canvas>
        </>

    );
}
const CameraMover = () => {
    // const { camera, mouse } = useThree();
    // const isLerping = useRef(true); // Initialize ref to keep track of lerping state
    // let v = new THREE.Vector3()
    // useFrame(() => {
    //     // if (isLerping.current) {
    //     camera.position.lerp(v.set(-mouse.x / 2, mouse.y / 2, 10), 0.07);
    //
    // });

    return null;
}
const LightsComponent = () => {
    const ambientLightRef = useRef(null);
    const lightRef = useRef<any>();
    const light2Ref = useRef<any>();
    const targetRef = useRef<any>();
    const {ambientIntensity, castShadow, ambientColor} = useControls('abient light', {
        ambientIntensity: {value: 1.3, min: 0, max: 2},
        castShadow: true,
        ambientColor: '#ffffff'
    });
    const {position, intensity, color} = useControls('directional light', {
        intensity: 2.43,
        color: '#bbbbbb',
        "position":[8,10,11]
    })
    // useHelper(lightRef, A, 50, 'blue')
    useHelper(lightRef, DirectionalLightHelper, 10, 'blue')
    useHelper(light2Ref, DirectionalLightHelper, 1, 'red');

    // useEffect(() => {
    //     if (lightRef.current && targetRef.current) {
    //         lightRef.current.target = targetRef.current;
    //     }
    // }, []);

    return <>
        {/*<ambientLight intensity={ambientIntensity}*/}
        {/*    // position={[8, 90,5]}*/}
        {/*              ref={ambientLightRef}*/}
        {/*              color={ambientColor}/>*/}
        <ambientLight intensity={ambientIntensity}
                      position={[0,900,0]}
                      castShadow={true}
                      color={ambientColor} />
        <directionalLight ref={lightRef} position={position}
                          castShadow={true}
                          intensity={0.93}
                          // shadow-camera-left={-1000}
                          shadow-camera-right={2000}
                          // shadow-camera-top={1000}
                          shadow-camera-bottom={-1000}
                          // shadow-camera-left={-100}
                          // shadow-camera-right={100}
                          // shadow-camera-top={100}
                          // shadow-camera-bottom={-100}
                          shadow-camera-far={1000}
                          color={'rgba(255,255,255,0.34)'} >
            <object3D ref={targetRef} castShadow={true} position={[-10,-1.8,-7]} />
        </directionalLight>

        {/*<directionalLight ref={lightRef} position={position}*/}
        {/*                  castShadow={true}*/}
        {/*                  intensity={intensity}*/}
        {/*                  color={color}/>*/}
        {/*    <object3D ref={targetRef} position={[-10,-1.8,-7]} />*/}
        {/*</directionalLight>*/}
    </>
}
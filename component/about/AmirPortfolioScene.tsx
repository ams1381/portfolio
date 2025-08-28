import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {Environment, OrbitControls, PerformanceMonitor,AdaptiveDpr,AdaptiveEvents, useGLTF, useHelper} from "@react-three/drei";
import React, {Suspense, useEffect, useRef, useState} from "react";
import {RGBELoader} from "three-stdlib";
import * as THREE from "three";
import {DodgeCar} from "@/component/about/car/Car";
import {DirectionalLightHelper} from "three";
import {GarageModel} from "@/component/about/TestGarage";
import {CameraInitializer} from "@/component/about/CameraInitilizer";
import {CanvasLoader} from "@/component/CanvasLoader";
import {useControls} from "leva";
import {MyText3D} from "@/component/about/3dText";
import {Bloom} from "@react-three/postprocessing";
import {CarModelTest} from "@/component/about/car/TestCar";

// scale={72} position={[-500,0,-150]} rotation={[0,100,0]}
export default function AmirPortfolioScene({setReadyToLoad} : {setReadyToLoad : any}) {
    const [start , setStart] = useState(true);

    return (
        <>
            {/*<View3D src={"/models/garage/scene-transformed.glb"}*/}
            {/*        poster="/images/damaged_concrete_floor_diff_2k" />*/}
            <Canvas gl={{antialias : false,alpha : true}}
                    frameloop="demand"
                    camera={{ position: [-7, 3, -15], fov: 60 }}
                     className={'h-full '} style={{height: 900}} >
                <PerformanceMonitor
                    onIncline={() => console.log("FPS improving, maybe raise quality")}
                    onDecline={() => console.log("FPS dropping, maybe reduce quality")}
                />

                <AdaptiveDpr pixelated />
                {/* lowers resolution when FPS drops, smooths back up when stable */}

                <AdaptiveEvents />
                {/* disables pointer events when idle (saves CPU) */}
                <CanvasLoader setReadyToLoad={setReadyToLoad} />
                {/*<CameraInitializer />*/}
                {/*<color attach='background' args={['#020009']}/>*/}
                {/*<Environment files={'/models/diamond/env.hdr'} />*/}
                {/*<GarageScene start={start} />*/}
                <Suspense fallback={<></>}>
                    <GarageModel />
                </Suspense>
                <LightsComponent/>
                {/*{ start ? <LightsComponent/> : ''}*/}
                <CameraMover />
                <Suspense fallback={<></>}>
                    <CarModelTest position={[-240,105,-777]} scale={0.7} />
                    {/*<DodgeCar scale={1.7} position={[-7,0,-7]}*/}
                    {/*          // receiveShadow={true} castShadow={true}*/}
                    {/*          start={start} setStart={setStart} />*/}
                </Suspense>
                {/*<Bloom*/}
                {/*    intensity={1.8}       // strength of bloom*/}
                {/*    luminanceThreshold={0.2} // only glow emissive/bright materials*/}
                {/*    mipmapBlur             // smoother glow*/}
                {/*/>*/}
                <OrbitControls enablePan={true}
                    // maxDistance={6}
                    // maxZoom={7}
                    // minPolarAngle={Math.PI / 5}        // lowest angle (0 = straight up)
                    // maxPolarAngle={Math.PI / 2.5}
                               enableZoom={true}
                               enableRotate={true} />
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
    const lightRef = useRef<any>();
    const light2Ref = useRef<any>();
    const targetRef = useRef<any>();
    const { ambientIntensity,castShadow, ambientColor } = useControls('abient light',{
        ambientIntensity: { value: 1.15, min: 0, max: 2 },
        castShadow : true ,
        ambientColor: '#ffffff'
    });
    useHelper(lightRef, DirectionalLightHelper, 0.5, 'blue')
    useHelper(light2Ref, DirectionalLightHelper, 1, 'red');

    useEffect(() => {
        if (lightRef.current && targetRef.current) {
            lightRef.current.target = targetRef.current;
        }
    }, []);

    return <>
        <ambientLight intensity={ambientIntensity}
                      position={[0,900,0]}
                      color={ambientColor} />
        <directionalLight ref={lightRef} position={[8, 3,5]}
                          // castShadow={true}
                          intensity={0.93}
                          color={'rgba(255,255,255,0.34)'} >
            <object3D ref={targetRef} position={[-10,-1.8,-7]} />
        </directionalLight>
        {/*<directionalLight ref={light2Ref} position={[6, 2, 1]}*/}
        {/*                  castShadow={true}*/}
        {/*                  intensity={2}*/}
        {/*                  color={'rgba(255,255,255,0.67)'} />*/}
    </>
}
import React, {useEffect, useMemo, useRef, useState} from 'react'
import {useGLTF, useHelper} from "@react-three/drei";
import {
    MeshStandardMaterial,
    PointLightHelper,
    SpotLightHelper
} from "three";
import {useFrame} from "@react-three/fiber";
import {useControls} from "leva";
import {CarLights} from "@/component/about/car/CarLights";
import {SmokeParticles} from "@/component/about/car/ExhaustSmoke";
import {EngineSound} from "@/component/about/car/EngineSound";

export function DodgeCar(props) {
    const {nodes, materials} = useGLTF('/models/dodge/scene-transformed.glb');
    const carRef = useRef();
    const [engineOn, setEngineOn] = useState(false)
    const {position} = useControls('Card Settings',{
        position : props.position,
    });
    // useHelper(backLightRef ,RectAreaLightHelper,'red')
    const shitMaterial = new MeshStandardMaterial({
        color: '#3b3b3b',
        metalness: 0.3,
        roughness: 0.15,
        emissive : '#000000',
        emissiveIntensity : 0.1,

    });
    useFrame((state) => {
        if (!carRef.current || !engineOn) return

        const t = state.clock.getElapsedTime()

        // tiny vibration using sin/cos
        carRef.current.position.y = position[1] + Math.sin(t * 20) * 0.0013
        carRef.current.rotation.z = Math.sin(t * 10) * 0.00002
        carRef.current.rotation.x = Math.cos(t * 12) * 0.00002
    })
    const CarBody = useMemo(() => (
        <mesh castShadow={true} geometry={nodes.Object_1765.geometry} position={[0, 0.109, -0.113]} scale={0.939} material={shitMaterial} />
    ), [nodes, materials]);

    useEffect(() => {
        return () => {
            materials.DiamondOutside?.dispose();
            nodes.Cylinder.geometry?.dispose();
        };
    }, []);
    return (
        <group {...props} onClick={() => setEngineOn(true)}
               ref={carRef}
               position={position}>
            {/*{ engineOn && <SmokeParticles engineOn={engineOn}/>}*/}
            {/*<EngineSound engineOn={engineOn} />*/}
            <mesh geometry={nodes.Object_12.geometry}
                  material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1}
                  position={[0.751, 0.323, 1.304]} rotation={[0, 0, 0.026]} scale={0.939}/>
            <mesh geometry={nodes.Object_1447.geometry}
                  material={materials.PaletteMaterial001} position={[0.83, 0.32, 1.155]}
                  rotation={[-Math.PI / 2, -0.026, 0]} scale={0.624}/>
            {/*<mesh geometry={nodes.Object_1450.geometry}*/}
            {/*      material={materials.PaletteMaterial002} position={[0.759, 0.318, 1.155]} rotation={[0, 0, 0.026]}*/}
            {/*      scale={[0.892, 0.939, 0.939]}/>*/}
            <mesh geometry={nodes.Object_1453.geometry}
                  material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1}
                  position={[0.759, 0.318, 1.155]} rotation={[0, 0, 0.026]} scale={[0.892, 0.939, 0.939]}/>
            {/*<mesh geometry={nodes.Object_1756.geometry}*/}
            {/*      material={materials.dDodge_ChallengerSRTHellcat_2015EngineA_Material1} position={[0, 0.109, -0.113]}*/}
            {/*      scale={0.939}/>*/}
            <mesh geometry={nodes.Object_1759.geometry}
                  material={materials.dDodge_ChallengerSRTHellcat_2015Grille4A_Material1} position={[0, 0.109, -0.113]}
                  scale={0.939}/>
            {/*<mesh geometry={nodes.Object_1762.geometry} castShadow={true}*/}
            {/*      material={materials.PaletteMaterial003} position={[0, 0.109, -0.113]} scale={0.939}/>*/}
            {/*/!*car body*!/*/}
            {CarBody}
            {/*<mesh receiveShadow castShadow  geometry={nodes.Object_1765.geometry}*/}
            {/*      material={shitMaterial} position={[0, 0.109, -0.113]} scale={0.939}/>*/}
            <mesh geometry={nodes.Object_1767.geometry} castShadow={true}
                  material={materials.PaletteMaterial005} position={[0, 0.109, -0.113]} scale={0.939}/>
            <mesh geometry={nodes.Object_1770.geometry}
                  material={materials.dDodge_ChallengerSRTHellcat_2015Grille1A_Material1} position={[0, 0.109, -0.113]}
                  scale={0.939}/>
            {/*<mesh geometry={nodes.Object_1773.geometry}*/}
            {/*      material={materials.dDodge_ChallengerSRTHellcat_2015InteriorA_Material1} position={[0, 0.109, -0.113]}*/}
            {/*      scale={0.939}/>*/}
            <mesh geometry={nodes.Object_1775.geometry}
                  material={materials.emis} position={[0, 0.109, -0.113]} scale={0.939}/>
            <mesh geometry={nodes.Object_1778.geometry}
                  material={materials.dDodge_ChallengerSRTHellcat_2015Coloured_Material1} position={[0, 0.109, -0.113]}
                  scale={0.939}/>
            <mesh geometry={nodes.Object_1781.geometry}
                  material={materials.PaletteMaterial006} position={[0, 0.109, -0.113]} scale={0.939}/>
            <mesh geometry={nodes.Object_1783.geometry}
                  material={materials.PaletteMaterial007} position={[0, 0.109, -0.113]} scale={0.939}/>
            <mesh geometry={nodes.Object_1788.geometry}
                  material={materials.dDodge_ChallengerSRTHellcat_2015Grille2A_Material1} position={[0, 0.109, -0.113]}
                  scale={0.939}/>
            <mesh geometry={nodes.Object_1791.geometry}
                  material={materials.dDodge_ChallengerSRTHellcat_2015InteriorTillingA_Material1}
                  position={[0, 0.109, -0.113]} scale={0.939}/>
            <mesh geometry={nodes.Object_1797.geometry}
                  material={materials.dDodge_ChallengerSRTHellcat_2015Carbon2_Material1} position={[0, 0.109, -0.113]}
                  scale={0.939}/>
            <mesh geometry={nodes.Object_1800.geometry}
                  material={materials.dDodge_ChallengerSRTHellcat_2015Grille3A_Material1} position={[0, 0.109, -0.113]}
                  scale={0.939}/>
            <mesh geometry={nodes.Object_1803.geometry}
                  material={materials.dDodge_ChallengerSRTHellcat_2015BadgeA_Material1} position={[0, 0.109, -0.113]}
                  scale={0.939}/>
            <mesh geometry={nodes.Object_1806.geometry}
                  material={materials.dDodge_ChallengerSRTHellcat_2015ManufacturerPlateA_Material1}
                  position={[0, 0.109, -0.113]} scale={0.939}/>
            <CarLights materials={materials} nodes={nodes} engineOn={engineOn} />
        </group>
    )
}

useGLTF.preload('/models/dodge/scene-transformed.glb')
'use client'

import React from 'react'
import { useGLTF } from '@react-three/drei'
import {MeshStandardMaterial} from "three";
import {useControls} from "leva";

export function HeavyCar(props) {
    const { nodes, materials } = useGLTF('/models/dodge/dodge.glb');
    const {position,rotation} = useControls('car position',{
        position : props.position,
        rotation : props.rotation,
    });
    const carMaterial = new MeshStandardMaterial({
        color: '#111111',
        metalness: 0.3,
        roughness: 0.15,
        // emissive : '#000000',
        // emissiveIntensity : 0.1,

    });

    return (
        <group {...props} dispose={null} castShadow={true} receiveShadow={true}  rotation={rotation} position={position}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={93.858}>
                <group scale={0.01}>
                    <mesh geometry={nodes.Object_1756.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015EngineA_Material1} position={[0, 0.116, -0.12]} />
                    <mesh geometry={nodes.Object_1759.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015Grille4A_Material1} position={[0, 0.116, -0.12]} />
                    <mesh geometry={nodes.Object_1762.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015Base_Material1} position={[0, 0.116, -0.12]} />
                    <group position={[0, 0.116, -0.12]}>
                        <mesh geometry={nodes.Object_1765.geometry} material={carMaterial} />
                        <mesh geometry={nodes.Object_1767.geometry} material={materials.black_stripe} />
                    </group>
                    <mesh geometry={nodes.Object_1770.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015Grille1A_Material1} position={[0, 0.116, -0.12]} />
                    <group position={[0, 0.116, -0.12]}>
                        <mesh geometry={nodes.Object_1773.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015InteriorA_Material1} />
                        <mesh geometry={nodes.Object_1775.geometry} material={materials.emis} />
                    </group>
                    <mesh geometry={nodes.Object_1778.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015Coloured_Material1} position={[0, 0.116, -0.12]} />
                    <group position={[0, 0.116, -0.12]}>
                        <mesh geometry={nodes.Object_1781.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015Window_Material1} />
                        <mesh geometry={nodes.Object_1783.geometry} material={materials.red_glass} />
                        <mesh geometry={nodes.Object_1785.geometry} material={materials.orage_glass} />
                    </group>
                    <mesh geometry={nodes.Object_1788.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015Grille2A_Material1} position={[0, 0.116, -0.12]} />
                    <mesh geometry={nodes.Object_1791.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015InteriorTillingA_Material1} position={[0, 0.116, -0.12]} />
                    <mesh geometry={nodes.Object_1794.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015Window_Material1} position={[0, 0.116, -0.12]} />
                    <mesh geometry={nodes.Object_1797.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015Carbon2_Material1} position={[0, 0.116, -0.12]} />
                    <mesh geometry={nodes.Object_1800.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015Grille3A_Material1} position={[0, 0.116, -0.12]} />
                    <mesh geometry={nodes.Object_1803.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015BadgeA_Material1} position={[0, 0.116, -0.12]} />
                    <mesh geometry={nodes.Object_1806.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015ManufacturerPlateA_Material1} position={[0, 0.116, -0.12]} />
                    <mesh geometry={nodes.Object_1809.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015LightA_Material1} position={[0, 0.116, -0.12]} />
                    <mesh geometry={nodes.Object_1812.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015Coloured_Material1} position={[0, 0.116, -0.12]} />
                    <group position={[0.8, 0.344, 1.389]} rotation={[0, 0, 0.026]}>
                        <mesh geometry={nodes.Object_12.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_15.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_18.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_21.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_24.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_27.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_30.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_33.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_36.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_39.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_42.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_45.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_48.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_51.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_54.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_57.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_60.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_63.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_66.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_69.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_72.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_75.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_78.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_81.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_84.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_87.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_90.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_93.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_96.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_99.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_102.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_105.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_108.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_111.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_114.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_117.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_120.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_123.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_126.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_129.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_132.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_135.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_138.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_141.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_144.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_147.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_150.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_153.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_156.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_159.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_162.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_165.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_168.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_171.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_174.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_177.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_180.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_183.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_186.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_189.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_192.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_195.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_198.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_201.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_204.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_207.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_210.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_213.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_216.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_219.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_222.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_225.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_228.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_231.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_234.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_237.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_240.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_243.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_246.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_249.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_252.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_255.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_258.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_261.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_264.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_267.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_270.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_273.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_276.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_279.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_282.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_285.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_288.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_291.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_294.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_297.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_300.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_303.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_306.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_309.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_312.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_315.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_318.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_321.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_324.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_327.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_330.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_333.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_336.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_339.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_342.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_345.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_348.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_351.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_354.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_357.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_360.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_363.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_366.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                    </group>
                    <group position={[-0.8, 0.344, 1.389]} rotation={[Math.PI, 0, -3.115]}>
                        <mesh geometry={nodes.Object_370.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_373.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_376.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_379.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_382.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_385.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_388.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_391.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_394.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_397.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_400.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_403.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_406.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_409.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_412.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_415.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_418.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_421.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_424.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_427.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_430.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_433.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_436.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_439.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_442.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_445.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_448.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_451.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_454.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_457.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_460.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_463.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_466.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_469.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_472.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_475.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_478.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_481.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_484.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_487.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_490.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_493.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_496.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_499.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_502.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_505.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_508.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_511.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_514.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_517.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_520.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_523.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_526.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_529.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_532.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_535.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_538.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_541.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_544.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_547.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_550.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_553.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_556.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_559.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_562.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_565.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_568.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_571.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_574.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_577.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_580.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_583.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_586.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_589.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_592.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_595.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_598.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_601.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_604.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_607.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_610.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_613.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_616.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_619.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_622.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_625.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_628.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_631.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_634.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_637.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_640.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_643.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_646.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_649.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_652.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_655.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_658.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_661.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_664.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_667.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_670.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_673.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_676.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_679.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_682.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_685.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_688.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_691.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_694.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_697.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_700.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_703.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_706.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_709.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_712.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_715.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_718.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_721.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_724.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                    </group>
                    <group position={[0.795, 0.344, -1.566]} rotation={[0, 0, 0.017]}>
                        <mesh geometry={nodes.Object_728.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_731.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_734.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_737.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_740.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_743.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_746.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_749.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_752.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_755.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_758.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_761.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_764.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_767.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_770.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_773.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_776.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_779.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_782.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_785.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_788.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_791.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_794.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_797.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_800.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_803.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_806.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_809.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_812.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_815.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_818.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_821.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_824.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_827.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_830.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_833.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_836.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_839.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_842.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_845.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_848.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_851.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_854.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_857.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_860.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_863.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_866.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_869.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_872.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_875.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_878.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_881.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_884.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_887.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_890.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_893.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_896.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_899.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_902.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_905.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_908.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_911.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_914.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_917.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_920.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_923.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_926.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_929.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_932.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_935.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_938.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_941.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_944.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_947.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_950.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_953.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_956.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_959.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_962.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_965.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_968.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_971.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_974.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_977.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_980.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_983.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_986.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_989.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_992.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_995.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_998.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1001.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1004.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1007.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1010.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1013.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1016.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1019.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1022.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1025.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1028.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1031.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1034.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1037.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1040.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1043.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1046.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1049.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1052.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1055.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1058.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1061.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1064.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1067.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1070.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1073.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1076.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1079.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1082.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                    </group>
                    <group position={[-0.795, 0.344, -1.566]} rotation={[Math.PI, 0, -3.124]}>
                        <mesh geometry={nodes.Object_1086.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1089.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1092.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1095.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1098.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1101.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1104.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1107.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1110.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1113.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1116.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1119.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1122.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1125.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1128.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1131.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1134.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1137.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1140.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1143.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1146.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1149.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1152.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1155.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1158.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1161.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1164.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1167.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1170.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1173.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1176.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1179.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1182.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1185.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1188.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1191.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1194.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1197.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1200.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1203.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1206.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1209.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1212.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1215.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1218.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1221.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1224.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1227.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1230.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1233.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1236.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1239.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1242.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1245.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1248.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1251.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1254.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1257.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1260.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1263.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1266.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1269.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1272.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1275.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1278.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1281.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1284.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1287.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1290.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1293.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1296.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1299.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1302.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1305.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1308.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1311.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1314.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1317.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1320.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1323.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1326.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1329.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1332.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1335.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1338.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1341.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1344.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1347.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1350.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1353.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1356.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1359.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1362.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1365.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1368.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1371.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1374.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1377.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1380.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1383.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1386.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1389.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1392.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1395.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1398.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1401.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1404.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1407.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1410.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1413.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1416.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1419.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1422.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1425.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1428.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1431.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1434.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1437.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                        <mesh geometry={nodes.Object_1440.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015_Wheel1A_3D_3DWheel1A_Material1} />
                    </group>
                    <group position={[0.8, 0.344, 1.389]} rotation={[0, 0, 0.026]}>
                        <group position={[0.008, -0.006, -0.158]} scale={0.95}>
                            <mesh geometry={nodes.Object_1447.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperBadgeA_Material1} position={[0.08, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.7} />
                            <mesh geometry={nodes.Object_1450.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1453.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1456.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1459.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1462.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1465.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1468.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1471.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1474.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1477.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1480.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1483.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1486.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1489.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1492.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1495.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1498.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1501.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1504.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1507.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1510.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1513.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1516.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                        </group>
                    </group>
                    <group position={[-0.8, 0.344, 1.389]} rotation={[Math.PI, 0, -3.115]}>
                        <group position={[0.008, -0.006, 0.158]} rotation={[Math.PI, 0, -Math.PI]} scale={[-0.95, 0.95, 0.95]}>
                            <mesh geometry={nodes.Object_1522.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperBadgeA_Material1} position={[0.08, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-0.7, 0.7, 0.7]} />
                            <mesh geometry={nodes.Object_1525.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1528.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1531.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1534.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1537.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1540.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1543.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1546.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1549.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1552.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1555.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1558.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1561.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1564.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1567.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1570.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1573.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1576.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1579.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1582.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1585.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1588.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                            <mesh geometry={nodes.Object_1591.geometry} material={materials.phong5} scale={[1, 1.053, 1.053]} />
                        </group>
                    </group>
                    <group position={[0.795, 0.344, -1.566]} rotation={[0, 0, 0.017]}>
                        <group position={[0.01, -0.109, 0.109]} rotation={[-2.356, 0, Math.PI]} scale={[-1, 1, 1]}>
                            <mesh geometry={nodes.Object_1597.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperBadgeA_Material1} position={[0.075, 0, 0.01]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-0.7, 0.7, 0.7]} />
                            <mesh geometry={nodes.Object_1600.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1603.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1606.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1609.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1612.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1615.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1618.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1621.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1624.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1627.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1630.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1633.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1636.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1639.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1642.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1645.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1648.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1651.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1654.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1657.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1660.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1663.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1666.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1669.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1672.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                        </group>
                    </group>
                    <group position={[-0.795, 0.344, -1.566]} rotation={[Math.PI, 0, -3.124]}>
                        <group position={[0.01, -0.109, -0.109]} rotation={[-Math.PI / 4, 0, 0]}>
                            <mesh geometry={nodes.Object_1678.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperBadgeA_Material1} position={[0.075, 0, 0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={0.7} />
                            <mesh geometry={nodes.Object_1681.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1684.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1687.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1690.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1693.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1696.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1699.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1702.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1705.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1708.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1711.geometry} material={materials.phong5} />
                            <mesh geometry={nodes.Object_1714.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1717.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1720.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1723.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1726.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1729.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1732.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1735.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1738.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1741.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1744.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1747.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1750.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                            <mesh geometry={nodes.Object_1753.geometry} material={materials.dDodge_ChallengerSRTHellcat_2015CalliperGloss_Material1} />
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/dodge/dodge.glb')

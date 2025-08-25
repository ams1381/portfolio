import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import * as THREE from 'three'
import {useControls} from "leva";

// Single Light Ring Component
export function LightRing({
                              position = [0, 0, 0],
                              radius = 1,
                              color = '#dadada',
                              intensity = 1.2,
                              animated = true,
                              ringWidth = 0.05,
                              scale = 1,
                              segments = 64
                          }) {
    const ringRef = useRef()
    const lightRef = useRef()
    const lightOptions = useControls('ringLightOption', {
        intensity,
        distance: 3,
        decay: 2,
        color,
        scale: scale,
        position
    })
    // Animation
    useFrame((state) => {
        if (animated && ringRef.current) {
            const pulse = Math.sin(state.clock.elapsedTime * 3) * 0.3 + 0.7
            ringRef.current.material.emissiveIntensity = intensity * pulse

            // Optional rotation
            ringRef.current.rotation.z += 0.01
        }
    })

    // Create ring geometry
    const ringGeometry = new THREE.RingGeometry(
        radius - ringWidth,
        radius + ringWidth,
        segments
    )

    // Glowing material
    const ringMaterial = new THREE.MeshBasicMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: intensity,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide
    })

    return (
        <group position={position} scale={scale}>
            {/* The glowing ring */}
            <mesh
                ref={ringRef}
                geometry={ringGeometry}
                material={ringMaterial}
            />

            {/* Point light for illumination */}
            <pointLight
                ref={lightRef}
                position={[0, 0, 0]}
                color={lightOptions.color}
                intensity={lightOptions.intensity}
                distance={lightOptions.distance}
                decay={lightOptions.decay}
            />
        </group>
    )
}



export function ChallengerLEDSegment({ position, color = '#ff0000', intensity = 1, isActive = true, shape = 'rect' }) {
    const meshRef = useRef()

    useFrame((state) => {
        if (meshRef.current && isActive) {
            const pulse = Math.sin(state.clock.elapsedTime * 4) * 0.1 + 0.9
            meshRef.current.material.emissiveIntensity = intensity * pulse
        }
    })

    const segmentMaterial = new THREE.MeshStandardMaterial({
        color: isActive ? color : '#220000',
        emissive: isActive ? color : '#000000',
        emissiveIntensity: isActive ? intensity : 0,
        roughness: 0.1,
        metalness: 0.2,
        transparent: true,
        opacity: isActive ? 0.95 : 0.3
    })

    const geometry = shape === 'round' ?
        new THREE.CylinderGeometry(0.06, 0.06, 0.02, 8) :
        new THREE.BoxGeometry(0.12, 0.04, 0.02)

    return (
        <mesh ref={meshRef} position={position} material={segmentMaterial} geometry={geometry}>
            {shape === 'round' && <primitive object={geometry.rotateX(Math.PI / 2)} />}
        </mesh>
    )
}

export function ChallengerCenterBar({
                                 position = [0, 0, 0],
                                 mode = 'running',
                                 width = 4.5
                             }) {
    const groupRef = useRef()
    const [animationPhase, setAnimationPhase] = useState(0)

    const segmentCount = 36 // More segments for smoother look
    const segmentSpacing = width / segmentCount

    useFrame((state) => {
        if (mode === 'turn') {
            setAnimationPhase(Math.floor(state.clock.elapsedTime * 4) % (segmentCount / 2))
        }
    })

    const getColor = () => {
        switch(mode) {
            case 'brake': return '#ff0000'
            case 'turn': return '#ffaa00'
            case 'reverse': return '#ffffff'
            case 'running': return '#ff2222'
            case 'hazard': return '#ffaa00'
            default: return '#ff2222'
        }
    }

    const getIntensity = () => {
        switch(mode) {
            case 'brake': return 1.8
            case 'turn': return 1.5
            case 'reverse': return 2.0
            case 'running': return 0.4
            case 'hazard': return 1.5
            default: return 0.8
        }
    }

    const isSegmentActive = (index) => {
        if (mode === 'turn') {
            const center = segmentCount / 2
            const distance = Math.abs(index - center)
            return distance <= animationPhase
        }
        if (mode === 'hazard') {
            const flashPhase = Math.floor(Date.now() / 300) % 2
            return flashPhase === 1
        }
        return true
    }

    const segments = []
    for (let i = 0; i < segmentCount; i++) {
        const x = (i - segmentCount / 2) * segmentSpacing + segmentSpacing / 2
        const isActive = isSegmentActive(i)

        segments.push(
            <ChallengerLEDSegment
                key={i}
                position={[x, 0, 0]}
                color={getColor()}
                intensity={getIntensity()}
                isActive={isActive}
                shape="rect"
            />
        )
    }

    return (
        <group ref={groupRef} position={position}>
            {/* Main housing - black bezel */}
            <mesh position={[0, 0, -0.03]}>
                <boxGeometry args={[width + 0.3, 0.25, 0.06]} />
                <meshStandardMaterial
                    color="#0a0a0a"
                    roughness={0.2}
                    metalness={0.1}
                />
            </mesh>

            {/* Inner reflective housing */}
            <mesh position={[0, 0, -0.01]}>
                <boxGeometry args={[width, 0.15, 0.03]} />
                <meshStandardMaterial
                    color="#333333"
                    roughness={0.05}
                    metalness={0.9}
                />
            </mesh>

            {/* LED segments */}
            <group position={[0, 0, 0.01]}>
                {segments}
            </group>

            {/* Illumination lights */}
            {mode !== 'running' && (
                <>
                    <pointLight
                        position={[-width/3, 0, 0.8]}
                        color={getColor()}
                        intensity={getIntensity() * 0.6}
                        distance={8}
                        decay={2}
                    />
                    <pointLight
                        position={[width/3, 0, 0.8]}
                        color={getColor()}
                        intensity={getIntensity() * 0.6}
                        distance={8}
                        decay={2}
                    />
                </>
            )}
        </group>
    )
}
function ChallengerCornerLight({
                                   position = [0, 0, 0],
                                   mode = 'running',
                                   side = 'left' // 'left' or 'right'
                               }) {
    const groupRef = useRef()
    const [animationPhase, setAnimationPhase] = useState(0)

    // 3 rings of LEDs - outer, middle, inner
    const rings = [
        { radius: 0.35, count: 12, color: '#ff0000' }, // Outer - brake/tail
        { radius: 0.25, count: 8, color: '#ffaa00' },  // Middle - turn signal
        { radius: 0.15, count: 6, color: '#ffffff' }   // Inner - reverse
    ]

    useFrame((state) => {
        if (mode === 'turn') {
            setAnimationPhase(Math.floor(state.clock.elapsedTime * 6) % 12)
        }
    })

    const getActiveRing = () => {
        switch(mode) {
            case 'brake': return [true, false, false]
            case 'turn': return [false, true, false]
            case 'reverse': return [false, false, true]
            case 'running': return [true, false, false]
            case 'hazard': return [false, true, false]
            default: return [true, false, false]
        }
    }

    const getIntensity = (ringIndex) => {
        const baseIntensities = [0.4, 1.5, 2.0] // tail, turn, reverse
        switch(mode) {
            case 'brake': return ringIndex === 0 ? 1.8 : 0
            case 'turn': return ringIndex === 1 ? 1.5 : 0
            case 'reverse': return ringIndex === 2 ? 2.0 : 0
            case 'running': return ringIndex === 0 ? 0.4 : 0
            default: return baseIntensities[ringIndex]
        }
    }

    const isLEDActive = (ringIndex, ledIndex) => {
        const activeRings = getActiveRing()
        if (!activeRings[ringIndex]) return false

        if (mode === 'turn' && ringIndex === 1) {
            return ledIndex <= animationPhase
        }
        if (mode === 'hazard' && ringIndex === 1) {
            const flashPhase = Math.floor(Date.now() / 200) % 2
            return flashPhase === 1
        }
        return true
    }

    return (
        <group ref={groupRef} position={position}>
            {/* Outer housing - black circular bezel */}
            <mesh position={[0, 0, -0.05]}>
                <cylinderGeometry args={[0.45, 0.45, 0.08, 32]} />
                <meshStandardMaterial
                    color="#0a0a0a"
                    roughness={0.3}
                    metalness={0.1}
                />
                <primitive object={new THREE.CylinderGeometry(0.45, 0.45, 0.08, 32).rotateX(Math.PI / 2)} />
            </mesh>

            {/* Inner reflective surface */}
            <mesh position={[0, 0, -0.02]}>
                <cylinderGeometry args={[0.38, 0.38, 0.03, 32]} />
                <meshStandardMaterial
                    color="#444444"
                    roughness={0.1}
                    metalness={0.8}
                />
                <primitive object={new THREE.CylinderGeometry(0.38, 0.38, 0.03, 32).rotateX(Math.PI / 2)} />
            </mesh>

            {/* LED rings */}
            {rings.map((ring, ringIndex) => {
                const leds = []
                for (let i = 0; i < ring.count; i++) {
                    const angle = (i / ring.count) * Math.PI * 2
                    const x = Math.cos(angle) * ring.radius
                    const y = Math.sin(angle) * ring.radius
                    const isActive = isLEDActive(ringIndex, i)

                    leds.push(
                        <ChallengerLEDSegment
                            key={`${ringIndex}-${i}`}
                            position={[x, y, 0.01]}
                            color={ring.color}
                            intensity={getIntensity(ringIndex)}
                            isActive={isActive}
                            shape="round"
                        />
                    )
                }
                return <group key={ringIndex}>{leds}</group>
            })}

            {/* Point light for illumination */}
            {mode !== 'running' && (
                <pointLight
                    position={[0, 0, 1]}
                    color={mode === 'brake' ? '#ff0000' : mode === 'turn' || mode === 'hazard' ? '#ffaa00' : '#ffffff'}
                    intensity={getIntensity(mode === 'brake' ? 0 : mode === 'turn' || mode === 'hazard' ? 1 : 2) * 0.8}
                    distance={6}
                    decay={2}
                />
            )}
        </group>
    )
}

export function ChallengerRearLights({ carPosition = [0, 0, 0] }) {
    const [mode, setMode] = useState('running')

    return (
        <group position={carPosition}>
            {/* Center full-width light bar */}
            <ChallengerCenterBar
                position={[0, 0.1, 3.8]}
                width={4.2}
                mode={mode}
            />

            {/* Left corner taillight */}
            <ChallengerCornerLight
                position={[-2.2, 0.1, 3.6]}
                mode={mode}
                side="left"
            />

            {/* Right corner taillight */}
            <ChallengerCornerLight
                position={[2.2, 0.1, 3.6]}
                mode={mode}
                side="right"
            />

            {/* Lower reflectors (small red strips) */}
            <mesh position={[-2.2, -0.3, 3.7]}>
                <boxGeometry args={[0.4, 0.06, 0.02]} />
                <meshStandardMaterial
                    color="#660000"
                    emissive="#330000"
                    roughness={0.2}
                />
            </mesh>
            <mesh position={[2.2, -0.3, 3.7]}>
                <boxGeometry args={[0.4, 0.06, 0.02]} />
                <meshStandardMaterial
                    color="#660000"
                    emissive="#330000"
                    roughness={0.2}
                />
            </mesh>
        </group>
    )
}



import { useEffect, useRef, useMemo } from "react"
import { useLoader, useThree } from "@react-three/fiber"
import { AudioListener, PositionalAudio, AudioLoader } from "three"

export function EngineSound({ engineOn }: { engineOn: boolean }) {
    const { camera } = useThree()
    const startBuffer = useLoader(AudioLoader, "/sounds/engine.mp3")
    const idleBuffer = useLoader(AudioLoader, "/sounds/idle.mp3")

    const startRef = useRef<PositionalAudio>(null)
    const idleRef = useRef<PositionalAudio>(null)

    // create a single listener once
    const listener = useMemo(() => new AudioListener(), [])

    // attach listener to the camera

    // @ts-ignore
    useEffect(() => {
        camera.add(listener)
        return () => camera.remove(listener)
    }, [camera, listener])

    // set buffers once
    useEffect(() => {
        if (startRef.current && startBuffer) {
            startRef.current.setBuffer(startBuffer)
            startRef.current.setLoop(false)
            startRef.current.setVolume(1.0)
        }
        if (idleRef.current && idleBuffer) {
            idleRef.current.setBuffer(idleBuffer)
            idleRef.current.setLoop(true)
            idleRef.current.setVolume(0.6)
        }
    }, [startBuffer, idleBuffer])

    // handle playback
    useEffect(() => {
        if (!startRef.current || !idleRef.current) return

        if (engineOn) {
            if (!startRef.current.isPlaying) {
                startRef.current.play()
                console.log(idleRef.current)
                if (startRef.current.source) {
                    startRef.current.source.onended = () => {

                        if (engineOn && !idleRef!.current!.isPlaying) {
                            idleRef.current!.play()
                        }
                    }
                }
            }
        }
    }, [engineOn])

    return (
        <>
            <positionalAudio ref={startRef} args={[listener]} />
            <positionalAudio ref={idleRef} args={[listener]} />
        </>
    )
}

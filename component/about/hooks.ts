// hooks/useQualityMode.ts
import { useEffect, useState } from "react"
import { getGPUTier } from "detect-gpu"

type Quality = "low" | "medium" | "high"

export function useQualityMode(): Quality {
    const [quality, setQuality] = useState<Quality>("medium")

    useEffect(() => {
        async function checkGPU() {
            const gpuTier = await getGPUTier()

            // Basic decision logic
            if (gpuTier.isMobile || gpuTier.tier <= 1 || window.devicePixelRatio > 2) {
                setQuality("low")
            } else if (gpuTier.tier === 2) {
                setQuality("medium")
            } else {
                setQuality("high")
            }
        }

        checkGPU().then()

        // Optional: measure FPS at runtime
        let frameCount = 0
        let lastTime = performance.now()
        function measureFPS() {
            frameCount++
            const now = performance.now()
            if (now - lastTime >= 1000) {
                const fps = (frameCount * 1000) / (now - lastTime)
                frameCount = 0
                lastTime = now

                if (fps < 25) setQuality("low")
                else if (fps < 45) setQuality("medium")
                else setQuality("high")
            }
            requestAnimationFrame(measureFPS)
        }
        measureFPS()
    }, [])

    return quality
}

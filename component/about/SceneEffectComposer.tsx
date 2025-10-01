import {useMemo} from "react";
import {Bloom, EffectComposer, Noise, Vignette} from "@react-three/postprocessing";

export function PostFX({ isMobile } : {isMobile : boolean}) {
    const effects = useMemo(() => (
        <EffectComposer multisampling={isMobile ? 0 : undefined}>
            <Bloom
                intensity={isMobile ? 0.09 : 0.1}
                luminanceThreshold={0.2}
                mipmapBlur={!isMobile}
            />
            {!isMobile ? <Noise opacity={0.025} /> : <></>}
            <Vignette eskil={false} offset={0.1} darkness={isMobile ? 0.05 : 0.07} />
        </EffectComposer>
    ), [isMobile]);

    return effects;
}
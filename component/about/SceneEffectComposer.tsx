import {useMemo} from "react";
import {Bloom, EffectComposer, Noise, Vignette} from "@react-three/postprocessing";

export function PostFX({ isMobile } : {isMobile : boolean}) {
    const effects = useMemo(() => (
        <EffectComposer resolutionScale={isMobile ? 0.5 : 0.8}  multisampling={isMobile ? 0 : undefined}>
            {/*<Bloom*/}
            {/*    intensity={isMobile ? 0.06 : 0.1}*/}
            {/*    luminanceThreshold={isMobile ? 0.3 : 0.2}*/}
            {/*    mipmapBlur={!isMobile}*/}
            {/*/>*/}
            {/*{!isMobile ? <Noise opacity={0.035} /> : <></>}*/}
            <Vignette eskil={false} offset={0.1} darkness={isMobile ? 0.05 : 0.07} />
        </EffectComposer>
    ), [isMobile]);

    return effects;
}
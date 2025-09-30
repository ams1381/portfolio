import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"
import {TAboutMeActiveView} from "@/types";
import {useMediaQuery} from "react-responsive";

export function ImagePlane({activeView} : {activeView : TAboutMeActiveView}) {
    const texture = useLoader(TextureLoader, "/images/ut logo.png") // path to your png
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const isSmallMobile = useMediaQuery({query: '(max-width: 480px)'});

    return (
        <mesh scale={10}
              position={[isSmallMobile ? 96 : isMobile ? 90 :-15,isSmallMobile ? 68 : isMobile ? 60 :34,48]}
              rotation={[3.14,isSmallMobile ? 0.89 : isMobile ? 1.2 :0.55,1.69]} >
            {/* radiusTop, radiusBottom, height, radialSegments */}
            <cylinderGeometry args={[1.8, 1.8, 0, 64]} />
            <meshStandardMaterial map={texture} transparent />
        </mesh>
    )
}


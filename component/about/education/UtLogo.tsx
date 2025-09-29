import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"
import {TAboutMeActiveView} from "@/types";

export function ImagePlane({activeView} : {activeView : TAboutMeActiveView}) {
    const texture = useLoader(TextureLoader, "/images/ut logo.png") // path to your png
    return (
        <mesh scale={10} position={[-15,34,48]} rotation={[3.14,0.55,1.69]} >
            {/* radiusTop, radiusBottom, height, radialSegments */}
            <cylinderGeometry args={[1.8, 1.8, 0.09, 64]} />
            <meshStandardMaterial map={texture} transparent />

        </mesh>
    )
}


import {useMemo} from "react";
import * as THREE from 'three'

const Texture = ({ texture }) => {
    return (
        <mesh>
            <planeGeometry />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    );
};
export const ImageLoader = ({ url }) => {
    console.log('hi')
    const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);
    return <Texture texture={texture} />;
};
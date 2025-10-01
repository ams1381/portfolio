// hooks/useBVH.ts
import { useEffect } from 'react';
import { Mesh } from 'three';

export function useBVH(mesh: Mesh | null) {
    useEffect(() => {
        if (mesh?.geometry) {
            mesh.geometry.computeBoundsTree?.();
        }
        return () => {
            if (mesh?.geometry) {
                mesh.geometry.disposeBoundsTree?.();
            }
        };
    }, [mesh]);
}

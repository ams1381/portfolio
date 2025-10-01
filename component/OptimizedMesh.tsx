// components/OptimizedMesh.tsx
import React, { forwardRef } from 'react';
import { Mesh, Material, BufferGeometry } from 'three';
import { useBVH } from '../hooks/useBVH';
import { MeshProps } from '@react-three/fiber';

type OptimizedMeshProps = MeshProps & {
    geometry: BufferGeometry;
    material: Material | Material[];
};

export const OptimizedMesh = forwardRef<Mesh, OptimizedMeshProps>(
    ({ geometry, material, ...props }, ref) => {
        useBVH((ref as React.MutableRefObject<Mesh | null>)?.current ?? null);

        return <mesh ref={ref} geometry={geometry} material={material} {...props} />;
    }
);

OptimizedMesh.displayName = 'OptimizedMesh';

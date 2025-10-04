'use client'



import React, {Suspense, useState} from "react";
import PreLoader from "@/component/layout/PreLoader";
import dynamic from "next/dynamic";
import { BufferGeometry } from 'three';
import { acceleratedRaycast, computeBoundsTree, disposeBoundsTree } from 'three-mesh-bvh';
// import GarageScene from "@/component/about/GarageScene";

// Patch THREE.BufferGeometry prototype
BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
// @ts-ignore
BufferGeometry.prototype.raycast = acceleratedRaycast;

const GarageScene: any = dynamic(() => import('@/component/about/GarageScene'), {
    ssr: false,
    loading : PreLoader
})

const MyGarageTest = () => {
    const [readyToLoad, setReadyToLoad] = useState(false);
    return  <div className={'relative'}>
        {/*<Suspense fallback={<PreLoader/>}>*/}
        <GarageScene setReadyToLoad={setReadyToLoad}/>
        {/*</Suspense>*/}
    </div>
}

export default MyGarageTest;
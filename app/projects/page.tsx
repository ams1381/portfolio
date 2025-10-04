'use client'
import dynamic from "next/dynamic";
import {Canvas} from "@react-three/fiber";
import React, {useEffect, useRef, useState} from "react";
import PreLoader from "@/component/layout/PreLoader";

const ProjectsShader : any = dynamic(() => import('@/component/projects/ProjectsShader'), {
    ssr: false,
})
const ProjectsPage = () => {
    const [ readyToLoad , setReadyToLoad ] = useState(false);
    return <>
        {!readyToLoad && <PreLoader/>}

        <div style={{height: 'calc(100vh - 65px)'}}>
            <Canvas className={'w-full !h-full'}>
                <ProjectsShader setReadyToLoad={setReadyToLoad}/>
            </Canvas>
        </div>
    </>


}
export default ProjectsPage;
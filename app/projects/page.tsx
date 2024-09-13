'use client'
import dynamic from "next/dynamic";
import {Canvas} from "@react-three/fiber";
import React, {useState} from "react";
import {Loader} from "@/component/loader";

const ProjectsShader : any = dynamic(() => import('@/component/projects/ProjectsShader'), {
    ssr: false,
})
const ProjectsPage = () => {
    const [ readyToLoad , setReadyToLoad ] = useState(false);
    return <>
        { !readyToLoad &&  <Loader/>}
        <div style={{ height : 'calc(100svh - 65px)' }}>
            <Canvas className={'w-full !h-full'} >
                <ProjectsShader setReadyToLoad={setReadyToLoad} />
            </Canvas>
        </div>
    </>


}
export default ProjectsPage;
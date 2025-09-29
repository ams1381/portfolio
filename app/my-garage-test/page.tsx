'use client'



import React, {Suspense, useState} from "react";
import {PreLoader} from "@/component/layout/PreLoader";
import dynamic from "next/dynamic";

const GarageScene: any = dynamic(() => import('@/component/about/GarageScene'), {
    ssr: false,
    loading : PreLoader
})

const MyGarageTest = () => {
    const [readyToLoad, setReadyToLoad] = useState(false);
    return  <div className={'relative'}>
        {/*<Suspense fallback={<PreLoader/>}>*/}
            {<Suspense fallback={<PreLoader />}>
                <GarageScene setReadyToLoad={setReadyToLoad}/>
            </Suspense>}
        {/*</Suspense>*/}
    </div>
}

export default MyGarageTest;
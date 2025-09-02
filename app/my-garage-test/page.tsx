'use client'



import React, {Suspense, useState} from "react";
import {PreLoader} from "@/component/layout/PreLoader";
import dynamic from "next/dynamic";

const AmirPortfolioScene: any = dynamic(() => import('@/component/about/AmirPortfolioScene'), {
    ssr: false,
})

const MyGarageTest = () => {
    const [readyToLoad, setReadyToLoad] = useState(false);
    return  <div className={'relative'}>
        {/*<Suspense fallback={<PreLoader/>}>*/}
        <div className={'w-4 h-4 bg-primary-gradient absolute top-0 right-0'}>
            test
        </div>
            {<AmirPortfolioScene setReadyToLoad={setReadyToLoad}/>}
        {/*</Suspense>*/}
    </div>
}

export default MyGarageTest;
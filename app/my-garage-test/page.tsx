'use client'



import React, {Suspense, useState} from "react";
import {PreLoader} from "@/component/layout/PreLoader";
import dynamic from "next/dynamic";

const AmirPortfolioScene: any = dynamic(() => import('@/component/about/AmirPortfolioScene'), {
    ssr: false,
})

const MyGarageTest = () => {
    const [readyToLoad, setReadyToLoad] = useState(false);
    return  <div>
        {/*<Suspense fallback={<PreLoader/>}>*/}
            {<AmirPortfolioScene setReadyToLoad={setReadyToLoad}/>}
        {/*</Suspense>*/}
    </div>
}

export default MyGarageTest;
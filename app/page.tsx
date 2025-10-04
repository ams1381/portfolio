'use client'
import React, {useEffect, useRef, useState} from "react";
import PreLoader from "@/component/layout/PreLoader";
import {Header} from "@/component/layout/Header";
import {Footer} from "@/component/layout/Footer";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";


const TestComponent : any = dynamic(() => import('@/component/home/Scene'), {
    ssr: false,
})
export type TPageStatus = 'home' | 'projects' | 'about'
const HomePage = () => {
    const [ readyToLoad , setReadyToLoad ] = useState(false);
    const [ pageStatus , setPageStatus ] = useState<TPageStatus>('home');


  return (
      <>
          { !readyToLoad &&  <PreLoader/>}
          <div className={'relative w-full overflow-hidden ' +
              'h-[calc(100vh-49px)] md:h-[calc(100svh-65px)]'}>
              <div className={'w-full flex justify-center py-3 flex-col gap-4 items-center'}>
                  <h1 className={'text-3xl px-1 md:px-0 md:text-3xl relative text-center transition-all z-[1] mt-16 text-[var(--header-text-hover)] font-[audio] '}>
                      <span className={"front-end-text bg-primary-gradient bg-clip-text text-transparent bg-no-repeat bg-[length:100%] mx-auto text-[32px]"}>
                          Front End Developer
                      </span> &  Web Designer
                  </h1>
                  <div className={`flex gap-2 items-center  relative transition-opacity z-[1]`}>
                      <p>Check out the</p>
                      <Link href={'/projects'}
                            className={'p-1 relative before:z-[-1] overflow-hidden before:absolute before:left-0 before:top-0 before:h-full before:contents-[] ' +
                                'before:bg-primary-gradient before:w-0 hover:before:w-full before:duration-300 ' +
                                'rounded-md cursor-pointer transition-all font-bold duration-500 hover:border-[black] hover:text-[black] border border-gray hover:bg-[#ffffff0a]'}>
                          Projects
                      </Link>
                  </div>
              </div>
              <h2 className={'absolute bottom-36 font-[audio] text-xl whitespace-nowrap' +
                  ' md:hidden left-1/2 -translate-x-1/2 z-[4] text-[var(--header-text-hover)]'}>Amir Mohammad Solgi</h2>
              <TestComponent pageStatus={pageStatus} setReadyToLoad={setReadyToLoad } />
          </div>
          <Footer />
      </>

  );
}
export default HomePage
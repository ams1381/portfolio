'use client'
import React, {useState} from "react";
import {Loader} from "@/component/loader";
import {Header} from "@/component/Header";
import {Footer} from "@/component/Footer";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";


const TestComponent : any = dynamic(() => import('@/component/canvas/Scene'), {
    ssr: false,
})
export type TPageStatus = 'home' | 'projects' | 'about'
const HomePage = () => {
    const [ readyToLoad , setReadyToLoad ] = useState(false);
    const [ pageStatus , setPageStatus ] = useState<TPageStatus>('home');
  return (
      <>
          { !readyToLoad &&  <Loader/>}

          <div className={'relative w-full overflow-hidden h-[calc(100vh-49px)] md:h-[calc(100svh-65px)]'}>
              <div className={'w-full flex justify-center py-3 flex-col gap-2 items-center'}>
                  <h1 className={'text-xl px-1 md:px-0 md:text-3xl relative text-center transition-all z-[1] mt-16 hover:text-[var(--header-text-hover)] font-[audio] text-[#b5b5b5]'}>
                      Front End Developer /  Web Designer
                  </h1>
                  <div className={`flex gap-2 items-center  relative transition-opacity z-[1]`}>
                      <p>Check out the</p>
                      <Link href={'/projects'}
                            className={'p-1 rounded-md cursor-pointer transition-all border border-gray hover:bg-[#ffffff0a]'}>Projects</Link>
                      <p>I've done</p>
                  </div>
              </div>
              <h2 className={'absolute bottom-36 font-[audio] text-xl whitespace-nowrap' +
                  ' md:hidden left-1/2 -translate-x-1/2 z-[4] text-[white]'}>Amir Mohammad Solgi</h2>
              <TestComponent pageStatus={pageStatus} setReadyToLoad={setReadyToLoad } />
          </div>

          {/*<div className={'relative'}>*/}
          {/*    <div className={'shit absolute top-0 right-0 w-full '} style={{ height : 'calc(100svh - 96px)' }} />*/}
          {/*    <HeroSection readyToLoad={readyToLoad} setReadyToLoad={setReadyToLoad} />*/}
          {/*    <AboutMeSection />*/}
          {/*    <SamplesSection />*/}
          {/*</div>*/}
          <Footer />
      </>

  );
}
export default HomePage
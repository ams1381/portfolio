'use client'
import Image from "next/image";
import {SkillsList} from "@/data/skills";
import dynamic from "next/dynamic";
import Link from "next/link";
import {Suspense} from "react";

const BackScene : any = dynamic(() => import('@/component/about/backScene'), {
    ssr: false,
})

const AboutMePage = () => {
    return <div className={'w-full bg-[#ededed] dark:bg-[transparent] h-[calc(100%-65px)] absolute flex flex-col gap-2 z-[20] text-center justify-center items-center'}>
        <Suspense fallback={<h2>Loading bitch</h2>}>
            <BackScene />
        </Suspense>

        <div style={{ animation : 'showUp 0.5s ease-out' , animationFillMode : 'forwards' }} className={'flex flex-col gap-2 items-center'}>
            <Image src={'/images/aboutMePicture.jpg'}
                   alt={'Amir Mohammad Solgi'}
                   width={200} height={200}
                   className={'rounded-full relative z-[2]'} />
            <div className={'w-[90%] md:w-auto flex flex-col gap-2 items-center aboutMeCard translate-y-[-20px] p-3 pt-[30px]  rounded-md'}>
                <h1 className={'text-xl font-bold'}>Amir Mohammad Solgi</h1>
                <span className={'text-[var(--header-text)] text-sm'}>Frond End Developer</span>
                <p className={'text-[var(--goose-color)]'}>
                    Passionated and experienced front end developer with almost 3 years of proficiency
                    in developing websites
                </p>
                <h2 className={'text-xl'}>Skills</h2>
                <div className={'flex w-[200px] flex-wrap gap-3 justify-center mt-2'}>
                    {
                        SkillsList.map((Item,index) =>
                            <div key={index} className={'flex items-center gap-2 group'}>
                                <Image src={Item.icon} alt={Item.title}
                                       width={30}
                                       height={30}
                                       className={`z-[1] skillImage transition-all hover:drop-shadow-[0px_0px_4px_#919191]`} />
                                {/*<p className={'-ms-48 duration-300 transition-all group-hover:ms-0'}>{Item.title}</p>*/}
                            </div>)
                    }
                </div>
                <h2 className={'text-xl mt-2'}>Contact</h2>
                <Link target={'_blank'} className={'transition-all hover:font-bold'} href={'mailto:amirmohammadsolgi1381@gmail.com'}>
                    amirmohammadsolgi1381@gmail.com
                </Link>
            </div>
        </div>

    </div>
}


export default AboutMePage;
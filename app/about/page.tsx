'use client'
import Image from "next/image";
import {SkillsList} from "@/data/skills";
import dynamic from "next/dynamic";

const BackScene : any = dynamic(() => import('@/component/about/backScene'), {
    ssr: false,
})

const AboutMePage = () => {
    let isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return <div className={'w-full h-[calc(100%-65px)] absolute flex flex-col gap-2 z-[20] text-center justify-center items-center'}>
        <BackScene />
        <div style={{ animation : 'showUp 0.5s ease-out' , animationFillMode : 'forwards' }} className={'flex flex-col gap-2 items-center'}>
            <Image src={'./images/aboutMePicture.jpg'}
                   alt={'Amir Mohammad Solgi'}
                   width={200} height={200}
                   className={'rounded-full'} />
            <h1 className={'text-xl font-bold'}>Amir Mohammad Solgi</h1>
            <span className={'text-[var(--header-text)] text-sm'}>Frond End Developer</span>
            <p className={'text-[var(--goose-color)]'}>
                passionated and experienced front end developer with almost 3 years of proficiency
                in developing websites
            </p>
            <h2 className={'text-xl'}>Skills</h2>
            <div className={'flex w-[200px] flex-wrap gap-3 justify-center mt-2'}>
                {
                    SkillsList.map((Item,index) =>
                        <div key={index} className={'flex items-center gap-2 group  '}>
                            <Image src={Item.icon} alt={Item.title}
                                   width={30}
                                   height={30}
                                   className={`z-[1] ${isDarkTheme ? '' : 'invert'}`} />
                            {/*<p className={'-ms-48 duration-300 transition-all group-hover:ms-0'}>{Item.title}</p>*/}
                        </div>)
                }
            </div>
        </div>

    </div>
}


export default AboutMePage;
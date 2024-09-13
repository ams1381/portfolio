import React, {SetStateAction} from "react";
import {TPageStatus} from "@/app/page";
import Link from "next/link";

export const Header = () => {
    return <div className={'w-full px-4  md:px-12 py-2 md:py-4 flex justify-between border-b border-[#838383]'}>
        <h1 className={'text-2xl font-[audio]'}>AMS</h1>
        <ul className={'flex items-center gap-4'}>
            <Link href={'/'}>
                <li className={'text-[#d1d1d1] hover:text-[white] text-md md:text-lg hover:drop-shadow-[1px 2px 8px #ffffff78] text-center hover-effect'}>
                    Home
                </li>
            </Link>
            <Link href={'/projects'}>
                <li  className={'text-[#d1d1d1] hover:text-[white] text-md md:text-lg hover:drop-shadow-[1px 2px 8px #ffffff78] text-center hover-effect'}>
                    Projects
                </li>
            </Link>
            <Link href={'/about'}>
                <li className={'text-[#d1d1d1] hover:text-[white] text-md md:text-lg hover:drop-shadow-[1px 2px 8px #ffffff78] text-center hover-effect'}>
                    About Me
                </li>
            </Link>

        </ul>

        {/*<h1 className={'text-2xl font-[audio]'}>Amir Mohammad Solgi</h1>*/}
        {/*<p>Front End Developer</p>*/}
    </div>
}
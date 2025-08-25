'use client'
import React, {SetStateAction} from "react";
import {TPageStatus} from "@/app/page";
import Link from "next/link";
import {usePathname} from "next/navigation";

export const Header = () => {
    const pathname = usePathname();
    return <header className={'w-full px-4 bg-[var(--background-end-rgb)] md:px-12 py-2 md:py-4 flex justify-between border-b border-[#838383]'}>
        <h1 className={'text-2xl font-[audio]'}>AMS</h1>
        <ul className={'flex items-center gap-4'}>
            <Link href={'/'}>
                <li className={`${pathname === '/' ? 'text-header-text-hover' : 'text-header-text'} hover:text-header-text-hover text-md 
                    md:text-lg hover:drop-shadow-[1px 2px 8px #ffffff78] text-center hover-effect`}>
                    Home
                </li>
            </Link>
            <Link href={'/projects'}>
                <li className={`${pathname === '/projects' ? 'text-header-text-hover' : 'text-header-text'} 
                hover:text-header-text-hover text-md md:text-lg hover:drop-shadow-[1px 2px 8px #ffffff78] text-center hover-effect`}>
                    Projects
                </li>
            </Link>
            <Link href={'/about'}>
                <li className={`${pathname === '/about' ? 'text-header-text-hover' : 
                    'hover:text-[var(--header-text-hover)] text-header-text'}
                 text-md md:text-lg hover:drop-shadow-[1px 2px 8px #ffffff78] text-center hover-effect`}>
                    About Me
                </li>
            </Link>

        </ul>
    </header>
}
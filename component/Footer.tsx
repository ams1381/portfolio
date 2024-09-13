'use client'


import {Telegram} from "@/component/socialIcons/Telegram";
import {LinkedIn} from "@/component/socialIcons/LinkedIn";
import {Instagram} from "@/component/socialIcons/Instagram";
import Link from "next/link";
import {useEffect} from "react";

export const Footer = () => {

    useEffect(() => {
        document.querySelectorAll("footer ul li").forEach((b : any) => {
            b.onmouseleave = (e : any) => {
                b.style.background = "none";
                b.style.borderImage = null;
            };

            b.addEventListener("mousemove", (e : any) => {
                const rect = e.target.getBoundingClientRect();
                const x = e.clientX - rect.left; //x position within the element.
                const y = e.clientY - rect.top; //y position within the element.
                b.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.2),rgba(255,255,255,0) )`;
                b.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
            });
        });
    },[])

    return <footer className={'absolute bottom-7 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 !md:transform-none'}>
        <ul className={'flex gap-3 items-center'}>
            <li>
                <Link className={'flex items-center gap-2 text-[white]  p-4 rounded-md'} href={'https://t.me/AMS1381'} target={'_blank'}>
                    <Telegram />
                    <p>Telegram</p>
                </Link>

            </li>
            <li>
                <Link className={'flex items-center gap-2 text-[white] p-4 rounded-md'} href={'https://www.linkedin.com/in/amir-mohammad-solgi-b70390223/'} target={'_blank'}>
                    <LinkedIn />
                    <p>LinkedIn</p>
                </Link>
            </li>
            <li>
                <Link className={'flex items-center gap-2 text-[white] p-4 rounded-md'} href={'https://github.com/ams1381'} target={'_blank'}>
                    <Instagram />
                    <p>Github</p>
                </Link>
            </li>
        </ul>

    </footer>
}
"use client"


import {Telegram} from "@/component/socialIcons/Telegram";
import {LinkedIn} from "@/component/socialIcons/LinkedIn";
import {Instagram} from "@/component/socialIcons/Instagram";
import Link from "next/link";
import React, {useRef} from "react";

export const Footer = () => {
    const listRef = useRef<HTMLUListElement>(null);

    const onMouseMoveHandler = (e: React.MouseEvent) => {
        const cards = listRef.current?.querySelectorAll("li");
        if (!cards) return;

        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            (card as HTMLElement).style.setProperty("--x", `${x}px`);
            (card as HTMLElement).style.setProperty("--y", `${y}px`);
            card.style.background = "radial-gradient(circle at var(--x) var(--y,50%) , rgba(255,255,255,0.15),rgba(255,255,255,0) )";
            card.style.borderImage = "radial-gradient(20% 75% at var(--x) var(--y) ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch";
        });
    };

    const onMouseLeaveHandler = () => {
        const cards = listRef.current?.querySelectorAll("li");
        if (!cards) return;

        cards.forEach((card) => {
            (card as HTMLElement).style.removeProperty("--x");
            (card as HTMLElement).style.removeProperty("--y");
            card.style.background = 'none';
            card.style.borderImage = 'none';
        });
    };

    return (
        <footer className="absolute bottom-7 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 !md:transform-none">
            <ul
                onMouseLeave={onMouseLeaveHandler}
                ref={listRef}
                onMouseMove={onMouseMoveHandler}
                className="flex gap-2 items-center">
                {[
                    {
                        href: "https://t.me/AMS1381",
                        icon: <Telegram/>,
                        text: "Telegram",
                    },
                    {
                        href: "https://www.linkedin.com/in/amir-mohammad-solgi-b70390223/",
                        icon: <LinkedIn/>,
                        text: "LinkedIn",
                    },
                    {
                        href: "https://github.com/ams1381",
                        icon: <Instagram/>,
                        text: "Github",
                    },
                ].map(({href, icon, text}, i) => (
                    <li
                        key={i}
                        className="relative group  transition-transform duration-300 ease-out"
                        style={{
                            // background:
                            //     "radial-gradient(circle at var(--x,50%) var(--y,50%) , rgba(255,255,255,0.2),rgba(255,255,255,0) )",
                            // borderImage : "radial-gradient(20% 75% at var(--x) var(--y) ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch",
                        }}>

                        <Link
                            className="flex gap-2 px-4 h-[64px] items-center text-[var(--footer-color)]  hover:shadow-lg transition-all duration-300"
                            href={href}
                            target="_blank">
                            {icon}
                            <p>{text}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
};
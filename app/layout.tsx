import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {LightOne} from "@/component/backSceneLights/LightOne";
import {Header} from "@/component/Header";
import React from "react";
import NextTopLoader from "nextjs-toploader";
import favicon from '@/public/favicon.svg'

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "AMS WebSite",
    icons: [{rel: 'icon', url: favicon.src}],
    description: "Best front end developer ever , AMS portfolio",
    openGraph : {
        siteName : 'AMS WebSite',
        url : 'https://amosoli.com/',
        description : 'Best front end developer ever' و
        type : 'website' ,
    },
    creator : 'amir mohammad solgi',
    authors : [{
        name : 'Amir Mohammad Solgi' ,
        url : 'amirmohammadsolgi1391@gmail.com'
    }]
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <NextTopLoader color={'var(--navigation-indicator)'} showSpinner={false}/>
        <Header/>
        {children}
        </body>
        </html>
    );
}

'use client'


import {GarageCeilingLight} from "@/component/about/garage/CeilingLight";
import React, {useMemo} from "react";
import {MyText3D} from "@/component/about/3dText";
import {useMediaQuery} from "react-responsive";


// const getPosition = () => {
//     const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
//     const isSmallMobile = useMediaQuery({ query: '(max-width: 480px)' });
//
//
//     return [
//         [isMobile ? -300 : 50,166.2,-471.0] ,
//         [],
//         []
//     ]
// }

export const SceneController = (props: any) => {
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const isSmallMobile = useMediaQuery({query: '(max-width: 480px)'});

    return <>
        {props.activeView === 'initial' && <>
            <MyText3D onClick={() => props.setActiveView('education')}
                      text={'Education'}
                      size={isSmallMobile ? 14 : isMobile ? 18 : 25}
                      position={[isSmallMobile ? -360 : isMobile ? -308 : 50, 166.2, isSmallMobile ? -540 : isMobile ? -510 : -471.0]}/>
            <MyText3D onClick={() => props.setActiveView('workExperience')}
                      text={'Work Experience'}
                      size={isSmallMobile ? 14 : isMobile ? 18 : 25}
                      position={[isSmallMobile ? -360 : isMobile ? -308 : 50, isMobile ? 130 : 120, isSmallMobile ? -540 : isMobile ? -510 : -471.0]}/>
            <MyText3D onClick={() => props.setActiveView('skills')}
                      text={'Skills'}
                      size={isSmallMobile ? 14 : isMobile ? 18 : 25}
                      position={[isSmallMobile ? -360 : isMobile ? -308 : 50, isMobile ? 93.8 : 73.8, isSmallMobile ? -540 : isMobile ? -510 : -471.0]}/>
        </>}
    </>
}
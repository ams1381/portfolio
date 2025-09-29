import { Html, useProgress } from "@react-three/drei";
import React, { SetStateAction, useEffect } from "react";

export const CanvasLoader = ({
                                setReadyToLoad
                            }: {
    setReadyToLoad: React.Dispatch<SetStateAction<boolean>>
}) => {
    const { progress } = useProgress();

    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                setReadyToLoad(true);
            }, 500);
        }
    }, [progress, setReadyToLoad]);
    // if(progress === 100)
    //     return <></>
    return (
        <Html center>
            {/*{ progress !== 100 ? <div className={'fixed w-full h-full z-50 bg-[var(--prevLoader-bg)]'}>*/}
            {/*    <div className="diamondCon">*/}
            {/*        <ul className="diamond">*/}
            {/*            <li></li>*/}
            {/*            <li></li>*/}
            {/*            <li></li>*/}
            {/*            <li></li>*/}
            {/*            <li></li>*/}
            {/*            <li></li>*/}
            {/*            <li></li>*/}
            {/*        </ul>*/}
            {/*        /!*<div className="textCon">Diamond PreLoader</div>*!/*/}
            {/*    </div>*/}
            {/*</div> : ''}*/}
        </Html>
    );
};

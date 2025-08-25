import {Html, useProgress} from "@react-three/drei";
import React, {SetStateAction, useEffect} from "react";

export const CanvasLoader = ({ setReadyToLoad } : { setReadyToLoad : React.Dispatch<SetStateAction<boolean>> }) => {
    const {active, progress , loaded} = useProgress();

    useEffect(() => {
        if(progress === 100)
            setTimeout(() => {
                setReadyToLoad(true)
            },500)
    }, [progress]);

    return <Html center>
        {/*<div color={'text-[white]'}>*/}
        {/*    /!*{progress}*!/*/}
        {/*</div>*/}
    </Html>
}
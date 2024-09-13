import {useFrame, useThree} from "@react-three/fiber";
import {Text} from "@react-three/drei";
import React, {useRef} from "react";
import {Vector3} from "three";

export const Title = ({ children , pageStatus } : any) => {
    const { width } = useThree((state) => state.viewport);
    const textRef : any = useRef();
    let isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    useFrame(() => {
        if (textRef.current) {
            let targetPosition;
            // Interpolate the current position towards the target position
            if(window.innerWidth < 480)
                targetPosition = new Vector3(0, -0.6, -2);
            else
                targetPosition = new Vector3(0, 0.1, -2);
            textRef.current.position.lerp(targetPosition, 0.1); // 0.1 is the interpolation factor
            // diamondRef.current.rotation.y += 1;
        }
    });

    return (
        <Text
            ref={textRef}
            // position={window.innerWidth < 480 ? [0, -2, -4] : [0, 0.1, -2]}
            lineHeight={1.3}
            font='./fonts/Audiowide-Regular.ttf'
            fontSize={window.innerWidth < 480 ? 0.23 : (width/90 +  0.5)}
            material-toneMapped={false}
            anchorX='center'
            anchorY='middle'
        >
            {children}
            <meshBasicMaterial color={ isDarkTheme ?  '#c4c4c4' : '#ff2323'} />
        </Text>
    )

}
export const TitleL = ({ children , pageStatus } : any) => {
    const { width } = useThree((state) => state.viewport);
    const textRef : any = useRef();
    let isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    useFrame(() => {
        if (textRef.current) {
            let targetPosition;
            // Interpolate the current position towards the target position
            if(window.innerWidth < 480)
                targetPosition = new Vector3(0, -0.6, -2);
            else
                targetPosition = new Vector3(0, 0.1, -2);
            textRef.current.position.lerp(targetPosition, 0.1); // 0.1 is the interpolation factor
            // diamondRef.current.rotation.y += 1;
        }
    });
    return (
        <Text
            // position={window.innerWidth < 480 ? [0, -2, -4] : [0, 0.1, -2]}
            lineHeight={1.3}
            ref={textRef}
            font='./fonts/Audiowide-Regular.ttf'
            fontSize={window.innerWidth < 480 ? 0.23 : (width/90 +  0.5)}
            material-toneMapped={false}
            anchorX='center'
            anchorY='middle'
        >
            {children}
            <meshStandardMaterial roughness={1} metalness={0.5} color={isDarkTheme ? '#474747' : 'red'} />
        </Text>
    )
}
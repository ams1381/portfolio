import Shader from "@/component/projects/Shader";
import {useThree, Vector3} from "@react-three/fiber";
import {Text} from "@react-three/drei";
import React, {SetStateAction, useRef, useState} from "react";

interface IProjectItem {
    url : string ,
    position : any ,
    isDarkTheme : boolean ,
    title : string ,
    index : number,
    src : string ,
    setActiveProject : React.Dispatch<SetStateAction<number | null>>
}

export const ProjectItem = ({ url , src , position , isDarkTheme , title , activeProject , setActiveProject , index } : IProjectItem) => {
    const { width } = useThree((state) => state.viewport)
    const [ textOpacity , setTextOpacity ] = useState(0.7);
    let [ x , y , z ] = position;
    const titleRef = useRef<any>();
    const openInNewTab = (href: string) => {
        let LinkElement = document.createElement('a');
        LinkElement.className = 'hover:text-[red] transition-all'
        Object.assign(LinkElement, {
            target: '_blank',
            rel: 'noopener noreferrer',
            href: href,
        }).click()
    }

    return <group
        onPointerEnter={(e) => {
            document.body.style.cursor = 'pointer'
            setTextOpacity(1);
        }}
        onPointerLeave={(e) => {
            document.body.style.cursor = 'auto'
            setTextOpacity(0.7);
        }}
        onClick={() => {
            // openInNewTab(url);
            setActiveProject(index)
        }}
        key={url} >
        <Shader
            image={src}
            position={[x,y,z] as Vector3}
            planeArgs={[0.2, 0.2, 8, 8]}
            planeRotation={[0, 0, 0]}
            wireframe={false}
            pointer={false}
            url={url}
        />

        <Text
            position={[0, y, 0.1] as Vector3}
            fillOpacity={textOpacity}
            color={isDarkTheme ? '#f7f7fd' : '#000025'}
            font='./fonts/Audiowide-Regular.ttf'
            fontSize={width / 16}
            material-toneMapped={false}
            anchorX='center'
            anchorY='middle'
            ref={titleRef}
        >
            {title}
        </Text>
        <Text
            position={[-position[0], position[1], 0.4] as Vector3}
            strokeWidth={window.innerWidth < 480 ? '0.6%' : '0.3%'}
            strokeOpacity={window.innerWidth < 480 ? 0.7 : 0.4}
            strokeColor={isDarkTheme ? '#ffffff' : '#2c2c2c'}
            fillOpacity={0}
            font='./fonts/Audiowide-Regular.ttf'
            fontSize={width / 8}
            material-toneMapped={false}
            anchorX={`${position[0] === 0.1 ? 'right' : 'left'}` as any}
            anchorY='middle'
        >
            {index + 1}
        </Text>
    </group>
}
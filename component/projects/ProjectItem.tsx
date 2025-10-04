import Shader from "@/component/projects/Shader";
import {Vector3} from "@react-three/fiber";
import React, {SetStateAction, useRef, useState} from "react";
import * as THREE from "three";
import {ProjectTitle} from "@/component/projects/projectItem/projectTitle";
import {ProjectIndex} from "@/component/projects/projectItem/ProjectIndex";

interface IProjectItemProps {
    url : string ,
    position : any ,
    isDarkTheme : boolean ,
    title : string ,
    index : number,
    src : string ,
    setActiveProject : React.Dispatch<SetStateAction<number | null>>,
    setScrollEnabled : React.Dispatch<SetStateAction<boolean>>,
}

export const ProjectItem = (props : IProjectItemProps) => {
    const [ textOpacity , setTextOpacity ] = useState(0.5);
    let [ x , y , z ] = props.position;
    const titleRef = useRef<any>();
    const [targetPos, setTargetPos] = useState(new THREE.Vector3(...props.position));
    const groupRef = useRef<any>();
    const [selected, setSelected] = useState<boolean>(false);
    const [hovered, setHovered] = useState<boolean>(true);

    const onClickHandler = (href : string) => {
        let LinkElement = document.createElement('a');
        LinkElement.className = 'hover:text-[red] transition-all'
        Object.assign(LinkElement, {
            target: '_blank',
            rel: 'noopener noreferrer',
            href: href,
        }).click()
    }

    return <group
        ref={groupRef}
        onPointerEnter={(e) => {
            document.body.style.cursor = 'pointer'
            setHovered(true);
            setTextOpacity(1);
        }}
        onPointerLeave={(e) => {
            document.body.style.cursor = 'auto'
            setHovered(false);
            setTextOpacity(0.7);
        }}
        onClick={() => onClickHandler(props.url)} key={props.url}>
        <Shader
            image={props.src}
            position={[x,y,z] as Vector3}
            planeArgs={[0.3, 0.3, 8, 8]}
            planeRotation={[0, 0, 0]}
            wireframe={false}
            pointer={false}
            url={props.url}
        />
        <ProjectTitle title={props.title}
                      position={props.position}
                      selected={selected}
                      textOpacity={textOpacity}
                      isDarkTheme={props.isDarkTheme} />
        <ProjectIndex index={props.index}
                      hovered={hovered}
                      isDarkTheme={props.isDarkTheme}
                      selected={selected}
                      position={props.position} />
    </group>
}
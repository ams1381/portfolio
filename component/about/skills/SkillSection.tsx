'use client'

import {TAboutMeActiveView} from "@/types";
import {Text} from "@react-three/drei";
import {SkillsItem} from "@/component/about/skills/SkillItem";
import {SkillsList} from "@/component/about/skills/SkillsList";
import {useSpring, a} from "@react-spring/three";

export const SkillSection = ({activeView, setActiveView}: { activeView: TAboutMeActiveView, setActiveView: any }) => {

    const springs: any = useSpring({
        opacity: activeView === "skills" ? 1 : 0,
        config: {mass: 1, tension: 200, friction: 25, duration: 400},
        scale: activeView === "skills" ? 1 : 0,
    });
    return <a.group scale={springs.scale} position={[541, 103, 6]}>
        <group position={[-90, -139, 0]} rotation={[0, 0, -1.1]}>
            <Text color={'#fff'}
                  fontSize={13}
                  position={[15, 0, 0]}
                  onClick={() => setActiveView('initial')}
                  rotation={[0, -1.56, 0]}
                  onPointerEnter={(e) => document.body.style.cursor = 'pointer'}
                  onPointerLeave={(e) => document.body.style.cursor = 'auto'}
                  font={'./fonts/Audiowide-Regular.ttf'}>
                {'<- Back'}
            </Text>
            <Text color={'#fff'}
                  fontSize={13}
                  position={[14, 40, 50]}
                  rotation={[0, -1.56, 0]}
                  onClick={() => setActiveView('education')}
                  onPointerEnter={(e) => document.body.style.cursor = 'pointer'}
                  onPointerLeave={(e) => document.body.style.cursor = 'auto'}
                  font={'./fonts/Audiowide-Regular.ttf'}>
                {'Education'}
            </Text>
            <Text color={'#fff'}
                  fontSize={13}
                  position={[15, 0, 110]}
                  rotation={[0, -1.56, 0]}
                  onClick={() => setActiveView('workExperience')}
                  onPointerEnter={(e) => document.body.style.cursor = 'pointer'}
                  onPointerLeave={(e) => document.body.style.cursor = 'auto'}
                  font={'./fonts/Audiowide-Regular.ttf'}>
                {'Work Experience'}
            </Text>
        </group>
        <pointLight color={'#fff'}
                    position={[-264, 7, 185]}
                    decay={1}
                    intensity={activeView === 'skills' ? 60 : 0}/>
        {SkillsList.map((item, i) => (
            <SkillsItem key={i} {...item}  />
        ))}

    </a.group>
}
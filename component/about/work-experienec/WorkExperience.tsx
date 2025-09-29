'use client'


import {useSpring,a} from "@react-spring/three";
import {TAboutMeActiveView} from "@/types";
import {Text} from "@react-three/drei";
import dynamic from "next/dynamic";
import {useMediaQuery} from "react-responsive";

const CodintoSection = dynamic(() => import("@/component/about/work-experienec/CodintoSection"), { ssr: false });
const IranCounterSection = dynamic(() => import("@/component/about/work-experienec/IranCounterSection"), { ssr: false });
const SafeBrokerSection = dynamic(() => import("@/component/about/work-experienec/SafeBrokerSection"), { ssr: false });

export const WorkExperience = ({activeView,setActiveView} : {activeView : TAboutMeActiveView,setActiveView : any}) => {
    const springs : any = useSpring({
        opacity: activeView === "education" ? 1 : 0,
        config: { mass: 1, tension: 200, friction: 25 , duration : 400  },
        scale: activeView === "workExperience" ? 1 : 0,
    });



    return <a.group position={[-633.6,139.74,349.5]} scale={springs.scale}>
        <pointLight position={[-3,-12,-155]}
                    color={'#fff'}
                    decay={0.6}
                    scale={10}
                    intensity={14}
                    rotation={[0,0,0]}/>
        {
            // @ts-ignore
            <a.group >
                <Text color={'#fff'} fontSize={16}
                      rotation={[0,Math.PI,0]}
                      onClick={() => setActiveView('initial')}
                      position={[-150,0,0]}
                      font="./fonts/Audiowide-Regular.ttf">
                    {`<- Back`}
                </Text>
                <Text color={'#fff'} fontSize={16}
                      rotation={[0,Math.PI,0]}
                      position={[-150,-60,0]}
                      onClick={() => setActiveView('skills')}
                      font="./fonts/Audiowide-Regular.ttf">
                    Skills
                </Text>
                <Text color={'#fff'} fontSize={16}
                      rotation={[0,Math.PI,0]}
                      position={[-150,-30,0]}
                      onClick={() => setActiveView('education')}
                      font="./fonts/Audiowide-Regular.ttf">
                    Education
                </Text>
                <a.group >
                    <CodintoSection />
                    <IranCounterSection />
                    <SafeBrokerSection />
                </a.group>
            </a.group>
        }
    </a.group>
}
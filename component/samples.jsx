import {TPageStatus} from "@/app/page";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import {SamplesList} from "@/data/samples";

export const Samples = ({pageStatus}: { pageStatus: TPageStatus }) => {
    const [selectedSample, setSelectedSample] = useState<number | null>(null);

    useEffect(() => {
        document.body.onmousemove = e => {
            for (const date of document.getElementsByClassName("sampleBox")) {
                let myElement: any = date;
                const rect = date.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                myElement.style.setProperty("--mouse-x", `${x}px`);
                myElement.style.setProperty("--mouse-y", `${y}px`);
            }
            ;
        }
    }, [])

    return (
        <motion.div className={'absolute w-[500px] gap-2 p-2 grid grid-cols-3 z-[1]'}
                    transition={{duration: 0.3}}
                    initial={{right: '-60%', top: '50%', transform: 'translateY(-50%)'}}
                    animate={{right: pageStatus === "home" ? '-60%' : '10%'}}>
            {SamplesList.map((Item, index) => (
                <SampleItem key={index} item={Item} setSelectedSample={setSelectedSample}
                            selectedSample={selectedSample}/>
            ))}
        </motion.div>
        // <div
        //     style={{ transition: "0.5s" }}
        //     className={`grid m-10 ${selectedSample === null ? 'top-[45%] grid-cols-[1fr_1fr_1fr] !-translate-y-[45%]' :
        //         `!right-1/2 !top-[30%] !translate-x-1/2 !-translate-y-[30%] grid-cols-[${gridColText}] h-[300px]`}  ${
        //         pageStatus === "home" ? "-right-[1000px]" : "right-[10%]"
        //     } w-[500px] gap-2 p-2 z-[1] absolute`}
        // >
        //
        // </div>
    );
};

const SampleItem = ({item, selectedSample, setSelectedSample}: {
    item: any,
    setSelectedSample: any,
    selectedSample: number | null
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (selectedSample === item.id && ref.current) {
            let element = ref.current;
            if(!element) return
            const { x, y, width, height } = element.getBoundingClientRect();
            const centerX = window.innerWidth / 2 - width / 2;
            const centerY = window.innerHeight / 2 - height / 2 - 110;
            element.style.transform = `translate(${centerX - x}px, ${centerY - y}px) scale(1.2)`;

        } else if (ref.current) {
            setTimeout(() => {
                ref.current!.style.transform = 'translate(0, 0)';
            },300)
        }
    }, [selectedSample]);

    return (<motion.div
                        initial={{ height : 118 }}
                        animate={{ height : selectedSample === item.id ? '100%' : 118 }}
                        transition={{ delay : selectedSample === item.id ? 0.3 : 0 }}
                        className={`flex flex-col p-0.5 items-center justify-center
                         relative transition-[opacity,transform] duration-300 overflow-hidden
                         ${selectedSample !== item.id && selectedSample !== null ?
                            'opacity-0 z-[-1]' : selectedSample !== item.id && 'sampleBox'}`}
                        ref={ref}
                        onMouseEnter={() => setIsHovered(true)}
                        onClick={() => selectedSample ? setSelectedSample(null) : setSelectedSample(item.id)}
                        onMouseLeave={() => setIsHovered(false)}>
            <div className={`w-full cursor-pointer flex justify-center
             z-[2] py-3 transition-all ${selectedSample !== item.id ? 'bg-[#050505]' : ''}`}>
                <Image
                    width={80}
                    height={80}
                    className="object-contain transition-all w-[90px] h-[90px]"
                    src={`/icons/${item.iconName}.${item.type}`}
                    alt={item.iconName}
                    style={{
                        filter: isHovered ? `drop-shadow(${item.hoverShadow})` : "none",
                    }}
                />
            </div>
            <motion.div
                        initial={{ height : 0 }}

                        // transition={{
                        //     delay : 0,
                        //     duration : 1.2 ,}}
                        animate={{ height : selectedSample === item.id ? '100%' : '0' }}
                        className={'flex flex-col gap-1 items-center text-center w-[400px]'}>
                <h1 className={'font-bold text-2xl'}>{item.name}</h1>
                <p>{item.description}</p>
                <div className={'flex gap-2 items-center'}>
                    <span>1</span>
                    <span>1</span>
                    <span>1</span>
                    <span>1</span>
                </div>
                <Link href={'/'}>
                    Check out the project
                </Link>
            </motion.div>
        </motion.div>

    );
};


// <div
//     style={{ transition : '0.3s' }}
//     className={`flex flex-col relative
//      sampleBox items-center justify-center rounded-md p-0.5 cursor-pointer hover:text-[red]`}
//     onMouseEnter={() => setIsHovered(true)}
//     onClick={() => selectedSample ? setSelectedSample(null) : setSelectedSample(item.id)}
//     onMouseLeave={() => setIsHovered(false)}
// >
//     <div className={'w-full flex justify-center h-full z-[2] py-3 bg-[#050505]'}>
//         <Image
//             width={80}
//             height={80}
//             className="object-contain transition-all w-[90px] h-[90px]"
//             src={`/icons/${item.iconName}.${item.type}`}
//             alt={item.iconName}
//             style={{
//                 filter: isHovered ? `drop-shadow(${item.hoverShadow})` : "none",
//             }}
//         />
//     </div>
// </div>
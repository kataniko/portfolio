'use client'
import Image from 'next/image'
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from 'gsap';
import Animation from './Animation.js';
import Description from './Description/description.js'
import ThreeDHoverBox from './ThreeDHoverBox.js';
import Folder from './Folder/Folder';
import Project from '../components/project';
import Modal from '../components/modal';
import Svg from './Svg.js';


export default function Home() {

    const [point, setPoint] = useState({ x: 0, y: 0 });
    const { x, y } = point;
    const ref = useRef();
    const [cursorVariant, setCursorVariant] = useState("default");
    const main = useRef();



    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();

                setTimeout(() => {
                    document.body.style.cursor = 'default'
                    window.scrollTo(0, 0);
                }, 2000)
            }
        )()
    }, [])

    useEffect(() => {
        if (!ref.current) return;
        const handlePointerMove = ({ clientX, clientY }) => {
            const element = ref.current;
            const x = clientX - element.offsetLeft - element.offsetWidth / 2;
            const y = clientY - element.offsetTop - element.offsetHeight / 2;
            setPoint({ x, y });
            console.log(x, y);
        };

        window.addEventListener("pointermove", handlePointerMove);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
        };

    }, []);

    const variants = {
        default: {
            height: 40,
            width: 40,
        },
        text: {
            height: 150,
            width: 150,
            background: "white",
            mixBlendMode: "difference"
        }
    }

    const projects = [
        {
            title: "KatanaXchain",
            src: "katana1.jpg",
            color: "#000000"
        },
        {
            title: "AIonDemand",
            src: "innovation.jpg",
            color: "#8C8C8C"
        },
        {
            title: "ajessicanunes",
            src: "jessi.jpg",
            color: "#EFE8D3"
        },
        {
            title: "Silencio",
            src: "silencio.png",
            color: "#706D63"
        }
    ]


    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");
    const [modal, setModal] = useState({ active: false, index: 0 })


    const handleMouseEnter = () => {
        gsap.to('.my-element', { scale: 1.1, duration: 0.5 });
    };

    const handleMouseLeave = () => {
        gsap.to('.my-element', { scale: 1, duration: 0.3 });
    };

    return (
        <main>
            <Svg />
            <div className='h-[110vh] w-screen bg-white'>
                <motion.div
                    ref={ref}
                    variants={variants}
                    animate={cursorVariant}
                    className="mousefollow"
                    style={{
                        transform: `translate(${x}px, ${y}px)`,
                    }}
                >
                </motion.div>
                <div className='w-screen flex justify-center'>
                    <motion.div initial={{ z: 0, opacity: 0, scale: 0.9 }}
                        animate={{ x: 0, opacity: 1, scale: 1, }}
                        transition={{ duration: 1.4, }}
                        onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-black text-center text-5xl md:text-8xl xl:text-7xl catch pt-24 md:pt16 z-10 '>
                        Tomás <p className='text-black text-center mt-2 xl:text-7xl text-5xl md:text-8xl baca'>Oliveira</p>
                    </motion.div>
                </div>

                <div className='w-screen flex justify-center mt-20'>

                    <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-black text-center text-2xl md:text-5xl absolute bottom-10 left-20 catch'>Front-End</div>

                    <div className='p-0 z-20'>
                        <ThreeDHoverBox />

                    </div>

                    <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-black text-center mt-10 text-2xl md:text-5xl absolute bottom-10 right-20 absolute catch'>Web Developer</div>

                </div>

            </div>

            <div className='bg-black flex flex-col  h-auto w-full'>


                <Image width={2000} height={800} className='object-fit mt-[-1px] absolute rotate-180' src={"/wave3.svg"} />
                <Animation />
                <Folder />
                <Description />
                <Folder />


            </div>

            <div className='bg-white'>
                <Image width={1900} height={100} className=' w-screen rotate-180 mt-[-2px] ml-[-2px] ' src={"/wave6.svg"} />
                <div className='text-7xl md:text-10xl  w-screen text-black  text-center catch '>
                    Projects
                </div>
            </div>



            <div className='  bg-white '>

                {
                    projects.map((project, index) => {
                        return <Project index={index} title={project.title} setModal={setModal} key={index} />
                    })
                }
                <Modal modal={modal} projects={projects} />

            </div>
            <div className='h-screen bg-white'>

            </div>
        </main>
    )
}

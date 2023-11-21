'use client'
import Image from 'next/image'
import { useEffect, useLayoutEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from 'gsap';
import Description from './Description/description.jsx'
import ThreeDHoverBox from './ThreeDHoverBox.js';
import Project from '../components/project';
import Modal from '../components/modal';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Portrait from "../components/Portrait.js"
import PortraitMobile from "../components/PortraitMobile.js"


export default function Home() {

    // State and Ref variables
    const [point, setPoint] = useState({ x: 0, y: 0 });
    const { x, y } = point;
    const ref = useRef();
    const [cursorVariant, setCursorVariant] = useState("default");
    const main = useRef();
    const image = useRef(null);

    // Initialize LocomotiveScroll and set cursor after 2 seconds
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

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(image.current, {
            scrollTrigger: {
                trigger: image.current,
                scrub: true,
            },
            opacity: 0,
            right: "-100px",
            ease: "power2.Out",
        });
    }, []);


    // Handle mouse pointer movement
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

    // Variants for animations
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

    // Project data
    const projects = [
        {
            title: "KatanaXchain",
            src: "katana1.webp",
            color: "#000000"
        },
        {
            title: "AIonDemand",
            src: "innovation.webp",
            color: "#8C8C8C"
        },
        {
            title: "ajessicanunes",
            src: "jessi.webp",
            color: "#EFE8D3"
        },
        {
            title: "Silencio",
            src: "silencio.png",
            color: "#706D63"
        }
    ]

    // Functions for handling cursor and modals
    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");
    const [modal, setModal] = useState({ active: false, index: 0 })

    // Functions for mouse hover animations
    const handleMouseEnter = () => {
        gsap.to('.my-element', { scale: 1.1, duration: 0.5 });
    };

    const handleMouseLeave = () => {
        gsap.to('.my-element', { scale: 1, duration: 0.3 });
    };

    return (
        <main>
            {/* Header Section */}
            <div className=' h-[110vh] w-screen bg-white'>
                <motion.div
                    ref={ref}
                    variants={variants}
                    animate={cursorVariant}
                    className="mousefollow"
                    style={{
                        transform: `translate(${x}px, ${y}px)`,
                    }}
                ></motion.div>
                <div className='w-screen flex justify-center'>
                    <motion.div
                        initial={{ z: 0, opacity: 0, scale: 0.9 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 1.4 }}
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        className=' text-black text-center text-5xl md:text-8xl xl:text-7xl catch pt-24 md:pt16 z-10'
                    >
                        Tomás
                        <p className=' text-black text-center mt-2 xl:text-7xl text-5xl md:text-8xl baca'>
                            Oliveira
                        </p>
                    </motion.div>
                </div>

                <div className='w-screen flex justify-center mt-20'>
                    <div
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        className=' text-black text-center text-2xl md:text-5xl absolute bottom-10 left-20 catch'
                    >
                        Front-End
                    </div>

                    <div className='p-0 z-20'>
                        <ThreeDHoverBox />
                    </div>

                    <div
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        className=' text-black text-center mt-10 text-2xl md:text-5xl absolute bottom-10 right-20 absolute catch'
                    >
                        Web Developer
                    </div>
                </div>
            </div>

            {/* Wave Section */}
            <div>
                {/* Wave Section */}
                <div className='bg-black flex flex-col sm:h-10vh md:h-50vh w-full'>
                    <Image
                        width={2000}
                        height={800}
                        className='object-cover rotate-180 h-full'
                        src={"/wave3.svg"}
                        alt="Wave Image"
                    />
                </div>

                {/* Description and Portrait Section */}
                <div className='bg-black flex  h-screen md:h-full'>

                    {/* Mobile Version */}
                    <div className='md:hidden'>
                        <div className='flex flex-col justify-center items-center h-full relative overflow-hidden'>

                            {/* Portrait Image (behind) */}
                            <div className=' absolute z-0'>
                                <PortraitMobile  />
                            </div>

                            {/* Description (on top) */}
                            <div className='w-full p-4 relative z-10'>
                                <Description />
                            </div>

                        </div>
                    </div>


                    {/* Desktop Version */}
                    <div className='hidden md:flex md:flex-col md:justify-center md:items-center md:h-full'>
                        <div className='w-full flex justify-center z-0'>
                            <Description />
                            <Portrait />
                        </div>
                    </div>

                </div>


                <div className='bg-black flex flex-col sm:h-10vh md:h-50vh w-full'>
                    <Image
                        width={2000}
                        height={800}
                        className='object-cover  h-full'
                        src={"/wave3.svg"}
                        alt="Wave Image"
                    />
                </div>
            </div>


            {/* Projects Section */}
            <div className='h-auto bg-white'>
                <div className=' text-7xl md:text-9xl w-screen text-black text-center catch'>
                    Projects
                </div>
            </div>

            {/* Project List Section */}
            <div className='bg-white'>
                {projects.map((project, index) => (
                    <Project
                        index={index}
                        title={project.title}
                        setModal={setModal}
                        key={index}
                    />
                ))}
                <Modal modal={modal} projects={projects} />
            </div>

            {/* Additional Section */}
            <div className='h-screen bg-white'></div>
        </main>

    )
}

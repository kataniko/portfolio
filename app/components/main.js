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
import Svg from './Svg.js';
import Spline from '@splinetool/react-spline';



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
        },

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
        <main className='overflow'>
            <section className=' h-[100vh] w-screen bg-white'>
                <div className='absolute  bottom-0 right-0 flex '>
                    <Spline scene="https://prod.spline.design/Sj25HJefpapnVKv3/scene.splinecode" />
                </div>
                
                    <motion.div
                        initial={{ z: 0, opacity: 0, scale: 0.9 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 1.4 }}
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        className=' text-black absolute text-center text-2xl md:text-2xl catch m-5 z-10'
                    >
                        Tomás Oliveira

                    </motion.div>
                

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

                <div className='w-screen h-[90vh] items-center z-20 flex-col flex justify-center '>
                    <div
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        className=' text-black text-center text-5xl md:text-8xl  catch'
                    >
                        Front-End
                    </div>

                    <div
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        className=' text-black text-center  ml-5 text-5xl md:text-8xl  catch'
                    >
                        Web Developer
                    </div>



                </div>

                {/* <div >
                    <motion.div
                        initial={{ z: 0, opacity: 0, scale: 0.9 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 1.4 }}
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        className=' text-black text-center text-2xl md:text-2xl gilroy m-5 z-10'
                    >
                        Tomás Oliveira

                    </motion.div>
                </div> */}

                {/* <Svg /> */}
            </section>


            {/* Wave Section */}
            <div className='bg-black flex flex-col sm:h-10vh md:h-50vh z-10 w-full'>
                <Image
                    width={2000}
                    height={800}
                    className='object-cover mt-[-10px] z-10 rotate-180 h-full'
                    src={"/wave3.svg"}
                    alt="Wave Image"
                />
            </div>

            <section className='h-auto'>

                <Description />

                <div className='overflow-visible flex justify-center' >
                    <Portrait />
                </div>
            </section>



            <div className='bg-black flex flex-col sm:h-10vh md:h-50vh w-full'>
                <Image
                    width={2000}
                    height={800}
                    className='object-cover h-full'
                    src={"/wave3.svg"}
                    alt="Wave Image"
                />
            </div>

            <section className='h-screen bg-white'>
                asda
            </section>



            {/* Projects Section */}
            <div className='h-auto p-5 mt-[-10px] bg-white'>
                <div className=' text-7xl md:text-8xl p-2 w-screen text-black text-center catch'>
                    Projects
                </div>


                {/* Project List Section */}


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

        </main>

    )
}

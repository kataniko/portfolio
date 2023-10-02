'use client'
import Image from 'next/image'
import { useEffect, useState, useRef } from "react"
import Mousefollow from "./components/mousefollow.js";
import { motion } from "framer-motion"
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Animation from './components/Animation.js';
import Description from './components/Description/description.js'
import ThreeDHoverBox from './components/ThreeDHoverBox.js';
import Svg from './components/Svg.js';



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

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const handleMouseEnter = () => {
    gsap.to('.my-element', { scale: 1.1, duration: 0.5 });
  };

  const handleMouseLeave = () => {
    gsap.to('.my-element', { scale: 1, duration: 0.3 });
  };

  return (
    <main className="min-h-screen min-w-screen ">
      <Svg />
      <div className='h-screen w-screen bg-white'>
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
            onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-black text-center text-5xl md:text-8xl catch pt-24 md:pt16 '>
            Tomás <p className='text-black text-center mt-2 text-5xl md:text-8xl baca'>Oliveira</p>
          </motion.div>
        </div>

        <div className='w-screen flex justify-center mt-20'>

          <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-black text-center  mt-2 text-2xl md:text-5xl absolute bottom-10 left-20 catch'>Front-End</div>

          <div className='p-5 z-20'>
            <ThreeDHoverBox />
            
          </div>

          <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-black text-center mt-10 text-2xl md:text-5xl absolute bottom-10 right-20 absolute catch'>Web Developer</div>

        </div>

      </div>

      <div className='bg-transparent flex flex-col  h-[400vh] w-full'>

        <Image width={2000} height={800} className='object-fit absolute rotate-180' src={"/wave3.svg"} />

        <Animation />

        <Description />

      </div>
    </main>
  )
}

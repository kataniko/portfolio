import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';

const phrases = ["Hello,", "I'm Tomás Oliveira, a frontend developer with a passion,","for creating engaging user experiences.","Welcome to my portfolio!",]

export default function Index() {

    return (
        <div className={styles.description} >
            {
                phrases.map((phrase, index) => {
                    return <AnimatedText key={index}>{phrase}</AnimatedText>
                })
            }
        </div>
    )
}

function AnimatedText({ children }) {
    const text = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "0px bottom",
                end: "400px bottom",
            },
            opacity: 0,
            left: "-200px",
            ease: "power3.Out"
        })
    }, [])

    return <p className='catch text-3xl md:text-6xl' ref={text}>{children}</p>
}
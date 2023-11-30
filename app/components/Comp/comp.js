import React, { useRef, useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';
import Image from 'next/image';

const phrases = [
    { text: "Hello,", start: "0px bottom", end: "200px bottom" },
    { text: "I'm Tomás Oliveira, a frontend developer with a passion,", start: "200px bottom", end: "400px bottom" },
    { text: "for creating engaging user experiences.", start: "400px bottom", end: "600px bottom" },
    { text: "Welcome to my portfolio!", start: "600px bottom", end: "800px bottom" },
];

export default function Index() {
    return (
        <div className={styles.description}>
            {phrases.map((phrase, index) => (
                <AnimatedText key={index} start={phrase.start} end={phrase.end}>
                    {phrase.text}
                </AnimatedText>
            ))}
        </div>
    );
}

function AnimatedText({ children, start, end }) {
    const text = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start,
                end,
            },
            opacity: 0,
            top: "-200px",
            ease: "power2.Out",
        });
    }, [start, end]);

    return (
        <p className='catch text-4xl text-center p-2 md:text-6xl w-4/4' ref={text}>
            {children}
        </p>
    );
}

import React, { useRef, useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';

const phrases = [
    { text: "zzzzzzzzzzzz", start: "100px bottom", end: "100px bottom" },
    { text: "zzzzzzzzzzzz", start: "110px bottom", end: "200px bottom" },
    { text: "zzzzzzzzzzzz", start: "210px bottom", end: "300px bottom" },
]

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
            bottom: "-100px",
            ease: "power2.Out",
        });
    }, [start, end]);

    return (
        <p className='catch text-4xl text-center p-2 md:text-6xl w-4/4' ref={text}>
            {children}
        </p>
    );
}

export default function description2 (){
    return (
        <div className={styles.description2}>
            <AnimatedText>
                {phrases.map((phrase, index) => (
                    <div key={index} start={phrase.start} end={phrase.end}>
                        {phrase.text}
                    </div>
                ))
                }
            </AnimatedText>
        </div>
    )
}


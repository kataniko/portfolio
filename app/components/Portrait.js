import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

const Portrait = () => {
    const image = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(image.current, {
            scrollTrigger: {
                trigger: image.current,
                start: 'top center', // Adjust as needed
                end: 'bottom center', // Adjust as needed
                scrub: true,
            },
            opacity: 0,
            
            ease: 'power2.out',
        });
    }, [image]);

    return (
        <Image
            ref={image}
            alt="2"
            className= "absolute h-full right-0 top-0  "
            width={1500}
            height={500}
            src="/4.png"
        />
    );
};

export default Portrait;

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
                start: 'top bottom', // Adjust as needed
                end: 'center center', // Adjust as needed
                scrub: true,
              },
              opacity:0,
            
            ease: 'power2.out',
        });
    }, [image]);

    return (
        <Image
            ref={image}
            alt="2"
            className="h-full z-1 "
            width={1200}
            height={500}
            src="/5.png"
        />
    );
};

export default Portrait;
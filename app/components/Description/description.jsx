import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';



export default function FreshIdeaTesting() {
  useEffect(() => {
    gsap.config({ trialWarn: false });
    gsap.registerPlugin(ScrollTrigger);

    const split = new SplitType('#target', { type: 'chars' }); // Use SplitType

    const anim = gsap.to(split.chars, {
      //   delay: 1,
      color: 'white', // Change color to white
      stagger: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: ".parent",
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="parent">
      <div className="child">
        <div id="target">
          <p className='catch text-4xl text-black text-center p-2 md:text-6xl w-full text-center'>
            To solve modern business challenges, we have
            , innovative tools,
            and a different outlook on creativity.
          </p>
        </div>
      </div>
    </div>
  );
}

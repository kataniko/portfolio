import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function FreshIdeaTesting() {
  useEffect(() => {
    gsap.config({ trialWarn: false });
    gsap.registerPlugin(ScrollTrigger);

    const split = new SplitType("#target", { type: "chars" });

    const anim = gsap.to(split.chars, {
      color: "white",
      stagger: 0.1, // Adjusted stagger value for smoother animation
      ease: "none",
      scrollTrigger: {
        trigger: ".parent",
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="parent h-screen w-screen z-20 flex items-center">
      <div className="child w-full">
        <div className="flex flex-col items-center pl-10 w-full" id="target">
          <p className="futura flex text-5xl mt-10 text-[#262626] text-left md:text-8xl w-full ">
            Tailwind
          </p>
          <p className="futura text-5xl mt-10 text-[#262626] text-left md:text-8xl w-full ">
            Gsap
          </p>
          <p className="futura text-5xl mt-10 text-[#262626] text-left md:text-8xl w-full ">
            React.js
          </p>
          <p className="futura text-5xl mt-10 text-[#262626] text-left md:text-8xl w-full ">
            Responsive Design
          </p>
          <p className="futura text-5xl mt-10 text-[#262626] text-left md:text-8xl w-full ">
            Tailwind
          </p>
          <p className="futura text-5xl mt-10 text-[#262626] text-left md:text-8xl w-full ">
            Gsap
          </p>
          <p className="futura text-5xl mt-10 text-[#262626] text-left md:text-8xl w-full ">
            React.js
          </p>
          <p className="futura text-5xl mt-10 text-[#262626] text-left md:text-8xl w-full ">
            Responsive Design
          </p>
        </div>
      </div>
    </div>
  );
}

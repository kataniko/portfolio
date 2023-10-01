// components/Animation.js

// Import necessary React hooks and GSAP from their respective packages
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Animation() {
  // Create a reference to the DOM element we want to animate
  const animationRef = useRef();

  useLayoutEffect(() => {
    // Get the DOM element from the reference
    const element = animationRef.current;

    // Create a GSAP animation using the `fromTo` method
    gsap.fromTo(
      element,            // The DOM element to animate
      {                   // Initial properties (start state)
        opacity: 0,       // Start with opacity 0 (invisible)
        x: -100           // Start with an x-position of -100px (shifted to the left)
      },
      {                   // Target properties (end state)
        opacity: 1,       // End with opacity 1 (fully visible)
        x: 0,             // End with an x-position of 0px (original position)
        duration: 1,      // Animation duration in seconds
        ease: 'power2.out' // Easing function (smooth animation)
      }
    );
  }, []); // The empty dependency array means this effect runs once, like componentDidMount in class components

  return (
    <div ref={animationRef}>
      {/* Your content to be animated */}
      {/* Here, you have a div with some classes and text */}
      <div className='text-7xl md:text-10xl w-screen text-center catch mt-5 md:mt-20 '>
        About Me
      </div>
    </div>
  );
}

export default Animation;

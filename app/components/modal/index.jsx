import { useRef, useEffect } from 'react';  // Import React hooks
import { motion } from 'framer-motion';  // Import Framer Motion for animations
import Image from 'next/image';  // Import Next.js Image component
import styles from './style.module.css';  // Import CSS styles
import gsap from 'gsap';  // Import GSAP (GreenSock Animation Platform)

// Define animation variants for the modal
const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" }, // Initial state with a scale of 0 and centered
    enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } }, // Enter animation
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } } // Close animation
}

// Export the main component
export default function Index({ modal, projects }) {
    const { active, index } = modal;  // Destructure 'modal' prop into 'active' and 'index'
    const modalContainer = useRef(null);  // Create a ref for the modal container
    const cursor = useRef(null);  // Create a ref for the cursor element
    const cursorLabel = useRef(null);  // Create a ref for the cursor label element

    // Set up GSAP animations to move the modal container, cursor, and cursor label
    useEffect(() => {
        // Move the modal container
        let xMoveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
        let yMoveContainer = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });

        // Move the cursor
        let xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
        let yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });

        // Move the cursor label
        let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
        let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });

        // Add a mousemove event listener to track mouse movement
        window.addEventListener('mousemove', (e) => {
            const { pageX, pageY } = e;
            xMoveContainer(pageX);
            yMoveContainer(pageY);
            xMoveCursor(pageX);
            yMoveCursor(pageY);
            xMoveCursorLabel(pageX);
            yMoveCursorLabel(pageY);
        });
    }, []);  // Run this effect only once, similar to componentDidMount

    return (
        <>
            <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
                <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
                    {
                        projects.map((project, index) => {
                            const { src, color } = project;
                            return <div className={styles.modal} style={{ backgroundColor: color }} key={`modal_${index}`}>
                                <Image
                                    src={`/images/${src}`}
                                    width={1000}
                                    height={300}
                                    alt="image"
                                />
                            </div>
                        })
                    }
                </div>
            </motion.div>
            
            <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
        </>
    )
}

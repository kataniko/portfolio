"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Mousefollow = () => {

    const [point, setPoint] = useState({ x: 0, y: 0 });
    const { x, y } = point;
    const ref = useRef();
    const [cursorVariant, setCursorVariant] = useState("default");
    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

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

    return (
        <motion.div
            ref={ref}
            variants={variants}
            animate={cursorVariant}
            className="mousefollow"
            style={{
                transform: `translate(${x}px, ${y}px)`,
            }}
        ></motion.div>
    );
};

export default Mousefollow;
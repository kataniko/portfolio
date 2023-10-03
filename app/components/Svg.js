import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion"

export default function Svg() {

    const [strokeDashArray, setStrokeDashArray] = useState(0);
    const [strokeDashOffset, setStrokeDashOffset] = useState(0);
    const lineRef = useRef();
    const watcher = () => {
        const scrollPercent =
            (document.body.scrollTop +
                document.documentElement.scrollTop) /
            (document.documentElement.scrollHeight -
                document.documentElement.clientHeight);

        const length = lineRef.current.getTotalLength();
        const draw = 10 * length * scrollPercent;

        setStrokeDashOffset(length - draw);
    };

    useEffect(() => {
        const length = lineRef.current.getTotalLength();
        setStrokeDashArray(length);
        setStrokeDashOffset(length);

        window.addEventListener("scroll", watcher);
        return () => {
            window.removeEventListener("scroll", watcher);
        };
    }, []);

    return (
        <div className="flex justify-center">
            <motion.svg initial={{ z: 0, opacity: 0, scale: 1 }}
                animate={{ x: 0, opacity: 1, scale: 1, }}
                transition={{ duration: 1.4, }} id="svgcontent" className="svg-drawing absolute z-10" width="332" height="1078" viewBox="0 0 332 1078"  fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={lineRef}
                    fill="none"
                    stroke="#222222"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeDasharray={strokeDashArray}
                    strokeDashoffset={strokeDashOffset}
                    fillRule="nonzero"
                    markerStart=""
                    markerMid=""
                    markerEnd=""
                    id="svg_1" d="M54.5 0.5C48.5 60.6667 40.1 212.2 54.5 337C72.5 493 128.5 536 243 523.5C357.5 511 353 390.5 274.5 350.5C196 310.5 62 333 17.5 501.5C-18.1 636.3 12.6666 835.333 32.5 918L63 1077" />
            </motion.svg>
        </div>
    );
};



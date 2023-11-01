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
        const draw = 1 * length * scrollPercent;

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
                animate={{ x: 0, opacity: 0.2, scale: 1, }}
                transition={{ duration: 1.4, }} id="svgcontent" className="svg-drawing absolute z-10" width="355" height="3999" viewBox="0 0 355 3999"  fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    id="svg_1" d="M138.999 0C140.999 313.2 139.832 532.167 138.999 602.5V896.5C173.499 982.5 238.267 1112.1 142.267 1200.5C46.2672 1288.9 -8.49979 1183.5 2.5 1111.5C6.96147 1082.3 61.8315 979.4 154.232 1081C246.632 1182.6 286.499 1312.5 298.999 1481.5C308.947 1616 289.899 1772.6 215.499 1913C122.499 2088.5 79.5837 2162.52 102.499 2300.5C117.862 2393 370.69 2387 353.499 2285C338.499 2196 244.499 2174.5 180.499 2253.5C152.908 2287.56 148.121 2348.42 102.499 2501C57.499 2651.5 102.499 2819.5 102.499 2819.5L144.5 2984L149 3281.5L90.999 3534.5V4000.5" />
            </motion.svg>
        </div>
    );
};



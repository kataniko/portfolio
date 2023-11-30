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
        setStrokeDashOffset(length);
        setStrokeDashArray(length);

        window.addEventListener("scroll", watcher);
        return () => {
            window.removeEventListener("scroll", watcher);
        };
    }, []);

    return (
        <div className="w-screen absolute top-[50vh] ">
            <motion.svg initial={{ z: 0, opacity: 0, scale: 1 }}
                animate={{ x: 0, opacity: 1, scale: 1, }}
                transition={{ duration: 1.4, }} id="svgcontent" className="svg-drawing "width="200" height="350" viewBox="0 0 467 709" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={lineRef}
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeDasharray={strokeDashArray}
                    strokeDashoffset={strokeDashOffset}
                    fillRule="nonzero"
                    markerStart=""
                    markerMid=""
                    markerEnd=""
                    id="svg_1" d="M36 708.5L24.5 646.5L23 620L24.5 594L25.5 568.5L23 533.5M23 533.5L1 523L11.5 477L15 441.5L17.5 410.5L27 356.5L31 334L39.5 308.5L58 283L83.5 263L118 241.5L152 225M23 533.5H60.516L47.5 439L84 704M152 225L163.5 227H190.5H224L251 219L265 217L283 219M152 225L164.5 217L215 210L244.5 209L265 212.5M152 225L164.5 210L167.5 199L161.5 189M283 219L265 212.5M283 219L288 216M283 219L379 259L403 286.5L420 323L443 404.5L455 467.5L466 483L443 502M265 212.5L220.5 174M271.5 57.5V54.5L270.5 46.5L262.5 25.5L256 11.5L246.5 4L228 0.5H209L185 5.5L167.5 11.5L151.5 21.5L129.5 37L118 55.5L120 82.5L118 104L123 124.5L129.5 137.5L136 147.5L144.5 160L159.5 184L161.5 189M271.5 57.5L281.5 67.5L293 88L295.5 95.5L297.25 97.75M271.5 57.5V77.5L262.5 109.5L252 111L242.91 90.927M299 100L296.5 99.4304M299 100L296.5 108L295.5 114L293 120L293.371 121.188M299 100L297.25 97.75M224.5 118L220.5 108V98V91L224.5 84.5L232.5 82.5L242.91 90.927M224.5 118L230 133L243 143M224.5 118L215 161L212 175.5L161.5 189M243 143L252 174L270 203L288 216M243 143L251 137.5M288 216L295.5 211.5L296.5 202.5V189L299 184L296.5 181.5L302 175.5L300.5 172L302 166L307.5 161V155L302 144.5M302 144.5L311 133L315 120L316 105M302 144.5L296.5 140L295.5 128L293.371 121.188M316 105L296.5 99.4304M316 105H311L293.371 121.188M296.5 99.4304L291 98.1772M242.91 90.927L243 91H259.5L291 98.1772M443 502L439.5 537.5L445.5 577L442 602L435 630L415.5 665.5L397 708.5M443 502L400.042 516L402.693 495.5L410 439L382 655.5L386 704M297.25 97.75L291 98.1772M291 98.1772L288 101.5M184 495.5L144.5 498L146 511.5L150.5 527.5H158L184 571.5L190 600H182L187.909 625C224.409 625 223.488 625 224.409 622.5C227.209 614.9 226.167 602.5 225 596L221.5 594.5L216 567L225 520.5L231 519.5L224 492.5L184 495.5ZM184 495.5L190 521.5M190 521.5L187 524L192.5 531.5L194.5 524L190 521.5ZM294.5 550.5V580L247.5 571.5V550.5H257L270 506.5L245 474H237L231 448.5L268 444.5M294.5 550.5H289.5L294.5 533.5L302 547.5L294.5 550.5ZM294.5 550.5L298 580L337.5 568.5L332.5 543H327.5L315.5 470H322L317.5 444.5H270L276.5 472.5M276.5 472.5H283L288.5 487L273 472.5H276.5ZM220.5 334L224 349.5H201.5L194.5 313L264.5 305.866L273 305L283 342L260 345.5L257 334H254L270 404.5H278L283 428L264.5 430L237 432L231 407.5L242 404.5L228 334H220.5ZM183.5 347L132.5 349.5L121.5 364L132.5 424L139.5 463L153 474L209 470L221.5 459L213.5 421L201.5 360.5L183.5 347ZM150.5 373.5L166 451.5L192.5 448.5L177 371L150.5 373.5Z" />

            </motion.svg>
            
        </div>
    );
};



import React, { useRef, useState, useEffect } from "react";

export default ({ name }) => {
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
        <svg id="svgcontent" className="svg-drawing absolute z-10 mt-251 ml-335" width="993" height="849" viewBox="0 0 993 849" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                id="svg_1" d="M795.5 29C846 6.99996 835.5 9.49996 872.5 1.99996C902.1 -4.00004 938.333 14.5 948 29C962.333 50.5 986.195 80.41 991.5 125.5C996.5 168 962.341 207.238 886.5 183C789.5 152 838.5 73.5 899.5 93C942 110 965 145 969 224.5C971.615 276.473 945.36 385.491 886.5 432.5C812 492 526.833 572.333 370.5 612C205.167 651.833 123.272 787.034 62.9997 801.5C25.5 810.5 -0.999842 792 1.5 759C7 730.5 33.9681 710.228 72 722C114 735 157.397 802.552 118.5 822C90.4997 836 18.5 849 5.5 849"/> 
        </svg>
    );
};



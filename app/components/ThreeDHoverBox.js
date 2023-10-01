import React, { useState } from 'react';

function ThreeDHoverEffect() {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false); // Set isHovered to false when mouse leaves
        const el = document.querySelector('.tilt'); // Get the element
        el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'; // Reset transform
    };


    const handleMouseDown = () => {
        setIsClicked(true);
    };

    const handleMouseUp = () => {
        setIsClicked(false);
    };

    const handleMouseMove = (e) => {
        const el = e.currentTarget;
        const width = el.clientWidth;
        const height = el.clientHeight;

        const xVal = e.nativeEvent.offsetX;
        const yVal = e.nativeEvent.offsetY;

        const yRotation = 10 * ((xVal - width / 2) / width);
        const xRotation = -10 * ((yVal - height / 2) / height);

        const transformString = `perspective(500px) scale(${isClicked ? 0.9 : isHovered ? 1.1 : 1}) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

        el.style.transform = transformString;
    };

    return (
        <div
            className={`tilt ${isClicked ? 'clicked' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            {/* Your content goes here */}
            <div className="content text-white text-4xl">

            </div>
        </div>
    );
}

export default ThreeDHoverEffect;

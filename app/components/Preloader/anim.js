export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: { duration: 2, delay: 1 }
    },
}

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: { duration: 2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
}
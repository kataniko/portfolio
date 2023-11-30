import styles from './style.module.scss';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';


const words = ["Hey", "Olá", "Bonjour", "Ciao", "Ahln", "やあ", "Hallå", "Guten tag", "Enjoy"];

export default function Index() {
   
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const index2Ref = useRef("");

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index === words.length - 1) return;

        setTimeout(() => {
            setIndex(index + 1);
            index2Ref.current = "blue"; // Set the "fake" dependency when you want to play
        }, index === 0 ? 1000 : 150);
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.4 }
        }
    };

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 &&
                <>
                    <motion.p className='catch' variants={opacity} initial="initial" animate="enter">
                        <span></span>
                        {words[index]}
                    </motion.p>
                    <svg>
                        <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                    </svg>
                </>
            }
        </motion.div>
    );
}

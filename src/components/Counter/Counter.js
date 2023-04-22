import style from "./Counter.module.css"
import React, { useState } from "react";

import { IoIosArrowBack as Arrow } from "react-icons/io"
import { easeIn, easeInOut, easeOut, motion } from "framer-motion"
import { hover } from "@testing-library/user-event/dist/hover";



const containerVariants = {
    initial: {
        scale: 1
    },
    animate: {
        transition: {
            ease: easeInOut,
            duration: 0.5,
            type: "spring",

        }
    },
    tap: {
        scale: 0.95,


    },
    hover: {
        scale: 1.05,
        transition: {
            // ease: easeInOut,
            // duration: 0.5,
            type: "spring",
            damping: 8
        }

    }
}

const buttonVariants = {
    buttonTap: {
        color: "#FC271D",
        x: -500,

        transition: {
            // duration: 0.3,
            ease: easeInOut
        }
    },
    hover: {
        color: "#FC271D",
    }
}

const Counter = () => {
    const [count, setCount] = useState(0)
    const [increase, setIncrease] = useState(true)

    const decreaseCount = () => {
        setIncrease(false);
        setCount(count - 1);
    }
    const increaseCount = () => {
        setIncrease(true);
        setCount(count + 1);
    }
    return <>
        <motion.div
            className={style.container}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            whileTap="tap"
            whileHover="hover"
        >
            <div className={style.left}>
                <button onClick={decreaseCount}

                    className={style.arrowButton}>
                    <motion.span
                        variants={buttonVariants}
                        whileTap={"buttonTap"}
                    >
                        <Arrow />
                    </motion.span>
                </button>

            </div>
            <div className={style.number}>
                <motion.span key={count} animate={{ x: [increase ? 140 : -140, 0] }} transition={{ ease: easeOut, duration: 0.3, delay: 0.2 }}>{count}</motion.span>

            </div>
            <div className={style.right}>
                <button
                    onClick={increaseCount}
                    className={style.arrowButton}>
                    <motion.span
                        variants={buttonVariants}
                        whileTap={"buttonTap"}
                    >
                        <Arrow />
                    </motion.span>
                </button>
            </div>
        </motion.div>
    </>;
};

export default Counter;

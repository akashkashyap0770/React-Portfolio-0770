import React, { useEffect, useRef } from 'react'
import { HERO_CONTENT } from "../constants/index";
import ProfilePic from "../assets/akashProfile.jpg";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import Typed from "typed.js";
import resume from '../assets/resume.pdf';


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0, opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})


const Hero = () => {

    const name = ("AKASH KASHYAP");

    const anim = useRef(null);
    useEffect(() => {
        const typed = new Typed(anim.current, {
            strings: ["FrontEnd Developer"], // Strings to display
            // Speed settings, try different values until you get good results
            typeSpeed: 100,
            backSpeed: 100,
            startDelay: 100,
            backDelay: 300,
            loop: true,
            smartBackspace: true,
            showCursor: true,
            cursorChar: "!",
        });
        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35 '>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 pb-8'>
                    <div className='flex flex-col items-center lg:items-start mx-10'>
                        <motion.h6
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='pb-8 text-4xl tracking-tight lg:mt-16 lg:text-7xl'>{name}</motion.h6>
                        <motion.h2
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className='h-16 w-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent'><span ref={anim}></span></motion.h2>
                        <motion.p
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            className='pb-8 max-w-xl font-light text-justify tracking-tighter'>{HERO_CONTENT}</motion.p>

                        <motion.a
                            variants={container(1.8)}
                            initial="hidden"
                            animate="visible"
                            href={resume} className='flex justify-center items-center px-10 py-2 text-lg text-white bg-purple-800 hover:bg-purple-600 shadow rounded text-lg font-semibold duration-500' download={resume}>Resume <FaDownload className='text-white m-2' /></motion.a>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className='mx-20 flex justify-center p-2 w-fit rounded-full border-4 border-white'>
                        <img src={ProfilePic} width={400} height={400} className='rounded-full hover:scale-110 duration-500 cursor-pointer' alt="Akash kashyap" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero


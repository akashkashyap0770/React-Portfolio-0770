import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
import { RiBootstrapLine } from 'react-icons/ri';
import { RiJavascriptLine } from 'react-icons/ri';
import { RiHtml5Line } from 'react-icons/ri';
import { RiCss3Line } from 'react-icons/ri';
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y:[10, -10],
        transition: {
            duration: duration,
            ease: "linear", 
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
        whileInView={{y: 0, opacity: 1}}
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1.5}}
        className='my-10 text-center text-4xl'>Technologies</motion.h1>
        <motion.div
        whileInView={{x: 0, opacity: 1}}
        initial={{x: -100, opacity: 1}}
        transition={{duration: 1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiHtml5Line className='text-7xl text-orange-400 hover:scale-x-125 hover:scale-y-125 duration-200 cursor-pointer'/>
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiCss3Line className='text-7xl text-blue-600 hover:scale-x-125 hover:scale-y-125 duration-200 cursor-pointer'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiJavascriptLine className='text-7xl text-yellow-400 hover:scale-x-125 hover:scale-y-125 duration-200 cursor-pointer'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400 hover:scale-x-125 hover:scale-y-125 duration-200 cursor-pointer'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className='text-7xl text-blue-400 hover:scale-x-125 hover:scale-y-125 duration-200 cursor-pointer'/>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiBootstrapLine className='text-7xl text-violet-500 hover:scale-x-125 hover:scale-y-125 duration-200 cursor-pointer'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-10 text-center text-4xl">
        About
        <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
        whileInView={{x: 0, opacity: 1}}
        initial={{x: -100, opacity: 0}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex p-2 items-center justify-center w-fit border-4 mx-20">
            <img className="rounded-2xl hover:scale-x-110 hover:scale-y-110 duration-500 cursor-pointer" src={aboutImg} width={400} height={400} alt="about" />
          </div>
        </motion.div>
        <motion.div
        whileInView={{x: 0, opacity: 1}}
        initial={{x: 100, opacity: 0}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2">
          <div className="flex mx-10 p-1 justify-center lg:justify-start">
            <p className="my-2 max-xl py-6 text-justify">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

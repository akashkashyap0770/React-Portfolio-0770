import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {

    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="my-10 pb-4 text-center text-4xl">
                Get in Touch
            </motion.h1>
            <div className="flex flex-wrap items-center justify-center">
                <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 pb-8">
                 <div className="text-center tracking-tighter ">
                    <p className="my-4 ">
                        {CONTACT.address}
                    </p>
                    <p className="my-4">
                        {CONTACT.phoneNo}
                    </p>
                    <a href="#" className="border-b">
                        {CONTACT.email}
                    </a>
                 </div>
                </motion.div>
                <motion.div 
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 flex flex-col lg:items-center">
                    <form action="https://formspree.io/f/mkndaqlg" className="flex flex-col gap-4 p-2 text-purple-800 font-semibold" method="POST">
                    <input className="p-2 rounded-sm" type="text" name="name" placeholder="Enter your Name" autoComplete="off" required/>
                    <input className="p-2 rounded-sm" type="email" name="email" placeholder="Enter your Email" autoComplete="off" required/>
                    <textarea className="p-2 rounded-sm" name="message" cols="30" rows="3" placeholder="Write your message" autoComplete="off" required/>
                    <button className="p-2 rounded text-white bg-purple-800 hover:bg-purple-600 text-lg font-semibold duration-500" type="submit" value="send">Submit</button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;

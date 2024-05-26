import React from 'react';
import logo from "../assets/logo.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='mb-10 flex items-center justify-between py-2'>
    <div className='flex flex-shrink-0 items-center'>
      <img className='mx-10 w-12 hover:rotate-180 duration-500 cursor-pointer' src={logo} alt="logo" />
    </div>
    <div className='m-8 flex items-center justify-center gap-5 text-4xl'>
    <Link to="https://www.linkedin.com/in/akashkashyap0770/" target='_blank'><FaLinkedin className='p-1 text-sky-500 hover:text-sky-600 rounded-md border-2 border-white hover:scale-x-125 hover:scale-y-125 duration-200'/></Link>
    <Link to="https://github.com/akashkashyap0770" target='_blank'><FaGithub className='p-1 text-gray-500 hover:text-gray-600 rounded-md border-2 border-white hover:scale-x-125 hover:scale-y-125 duration-200'/></Link>
     <Link to="https://www.akashkashyap0770@gmail.com" target='_blank'><MdOutlineMail className='p-1 text-red-500 hover:text-red-600 rounded-md border-2 border-white hover:scale-x-125 hover:scale-y-125 duration-200'/></Link>
    <Link to="https://www.instagram.com/this_is_akash0770/" target='_blank'><FaInstagram className='p-1 bg-gradient-to-r from-blue-800 via-purple-700 via-pink-800 via-red-600 via-orange-500 to-yellow-200 rounded-md border-2 border-white hover:scale-x-125 hover:scale-y-125 duration-200'/></Link>
    </div> 
    </nav> 
  )
}

export default Navbar


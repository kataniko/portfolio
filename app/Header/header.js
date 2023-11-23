'use client'
import React from 'react'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";
import './header.css'
import { motion } from "framer-motion"


export default function Header() {

  return (

    <nav className='w-auto bg-white absolute top-10 right-10 text-black'>

      <div className='gilroy'>
        Menu
      </div>

      <div className='flex'>
        <div className='text-neutral-400 gilroy'>

          <div >
            1 -------
          </div>
          <div>
            2 -------
          </div>
          <div>
            3 -------
          </div>

          <div>
            4 -------
          </div>
        </div>
        <div className='border-black flex flex-col'>

          <motion.a
            initial={{ x: +800, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 0.9, }}
            transition={{ duration: 1.4, }}

          >

            About
          </motion.a>

          <motion.a
            initial={{ x: +800, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 0.9, }}
            transition={{ duration: 1.6, }}

          >
            Skills
          </motion.a>

          <motion.a
            initial={{ x: +800, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 0.9, }}
            transition={{ duration: 1.8, }}

          >
            Projects
          </motion.a>

          <motion.a
            initial={{ x: +800, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 0.9, }}
            transition={{ duration: 2, }}

          >
            Contact
          </motion.a>
        </div>
      </div>
      <div>
        
      </div>

    </nav>
  )
}


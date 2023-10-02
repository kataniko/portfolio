'use client'
import React from 'react'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";
import './header.css'
import { motion } from "framer-motion"
import { SlArrowRight } from 'react-icons/sl';

function page() {
  const [activeNav, setActiveNav] = useState("#");
  return (

    <nav>

      <motion.a
        initial={{ x: +800, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 0.9, }}
        transition={{ duration: 1.4, }}
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <SlArrowRight/>
        About
      </motion.a>

      <motion.a
        initial={{ x: +800, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 0.9, }}
        transition={{ duration: 1.6, }}
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        Skills
      </motion.a>

      <motion.a
        initial={{ x: +800, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 0.9, }}
        transition={{ duration: 1.8, }}
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        Projects
      </motion.a>

      <motion.a
        initial={{ x: +800, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 0.9, }}
        transition={{ duration: 2, }}
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        Contact
      </motion.a>

    </nav>
  )
}

export default page
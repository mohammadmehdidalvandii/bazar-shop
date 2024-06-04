"use client"
import React, { useEffect, useState } from 'react';
import style from '../style/ScrollToTop.module.css';
import { MdOutlineArrowDropUp } from "react-icons/md";


function ScrollToTop() {
    const [isVisible , setIsVisible] = useState(false);
    
    useEffect(()=>{
        const toggleVisibility = ()=>{
            window.scrollY > 120 ? setIsVisible(true): setIsVisible(false);
        }
        window.addEventListener("scroll", toggleVisibility)
        return()=> window.removeEventListener("scroll", toggleVisibility);
    },[])
    const scrollToNavTop =()=>{
        isVisible && window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }
  return (
        <button
         className={isVisible ? style.buttonVisible : style.button}
         onClick={scrollToNavTop}
        >
            <MdOutlineArrowDropUp/>
        </button>
  )
}

export default ScrollToTop
import React from 'react'
import { useState } from 'react'
import {close, logo, menu} from '../assets'
import {navLinks} from "../constanse"
import {motion} from "framer-motion"


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <motion.img whileHover={{scale:1.1}} transition={{ease: "easeIn", duration:0.5}} src={logo} alt="hoobank" className='w-[124px] h-[32px] cursor-pointer'/>\

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <motion.li
            whileHover={{scale:1.1, color:"#33bbcf", textShadow: "5px 3px 5px rgba(34,31,222,0.76)"}}
            whileTap={{scale:0.7}}
            transition={{ ease: "easeOut", duration: 0.3}}
            
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'} `}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </motion.li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer'>
            <img src={toggle ? close : menu} alt="menu"  className='w-[25px] h-[25px] object-contain'
            onClick={() => setToggle((prev) => !prev)}
             />


             <div  className={`${
                !toggle ? "hidden" : "flex"
                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

              <ul className='list-none flex justify-end items-center flex-col flex-1'>
                   {navLinks.map((nav, index) => (
                      <li
                         key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'} `}
                          >
                            <a href={`#${nav.id}`}>
                              {nav.title}
                            </a>
                          </li>
        ))}
      </ul>
             </div>
      </div>
    </nav>
  )
}

export default Navbar
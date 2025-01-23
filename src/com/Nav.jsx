// import React from 'react'
import  { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { motion } from 'motion/react';
// import logo from "../222.png"
const Nav = ({isauth,signout}) => {
  return (
    <motion.div animate={{opacity:[0,1]}} transition={{duration:1,delay:.7, ease:"easeInOut"}} className='flex w-[80%] m-auto bg-[#0d0d0d] h-16 pt-6 justify-between items-center text-white gap-2'> 
    <div className="">
    <Link to="/"><h1 className='text-white text-xl title '><span className='text-first'>T</span>ypo-<span className='text-second'>W</span>orld</h1></Link>
    </div>
    {/* <div className='text-white'><Link to="/post">Post</Link></div> */}
    <div>
   <IoMdMenu className='text-second text-3xl' />
    </div>
    {/* {isauth && <div><Link to="/post">Post</Link></div>  } 
      {isauth ? <button onClick={signout}>logout</button> : <div><Link to="/login">login</Link></div>}  */}
    </motion.div>
  )
}

export default Nav
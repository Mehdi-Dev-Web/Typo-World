
import  { Link } from 'react-router-dom'
import { motion } from 'motion/react';
import { CiCircleInfo } from "react-icons/ci";
import { useContext } from 'react';
import { ContextProvider } from '../context/contaxt';
import { useState } from 'react';


const Nav = () => {
  const { dispatch }= useContext(ContextProvider)
  const [show, setShow]= useState(true)
  const showpop = ()=>{
    dispatch({
      type : "show",
      payload : show
    })

  }
  return (
    <motion.div 
            animate={{opacity:[0,1]}} 
            transition={{duration:1,delay:.7, ease:"easeInOut"}} 
            className='flex w-[84%] m-auto bg-transparent h-12 pt-6 justify-between items-center text-white gap-2'> 

      <div className="">
         <Link to="/" 
           className='text-xl font-medium title'>
          <span className='text-first '>T</span>ypo 
           <span className='text-second'> W</span>orld
        </Link>
      </div>
  
    <div>
    <CiCircleInfo onClick={showpop} className='text-second text-4xl cursor-pointer'/>
    </div> 
  
    </motion.div>
  )
}

export default Nav
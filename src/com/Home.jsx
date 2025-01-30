/* eslint-disable react/no-unescaped-entities */

import { motion, useAnimate } from "motion/react"
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md"
import { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../context/contaxt";
import { useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { useEffect } from "react";
import Data from "../Data";
function Home() {
  const {num,pop,dispatch}=useContext(ContextProvider)
  const remove = false
  const [count, setCount] = useState(num)
  const [info , setInfo]= useState(Data)


const navigate = useNavigate()
const [scope , animate] = useAnimate()
const showing = ()=>{
  animate("#title",{x:[-3,0],opacity:[0,1]},{duration:.8,ease:"easeInOut"})
  animate("#desc",{opacity:[0,1]}, {duration:1.1,ease:"easeInOut"})
  animate("#letter",{y:[8,0] ,opacity:[0,1]},{duration:.5,ease:"easeInOut"})
  
}

useEffect(()=>{
  showing()
},[count])

const handleincreament = ()=>{
  if(info.length - 1 > count ){
    setCount((prevCount) => prevCount + 1)
  }else{
    setCount(0)
  }
}

const handledecreament = ()=>{
  if(count > 0 ){
    setCount((prevCount) => prevCount - 1)
  }else{
    setCount(info.length - 1)
  }
}

const backward =()=>{
  navigate('/post')
}
const closeit = ()=>{
 dispatch({
  type: "remove",
  payload : remove
 })
}


  return (
// container div   
  <div className=" w-full h-[87vh] flex flex-col justify-center items-center md:flex-row relative  "
  
        ref={scope}> 
       {pop  &&
            <div className="w-full h-full  absolute z-50 flex justify-center items-center ">
              <div onClick={closeit} className="w-full h-full bg-black opacity-50 blur-lg absolute"></div>
              <div className="bg-white max-w-[700px]  flex-col justify-center items-center py-10 px-6 text-center rounded-md z-50 ">
                <h1 className="title text-3xl font-bold">
                  Discover Typographic Terminology with Type World
                </h1>
                <p className="text-gray-600 mt-3">
                   Type World is the perfect companion for designers and web designers looking to build a solid foundation in typographic terminology. Whether you're new to typography or just refreshing your knowledge, Type Terms makes learning the basics easy and engaging.
                </p>
                <button className="py-2 px-10 bg-first text-white rounded-md mt-8 font-medium hover:bg-second"
                        onClick={closeit}>
                   Close
                </button>
        </div>
       </div>
       
       }

{/*  left and top side */}
     <div className="w-full md:h-full h-[75%] flex justify-center items-center relative overflow-hidden " >
        <div 
          id="letter"  >
            {info[count].show} {/* letter with animation */}
        </div>
     </div>

 {/*right and bottom side */}
    <div className="w-[85%] h-[50%] m-auto flex flex-col justify-center  bg-[#0d0d0d]  md:w-full ">
        {/* btn menu */}
          <motion.div  
            initial={{opacity:0}} 
            whileTap={{scale:1.3}} 
            animate={{opacity:1 ,y:[10,0]}} 
            whileHover={{scale:1.2}} onClick={backward} 
            className="hidden md:flex items-center cursor-pointer w-[100px] h-fit mb-4    ">
          <IoMdHome className="text-second " />
          <p className="text-gray-400 ml-1 ">MENU</p>

        {/* definitions and explaining*/}
          </motion.div>
            <div  className="w-full text-center md:text-start ">
             <h1 className="text-3xl  mb-[10px] md:text-6xl   text-first "id="title">
               {info[count].title} 
             </h1>
             <p  className="text-white  text-center text-sm md:text-start md:text-base   md:w-[82%] tracking-wide leading-relaxed" id="desc"> 
                {info[count].des}
             </p>
            </div>

        {/* btns forwords and backwords */}
        {/* previous */}
          <div className="flex w-full lg:w-[80%] mt-7 justify-between items-center">
           <motion.div 
              onClick={handledecreament } 
              whileTap={{scale:1.3}} 
              className="flex items-center cursor-pointer" 
              whileHover={{color:"white" , scale:1.2}} 
              initial={{opacity:0}} animate={{opacity:1 ,x:[10,0]}} 
              transition={{opacity:{delay:.4}}}>
                <MdArrowBackIos className="text-second" />
                <p  className="text-gray-400 cursor-pointer">SEE PREVIOUS</p>
            </motion.div>
    {/* next */}
            <motion.div 
               onClick={handleincreament} 
               whileTap={{scale:1.3}} 
               whileHover={{color:"white" , scale:1.2}} 
               initial={{opacity:0}} 
               animate={{opacity:1 ,x:[-10,0]}} 
               transition={{opacity:{delay:.4}}}  
               className="flex items-center gap-1 ">
                   <p  className="text-gray-400 cursor-pointer">SEE NEXT</p>
                   <MdArrowForwardIos className="text-second cursor-pointer" />
             </motion.div>
          </div>

    </div>
  </div>
 

  )
}

export default Home

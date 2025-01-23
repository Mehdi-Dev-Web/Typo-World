// import Tracking from "./Tracking"

// import { useState } from "react"
// import Home from "./Home"
// import { useNavigate } from "react-router-dom"
// import { useContext } from "react"
// import {  ContextProvider } from "../contaxt/contaxt"
import { animate } from "motion";
import { motion, useMotionTemplate, useMotionValue } from "motion/react"
import { useEffect } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";

function MainHome() {
  // const  {dispatch} = useContext(ContextProvider)
  // const navigate = useNavigate()
  // // const [nnn , setNnn]= useState(0)
  // const sendid = (nn)=>{
    
    //     dispatch({
      //         type :"change",
      //         payload : nn
      //     })
    //     navigate('/homy')
        
    
    
    // 
    // const COLORS = ["#8c4d83","#5f8a5e"];
    const COLORS = ["#FDC830","#F37335","#FF9A00"];

    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(100% 130% at 50% 0%,#0d0d0d 55%,${color})
    `;
   
    useEffect(()=>{
      animate(color,COLORS,{
        duration:3,
        ease:"easeInOut",
        repeat: Infinity,
        repeatType:"mirror"


      })
    },[])
  return (
    <motion.div 
      style={{
        backgroundImage,
        

      }}
      
      // transition={{duration: 2, repeat:Infinity, repeatType:"mirror"}}
     className="w-full h-[88.5vh] bg-[#0d0d0d] flex justify-center items-center overflow-hidden flex-col pb-14  ">
           <motion.h1 animate={{y:[10,0],opacity:[0,1]}} transition={{duration:.8,ease:"easeInOut"}} className="text-6xl  font-bold text-white text-center mb-5 ">
                   The Art and Science <br /> of Typography
               </motion.h1>
               <motion.p animate={{y:[10,0],opacity:[0,1]}} transition={{duration:.8,ease:"easeInOut", delay:.1}} className="text-center text-gray-300 ">Explore key font terms like kerning, tracking, and leading-each playing a vital role in shaping <br /> how text is displayed and perceived.</motion.p>
               < motion.button animate={{opacity:[0,1]}} transition={{duration:.5,ease:"backInOut", delay:.3}} className="py-2 px-4 text-white rounded-md hover:border-second mt-10 flex items-center gap-2 border-2 border-first"> <Link className="flex items-center gap-2" to="/post">Get Started <GrFormNextLink className="white" /></Link></motion.button>
      

            
        </motion.div>
  )
}

export default MainHome
  {/* <div> */}
        
      {/* </div> */}
 {/* line */}
        {/* <div className="w-[80%] m-auto h-[3px] bg-[#5f8a5e] absolute top-[450px] hover:bg-[#8c4d83] cursor-pointer"></div> */}

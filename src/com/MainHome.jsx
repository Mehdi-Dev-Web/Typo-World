/* eslint-disable react/no-unescaped-entities */
import { animate } from "motion";
import { motion, useMotionTemplate, useMotionValue } from "motion/react"
import { useContext } from "react";
import { useEffect   } from "react";
import { GrFormNextLink } from "react-icons/gr";

import { ContextProvider } from "../context/contaxt";
import { useNavigate } from "react-router-dom";

function MainHome() {
 
    const {pop,dispatch}= useContext(ContextProvider)
    const navigate = useNavigate()

    const close  = false
    const COLORS = ["#cf414f", "#e05a5a", "#f07a4a", "#FF9A00", "#ffb300", "#e5c220"," #c9b926"];
    // const COLORS = ["#FDC830","#F37335","#FF9A00"];

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
    })

    const closeit = ()=>{
      dispatch({
       type: "remove",
       payload : close
      })
     }
     const navigation = ()=>{
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
         if(isMobile){
           navigate("/homy")
          }else{
           navigate("/post")
         }
     }
  return (
    // parent div
    <motion.div 
      style={{
        backgroundImage,
      }}
       className="w-full h-[90.5vh] bg-[#0d0d0d] flex justify-center relative items-center overflow-hidden flex-col pb-14  ">
{/* pop up */}
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
                <button className="py-2 px-10 bg-first text-white rounded-md mt-8 font-medium hover:bg-second shadow-md"
                        onClick={closeit}>
                   Close
                </button>
        </div>
       </div>
       
       }
            {/* small title with explainition */}
              <motion.h1 
                 animate={{y:[10,0],opacity:[0,1]}} 
                 transition={{duration:.8,ease:"easeInOut"}} 
                 className=" text-3xl md:text-6xl font-bold text-white text-center mb-5 ">
                   The Art and Science <br /> of Typography
               </motion.h1>

               <motion.p 
                 animate={{y:[10,0],opacity:[0,1]}} 
                 transition={{duration:.8,ease:"easeInOut", delay:.1}} 
                 className="text-center w-[85%] md:text-base text-sm md:w-[40%] mx-auto    text-gray-300 ">
                     Explore key font terms like kerning, tracking, and leading-each playing a vital role in shaping how text is displayed and perceived.
                </motion.p>

             {/* call the action */}
               < motion.button
                 animate={{opacity:[0,1]}}
                 transition={{duration:.5,ease:"backInOut", delay:.3}} 
                 className="py-2 px-4 text-white rounded-md hover:border-second mt-10 flex items-center gap-2 border-2 border-first"
                 onClick={navigation}> Get Started <GrFormNextLink 
                 className="white" />
                 </motion.button>

              </motion.div>
  )
}
export default MainHome

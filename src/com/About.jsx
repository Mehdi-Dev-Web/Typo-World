// import { useAnimate } from "motion/react"
// import React from "react"
// // import { useEffect } from "react"
// const About = () => {
//   const [scope,animate] = useAnimate()

// import Hletter from "./Hletter";

 

//     const letterI = async()=>{
//       await animate("#dot",{X:200},{duration:2})
//      }
    

//   return (
//     <div className="bg-black flex justify-center items-center w-full h-screen">
//           <div ref={scope}  className="flex flex-col justify-center items-center gap-2">
//         <div id="dot" className=" w-[40px] h-[40px] rounded-[50%] bg-white"></div>
//         <div onClick={()=>letterI()} className="w-[40px] h-[200px] bg-white "></div>
//     </div>
//     </div>
//   )
// }

// export default About

import { useAnimate } from "motion/react";
import { useEffect } from "react";
const About = () => {
const [scope, animate]= useAnimate()
const spacing = async()=>{
  await animate(scope.current,{opacity:[0,1]},{duration:1.5})
  animate("#main",{backgroundColor:"red",width:["30px","80px"]},{
    duration: 1,
    delay: 0.3,
    repeat: Infinity,
    repeatType:"reverse",
    repeatDelay: 0.7,
    ease:"backInOut" })
}
useEffect(()=>{
  spacing()
},[])
  return (
    <div  className="bg-black flex justify-center items-center w-full h-screen">
      <div ref={scope} className="flex justify-center items-center">
         <h1 className="   font-bold text-[19rem] text-white translate-x-3">d</h1>
         <div id="main" className="w-[30px] h-[200px] mt-14 bg-gray-400" style={{transformOrigin: "left"}}></div>
         <h1 id="right" className="font-bold text-[19rem] text-white translate-x-[-1rem]">D</h1>
 
      </div>

    </div>
  );
};

export default About;

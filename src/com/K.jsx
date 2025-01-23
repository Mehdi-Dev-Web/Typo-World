import { useAnimate } from 'motion/react';
// import React from 'react'
import { useEffect } from 'react';
import top from "../bgimages/top of k.png"
import butt from "../bgimages/butt of k.png"
import line from "../bgimages/line of k.png"

function K() {
    const [ scope , animate] = useAnimate()
    const showing = async()=>{
        await animate(scope.current,{ opacity:[0,1]},{duration: 1});
        animate("#top",{ y:[0,-25]},{duration:.7,delay:.6, ease:"easeInOut",})
        animate("#line",{ opacity:[0,1] },{duration:.5,delay:.6, ease:"easeInOut"})
        animate("#butt",{ opacity:[1,.6]},{duration:.5,delay:.6})



    };
    useEffect(()=>{
        showing()
    },[]);
  return (
   <div ref={scope} className="flex justify-center items-center w-full h-screen">
        <img id="top" src={top} alt="" className="w-[400px] absolute object-cover" />
        <img id="line" src={line} alt="" className="w-[400px] opacity-0 absolute object-cover" />
        <img id="butt" src={butt} alt="" className="w-[400px] absolute object-cover" />
          
      </div>
     
  )
}

export default K
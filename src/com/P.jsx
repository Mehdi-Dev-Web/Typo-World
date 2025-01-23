import { useAnimate } from 'motion/react';
// import React from 'react'
import { useEffect } from 'react';
import p from "../bgimages/main of pp.png"
import butt from "../bgimages/bott of pp.png"
import line from "../bgimages/line of pp.png"

function Pletter() {
    const [scope , animate] = useAnimate()
    const showing = async()=>{
        await animate(scope.current,{ opacity:[0,1]},{duration: 1});
        animate("#p",{opacity:[1,.5]},{duration:.8,delay:.3, ease:"easeInOut",})
        animate("#line",{ opacity:[0,1]},{duration:.8,delay:.3, ease:"easeInOut",})
        animate("#butt",{ scale:[1,1.1],y:[0,11] },{duration:.8,delay:.3, ease:"easeInOut"})
        // animate("#right",{ opacity:[1,.6]},{duration:2,delay:.2})
    };
    useEffect(()=>{
        showing()
    },[]);
  return (
   <div ref={scope} className="flex justify-center items-center w-full h-screen">
        <img id="p" src={p} alt="" className="w-[400px] absolute object-cover" />
        <img id="line" src={line} alt="" className="w-[400px] absolute opacity-0 object-cover" />
        <img id="butt" src={butt} alt="" className="w-[400px] absolute object-cover" />
      </div>
     
  )
}

export default Pletter
import { useAnimate } from 'motion/react';
// import React from 'react'
import { useEffect } from 'react';
import top from "../bgimages/line of ee.png"
import e from "../bgimages/ee letters.png"

function Eletter() {
    const [ scope , animate] = useAnimate()
    const showing = async()=>{
        await animate(scope.current,{ opacity:[0,1]},{duration: 1});
        animate("#top",{ opacity:[0,1]},{duration:.8,delay:.3, ease:"easeInOut",})
        animate("#e",{ opacity:[1,.4] },{duration:.8,delay:.3, ease:"easeInOut"})
        // animate("#right",{ opacity:[1,.6]},{duration:2,delay:.2})
    };
    useEffect(()=>{
        showing()
    },[]);
  return (
   <div ref={scope} className="flex justify-center items-center w-full h-screen">
        <img id="top" src={top} alt="" className="w-[400px] absolute object-cover" />
        <img id="e" src={e} alt="" className="w-[400px] absolute object-cover" />
      </div>
     
  )
}

export default Eletter
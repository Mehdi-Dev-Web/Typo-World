import { useAnimate } from 'motion/react';
// import React from 'react'
import { useEffect } from 'react';
import left from "../bgimages/left of dd.png"
import right from "../bgimages/right of dd.png"

function D() {
    const [ scope , animate] = useAnimate()
    const showing = async()=>{
        await animate(scope.current,{ opacity:[0,1]},{duration: 1});
        animate("#left",{ x:[0,-35] , scale:[1,1.1]},{duration:.8,delay:.3, ease:"easeInOut",})
        animate("#right",{ opacity:[1,.5] },{duration:.8,delay:.3, ease:"easeInOut"})
        // animate("#right",{ opacity:[1,.6]},{duration:2,delay:.2})



    };
    useEffect(()=>{
        showing()
    },[]);
  return (
   <div ref={scope} className="flex justify-center items-center w-full h-screen">
        <img id="left" src={left} alt="" className="w-[400px] absolute object-cover" />
        <img id="right" src={right} alt="" className="w-[400px] absolute object-cover" />
          
      </div>
     
  )
}

export default D
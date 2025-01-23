import { useAnimate } from 'motion/react';
// import React from 'react'
import { useEffect } from 'react';
import top from "../bgimages/top of gg.png"
import main from "../bgimages/main of gg.png"

function G() {
    const [ scope , animate] = useAnimate()
    const showing = async()=>{
        await animate(scope.current,{ opacity:[0,1]},{duration: 1});
        animate("#main",{ opacity:[1,.3]},{duration:.8,delay:.3, ease:"easeInOut",})
        animate("#top",{ scale:[1,1.3],y:[0,.6] ,x:[0,.5]},{duration:.8,delay:.3, ease:"easeInOut"})
        // animate("#right",{ opacity:[1,.6]},{duration:2,delay:.2})



    };
    useEffect(()=>{
        showing()
    },[]);
  return (
   <div ref={scope} className="flex justify-center items-center w-full h-screen">
        <img id="main" src={main} alt="" className="w-[400px] absolute object-cover" />
        <img id="top" src={top} alt="" className="w-[400px] absolute object-cover" />
          
      </div>
     
  )
}

export default G
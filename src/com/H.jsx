import { useAnimate } from 'motion/react';
// import React from 'react'
import { useEffect } from 'react';
import sides from "../bgimages/sides of hh.png"
import mid from "../bgimages/mid of hh.png"

function H() {
    const [ scope , animate] = useAnimate()
    const showing = async()=>{
        await animate(scope.current,{ opacity:[0,1]},{duration: 1});
        animate("#sides",{ opacity:[1,.6]},{duration:1,delay:.3, ease:"easeInOut",})
        animate("#mid",{ scale:[1,1.1],y:[0,-20] ,x:[0,20] },{duration:.8,delay:.3, ease:"easeInOut"})
        // animate("#right",{ opacity:[1,.6]},{duration:2,delay:.2})



    };
    useEffect(()=>{
        showing()
    },[]);
  return (
   <div ref={scope} className="flex justify-center items-center w-full h-screen">
        <img id="sides" src={sides} alt="" className="w-[400px] absolute object-cover" />
        <img id="mid" src={mid} alt="" className="w-[400px] absolute object-cover" />
          
      </div>
     
  )
}

export default H
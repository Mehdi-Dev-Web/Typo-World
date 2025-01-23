import { useAnimate } from 'motion/react';
// import React from 'react'
import { useEffect } from 'react';
import sides from "../bgimages/sides nn.png"
import mid from "../bgimages/inside N.png"

function Nletter() {
    const [ scope , animate] = useAnimate()
    const showing = async()=>{
        await animate(scope.current,{ opacity:[0,1]},{duration: 1});
        animate("#sides",{ opacity:[1,.3]},{duration:.5,delay:.3, ease:"easeInOut",})
        // animate("#butt",{ scale:[1,1.1],y:[0,10] },{duration:.8,delay:.3, ease:"easeInOut"})
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

export default Nletter
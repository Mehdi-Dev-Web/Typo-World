import  { useEffect } from 'react'
import q from "../bgimages/main of qq.png"
import bott from "../bgimages/bott of q.png"
import { useAnimate } from 'motion/react';
function Qletter() {
    const [ scope , animate] = useAnimate()
    const showing = async()=>{
        await animate(scope.current,{ opacity:[0,1]},{duration: 1});
        animate("#q",{ opacity:[1,.5]},{duration:1,delay:.3, ease:"easeInOut",})
        animate("#bott",{y:[0,30]},{duration:1,delay:.4, ease:"easeInOut"})
        // animate("#right",{ opacity:[1,.6]},{duration:2,delay:.2})
    };
    useEffect(()=>{
        showing()
    },[]);
  return (
    <div ref={scope} className='w-full h-full flex justify-center items-center'>
       <img id='q' src={q} alt="" className='w-[400px]  object-cover absolute' />
       <img id='bott' src={bott} alt="" className='w-[400px]  object-cover absolute' />
    </div>
  )
}

export default Qletter
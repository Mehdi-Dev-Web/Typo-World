import  { useEffect } from 'react'
import o from "../bgimages/letter oo.png"
import mid from "../bgimages/inside oo.png"
import { useAnimate } from 'motion/react';
function O() {
    const [ scope , animate] = useAnimate()
    const showing = async()=>{
        await animate(scope.current,{ opacity:[0,1]},{duration: 1});
        animate("#o",{ opacity:[1,.5]},{duration:1,delay:.3, ease:"easeInOut",})
        animate("#mid",{ opacity:[0,1] },{duration:1,delay:.4, ease:"easeInOut"})
        // animate("#right",{ opacity:[1,.6]},{duration:2,delay:.2})



    };
    useEffect(()=>{
        showing()
    },[]);
  return (
    <div ref={scope} className='w-full h-full flex justify-center items-center'>
       <img id='mid' src={mid} alt="" className='w-[400px] opacity-0 object-cover absolute' />
       <img id='o' src={o} alt="" className='w-[400px]  object-cover absolute' />
    </div>
  )
}

export default O
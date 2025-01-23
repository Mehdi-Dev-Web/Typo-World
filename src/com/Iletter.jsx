import  { useEffect } from 'react'
import mid from "../bgimages/mid of  ii.png"
import dot from "../bgimages/dot of ii.png"
import { useAnimate } from 'motion/react';
function Iletter() {
    const [ scope , animate] = useAnimate()
    const showing = async()=>{
        await animate(scope.current,{ opacity:[0,1]},{duration: 1});
        // animate("#top",{ y:[0,-10],opacity:[1,.6]},{duration:.8,delay:.3, ease:"easeInOut",})
        animate("#dot",{ y:[0,-25,0] },{duration:2.3, ease:"easeInOut", repeatType:"mirror", repeat:Infinity})
        // animate("#right",{ opacity:[1,.6]},{duration:2,delay:.2})



    };
    useEffect(()=>{
        showing()
    },[]);
  return (
    <div ref={scope} className='w-full h-full flex justify-center items-center'>
       <img id='mid' src={mid} alt="" className='w-[400px] object-cover absolute' />
       <img id='dot' src={dot} alt="" className='w-[400px] object-cover absolute' />
    </div>
  )
}

export default Iletter
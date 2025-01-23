import { useAnimate } from 'motion/react';
import { useEffect } from 'react';
import mid from "../bgimages/mid of I.png"
import dot from "../bgimages/dot of i.png"

function I() {
    const [ scope , animate] = useAnimate()
    const showing = async()=>{
        await animate(scope.current,{ opacity:[0,1]},{duration: 1});
        animate("#mid",{ opacity:[1,.7]},{duration:.8,delay:.3, ease:"easeInOut",})
        animate("#dot",{ scale:[1,1.7], y:[0,210], x:[0,-90] },{duration:1.5,delay:.3, ease:"easeInOut"})
        // animate("#right",{ opacity:[1,.6]},{duration:2,delay:.2})



    };
    useEffect(()=>{
        showing()
    },[]);
  return (
    <div ref={scope} className="flex justify-center items-center w-full h-screen overflow-hidden ">
          <img id="mid" src={mid} alt="" className="w-[400px] absolute object-cover" />
          <img id="dot" src={dot} alt="" className="w-[400px] absolute object-cover" />
            
        </div>
  )
}

export default I
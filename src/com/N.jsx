import { useAnimate } from 'motion/react';
import { useEffect } from 'react';
import n from "../bgimages/letter n N.png"
import inside from "../bgimages/inside N.png"

function N() {
    const [ scope , animate] = useAnimate()
    const showing = async()=>{
        await animate(scope.current,{ opacity:[0,1]},{duration: 1});
        animate("#n",{ opacity:[1,.6]},{duration:.8,delay:.3, ease:"easeInOut",})
        animate("#inside",{ opacity:[0,1] },{duration:.8,delay:.3, ease:"easeInOut"})
        // animate("#right",{ opacity:[1,.6]},{duration:2,delay:.2})



    };
    useEffect(()=>{
        showing()
    },[]);
  return (
     <div ref={scope} className="flex justify-center items-center w-full h-screen">
            <img id="n" src={n} alt="" className="w-[400px] absolute object-cover " />
            <img id="inside" src={inside} alt="" className="w-[400px] absolute object-cover opacity-0" />
              
          </div>
  )
}

export default N
import { useAnimate } from "motion/react"
import { useEffect } from "react"
import sides from "../bgimages/letter H sides.png"
import mid from "../bgimages/mid of H.png"


function Hletter() {
    const [ scope , animate] = useAnimate()
    const showing = async()=>{
        await animate(scope.current,{ opacity:[0,1]},{duration: 1});
        animate("#mid",{ scaleX:[1,2], scale:[1,1.4]},{duration:1,delay:.3, ease:"easeInOut",})
        animate("#sides",{ scale:[1,.9], opacity:[1,.6]},{duration:1,delay:.3, ease:"easeInOut"})
        // animate("#right",{ opacity:[1,.6]},{duration:2,delay:.2})



    };
    useEffect(()=>{
        showing()
    },[]);
  return (
    <>
    <div ref={scope} className="flex justify-center items-center w-full h-screen">
      <img id="sides" src={sides} alt="" className="w-[400px] absolute object-cover" />
      <img id="mid" src={mid} alt="" className="w-[400px] absolute object-cover" />
        
    </div>
   
    </>
  
  )
}

export default Hletter
import { useAnimate } from "motion/react";
import t from "../bgimages/ttt.png"
import tside from "../bgimages/tttttt.png"
import left from "../bgimages/left side of t.png"
import { useEffect } from "react";
// import { div } from "motion/react-client";
function Letter() {
  const [scope, animate] = useAnimate();

  const letterI = async () => {
    await animate(scope.current, { opacity:[0,1] }, { duration: 1 });
    animate("#mid",{opacity:[1,.6]},{duration:1.4,delay:.7, ease:"easeInOut"}) 
    animate("#left", { x:[0,-40], scale:[1,1.1] }, { duration: 1.4, delay:.5, ease:"easeInOut" })
    animate("#right", {  x:[0,40], scale:[1,1.1] }, { duration: 1.4, delay:.5, ease:"easeInOut" })
  
  };
  useEffect(()=>{
    letterI()
  },[]);

  return ( 
    // <div ref={scope} className="flex flex-col justify-center items-center gap-1 mt-4">
    //     <div id="dot" className="w-[40px] h-[40px] rounded-[50%] bg-white"></div>
    //     <div  id="line" className="w-[40px] h-[225px] bg-white"></div>
    //   </div>
    <div ref={scope} className=" flex justify-center items-center  w-full h-auto ">
      <img id="mid" src={t} alt="" className="absolute w-[400px] object-cover"/>
      <img id="right" src={tside} alt="" className="absolute w-[400px] object-cover"/>
      <img id="left" src={left} alt="" className="absolute w-[400px] object-cover"/>
    </div>
  )
}

export default Letter
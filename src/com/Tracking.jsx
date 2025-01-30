
import { useAnimate } from "motion/react";
import { useEffect } from "react";

function Tracking() {
    const [scope, animate]= useAnimate()
const spacing = async()=>{
  await animate(scope.current,{opacity:[0,1]},{duration:1.5})
  animate("#main",{backgroundColor : "#c9b926",width:["30px","60px"]},{
    duration: 1,
    delay: 0.3,
    repeat: Infinity,
    repeatType:"reverse",
    repeatDelay: 0.7,
    ease:"backInOut",
    
 })
}
useEffect(()=>{
  spacing()
},[])
  return (
    <div ref={scope} className="flex justify-center items-center">
    <h1 className="   font-bold text-[15rem]  md:text-[19rem] text-white " id="title">T</h1>
    <div id="main" className="w-[30px] h-[230px]  bg-gray-300" style={{transformOrigin: "left"}}></div>
    <h1 id="title" className="font-bold  text-[15rem] md:text-[19rem] text-white "  >R</h1>

 </div>
  )
}

export default Tracking


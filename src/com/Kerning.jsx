import { useAnimate } from 'motion/react'
import React, { useEffect } from 'react'

function Kerning() {
    const [scope, animate]= useAnimate()
    const spacing = async()=>{
      await animate(scope.current,{opacity:[0,1]},{duration:1.5})
      animate("#main",{backgroundColor : "#c9b926",width:["50px","80px"]},{
        duration: 1,
        delay: 0.3,
        repeat: Infinity,
        repeatType:"reverse",
        repeatDelay: 0.7,
        ease:"backInOut",
        
     })
     animate("#right",{x:[0,30]},{
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
    <div>
            <div ref={scope} className="flex justify-center relative items-center">
    <h1 className="   font-bold text-[19rem]  text-white  title" >h</h1>
    <div id="main" className="w-[50px] h-[120px] absolute left-[170px]  mt-14  bg-gray-300" style={{transformOrigin: "left"}}></div>
    <h1 id="right" className="font-bold text-[19rem] text-white  title"  >i</h1>

 </div>
    </div>
  )
}

export default Kerning
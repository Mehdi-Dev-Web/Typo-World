// import React from 'react'
// import sides from "../iii.png"
// import center from "../ii.png"
import center from "../bgimages/des ii.png"
import sides from "../bgimages/des i.png"
import { motion } from 'motion/react'
function Icom() {
  return (
    <div className="flex justify-center items-center  w-full h-auto ">     
    <motion.img  animate={{opacity:[1,.4]}} transition={{duration:.8,ease:"easeInOut", delay:.3}} src={sides} alt="" className="w-[400px] object-cover absolute  " />
    <motion.img  animate={{ x:[0,140], scaleY:[1,1.2]}} transition={{duration:1,ease:"easeInOut", delay:.3} }src={center} alt="" className="w-[400px] object-cover " />
</div>
  )
}

export default Icom
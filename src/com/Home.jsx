// import { delay } from "motion"
// import pic from "../Untitled-333.png"
// import hm from "../Untitled-3334.png"
// import tt from "../Untitled-2.png"
import { motion, useAnimate } from "motion/react"
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Letter from "./Letter";
import { useState } from "react";
import Hletter from "./Hletter";
import Tracking from "./Tracking";
import { useContext } from "react";
import { ContextProvider } from "../contaxt/contaxt";
import { useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { useEffect } from "react";
import Icom from "./Icom";
import A from "./A";
import I from "./I";
import N from "./N";
import Kerning from "./Kerning";
import Iletter from "./Iletter";
import O from "./O";
import H from "./H";
import K from "./K";
import D from "./D";
import G from "./G";
import Nletter from "./Nletter";
import Qletter from "./Q";
import Pletter from "./P";
import Eletter from "./TopLine";
import Ab from "./AB";
import Yz from "./BottomLine";



function Home() {
  const {num}=useContext(ContextProvider)
const [count, setCount] = useState(num)
  const all = [
    {
      show : <Icom />,
      title : "STEM",
      des :(
        <>
          A Stem is the main stroke of a letterform, which can also be known as a{" "}
          <span className="text-second">strok</span> .
        </>
      ),
    },
    {
    show : <Letter />,
    title : "SERIF",
    des: "A Stroke attached to or extending from the open ends of a letterform is known as the Serif. Serif also refers to the general category of typefaces that have been designed with this feature. Typefaces without a serif are known as Sans-Serif typefaces. “Serif” comes from the Dutch word 'schreef' meaning 'line'."
  },
  {
    show : <Hletter />,
    title : "BAR",
    des : (
      <>
       The Bar of a letterform is the horizontal stroke that goes across the middle of an uppercase A or H and the stroke that goes under the{" "} <span className="text-[#8c4d83]">Eye</span>  of a lowercase 'e'. The bar can also be known as a crossbar.
      </>
    )
  },
  {
    show : <A />,
    title : "FOOT",
    des :(
      <>
     The Foot of a letterform usually appears on most Serif typefaces and is the part of the Stem that rests on the Baseline.
      </>
    ),
  },
  {
    show : <I />,
    title : "TERMINAL",
    des :(
      <>
     A Terminal is the end of any Stroke that doesn’t include a Serif, but instead includes ball terminals and finials (curved or tapered in shape).
      </>
    ),
  },
  {
    show : <N />,
    title : "APERTURE",
    des :(
      <>
      Aperture is similar to a Counter but has an opening instead of being fully enclosed. The letters ‘n’, ‘c’, ‘s’ and ‘e’ all have an aperture.
      </>
    ),
  },
  {
    show : <Tracking />,
    title : "TRACKING",
    des :(
      <>
        Tracking, otherwise known as letter-spacing, is similar to{" "}
        <span className="text-second">Kerning</span> but affects the spacing
        between characters in a complete section of text instead of between
        only two consecutive characters.
      </>
    ),
  },
  {
    show : <Kerning />,
    title : "Kerning",
    des :(
      <>
      Kerning, not to be confused with Tracking, is the horizontal spacing between two consecutive letters which you can manually adjust to add negative space or to take it away.
      </>
    ),
  },
  {
    show : <Iletter />,
    title : "TITTLE",
    des :(
      <>
  The Tittle, otherwise known as a “dot”, is a small distinguishing mark, such as an diacritic on a lowercase ‘i’ or ‘j’.
      </>
    ),
  },
  {
    show : <O />,
    title : "COUNTER",
    des :(
      <>
        Counters are found in letters that have enclosed or partially enclosed areas of white space. Letters such as ‘a’, ‘b’, ‘d’, ‘e’, ‘g’, ‘o’, ‘p’ and ‘q’. The letter ‘e’ has its own special name for its counter; the Eye.
      </>
    ),
  },
  {
    show : <H/>,
    title : "SHOULDER",
    des :(
      <>
        Counters are found in letters that have enclosed or partially enclosed areas of white space. Letters such as ‘a’, ‘b’, ‘d’, ‘e’, ‘g’, ‘o’, ‘p’ and ‘q’. The letter ‘e’ has its own special name for its counter; the Eye.
      </>
    ),
  },
  {
    show : <K />,
    title : "ASCENDER",
    des :(
      <>
      The Shoulder of a letterform is the curved stroke extending down from a Stem. Lowercase letters such as ‘m’, ‘n’ and ‘h’ all have a Shoulder.


      </>
    ),
  },
  {
    show : <D />,
    title : "BOWL",
    des :(
      <>
      The curved part of the character that encloses a Counter of letters such as ‘d’, ‘b’, ‘o’, ‘g’, and a is known as the Bowl of the letterform. The curved strokes of a ‘c’ are sometimes also referred to as bowls although they aren’t closed.
      </>
    ),
  },
  {
    show : <G />,
    title : "EAR",
    des :(
      <>
      Typically found on a lower case ‘g’, an Ear is a decorative flourish that usually appears on the upper right side of the Bowl.
      </>
    ),
  },
  {
    show : <Nletter/>,
    title : "STROKE",
    des :(
      <>
      A Stroke is similar to a Stem, the only different is that a stroke is known as the main diagonal part of a letterform such as in ‘N’, ‘M’ and ‘Y’. Some letterforms with two diagonals, such as ‘A’ or ‘V’, have both a stem and a stroke. The near-vertical Stroke is known as the stem in this instance and the other diagonal line is known as the main Stroke. Other letter parts such as Bars, Arms, and Bowls are collectively referred to as the Strokes that make up a letterform.
      </>
    ),
  },
  {
    show : <Qletter/>,
    title : "TAIL",
    des :(
      <>
      A Tail is often a decorative Stroke on the letter ‘Q’, ‘K’ or ‘R’. The Descender on ‘g’, ‘j’, ‘p’, ‘q’, and ‘y’ are also known as Tails.
      </>
    ),
  },
  {
    show : <Pletter/>,
    title : "DESCENDER",
    des :(
      <>
      Descenders are the opposite of Ascenders. Ascenders go above the X-Height while Descenders go below the Baseline. Lowercase letters such as ‘g’, ‘j’, ‘p’, ‘q’ and ‘y’ all have descenders. Normally uppercase letters don't go below the Baseline, however you may find some typefaces that do.
      </>
    ),
  },
  {
    show : <Eletter />,
    title : "CAP-HEIGHT",
    des :(
      <>
      Sometimes referred to as the Cap Line, the Cap-Height is the invisible line that marks the upper boundary of capital letters and some lowercase letters with Ascenders.
      </>
    ),
  },
  {
    show : <Ab />,
    title : "X-HEIGHT",
    des :(
      <>
   The X-Height is the height of a typeface’s lowercase letters (disregarding ascenders and descenders) that rest on the Baseline.
      </>
    ),
  },
  {
    show : <Yz />,
    title : "BASELINE",
    des :(
      <>
      The Baseline is the imaginary line on which most letters and other characters sit. Descenders usually rest on the Baseline, but part of the letterform sits below the imaginary line.
      </>
    ),
  },
]
const [scope , animate] = useAnimate()
const showing = ()=>{
  animate("#title",{x:[-3,0],opacity:[0,1]},{duration:.8,ease:"easeInOut"})
  animate("#desc",{opacity:[0,1]}, {duration:1.1,ease:"easeInOut"})
    animate("#ani",{y:[8,0] ,opacity:[0,1]},{duration:.5,ease:"easeInOut"})
    
  }
  useEffect(()=>{
  showing()
},[count])

const handleincreament = ()=>{
  if(all.length - 1 > count ){
    setCount((prevCount) => prevCount + 1)
   
  }else{
    setCount(0)
  }
}
const handledecreament = ()=>{
  if(count > 0 ){
    setCount((prevCount) => prevCount - 1)
  
   
  }else{
    setCount(all.length - 1)
  }

}
const navigate = useNavigate()
const backward =()=>{
  navigate('/post')
}
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row w-full h-[87vh]" ref={scope}>
       <div className=" flex justify-center items-center  w-full h-full  relative overflow-hidden " >
      {/* <motion.img  initial={{ }} animate={{opacity : [0,1,1,1],scale:[1,1,1,1.4],}}  transition={{duration:4,times:[0,.5,.6,1]}} src={tt} className="w-[310px] object-cover drop-shadow-xl " style={{transformOrigin : "center"}} alt="" />  
      <motion.img  initial={{ opacity:0,rotate:90 ,x:115}} animate={{opacity:[0,1,1,.5]}}  transition={{duration:4,times:[0,.5,.8,1]}} src={tt} className="w-[350px] rotate-45 object-cover absolute z-50" alt="" />  
      <motion.img  initial={{ opacity:0,rotate:90 ,x:-115}} animate={{opacity:[0,1,1,.5] }}  transition={{duration:4,times:[0,.5,.8,1]}} src={tt} className="w-[350px] rotate-90 object-cover absolute z-50" alt="" />      
    */}
    <div id="ani" >

    {all[count].show}
    </div>
       </div>
       {/* words */}
       <div  className="w-full h-[44%] flex flex-col justify-center  bg-[#0d0d0d] ">
        {/* btn menu */}
        <motion.div  initial={{opacity:0}} whileTap={{scale:1.3}} animate={{opacity:1 ,y:[10,0]}} whileHover={{scale:1.2}} onClick={backward} className="flex items-center cursor-pointer w-[100px] h-fit mb-6   ">
          <IoMdHome className="text-second " />
          <p className="text-gray-400 ml-1 ">MENU</p>

        </motion.div>
        {/* explaining */}
        <div  >
        <h1 className="text-7xl font-bold font-serif text-first " id="title"> {all[count].title}</h1>
        <p  className="text-white mt-2 w-[82%] tracking-wide leading-relaxed" id="desc">   {all[count].des}</p>
        </div>
        {/* btns next and back */}
        <div className="flex w-full lg:w-[80%] mt-6 justify-between items-center">
          <motion.div onClick={handledecreament } whileTap={{scale:1.3}} className="flex items-center cursor-pointer" whileHover={{color:"white" , scale:1.2}} initial={{opacity:0}} animate={{opacity:1 ,x:[10,0]}} transition={{opacity:{delay:.4}}}>
          <MdArrowBackIos className="text-second" />
          <p  className="text-gray-400 cursor-pointer">SEE PREVIOUS</p>
          </motion.div>
          <motion.div onClick={handleincreament} whileTap={{scale:1.3}} whileHover={{color:"white" , scale:1.2}} initial={{opacity:0}} animate={{opacity:1 ,x:[-10,0]}} transition={{opacity:{delay:.4}}}  className="flex items-center gap-1 ">

          <p  className="text-gray-400 cursor-pointer">SEE NEXT</p>
          <MdArrowForwardIos className="text-second cursor-pointer" />
          </motion.div>
        </div>

       </div>
    </div>
 

  )
}

export default Home
//   <div className='w-full flex h-screen justify-center items-center bg-gray-800 relative'> 


//   <motion.img  initial={{ scale:0,}} animate={{scale:2,opacity:1,}}  transition={{duration:3,delay:2}} src={hm} className="w-[400px] object-cover absolute top-[18%] left-[37%] translate-x-[50%] translate-y-[50%]" alt="" />  
//   <motion.img  initial={{opacity: 0 ,}} animate={{opacity: 1}} exit={{opacity:0 , transition:.1}}  transition={{duration:2}} src={hm} className="w-[400px] object-cover absolute top-[-15%] left-[20.4%] translate-x-[50%] translate-y-[50%]" alt="" />  
//   <motion.img  initial={{opacity: 0 ,}} animate={{opacity: 1}}  transition={{duration:2}} src={pic} className="w-[400px] object-cover" alt="" />  

// {/* <div className="w-[40%] h-screen  flex flex-col items-center ">
//   <h1>hello everyone </h1>
//   <div>ejoijeoirjojej eir e9rigg g9ierig rg09irgi09rir i09ir <br />4j9jrjjoerg
//   eieirherhrr <br />eirijoijoejoijrgjrgj <br /> eijrgjrjgjgrjojrgoir <br /> whiuhiuhgiherg
//   <br /></div>
//   <button className="p-2 bg-white text-white">next</button>


// </div> */}

  // </div>
// import { useEffect, useState } from "react"
// import {db} from "../firebase"
// import { getDocs,collection } from 'firebase/firestore'

// function Home() {
//   const [listof , setListof] = useState([])
//   const table = collection(db,"Poster")
//   useEffect(()=>{
//     const getdata = async()=>{
//       const data = await getDocs(table)
//       console.log(data.docs.map((doc)=>({...doc.data(), id: doc.id})))

//     }
//     getdata()
//   },[])
//   return (
//     <div>Home</div>
//   )
// }

// export default Home
// import { useState } from "react"

// import {storage} from "../firebase"
// import {ref, uploadBytes} from "firebase/storage"
// const Home = () => {
//   const [img ,setImg] = useState(null)
//   const handleadd = ()=>{
//     if(img === null) return;
//     const imgref = ref(storage , `images/${img.name}`)
//     uploadBytes(imgref,img).then(()=>{
//       alert('yes')
//     })

//   }
//   return (
//     <div> 
//       <form onSubmit={handleadd}>
//       <input type="file" name="" id="" onChange={(e)=>setImg(e.target.files[0])} />
//       <button type="submit">send</button>
//       </form>
//      </div>
//   )
// }

// export default Home
/* eslint-disable react/no-unescaped-entities */

//!

import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import pic from "../bgimages/all of letters.png"
import { ContextProvider } from "../context/contaxt"

function Post() {
  
    const navigate = useNavigate()

    const {dispatch,pop} = useContext(ContextProvider)
    const close = false
    const handleNumber = (id) =>{
      dispatch({
       type : "change",
       payload: id

      }

      );
      navigate("/homy")
    }
    const closeit = ()=>{
      dispatch({
       type: "remove",
       payload : close
      })
     }
  return (
  //  parent div
    <div className="  hidden md:flex justify-center items-center relative  w-full h-[88.5vh]   ">
{/* pop up */}
               {pop  &&
            <div className="w-full h-full  absolute z-50 flex justify-center items-center ">
              <div onClick={closeit} className="w-full h-full bg-black opacity-50 blur-lg absolute"></div>
              <div className="bg-white max-w-[700px]  flex-col justify-center items-center py-10 px-6 text-center rounded-md z-50 ">
                <h1 className="title text-3xl font-bold">
                  Discover Typographic Terminology with Type World
                </h1>
                <p className="text-gray-600 mt-3">
                   Type World is the perfect companion for designers and web designers looking to build a solid foundation in typographic terminology. Whether you're new to typography or just refreshing your knowledge, Type Terms makes learning the basics easy and engaging.
                </p>
                <button className="py-2 px-10 bg-first text-white rounded-md mt-8 font-medium hover:bg-second shadow-md"
                        onClick={closeit}>
                   Close
                </button>
        </div>
       </div>
       
       }
       {/* name of terms */}
          <div className="w-[95%] right-24 h-full relative z-30 ">
            <p onClick={()=>handleNumber(0)} className="text-first text-lg hover:text-second cursor-pointer  absolute top-1/2 left-[230px] "id="title">Stem</p>
            <p onClick={()=>handleNumber(1)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[160px] left-[320px] "id="title">Serif</p>
            <p onClick={()=>handleNumber(2)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[200px] left-[380px] "id="title">Bar</p>
            <p onClick={()=>handleNumber(3)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[336px] left-[410px] "id="title">Foot</p>
            <p onClick={()=>handleNumber(4)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[200px] left-[450px] "id="title">Terminal</p>
            <p onClick={()=>handleNumber(5)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[336px] left-[480px] "id="title">Aperture</p>
            <p onClick={()=>handleNumber(6)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[336px] left-[590px] "id="title">Kerning</p>
            <p onClick={()=>handleNumber(7)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[155px] left-[640px] "id="title">Title</p>
            <p onClick={()=>handleNumber(8)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[200px] left-[690px] "id="title">Shoulder</p>
            <p onClick={()=>handleNumber(9)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[336px] left-[760px] "id="title">Counter</p>
            <p onClick={()=>handleNumber(10)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[153px] left-[830px] "id="title">ascender</p>
            <p onClick={()=>handleNumber(11)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[200px] left-[910px] "id="title">Bowl</p>
            <p onClick={()=>handleNumber(12)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[200px] left-[1000px] "id="title">Ear</p>
            <p onClick={()=>handleNumber(13)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[385px] left-[900px] "id="title">Descender</p>
            <p onClick={()=>handleNumber(14)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[375px] left-[1060px] "id="title">Tail</p>
            <p onClick={()=>handleNumber(15)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[160px] left-[1160px] "id="title">Cop-Height</p>
            <p onClick={()=>handleNumber(16)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[215px] left-[1195px] "id="title">X-Height</p>
            <p onClick={()=>handleNumber(17)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[320px] left-[1195px] "id="title">Baseline</p>
        
          </div>
      {/* pic showcases the word   */}
           <img src={pic} alt="" className="w-[995px] object-cover absolute left-28" />
    </div>
  )
}

export default Post




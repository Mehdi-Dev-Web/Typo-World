
// import {  useState } from "react"
// import {db} from "../firebase"
// import { addDoc ,collection } from "firebase/firestore"
// import {auth} from "../firebase"
import { useNavigate } from "react-router-dom"
// import { div } from "motion/react-client"
// import sides from "../iii.png"
// import center from "../ii.png"
// import { motion } from "motion/react"
// import bg from "../bg.png"
// import word from "../the whole words.png"
//!

import { useContext } from "react"
import pic from "../bgimages/all of letters.png"
import { ContextProvider } from "../contaxt/contaxt"
// import { div } from "motion/react-client"
function Post() {
    // const [title , setTitle] = useState('')
    // const [post , setPost] = useState('')
    // const table = collection(db,"table")
    const navigate = useNavigate()
    //    const createnewone = async()=>{
    //             await addDoc(table,{
    //                 title,
    //                 post,
    //                 auther :{
    //                     name : auth.currentUser.displayName,
    //                     id: auth.currentUser.uid
    //                 }
        
    //             })
    //             navigate('/')
        
    //         }
    const {dispatch} = useContext(ContextProvider)
    const handlenumber = (id) =>{
      dispatch({
       type : "change",
       payload: id

      }

      );
      navigate("/homy")



    }
  return (
   

    <div className="flex justify-center items-center relative  w-full h-[88.5vh]  ">
            
              

          <div className="w-full h-full relative z-50 ">
            <p onClick={()=>handlenumber(0)} className="text-first text-lg hover:text-second cursor-pointer  absolute top-1/2 left-[230px] "id="title">Stem</p>
            <p onClick={()=>handlenumber(1)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[160px] left-[320px] "id="title">Serif</p>
            <p onClick={()=>handlenumber(2)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[200px] left-[380px] "id="title">Bar</p>
            <p onClick={()=>handlenumber(3)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[155px] left-[640px] "id="title">Title</p>
            <p onClick={()=>handlenumber(6)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[153px] left-[830px] "id="title">ascender</p>
            <p onClick={()=>handlenumber(5)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[200px] left-[690px] "id="title">Shoulder</p>
            <p onClick={()=>handlenumber(4)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[200px] left-[450px] "id="title">Terminal</p>
            <p onClick={()=>handlenumber(7)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[200px] left-[910px] "id="title">Bowl</p>
            <p onClick={()=>handlenumber(8)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[200px] left-[1000px] "id="title">Ear</p>
            <p onClick={()=>handlenumber(3)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[336px] left-[410px] "id="title">Foot</p>
            <p onClick={()=>handlenumber(5)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[336px] left-[480px] "id="title">Aperture</p>
            <p onClick={()=>handlenumber(11)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[336px] left-[590px] "id="title">Kerning</p>
            <p onClick={()=>handlenumber(12)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[336px] left-[760px] "id="title">Counter</p>
            <p onClick={()=>handlenumber(13)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[385px] left-[900px] "id="title">Descender</p>
            <p onClick={()=>handlenumber(14)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[375px] left-[1060px] "id="title">Tail</p>
            <p onClick={()=>handlenumber(14)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[160px] left-[1160px] "id="title">Cop-Height</p>
            <p onClick={()=>handlenumber(14)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[215px] left-[1195px] "id="title">X-Height</p>
            <p onClick={()=>handlenumber(14)} className="text-first text-lg hover:text-second cursor-pointer absolute top-[320px] left-[1195px] "id="title">Baseline</p>
            {/* <p className="text-first">stem</p> */}
          </div>
      
           <img src={pic} alt="" className="w-[995px] object-cover absolute " />
    </div>
    
    // <div>
    //    <div><input type="text" name="" id="" placeholder="title ..." onChange={(e)=>setTitle(e.target.value)} /></div>
    //    <div>
    //    <textarea name="" id="" placeholder="post ..." onChange={(e)=>setPost(e.target.value)}></textarea>
    //    </div>
    //    <button onClick={createnewone}>create post</button>
    // </div>
  )
}

export default Post
// import  { useState } from 'react'
// import {db,auth} from "../firebase"
// import { addDoc,collection } from 'firebase/firestore'
// import { useNavigate } from 'react-router-dom'
// function Post() {
//     const [title ,setTitle] = useState("")
//     const [post ,setPost] = useState("")
//     const table = collection(db,"Poster")
//  let navigate= useNavigate()
//     const createnewone = async()=>{
//         await addDoc(table,{
//             title,
//             post,
//             auther :{
//                 name : auth.currentUser.displayName,
//                 id: auth.currentUser.uid
//             }

//         })
//         navigate('/')

//     }
//   return (
//     <div>
//         <h1>creating post</h1>
//         <div>
//         <label>title</label>
//         <input type="text" name="" id="" placeholder='title...' onChange={(e)=>setTitle(e.target.value)}/>
//         </div>
//         <div>
//         <label>poster</label>
//         <textarea name="" id="" cols={40} rows={6} className='resize-none' placeholder='post..'onChange={(e)=>setPost(e.target.value)}></textarea>
//         </div>
//         <button onClick={createnewone} className='p-2 bg-black text-white'>create</button>
//          </div>
//   )
// }

// export default Post
//! pic
// import t from "../letter t.png"
// import line from "../line.png"
// import midline from "../bgimages/top line.png"
// import centerline from "../bgimages/midline.png"
// import e from "../bgimages/letter e.png"
// import dotofi from "../bgimages/dot of i.png"
// import centerofi from "../bgimages/i center.png"
// import buttofi from "../bgimages/i buttom.png"
// import m from "../bgimages/letter M.png"
// import insideM from "../bgimages/new aper.png"
// import i from "../bgimages/main i.png"
// import dot from "../bgimages/normal dot.png"
// import between  from "../bgimages/between letters.png"
// import nnn from "../bgimages/letter N.png"
// import Nside  from "../bgimages/N side.png"
// import Oo from "../bgimages/letter O.png"
// import insideO  from "../bgimages/inside O.png"
// import Ll from "../bgimages/letter L.png"
// import  topofl from "../bgimages/top Of L.png"
// import  allo from "../bgimages/all of O.png"

     {/* <img src={t} alt=""className="w-[950px] object-cover  "/>
           <img src={e} alt=""className="w-[950px] object-cover absolute hover:z-50 hover:cursor-pointer  "/>
           <img src={dotofi} alt=""className="w-[950px] object-cover absolute "/>
           <img src={buttofi} alt=""className="w-[950px] object-cover absolute "/>
           <img src={centerofi} alt=""className="w-[950px] object-cover absolute "/>
           <img src={m} alt=""className="w-[950px] object-cover absolute "/>
           <img src={insideM} alt=""className="w-[950px] object-cover absolute "/>
           <img src={i} alt=""className="w-[950px] object-cover absolute "/>
           <img src={dot} alt=""className="w-[950px] object-cover absolute   "/>
           <img src={between} alt=""className="w-[950px] object-cover absolute  "/>
           <img src={nnn} alt=""className="w-[950px] object-cover absolute "/>
           <img src={Nside} alt=""className="w-[950px] object-cover absolute "/>
           <img src={Oo} alt=""className="w-[950px] object-cover absolute "/>
           <img src={insideO} alt=""className="w-[950px] object-cover absolute "/>
           <img src={Ll} alt=""className="w-[950px] object-cover absolute "/>
           <img src={topofl} alt=""className="w-[950px] object-cover absolute "/>
           <img src={allo} alt=""className="w-[950px] object-cover absolute "/>
           <img src={line} alt=""className="w-[950px] object-cover absolute "/>
           <img src={centerline} alt=""className="w-[950px] object-cover absolute "/> */}


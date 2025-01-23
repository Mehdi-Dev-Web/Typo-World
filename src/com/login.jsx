import { useNavigate } from "react-router-dom"
import {auth, Provider} from "../firebase"
import { signInWithPopup } from "firebase/auth"

function login({setIsauth}) {
  const navigate = useNavigate()
  const signin = ()=>{
    signInWithPopup(auth,Provider).then(()=>{
      localStorage.setItem("isAuth",true)
      setIsauth(true)
      navigate('/')
      
    })
  }
  return (
    <div>
     <h1>sign in with google</h1>
     <div><button onClick={signin} className="p-2 bg-black text-white">sing in</button></div>
    </div>
  )
}

export default login
// import {auth, Provider} from "../firebase"
// import { signInWithPopup } from "firebase/auth" 
// import { useNavigate } from "react-router-dom"

// function login({setIsauth}) {
//   let navigate = useNavigate()
//   const login = ()=>{
//       signInWithPopup(auth,Provider).then((result)=>{
//        localStorage.setItem("isAuth", true)
//        navigate("/") 
//        setIsauth(true)
//      })
//   }
//   return (
//     <div>
//       <p>sigh in with google </p>
//       <button className="bg-black p-2 text-white" onClick={login}>singh in with google</button>
//     </div>
//   )
// }

// export default login
//  import { useContext, useState } from "react"
// import {  signInWithEmailAndPassword } from "firebase/auth";
// import {auth} from "../firebase"
// import { useNavigate } from "react-router-dom";
// import { ContextProvider } from "../contaxt/contaxt";


// const Login = () => {
//     const [show , setShow] = useState(false)
//     const [email , setEmail] = useState("")
//     const [password , setPassword] = useState("")
//     const navagate = useNavigate()
//     const {dispatch} = useContext(ContextProvider)
//     const info = (e)=>{
//         e.preventDefault()
      
//         signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           // Signed in 
//           const user = userCredential.user;
//           dispatch({
//             type: "login",
//             payload: user
//           })
//           navagate("/")
//           setShow(false)
//           // ...
//         })
//         .catch((error) => {
//          console.log(error)
//          setShow(true)

//         });


//     }
//   return (
//     <div className='w-full h-screen flex justify-center items-center '>
//         <form onSubmit={info} className=" flex flex-col gap-3">
//             <input className="outline-black" type="email" name="" id="" placeholder='email...'  onChange={(e)=>setEmail(e.target.value)} />
//             <input className="outline-black" type="password" name="" id="" placeholder='password...' onChange={(e)=>setPassword(e.target.value)}/>
//             <button type='submit' className="bg-black  text-white"> log in </button>
//             {show && <span className="text-red-400">wrong email or password</span>}  
//         </form>
//     </div>
//   )
// }

// export default Login
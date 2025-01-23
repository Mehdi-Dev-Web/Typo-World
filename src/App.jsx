// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Route,  Routes  } from "react-router-dom"
import Nav from "./com/Nav"
import Home from "./com/Home"
import About from "./com/About"
import Login from "./com/login"
import {  useState } from "react"
import Post from "./com/Post"
import { signOut } from "firebase/auth"
import { auth } from "./firebase"
import MainHome from "./com/MainHome"



// import Post from "./com/Post"
// import { useContext } from "react"
// import { ContextProvider } from "./contaxt/contaxt"

function App() {
  // const {user} = useContext(ContextProvider)
  // // const users = false
  // const Anythingd = ({children}) => {
  //   return user ? children : <Navigate to="/login"/>
  // }
// const [isauth ,setIsauth]= useState(false)
// const logout = ()=>{
//   signOut(auth).then(()=>{
//     localStorage.clear()
//     setIsauth(false)
//     window.location.pathname = "/login"

//   })


// }
// const Check = ({Children}) =>{
//   return isauth ?  Children
//   :  window.location.pathname = "/login"

// }
const [isauth , setIsauth] = useState(false)
const signout = ()=>{
  signOut(auth)
  localStorage.clear()
  setIsauth(false)
  window.location.pathname = "/login"
}
  return (
    <>
  

<Router> 
      <Nav signout={signout} isauth={isauth} />
      <Routes>
        <Route path="/homy" element={ <Home />  }></Route>
        <Route path="/" element={ <MainHome />  }></Route>
        <Route path="/about" element={  <About /> }></Route>
        <Route path="/post" element={  <Post /> }></Route>
        <Route path="/login" element={<Login setIsauth={setIsauth} />}></Route>  
      </Routes>
   </Router>

 
     
    </>
  )
}

export default App



import { BrowserRouter as Router, Route,  Routes  } from "react-router-dom"
import Nav from "./com/Nav"
import Home from "./com/Home"
import About from "./com/About"
import Post from "./com/Post"
import MainHome from "./com/MainHome"





function App() {

  return (
    <>
  

<Router> 
      <Nav />
      <Routes>
        <Route path="/homy" element={ <Home />  }></Route>
        <Route path="/" element={ <MainHome />  }></Route>
        <Route path="/about" element={  <About /> }></Route>
        <Route path="/post" element={  <Post /> }></Route>
        {/* <Route path="/login" element={<Login s/>}></Route>   */}
      </Routes>
   </Router>

 
     
    </>
  )
}

export default App

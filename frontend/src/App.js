import React,{ useEffect, createContext, useReducer, useContext} from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";


import Calculator from "./components/screens/Calculator.js";
import Signup from "./components/screens/Signup.js";
import Signin from "./components/screens/Signin.js";
import { initState, reducer } from "./reducers/useReducer.js";

export const UserContext = createContext()

const Routing = ()=>{
  const navigate = useNavigate()
  const {dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      navigate('/')
    }else{
      navigate('/signin')
    }
  },[])
  return(
    <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
    
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <UserContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
    <Navbar />
    <Routing />
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;

// import React,{ createContext, useReducer} from "react";
// import "./App.css";
// import Navbar from "./components/Navbar.js";
// import { BrowserRouter, Route, Routes} from "react-router-dom";


// import Calculator from "./components/screens/Calculator.js";
// import Signup from "./components/screens/Signup.js";
// import Signin from "./components/screens/Signin.js";
// import { initState, reducer } from "./reducers/useReducer.js";

// export const UserContext = createContext()



// function App() {
//   const [state, dispatch] = useReducer(reducer, initState)
//   return (
//     <UserContext.Provider value={{state, dispatch}}>
//     <BrowserRouter>
//     <Navbar />
//     <Routes>
//         <Route path="/" element={<Calculator />} />
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/signup" element={<Signup />} />
//     </Routes>
//     </BrowserRouter>
//     </UserContext.Provider>
//   )
// }

// export default App;


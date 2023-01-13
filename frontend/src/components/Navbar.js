import React,{useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
 

const Navbar = () =>{
  const {state,dispatch} = useContext(UserContext)
  const navigate = useNavigate()
  const protectNavbar= ()=>{
    if(state){
      return [
        <li>
          <button
          className="btn waves-effect waves-light red darken-3"
          onClick={() => {
            localStorage.clear()
            dispatch({type:"CLEAR"})
            navigate('/signin')
          }}
        >
          Logout
        </button>
        </li>
      ]
    }else{
      return [
        <li><Link to="/signin">Signin</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      ]
    }
  }
    return(
        <nav>
        <div className="nav-wrapper white">
          <Link to={state?"/":"/signin"} className="brand-logo left" style={{padding:"10px", paddingBlockStart:"inherit"}}>Calculator app</Link>
          <ul id="nav-mobile" className="right ">
            {protectNavbar()}
          </ul>
        </div>
      </nav>    
    )
}

export default Navbar;
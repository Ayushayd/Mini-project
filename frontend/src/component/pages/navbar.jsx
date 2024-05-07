import React, { useContext } from 'react'
import {Link, useLocation} from "react-router-dom"
import { Context } from '../../main';

const navbar = () => {
  const {isAuthenticated} = useContext(Context);
  const location = useLocation();
  return (
    <>
        <img className="logo" src="resources/img/logoo.jpg" alt="logo-img"/>
            <ul className="main-nav">
                <li>{location.pathname === '/' ? <Link to = "/user">Profile</Link> : <Link to="/">Home</Link>}</li>
                <li><Link to="/safety-tools">Safe-Tools</Link></li>
                <li><Link to="/assessment">Assessment</Link></li>
                <li><a href="#city">About-us</a></li>
                <li>
                {
                  !isAuthenticated ? (<Link to={"/login"} className='login-btn'>LOGIN</Link>): (<Link to={"/logout"} className='logout-btn'>LOGOUT</Link>)
                }
                </li>
            </ul>
    </>
  )
}

export default navbar
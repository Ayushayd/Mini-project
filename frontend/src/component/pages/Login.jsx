import React,{useState} from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import '../assets/login.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useContext } from 'react';
import { Context } from '../../main';
import { SERVER_URL } from '../../../ServerURL.js';

const Login = () => {
  const {isAuthenticated} = useContext(Context);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault()
    try {
      const {data} = await axios.post(`${SERVER_URL}/api/v1/users/login`, 
      {email, password},
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      toast.success(data.message);
      setEmail("");
      setPassword("");
      navigateTo('/');
    } catch (error) {
        toast.error(error.response.data.message);
    }

    if(isAuthenticated){
      return <Navigate to={"/"} />
    }
  };

    return (
      <>
          <div className="frame">
              <div className="login-container">                
              <h2 className="login-heading">Login to HerSafetyNet</h2>
              <form className="login-form" action="login.php" method="POST">
                  <input type="emial" name="username" placeholder="Username" onChange={(e) => setEmail(e.target.value)} required />
                  <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                  <button type="submit" className="login-button" onClick={handleLogin} >Login</button>
              </form>

              {/* <!-- Additional Details --> */}
              <div className="login-details">
              <p>Don't have an account? <Link to='/sign-up'>Sign up</Link></p>            
              <p>Forgot your password? <Link to="/forgot">Reset it</Link></p>
              </div>

              {/* <!-- Additional Features: Social Login --> */}
              <div className="social-login">
                  <p className="social-login-heading">Or, log in with:</p>
                  <div className="social-login-buttons">
                      <a href="#" className="social-login-button">Google</a>
                      <a href="#" className="social-login-button">Facebook</a>
                      <a href="#" className="social-login-button">Twitter</a>
                  </div>
              </div>
          </div>
          </div>
      </>
    );
};

export default Login;

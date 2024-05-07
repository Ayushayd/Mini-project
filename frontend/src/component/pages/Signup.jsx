import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/signup.css'
import {SERVER_URL} from '../../../ServerURL.js'

const Signup = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [avatar, setAvatar] = useState("")

  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('username', user);
      formData.append('password', password);
      formData.append('avatar', avatar);

      const {data} = await axios.post(`${SERVER_URL}/api/v1/users/register`, 
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true
      });
      toast.success(data.message);
      setFullName("");
      setEmail("");
      setUser("");
      setPassword("");
      setAvatar("");
      setCover("");
      navigate("/");
    } catch (error) {
        toast.error(error.response.data.message);
    }
  };

  return (
    <div className='sign'>
        <div className="signup-container">
            <h2 className="signup-heading"><span className="book-icon"></span> Sign Up for a New Account</h2>
            <form className="signup_form" action="signup.php" method="POST">
                <input type="text" name="fullname" placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} required />
                <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" name="username" placeholder="Username" onChange={(e) => setUser(e.target.value)} required />
                <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <input type="file" name="avatar" accept='image/*' onChange={(e) => setAvatar(e.target.files[0])} required />
                <button type="submit" className="signup-button" onClick={handleSignup}>Sign Up</button>
            </form>

            <div className="signup-details">
                <p>Already have an account? <Link to='/login'>Log In</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signup

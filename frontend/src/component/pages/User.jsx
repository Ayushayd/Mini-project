import React,{useContext} from 'react'
import { Context } from '../../main'
import '../assets/user.css'
import Navbar from './navbar'
import { Link } from 'react-router-dom'

const User = () => {
    const {user} = useContext(Context);
    
  return (
    <>
    <header className='user-header'>
        <Navbar/>
    </header>
    
    {user && (
        <>            
            <div className="user-container">
                <div>
                    <h1 className='head-user'>{user.fullName} Profile</h1><br />
                    <div className="userProfile">
                        <h1>{user.fullName}</h1>
                        <p>Username: {user.username}</p>
                        <p>Mail: {user.email}</p>
                        {
                            !user.avatar ? ("No avatar Image"): (
                            <img src={user.avatar} alt="User" />)
                        } 
                    </div><br />
                     <Link to="/update-password" className='update-password'>Update Password</Link>
                </div>
            </div>
        </>
        )}

    <footer>
        <div className="row">
            <div className="col span-1-of-2">
                <ul className="footer-nav">
                    <li><a href="#">Safe-tools</a></li>

                    <li><a href="#">About us</a></li>
                    <li><a href="#">Rate us</a></li>                  
                </ul>
            </div>
            <div className="col span-1-of-2">
                <ul className="social-links">
                    <li><ion-icon className="fb" name="logo-facebook"></ion-icon></li>
                    <li><ion-icon className="twitter" name="logo-twitter"></ion-icon></li>
                    <li><ion-icon className="google" name="logo-google"></ion-icon></li>
                    <li><ion-icon className="insta" name="logo-instagram"></ion-icon></li>
                </ul>
            </div>
        </div>
        <div className="row">
            <p>Copyright &copy; 2023 by HerSafetyNet. All rights reserved.</p>
        </div>
        
    </footer>
    </>
  )
}

export default User


import React from 'react'
import '../assets/forgot.css'
const Forgot = () => {
  return (
    <div className='body'>
        <div class="forgot-password-container">
        <h2 class="forgot-password-heading"><span class="book-icon"></span> Forgot Password</h2>
        <form class="forgot-password-form" action="reset-password.php" method="POST">
            <input type="email" name="email" placeholder="Email address" required/>
            <button type="submit" class="reset-button">Reset Password</button>
        </form>

    </div>
    </div>
  )
}

export default Forgot

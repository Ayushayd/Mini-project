import React from 'react'
import '../assets/anonymous.css'

const Anonymous = () => {
  return (
    <>
    <div className='head1'>
        <h1>Send Anonymous Complaints</h1>
    </div>
    <div className="container">
        <form action="submit_message.php" method="post">
            <label for="message">Your Message:</label>
            <textarea id="message" name="message" rows="6" required></textarea>
            <label for="recipient">Recipient's Email (optional):</label>
            <input type="email" id="recipient" name="recipient"/>

            <button type="submit">Send</button>
        </form>
    </div>
    </>
  )
}

export default Anonymous

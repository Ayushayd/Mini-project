import React from 'react'
import '../assets/donate.css'
import '../jsfile/donate.js'

const Donate = () => {
  return (
    <div>
    <div className='header-donate'>
        <h1 className='h1-donate'>Donate for Women's Welfare</h1>
    </div>
    <main>
        <div class="donation-form">
            <form id="donationForm">
                <label for="name">Full Name:</label>
                <input type="text" id="name" name="name" required/>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>

                <label for="amount">Donation Amount ($):</label>
                <input type="number" id="amount" name="amount" min="1" required/>

                <label for="message">Message (optional):</label>
                <textarea id="message" name="message" rows="4"></textarea>

                <button type="submit">Donate Now</button>
            </form>
        </div>
    </main>
    <footer>
        <p>&copy; 2023 Women's Welfare Foundation</p>
    </footer>
    </div>
  )
}

export default Donate

import React from 'react'
import '../assets/raisefund.css'
const Raisefund = () => {
  return (
    <div>
        <br />
        <h2>Raise Funds for Women's Safety</h2>
    <main>
        <div class="fundraising-form">
            <h2>Donate to Support Women's Safety</h2>
            <form>
                <div class="form-group">
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" placeholder="Your Name" required />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="text" id="email" placeholder="Your Email" required />
                </div>
                <div class="form-group">
                    <label for="amount">Donation Amount:</label>
                    <input type="number" id="amount" placeholder="Enter Amount" required />
                </div>
                <a href="#" class="donate-button">Donate Now</a>
            </form>
        </div>
    </main>
    <footer>
        {/* <!-- Add your contact information and additional details here --> */}
        <p>Contact us at support@example.com</p>
    </footer>

    </div>
  )
}

export default Raisefund    

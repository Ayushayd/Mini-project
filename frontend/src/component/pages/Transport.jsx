import React from 'react'
// import '../assets/transport.css'
const Transport = () => {
  return (
    <div>
        <br />
        <h2>Book a Cab</h2>
    <div class="container">
        <div class="booking-form">
            <h2>Book a Cab</h2>
            {/* <!-- Your booking form goes here (fields for pickup, drop-off, date, etc.) --> */}
            {/* <!-- Example: --> */}
            <form>
                <label for="pickup">Pickup Location:</label>
                <input type="text" id="pickup" name="pickup" required /><br /><br />

                <label for="dropoff">Drop-off Location:</label>
                <input type="text" id="dropoff" name="dropoff" required /><br /><br />

                <label for="date">Date:</label>
                <input type="date" id="date" name="date" required /><br /><br />

                <button type="submit" class="book-button">Book Now</button>
            </form>
        </div>

        {/* <!-- Section for women drivers to apply --> */}
        <div class="apply-section">
            <h2>Join Us as a Women Driver</h2>
            <p>If you're a woman interested in becoming a cab driver, we welcome your application. Join our team and
                empower yourself.</p>
            {/* <!-- Add a link to the application form for women drivers --> */}
            <a href="womdriver.html" class="book-button">Apply Now</a>
        </div>
    </div>
    </div>
  )
}

export default Transport    
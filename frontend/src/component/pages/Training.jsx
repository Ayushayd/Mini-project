import React from 'react'
import '../assets/training.css'
const Training = () => {
  return (
    <div>
      <br />
         <h2>Women's Safety Hub</h2>
    <main>
        {/* <!-- Video Sessions Section --> */}
        <section class="video-sessions">
            <h2>Video Sessions</h2>
            <div class="video-container">
                {/* <!-- Replace the iframe source with your video session link --> */}
                <iframe src="https://youtu.be/SfAoGd8R-CM?si=gOKO2UDUlru9jXgb" frameborder="0" allowfullscreen></iframe>
            </div>
            <p>Join our live video sessions to learn about women's safety and empowerment.</p>
            <button class="start-session-button">Start Session</button>
        </section>
    </main>

    {/* <!-- Footer Section --> */}
    {/* <footer> */}
        {/* <!-- Add additional elements or information as needed --> */}
    {/* </footer> */}
    </div>
  )
}

export default Training 
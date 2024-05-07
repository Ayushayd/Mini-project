import React from 'react'
import '../assets/ask.css'

const Ask = () => {
  return (
    <div className='body-ask'>
    <div className='header-ask'>
        <h1 className='h1-ask'>Women's Safety Application</h1>
    </div>
    <main >
        {/* <!-- Emergency Call Button --> */}
        <section class="emergency-call">
            <h2>Emergency Call</h2>
            <button id="emergencyButton">Call for Help</button><br/><br/>
        </section>

        {/* <!-- Photo Upload --> */}
        <section class="photo-upload">
            <h2>Upload Photo</h2><br/>
            <div>
                <label for="photoUpload" class="photo-upload-label">Choose a Photo</label><br/><br/>
                <input type="file" id="photoUpload" />
            </div>
        </section>

        {/* <!-- Voice Recording --> */}
        <section class="voice-recording">
            <h2>Record Voice</h2><br/>
            <button id="startRecording">Start Recording</button>
            <button id="stopRecording" disabled>Stop Recording</button><br/><br/>
        </section>

        <section class="emergency-call">
            <h2>Live Location</h2>
            <button id="emergencyButton">Access me</button><br/><br/>
        </section>

        {/* <!-- Message Sending --> */}
        <section class="message-sending">
            <h2>Send Message</h2>
            <textarea id="message" placeholder="Enter your message"></textarea>
            <button id="sendMessage">Send</button>
        </section>
    </main>

    <footer>
        {/* <!-- Add additional elements or information as needed --> */}
    </footer>
    {/* <!-- JavaScript File --> */}
    {/* <script src="script.js"></script> */}
    </div>
  )
}

export default Ask

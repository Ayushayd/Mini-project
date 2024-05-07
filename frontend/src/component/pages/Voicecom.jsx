import React from 'react'
// import '../assets/voicecom.css'
const Voicecom = () => {
  return (
    <div>
        <br />
        <h2>Emergency Clue Collection</h2>
    <main>
        {/* <!-- User Information Section --> */}
        <section class="user-info">
            <h2>User Information</h2>
            <div>
                <label for="userId">User ID:</label>
                <input type="text" id="userId" placeholder="Enter User ID" value="12345" />
            </div>
            <div>
                <label for="location">Location:</label>
                <input type="text" id="location" placeholder="Enter Location" value="123 Main St"/>
            </div>
        </section>

        {/* <!-- Voice Command Section --> */}
        <section class="voice-command">
            <h2>Voice Command</h2>
            <button id="startRecording">Start Recording</button>
            <button id="stopRecording" disabled>Stop Recording</button>
        </section>

        {/* <!-- Uploaded Data Section --> */}
        <section class="uploaded-data">
            <h2>Uploaded Data</h2>
            <div>
                <label for="photoUpload">Upload Photo:</label>
                <input type="file" id="photoUpload"/>
            </div>
            <div>
                <label for="message">Send Message:</label>
                <input type="text" id="message" placeholder="Enter Message"/>
                <button id="sendMessage">Send</button>
            </div>
        </section>

        {/* <!-- Clue History Section --> */}
        <section class="clue-history">
            <h2>Clue History</h2>
            <ul id="clueHistory">
                {/* <!-- Sample Clue Entries --> */}
                <li>Message sent: Please help me!</li>
                <li>Photo uploaded: IMG001.jpg</li>
                <li>Voice recording started</li>
            </ul>
        </section>
    </main>

    {/* <!-- Footer Section --> */}
    {/* <footer> */}
        {/* <!-- Add additional elements or information as needed --> */}
    {/* </footer> */}
    </div>
  )
}

export default Voicecom
    
import React from 'react'

const Womandriver = () => {
  return (
    <div>
        <header>
        <h1>Women Driver Application</h1>
        </header>
        <div class="container">
            <div class="driver-form">
                <h2>Driver Application</h2>
                <form action="process-application.php" method="post" enctype="multipart/form-data">
                    <label for="name">Full Name:</label>
                    <input type="text" id="name" name="name" required/><br/><br/>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/><br/><br/>

                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" required/><br/><br/>

                    <label for="background_check">Background Check (Upload a document):</label>
                    <input type="file" id="background_check" name="background_check" accept=".pdf, .doc, .docx"
                        required/><br/><br/>

                    <label for="safety_experience">Safety Experience:</label>
                    <textarea id="safety_experience" name="safety_experience" rows="4" required></textarea><br/><br/>

                    <label for="safety_question">Safety Question (Audio):</label><br/>
                    <input type="file" id="safety_question" name="safety_question_audio" accept="audio/*" required/>
                    <a href="#" id="record_audio">Record</a><br/><br/>

                    <input type="submit" value="Submit Application" class="submit-button"/>
                </form>
            </div>
        </div>
        </div>
  )
}

export default Womandriver
    
import React from 'react'
import '../assets/assessment.css'


const Assessment = () => {
  return (
    <>
    <div className='h11'>
        <h1>
            Women's Safety Assessment
        </h1>
    </div>
    <form action="process-assessment.php" method="POST">
        <h2>College Information</h2>
        <label for="collegeName">College Name:</label>
        <input type="text" id="collegeName" name="collegeName" required/><br/><br/>

        <label for="location">Location:</label>
        <input type="text" id="location" name="location" required/><br/><br/>

        <h2>Personal Safety</h2>
        <p>Rate your feelings of safety in the college area (1 = Very Unsafe, 5 = Very Safe):</p>
        <label for="safetyRating">Safety Rating:</label>
        <input type="number" id="safetyRating" name="safetyRating" min="1" max="5" required/><br/><br/>

        <p>Have you observed any suspicious activities by college management or teachers? (Yes/No)</p>
        <label for="suspiciousActivity">Suspicious Activity:</label>
        <select id="suspiciousActivity" name="suspiciousActivity" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select><br/><br/>

        <h2>Incidents</h2>
        <p>Have you personally experienced or witnessed any safety-related incidents in the college area? (Yes/No)</p>
        <label for="incidentExperience">Incident Experience:</label>
        <select id="incidentExperience" name="incidentExperience" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select><br/><br/>

        <p>If yes, please provide details or upload supporting evidence (e.g., photos, videos, documents):</p>
        <textarea id="incidentDetails" name="incidentDetails" rows="4" cols="50"></textarea><br/><br/>

        <h2>Feedback</h2>
        <p>How do you feel when you arrive inside the college premises?</p>
        <textarea id="arrivalFeelings" name="arrivalFeelings" rows="4" cols="50"></textarea><br/><br/>

        <p>What are your thoughts about nearby locations?</p>
        <textarea id="nearbyLocations" name="nearbyLocations" rows="4" cols="50"></textarea><br/><br/>

        <h2>Anonymous Reporting</h2>
        <p>Would you like your responses to remain anonymous? (Yes/No)</p>
        <label for="anonymousReporting">Anonymous Reporting:</label>
        <select id="anonymousReporting" name="anonymousReporting" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select><br/><br/>

        <h2>Additional Questions</h2>
        <p>Do you feel safe during late-night classes or activities? (Yes/No)</p>
        <label for="lateNightSafety">Late-Night Safety:</label>
        <select id="lateNightSafety" name="lateNightSafety" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select><br/><br/>

        <p>Do you think there is adequate lighting in and around the college campus during the night? (Yes/No)</p>
        <label for="nightLighting">Night Lighting:</label>
        <select id="nightLighting" name="nightLighting" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select><br/><br/>

        <p>Do you believe there are enough security personnel on campus? (Yes/No)</p>
        <label for="securityPersonnel">Security Personnel:</label>
        <select id="securityPersonnel" name="securityPersonnel" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select><br/><br/>

        <p>Are there any specific areas on campus where you feel less safe? (Please describe)</p>
        <textarea id="unsafeAreas" name="unsafeAreas" rows="4" cols="50"></textarea><br/><br/>

        <h2>Transportation Safety</h2>
        <p>Do you use college transportation services, such as buses or shuttles? (Yes/No)</p>
        <label for="transportationUsage">Transportation Usage:</label>
        <select id="transportationUsage" name="transportationUsage" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select><br/><br/>

        <p>Do you feel safe while using college transportation services? (Yes/No)</p>
        <label for="transportationSafety">Transportation Safety:</label>
        <select id="transportationSafety" name="transportationSafety" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select><br/><br/>

        <p>Are there any specific concerns or incidents related to transportation safety that you'd like to report or
            share?</p>
        <textarea id="transportationConcerns" name="transportationConcerns" rows="4" cols="50"></textarea><br/><br/>

        <h2>Security Measures</h2>
        <p>Do you think there are enough security cameras on campus? (Yes/No)</p>
        <label for="securityCameras">Security Cameras:</label>
        <select id="securityCameras" name="securityCameras" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select><br/><br/>

        <p>Have you used safety apps or services provided by the college, if available? (Yes/No)</p>
        <label for="safetyAppsUsage">Safety Apps Usage:</label>
        <select id="safetyAppsUsage" name="safetyAppsUsage" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select><br/><br/>

        <input type="submit" value="Submit"/>
    </form>
    </>
  )
}

export default Assessment

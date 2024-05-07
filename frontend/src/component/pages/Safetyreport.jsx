import React from 'react'

const Safetyreport = () => {
  return (
    <div>
        <h1>Speak Up for Women's Safety</h1>
    <div class="container">
        <form action="submit_safety_report.php" method="post" enctype="multipart/form-data">
            <label for="name">Your Name (Optional, or remain anonymous):</label>
            <input type="text" id="name" name="name" placeholder="You can stay anonymous" />

            <label for="email">Your Email (Optional, not revealed to others):</label>
            <input type="email" id="email" name="email" />

            <label for="location">Incident Location (College, University, or Nearby):</label>
            <input type="text" id="location" name="location" required />

            <label for="feeling_safety">How Safe Do You Feel in This Location?</label>
            <select id="feeling_safety" name="feeling_safety" required>
                <option value="safe">I feel safe</option>
                <option value="neutral">I feel neutral</option>
                <option value="unsafe">I feel unsafe</option>
            </select>

            <label for="incident_description">Tell Us About the Incident or Concern:</label>
            <textarea id="incident_description" name="incident_description" rows="6" required></textarea>

            <label for="photo">Capture Your Photo (For Validation, Optional):</label>
            <input type="file" id="photo" name="photo" accept="image/*" capture="user" />

            <label for="improvement_idea">Your Ideas to Improve Women's Safety:</label>
            <textarea id="improvement_idea" name="improvement_idea" rows="6" required></textarea>

            <label for="wrong_activity">Any Wrong Activities Observed?</label>
            <textarea id="wrong_activity" name="wrong_activity" rows="6" required></textarea>

            <label for="proof_documents">Upload Proof Documents (If Available, Optional):</label>
            <input type="file" id="proof_documents" name="proof_documents" accept=".pdf,.doc,.docx,.jpg,.png,.jpeg" /> 

            <button type="submit">Submit Safety Report</button>
        </form>
    </div>
    </div>
  )
}

export default Safetyreport

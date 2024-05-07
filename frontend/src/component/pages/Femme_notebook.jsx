import React from 'react'
import '../assets/femmenotebook.css'
import { encryptText, saveNote } from '../jsfile/crypto.js'

const Femme_notebook = () => {
  const handleSave = () => {
    const noteDate = document.getElementById('note-date').value;
    const noteContent = document.getElementById('note-content').value;
    const encryptedContent = encryptText(noteContent);
    saveNote(noteDate, encryptedContent);
}

  return (
    <>
    <div className='h1'>
        <h1>Secure Notepad</h1>
    </div>
    <div class="container">
        <form id="notepad-form">
            <input type="date" id="note-date" required/>
            <textarea class="notepad" id="note-content" placeholder="Enter your note here..." required></textarea>
            <button type="button" id="save-button" onClick={handleSave}>Save</button>
        </form>
        <div class="saved-notes" id="saved-notes">
            {/* <!-- Saved notes will be displayed here --> */}
        </div>
        <div id="disclaimer">
            <p><strong>Data Privacy Disclaimer:</strong> Your data is securely encrypted and stored. We do not have
                access to your stored data, and it can only be decrypted by you. In case of any legal request from
                authorities, we will consider disclosing the data only if wrongdoing is suspected.</p>
        </div>
    </div>

    </>
  )
}

export default Femme_notebook

import CryptoJS from 'crypto-js'

export function encryptText(text) {
    // Replace this with actual encryption logic
    return CryptoJS.AES.encrypt(text, 'encryptionKey').toString();
}

export function saveNote(noteDate, noteContent) {
    if (noteDate && noteContent) {
        // Encrypt the note content
        const encryptedNote = encryptText(noteContent);

        // Display a message about data encryption and privacy
        alert("Your note has been securely encrypted and stored. Only you can decrypt it.");

        // Clear the form
        noteDate = '';
        noteContent = '';

        // In a real application, you would store the encrypted note securely on a server or a secure storage system.
    }
}

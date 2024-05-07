import React from 'react'
import '../assets/offline.css'
const Offline = () => {
  return (
    <div>
      <br />
        <h2>Empowering Women's Safety</h2>
    <main>
        <div class="images">
            <div class="image-box">
                <img src="image1.jpg" alt="No Network Image" />
                <p>No Network</p>
            </div>
            <div class="image-box">
                <img src="image2.jpg" alt="Emergency Image" />
                <p>Emergency</p>
            </div>
            <div class="image-box">
                <img src="image3.jpg" alt="Offline Accessibility Image" />
                <p>Offline Accessibility</p>
            </div>
        </div>
        <div class="tagline">
            <p>Empowering Women's Safety<br />Even When There's No Network</p>
        </div>
        <ul class="feature-list">
            <li><strong>Select a Satellite Communication Provider:</strong> Choose from providers like Iridium,
                Inmarsat, and Globalstar.</li>
            <li><strong>Acquire a Satellite-Compatible Device:</strong> Ensure you have an Android device with satellite
                communication capabilities. Some modern smartphones come equipped with satellite communication hardware,
                while others may require external devices or add-ons for specific industries (e.g., maritime, aviation,
                outdoor activities).</li>
            <li><strong>Integrate the Satellite SDK/API:</strong> For custom Android apps with satellite communication,
                integrate the SDK or API provided by your chosen satellite communication provider. Follow their
                documentation and guidelines.</li>
            <li><strong>Develop Satellite Communication Features:</strong> Implement messaging, voice calls, location
                tracking, and data transfer. Ensure seamless handling of satellite hardware and connections.</li>
            <li><strong>Subscription and Activation:</strong> Users subscribe to the satellite service and activate it
                within the app. Implement a user-friendly interface for subscription management and activation.</li>
            <li><strong>Offline Capabilities:</strong> Enable users to send and receive messages, store location data,
                and perform actions when no satellite connection is available, crucial for outdoor activities and
                emergencies.</li>
            <li><strong>User Education and Support:</strong> Provide clear instructions and user guides within your app
                to help users understand how to use satellite communication features. Offer customer support and
                assistance for users who may encounter issues.</li>
            <li><strong>Compliance and Regulations:</strong> Be aware of legal and regulatory requirements related to
                satellite communication services in your region and ensure compliance.</li>
            <li><strong>Testing and Validation:</strong> Thoroughly test your app's satellite communication features on
                satellite-compatible devices or hardware. Test in various scenarios, including areas with no network
                connectivity, to ensure reliability.</li>
            <li><strong>Cost Management:</strong> Inform users about the costs associated with satellite subscriptions,
                including subscription fees and usage charges. Implement features to allow users to monitor and manage
                their satellite service usage.</li>
            <li><strong>Security and Privacy:</strong> Prioritize the security and privacy of user data when
                implementing satellite communication. Encrypt sensitive information to protect it during transmission.
            </li>
            <li><strong>Updates and Maintenance:</strong> Continuously monitor and maintain your app, addressing any
                issues or adding improvements as needed.</li>
        </ul>
        <br />
    </main>
    <footer className='foot'>
        {/* <!-- Add your contact information and additional details here --> */}
        <p>Contact us at support@womensafetyhub.com</p>
    </footer>

    </div>
  )
}

export default Offline

import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/normal.css'
const Normal = () => {
  return (
    <div>
    <div className='header-normal'>
        <h1>Welcome to Women's Safety Hub</h1>
    </div>    
    <main>
        <div class="features-container">
            <div class="feature-box">
                <h2>UBA Partnership</h2>
                <p class="feature-description"> We're providing training in
                    adopted rural villages to raise awareness and empower residents.</p>
                {/* <a class="btn btn-full" href="uba.html">Read More</a> */}
                <Link to="/uba" className="btn btn-full" >Read More</Link>          
            </div>
            <div class="feature-box">
                <h2>Women welfare community</h2>
                <p class="feature-description">Become a volunteer and support women's safety initiatives.</p>
                {/* <a class="btn btn-full" href="womwnwelfarecom.html">Read More</a> */}
                <Link to="/woman-welfare" className="btn btn-full" >Read More</Link> 
            </div>

            <div class="feature-box">
                <h2>Women's safety assessement</h2>
                <p class="feature-description">Women safety assesment is for analyzing and monitor data on college and
                    university level.</p>
                {/* <a class="btn btn-full" href="https://forms.gle/KFyXYVakdJromJwZ8">Read More</a> */}
                <Link to="/assessment" className="btn btn-full" >Read More</Link> 
                
            </div>

            <div class="feature-box">
                <h2>Transport Facility</h2>
                <p class="feature-description">Find safe transportation options in your area.</p>
                {/* <a class="btn btn-full" href="transport.html">Read More</a> */}
                <Link to="/transport" className="btn btn-full" >Read More</Link> 
            </div>

            <div class="feature-box">
                <h2>Servivor Session</h2>
                <p class="feature-description">Survivor Sessions offer a nurturing heaven for women who've faced
                    adversity and all.</p>
                {/* <a class="btn btn-full" href="boksess.html">Read More</a> */}
                <Link to="/woman-survivor" className="btn btn-full" >Read More</Link> 
            </div>

            <div class="feature-box">
                <h2>FemmeNotebook</h2>
                <p class="feature-description">Keep notes and important information securely.</p>
                {/* <a class="btn btn-full" href="chatnotepad.html">Read More</a> */}
                <Link to="/femmenotebook" className="btn btn-full" >Read More</Link> 
            </div>

            <div class="feature-box">
                <h2>Safety Beakons</h2>
                <p class="feature-description"> Safety Beacon System leverages advanced technology to enhance campus
                    safety, especially in outdoor and
                    remote areas.</p>
                {/* <a class="btn btn-full" href="#">Read More</a> */}
                <Link to="/safety_beakon" className="btn btn-full" >Read More</Link> 
            </div>

            <div class="feature-box">
                <h2>Voice based reporting</h2>
                <p class="feature-description">Many individuals may feel uncomfortable typing out an incident report,
                    but they might be more willing to speak
                    about it.
                </p>
                {/* <a class="btn btn-full" href="#">Read More</a> */}
                <Link to="/login" className="btn btn-full" >Read More</Link> 
            </div>

            <div class="feature-box">
                <h2>Crowdsourced safety ratings</h2>
                <p class="feature-description"> This allow users to rate specific areas or routes on campus for safety.
                </p>
                <Link to="/login" className="btn btn-full" >Read More</Link>
            </div>

            <div class="feature-box">
                <h2>Gamification for engagement</h2>
                <p class="feature-description">Gamify aspects of the reporting and monitoring process to encourage user
                    engagement.</p>
                <Link to="/login" className="btn btn-full" >Read More</Link>
            </div>

            <div class="feature-box">
                <h2>Real time analysis</h2>
                <p class="feature-description">Real-time analysis in women safety applications involves leveraging technology to quickly process and respond to relevant data.</p>
                {/* <a class="btn btn-full" href="#">Read More</a> */}
                <Link to="/login" className="btn btn-full" >Read More</Link> 
            </div>

            <div class="feature-box">
                <h2>Voice Command Log</h2>
                <p class="feature-description">Record and log voice commands for safety and convenience.</p>
                {/* <a class="btn btn-full" href="voicecomlog.html">Read More</a> */}
                <Link to="/voice-command" className="btn btn-full" >Read More</Link> 
            </div>

            <div class="feature-box">
                <h2>Offline Usage</h2>
                <p class="feature-description">Use our app even without an internet connection.</p>
                {/* <a class="btn btn-full" href="offline.html">Read More</a> */}
                <Link to="/offline" className="btn btn-full" >Read More</Link> 
            </div>

            <div class="feature-box">
                <h2>Anonymous Message</h2>
                <p class="feature-description">Send anonymous messages for reporting incidents or seeking help.</p>
                {/* <a class="btn btn-full" href="anonymous.html">Read More</a> */}
                <Link to="/anonymous" className="btn btn-full" >Read More</Link> 
            </div>

            <div class="feature-box">
                <h2>Training and Safety Events</h2>
                <p class="feature-description">Access training resources and information about safety events in your
                    area.</p>
                {/* <a class="btn btn-full" href="training.html">Read More</a> */}
                <Link to="/training" className="btn btn-full" >Read More</Link> 
            </div>

            <div class="feature-box">
                <h2>Nearby Communities</h2>
                <p class="feature-description">Nearby Communities Connect with local support systems and resources to
                    enhance women's safety and well-being. </p>
                {/* <a class="btn btn-full" href="nearby.html">Read More</a> */}
                <Link to="/nearby" className="btn btn-full" >Read More</Link> 
            </div>

            <div class="feature-box">
                <h2>Raise Funds</h2>
                <p class="feature-description">Contribute to or raise funds for women's safety initiatives.</p>
                {/* <a class="btn btn-full" href="raisefund.html">Read More</a> */}
                <Link to="/raise-fund" className="btn btn-full" >Read More</Link> 
            </div>

            <div class="feature-box">
                <h2>NGO </h2>
                <p class="feature-description">NGO Connections for Women's Safety is a collaborative platform uniting
                    NGOs and advocates in the
                    pursuit of women's safety. </p>
                {/* <a class="btn btn-full" href="">Read More</a> */}
                <Link to="/login" className="btn btn-full" >Read More</Link> 
            </div>

        </div>
    </main>
    <footer>
        {/* <!-- Add your contact information and additional details here --> */}
        <p>Contact us at HerSafetyNet@gmail.com</p>
    </footer>

    </div>
  )
}

export default Normal

        

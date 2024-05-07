import React from 'react';
import Navbar from './navbar';
import {Link} from "react-router-dom";

const App = () => {
    return (    
    <div>
    <header>
    <nav>
        <div className="row">
                <Navbar />
        </div>
    </nav>
        <div className="hero-text-box">
            <h1>Her Safety Our Mission<br/>A Path To A Brighter Vision</h1> <br/><br/>
            {/* <a className="btn btn-full" href="emergencybutton.html">Ask for help</a> */}
            <Link to="/ask_for_help" className="btn btn-full">Ask for help</Link>
            <Link to="/donate" className="btn btn-full">Donate now</Link>
            <Link to="/join" className="btn btn-full">Join our team</Link>
        </div>
    </header>
    <br/><br/><br/>
      <h2>Empowering Women's Safety, <br />Our Commitment, Your Security</h2>
    <section className="section-features" id="feature">
       
        <div className="row">
            <div className="col span-1-of-4 box">
               
                <h3><b>Unnat Bharat Abhiyan</b></h3>
                <p>In collaboration with local colleges, we're introducing safety apps and providing training in
                    adopted rural villages to raise awareness.</p>
                    {/* <Link to="/uba" className="btn btn-full" >Read More</Link> */}
            </div>
            <div className="col span-1-of-4 box">
               
                <h3><b>Transport Facility Services</b></h3>
                <p>Our Midnight Transport service prioritizes your safety during late
                    hours. This service ensures a secure and comfortable commute for women.</p>
                 {/* <Link to="/transport" className="btn btn-full" >Read More</Link>  */}
            </div>
            <div className="col span-1-of-4 box">

                <h3><b>Women Welfare Community</b></h3>
                <p>Joining our Women Welfare Community offers a supportive network where you can collaborate with others
                    who share your commitment to women's safety.</p>
                 {/* <Link to="/woman-welfare" className="btn btn-full" >Read More</Link>  */}
            </div>
            <div className="col span-1-of-4 box">
                
                <h3><b>Anonymous Complaints</b></h3>
                <p>Our Anonymous Complaints feature empowers women to voice their safety concerns without fear. We
                    provide a secure platform for reporting incidents
                    anonymously. </p>
                 {/* <Link to="/login" className="btn btn-full" >Read More</Link>  */}
            </div>
        </div>
    </section>


    <section className="section-features" id="feature">
        <div className="row">
            <div className="col span-1-of-4 box">
               
                <h3><b>Survivor Session</b></h3>
                <p>Survivor Sessions offer a nurturing haven for women, fostering strength
                    through unity and opening doors to personal growth. </p>
                 {/* <Link to="/woman-survivor" className="btn btn-full" >Read More</Link>  */}
            </div>
            <div className="col span-1-of-4 box">
               
                <h3><b>Assessement</b></h3>
                <p>Women safety assesment is used for analyzing and monitor data on college and university level regarding women safety.
                </p>
                 {/* <Link to="/login" className="btn btn-full" >Read More</Link>  */}
            </div>
            <div className="col span-1-of-4 box">
                
                <h3><b>FemmeNotebook</b></h3>
                <p>Our Female Notebook feature allows you to keep your notes and important information securely. </p>
                 {/* <Link to="/login" className="btn btn-full" >Read More</Link>  */}
            </div>
            <div className="col span-1-of-4 box">
                
                <h3><b>Offline Usage</b></h3>
                <p>Stay safe anytime, anywhere! Our app allows you to use all its features even without an internet
                    connection. </p>
                 {/* <Link to="/offline" className="btn btn-full" >Read More</Link>  */}
            </div>
        </div>
    </section>


    <section className="section-features" id="feature">
        <div className="row">
            <div className="col span-1-of-4 box">
               
                <h3><b>Voice Command Log</b></h3>
                <p>With our Voice Command Log, we offer a cutting-edge solution for safety and convenience. We securely
                    record and log voice commands.</p>
                 {/* <Link to="/voice-command" className="btn btn-full" >Read More</Link>  */}
            </div>
            <div className="col span-1-of-4 box">
                
                <h3><b>Raise Funds</b></h3>
                <p>Join hands with us to raise funds for critical women's safety initiatives. Your contribution will
                    directly support the development of innovative tools. </p>
                 {/* <Link to="/raise-fund" className="btn btn-full" >Read More</Link>  */}
            </div>
            <div className="col span-1-of-4 box">
                
                <h3><b>Training & Events</b></h3>
                <p>Explore a wealth of training and event resources regarding women safety and stay informed about upcoming safety events in your area.
                </p>
                 {/* <Link to="/training" className="btn btn-full" >Read More</Link>  */}
            </div>
            <div className="col span-1-of-4 box">
                
                <h3><b>Nearby community</b></h3>
                <p>Connect with local support systems and resources to enhance women's safety and
                    well-being. These communities serve as pillars of support.</p>
                 {/* <Link to="/nearby" className="btn btn-full" >Read More</Link>  */}
            </div>
        </div>
    </section>


    <section className="section-features" id="feature">
        <div className="row">
            <div className="col span-1-of-4 box">
    
                <h3><b>NGO Connections</b></h3>
                <p>NGO Connections for Women's Safety is a collaborative platform uniting
                NGOs and advocates in the
                pursuit of women's safety. </p>
                 {/* <Link to="/login" className="btn btn-full" >Read More</Link>  */}
            </div>
            <div className="col span-1-of-4 box">
    
                <h3><b>Safety Beakons</b></h3>
                <p>Safety Beacon System leverages advanced technology to enhance campus safety, especially in outdoor and
                remote areas.</p>
                 {/* <Link to="/login" className="btn btn-full" >Read More</Link>  */}
            </div>
            <div className="col span-1-of-4 box">
    
                <h3><b>Real time Analysis</b></h3>
                 {/* <Link to="/login" className="btn btn-full" >Read More</Link>  */}
                 Real-time analysis in women safety applications involves leveraging technology to quickly process and respond to relevant data.
            </div>
            <div className="col span-1-of-4 box">
    
                <h3><b>Voice Based Reporting</b></h3>
                <p>Many individuals may feel uncomfortable typing out an incident report, but they might be morewilling to speak
                about.</p>
                 {/* <Link to="/login" className="btn btn-full" >Read More</Link>  */}
            </div>
        </div>
    </section>
    <br />


    <section className="section-meals" data-aos="fade-in" data-aos-duration="2000">
        <ul className="meals-showcase clearfix">
            <li>
                <figure className="meal-photo">
                    <img src="resources/img/soscsll.jfif" alt="food-image" />
                </figure>
            </li>
            <li>
                <figure className="meal-photo">
                    <img src="resources/img/womenwelfare-1.png" alt="food-image" />
                </figure>
            </li>
            <li>
                <figure className="meal-photo">
                    <img src="resources/img/wedeserve.webp" alt="food-image" />
                </figure>
            </li>
            <li>
                <figure className="meal-photo">
                    <img src="resources/img/women_EPS.avif" alt="food-image" />
                </figure>
            </li>
        </ul>
    </section>


    <section className="section-cities" id="city" data-aos="fade-in" data-aos-duration="2000">
        <div className="container">
            <h2>About Women's Safety Initiative</h2>
            <p>Welcome to the Women's Safety Initiative, a beacon of hope and change. We are a team of passionate
                individuals from ABES Engineering College, driven by the belief that the safety of women is not just a
                concern but an absolute necessity.</p>

            <p>Our dedicated team comprises:</p>
            <div className="team-members">
                {/* <div className="team-member">Shreshtha</div> */}
                <div className="team-member">Chitra</div>
                {/* <div className="team-member">Hritik</div> */}
                <div className="team-member">Ayush</div>
                {/* <div className="team-member">Agraj</div> */}
                <div className="team-member">Gopesh</div>
            </div>
            <br />

            <p>We recognized that the women's safety sector has remained largely unorganized, and despite some progress,
                women continue to face unsafe environments in various aspects of life. In response, we embarked on a
                mission to initiate groundbreaking steps towards a safer world for women.</p>

            <p>Our primary goal is to empower women with innovative tools and resources that not only enhance their
                safety but also foster a sense of community. Through collective efforts, we aim to create an environment
                where every woman feels secure and protected.</p>

            <p>Our journey is just beginning, and we are committed to making a lasting impact. Join us in our mission to
                ensure a brighter, safer future for women everywhere.</p>

            <div className="core-values">
                <p>Our core values:</p>
                <ul>
                    <li><strong>Inclusivity:</strong> We believe in inclusivity and diversity, ensuring that every
                        woman, regardless of background or circumstance, has access to safety.</li>
                    <li><strong>Innovation:</strong> We constantly seek innovative solutions to address the evolving
                        challenges faced by women in today's world.</li>
                    <li><strong>Community:</strong> We encourage a sense of community among women, fostering mutual
                        support and empowerment.</li>
                    <li><strong>Education:</strong> We believe in the power of education and awareness to drive
                        meaningful change in society.</li>
                </ul>
            </div>

            <p>Thank you for joining us on this journey towards a safer and more secure world for women.</p>
        </div>
    </section>


    <section className="section-form" id="signup" data-aos="fade-in" data-aos-duration="2000">
        <div className="row">
            <h2>We are happy to hear from you</h2>
        </div>
        <div className="row">
            <form action="#" method="POST" className="contact-form">
                <div className="row">
                    <div className="col span-1-of-3">
                        <label>Name</label>
                    </div>
                    <div className="col span-2-of-3">
                        <input type="text" name="name" id="name" placeholder="Your Name" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col span-1-of-3">
                        <label>Email</label>
                    </div>
                    <div className="col span-2-of-3">
                        <input type="email" name="email" id="email" placeholder="Your Email" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col span-1-of-3">
                        <label>How did you find us?</label>
                    </div>
                    <div className="col span-2-of-3">
                        <select name="find-us" id="find-us">
                            <option value="friends">Friends</option>
                            <option value="search">Search Engine</option>
                            <option value="ad">Advertisement</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col span-1-of-3">
                        <label>Newsletter?</label>
                    </div>
                    <div className="col span-2-of-3">
                        <input type="checkbox" name="news" id="news" />
                    </div>
                </div>
                <div className="row">
                    <div className="col span-1-of-3">
                        <label>Drop a line</label>
                    </div>
                    <div className="col span-2-of-3">
                        <textarea name="text" id="ta" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col span-1-of-3">
                        <label>&nbsp;</label>
                    </div>
                    <div className="col span-2-of-3">
                        <input type="submit" value="Send-me" />
                    </div>
                </div>
            </form>
        </div>
    </section>
    

    <footer>
        <div className="row">
            <div className="col span-1-of-2">
                <ul className="footer-nav">
                    <li><a href="#">Safe-tools</a></li>

                    <li><a href="#">About us</a></li>
                    <li><a href="#">Rate us</a></li>                  
                </ul>
            </div>
            <div className="col span-1-of-2">
                <ul className="social-links">
                    <li><ion-icon className="fb" name="logo-facebook"></ion-icon></li>
                    <li><ion-icon className="twitter" name="logo-twitter"></ion-icon></li>
                    <li><ion-icon className="google" name="logo-google"></ion-icon></li>
                    <li><ion-icon className="insta" name="logo-instagram"></ion-icon></li>
                </ul>
            </div>
        </div>
        <div className="row">
            <p>Copyright &copy; 2023 by HerSafetyNet. All rights reserved.</p>
        </div>
        
    </footer>
    </div>    
  )
}
export default App
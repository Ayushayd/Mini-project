import React, {useEffect} from 'react'
import '../assets/join1.css'
import join from '../jsfile/join1.js'

const Join1 = () => {

    // const Join = () => {
    useEffect(() => {
    join(); 
    }, []);

  return (
    <div>
        <div class = "header">
            <h1>Join us, Never regret!</h1>
        </div>
        <div class="container">
            <form action="process_booking.php" method="post">
                <label for="background">Select Your Background:</label>
                <select id="background" name="background">
                    <option value="select">Select</option>
                    <option value="uba">UBA</option>
                    <option value="women_welfare">College</option>
                    <option value="ngo">NGO</option>
                    <option value="other">Other</option>
                </select>
                <br/><br/>
                <h1>Select one and proceed further!</h1>

                <div id="uba_fields" style={{display: 'none'}}>
                    <label for="name">College Name:</label>
                    <input type="text" id="name" name="name" required/> <br/><br/>

                    <label for="email">College Email:</label>
                    <input type="email" id="email" name="email" required/><br/><br/>

                    <label for="email">City/Location:</label>
                    <input type="email" id="email" name="email" required/><br/><br/>

                    <label for="villages">Adopted Villages (up to 5):</label>
                    <textarea id="villages" name="villages" rows="4"></textarea> <br/><br/>
                </div>


                {/* <!-- Fields for College --> */}
                <div id="women_welfare_fields" style={{display: 'none'}}>
                    <label for="college">College Name:</label>
                    <input type="text" id="college" name="college"/><br/><br/>

                    <label for="college">College Email:</label>
                    <input type="text" id="college" name="college"/><br/><br/>

                    <label for="college">City/Location:</label>
                    <input type="text" id="college" name="college"/><br/><br/>

                    <label for="college_details">College Details:</label>
                    <textarea id="college_details" name="college_details" rows="4"></textarea><br/><br/>

                    <label for="college">Number of female students in the college?</label>
                    <input type="text" id="college" name="college"/><br/><br/>


                    <label for="background">Is there any women welfare community in the college?</label>
                    <select id="background" name="background">
                        <option value="uba">Yes</option>
                        <option value="women_welfare">No</option><br/><br/>
                    </select>

                        <label for="background">Do you feel that your college is at the safest place?</label>
                        <select id="background" name="background">
                            <option value="uba">Yes</option>
                            <option value="women_welfare">No</option><br/><br/>
                        </select>
                            <label for="college_details">If not then why?</label>
                            <textarea id="college_details" name="college_details" rows="4"></textarea><br/><br/>
                </div>

                {/* <!-- Fields for NGO --> */}
                <div id="ngo_fields" style={{display: 'none'}}>
                    <label for="city">NGO name:</label>
                    <input type="text" id="city" name="city"/> <br/><br/>

                    <label for="city">City/Location:</label>
                    <input type="text" id="city" name="city"/><br/><br/>

                    <label for="city">Establishment year:</label>
                    <input type="text" id="city" name="city"/><br/><br/>

                    <label for="college_details">Recently upto six months What have you done for women welfare
                        community?</label>
                    <textarea id="college_details" name="college_details" rows="4"></textarea><br/><br/>
                </div>

                {/* <!-- Fields for Other --> */}
                <div id="other_fields" style={{display: 'none'}}>
                    <label for="city">Full name:</label>
                    <input type="text" id="city" name="city"/> <br/><br/>

                    <label for="city">Email:</label>
                    <input type="text" id="city" name="city"/><br/><br/>

                    <label for="city">Phone:</label>
                    <input type="text" id="city" name="city"/><br/><br/>

                    <label for="college_details">Why do you want to join us?</label>
                    <textarea id="college_details" name="college_details" rows="4"></textarea><br/><br/>
                </div>
                <input type="submit" value="Submit"/>
            </form>
            </div>  
        </div> 
  )
}
export default Join1
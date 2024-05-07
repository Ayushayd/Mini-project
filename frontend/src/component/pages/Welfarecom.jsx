import React from 'react'

const Welfarecom = () => {
  return (
    <div>
        <header>
        <h1>Exclusive Women Welfare Community Registration</h1>
    </header>
    <div class="container">
        <form action="submit_registration.php" method="post">
            <label for="full_name">Full Name:</label>
            <input type="text" id="full_name" name="full_name" required/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required/>

            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required/>

            <label for="experience">What have you done to empower and support women's welfare in the past? Please
                provide specific examples:</label>
            <textarea id="experience" name="experience" rows="6" required></textarea>

            <label for="vision">What is your vision for the Women Welfare Community, and how do you plan to contribute
                to its realization? (Please provide a detailed response):</label>
            <textarea id="vision" name="vision" rows="6" required></textarea>

            <label for="challenges">In your opinion, what are the biggest challenges women face today, and how can this
                community address them effectively?</label>
            <textarea id="challenges" name="challenges" rows="6" required></textarea>

            <label for="achievements">What achievements or projects related to women's welfare are you most proud of,
                and how did they impact women's lives?</label>
            <textarea id="achievements" name="achievements" rows="6" required></textarea>

            <label for="whyjoin">Why do you want to join this exclusive community, and what unique qualities or skills
                do you bring to the group?</label>
            <textarea id="whyjoin" name="whyjoin" rows="6" required></textarea>

            <button type="submit">Apply for Membership</button>
        </form>
    </div>
    </div>  
  )
}

export default Welfarecom
    
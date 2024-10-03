import React from 'react'
import "./Contact.css"
const Contact = () => {

    const [result, setResult] = React.useState("");
  const apiKey = import.meta.env.VITE_API_KEY
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", apiKey);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className="contactContainer">
        <p className="contact-p">Contact Us</p>
        <h2 className="contact-h2">Get in touch</h2>

        <div className="formContainer">
            <div>
                <h3>Send us a message</h3>
                <p className="desc">Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <p>✉️ Contact@GreatStack.dev</p>
                <p>📱 +1 123-456-7890</p>
                <p>📍 77 Massachusetts Ave, Cambridge
                MA 02139, United States</p>
            </div>
            <form onSubmit={onSubmit}>
                <label>Your Name</label><br />
                <input type="text" name="Name:" placeholder="Enter your name"  required/><br />
            
                <label >Your email</label><br />
                <input type="text" name="Email:" placeholder="Enter your email id" required /><br />

                    <label >Write your messages here</label><br />
                <textarea cols="30" name="message" rows="6" required placeholder="Enter your message here"></textarea><br />
                <button type="submit">Submit</button><br /><br />
                <span>{result}</span>   
                </form>
               
        </div>


        <footer>@Suad Pllana</footer>
    </div>
  )
}

export default Contact

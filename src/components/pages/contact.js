// import React from 'react'
import Navbar from '../navbar/navbar'
import "./contact.css"

// function ContactPage() {
//   return (
//     <div>
//      
//       <img src='https://img.freepik.com/premium-vector/online-shopping-concept-digital-marketing-website-mobile-application_43880-331.jpg?w=1380' alt='' style={{width:1530,height:650}}></img>
//     </div>
//   )
// }

// export default ContactPage


// import React from 'react';

// const ContactPage = () => {
//   return (
    
//     <div>
//       <div className="shopping-contact">
//       <h2>Contact Us</h2>
//       <p>If you have any questions or concerns, feel free to reach out to us:</p>
//       <ul>
//         <li>Email: example@example.com</li>
//         <li>Phone: 123-456-7890</li>
//         <li>Address: 123 Shopping Street, City, Country</li>
//       </ul>
      
//       </div>
//     </div>
//   );
// }

// export default ContactPage;


import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <Navbar/>
     <div className="shopping-contact">
      <h2>Contact Us</h2>
      <h6>If you have any questions or concerns, feel free to reach out to us:</h6>
      
      <div className="contact-info">
        <h3>Contact Information</h3>
        <ul>
          <h6>Email: example@example.com</h6>
          <h6>Phone: 123-456-7890</h6>
          <h6>Address: 123 Shopping Street, City, Country</h6>
        </ul>
      </div>
      
      <div className="social-media">
        <h3>Follow Us</h3>
        <ul>
          <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer" style={{color:"blue",textDecoration:"none"}}><b>Facebook</b></a><br></br>
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer"style={{color:"black",textDecoration:"none"}}><b>Twitter</b></a><br></br>
          <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer"style={{color:"red",textDecoration:"none"}}><b>Instagram</b></a>
        </ul>
      </div>
      
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div><br></br>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div><br></br>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="2" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default ContactPage;

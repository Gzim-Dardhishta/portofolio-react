import React from 'react';
import './css/contact.css';

function Contact() {
  return (
      <div className='contact-body'>
          <form>
              <label htmlFor="">Name</label>
              <input type="text" name="name" placeholder='Name' />
              <label htmlFor="">Last Name</label>
              <input type="text" name="lastname" placeholder='Surname' />
              <label htmlFor="">Your E-mail</label>
              <input type="email" name="email" placeholder='someome@example.domain' />
            
              <label htmlFor="">Message</label>
              <textarea name="message" cols="30" rows="10" placeholder='Type your message here....'></textarea>

              <input type="submit" value="Send Message" />
          </form>
      </div>
  );
}

export default Contact;

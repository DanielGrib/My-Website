import './Contact.css';
import React, { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef();
  const [text, setText]=useState('');
  const textareaRef=useRef(null);

  const handleClick = () =>{
    console.log("Link clicked, new tab opened");
  }

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto'; // Reset the height to auto to recalculate the textarea height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the calculated textarea height
    setText(textarea.value); // Update the state with the current textarea value
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const formSubmitUrl = 'https://formspree.io/f/your-endpoint-id';
      const formData = new FormData(form.current);
      const response = await fetch(formSubmitUrl, {
        method: 'POST',
        body: formData,
        headers:{
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Message sent');
        alert('Message sent successfully');
        e.target.reset();
      } else {
        console.error('Error sending message: something else other then a catch error occured', response.statusText);
        alert('Error in sending message, Something went wrong, Make sure to follow the format');
      }
    } catch (error) {
      console.error('Error sending message: Service is possibly down or the user needs to try again', error.message);
      alert('Error in sending message, Please try again');
      e.target.reset();
    }
  };

  return (
    <div className='contact'>
      <div className='left-content'>
      <h3>To send a message directly into my inbox</h3>
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name" />
        <label>Your Email</label>
        <input type="email" name="user_email" />
        <label>Your Message</label>
        <textarea ref={textareaRef} value={text} onInput={handleInput} name="message" />
        <input type="submit" value="Send" />
      </form>
      </div>
      <div className='right-content'>
      <h3>To Schedule a meeting</h3>
      <div className='availibility'>
      <a href="https://cal.com/danielgribanov" target="_blank" rel="noopener noreferrer" onClick={handleClick}>View Availibility</a>
      </div>
      </div>
    </div>
  );
};

export default Contact;

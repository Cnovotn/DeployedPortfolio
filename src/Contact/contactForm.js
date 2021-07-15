import React, { useState } from "react";
import "./contactForm.css"

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit} class="cf">
      <div class="half left cf">
        <input type="text" id="input-name" placeholder="Name" required/>
        <input type="email" id="input-email" placeholder="Email address" required/>
        <input type="text" id="input-subject" placeholder="Subject" required/>
      </div>
      <div class="half right cf">
        <textarea name="message" type="text" id="input-message" placeholder="Message" required></textarea>
      </div>  
      <button id="input-submit" type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;
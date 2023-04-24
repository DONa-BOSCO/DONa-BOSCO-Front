import React, { useState } from "react";
import '../pages/styleSheet/Chat.css'



function ContactForm() {
  const [message, setMessage] = useState("");
  

  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = "contact@sakurakimonos.com";
    const subject = "Query form";
    const body = message;
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setModalIsOpen(true);
    window.location.reload();
  };

  return (
    <>
 
    <div className="text-container-contact d-flex justify-content-center ">
      <form className="form-contact" onSubmit={handleFormSubmit}>
        <h2 className="titleContact">Contacta con el propietario</h2>
        <br></br>
        <label>
          <textarea
            value={message}
            onChange={handleTextareaChange}
            placeholder="Escribe tu mensaje aquí"
          />
        </label>
        <button className="btn btn-custom" id="btn-ad" type="submit">
        Enviar mensaje
        </button>
        
      </form>
      
    </div>
    </>   
  );
}

export default ContactForm;

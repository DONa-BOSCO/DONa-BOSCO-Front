import React, { useState, useEffect } from "react";
import { productService } from "../services/productService";

function ContactForm({ productId }) {
  const [message, setMessage] = useState("");
  const [product, setProduct] = useState(null);
  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
  };

  async function getProduct(productId) {
    if (productId) {
      const productData = await productService.getProduct(productId);
      setProduct(productData);
    }
  }

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = product[0]?.email;
    const subject = "Información producto Dona Bosco";
    const body = message;
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
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

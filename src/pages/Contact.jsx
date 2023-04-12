import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Aquí se podría agregar el código para enviar el formulario a través de una API o enviar un correo electrónico.
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <Container className="d-flex justify-content-center mt-5" style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Form onSubmit={handleSubmit} style={{ width: '500px' }}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduce tu nombre"
            value={name}
            onChange={handleNameChange}
            required
            style={{ width: '100%' }}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, proporciona tu nombre.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Introduce tu email"
            value={email}
            onChange={handleEmailChange}
            required
            style={{ width: '100%' }}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, proporciona una dirección de correo electrónico válida.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Escribe tu mensaje aquí"
            value={message}
            onChange={handleMessageChange}
            required
            style={{ width: '100%' }}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, escribe un mensaje.
          </Form.Control.Feedback>
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="danger" type="submit">
            Enviar mensaje
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Contact;
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import  './Stylesheet/Login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <Container className="d-flex justify-content-center mt-5 prueba" style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Form onSubmit={handleSubmit} style={{ width: "500px" }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Introduce tu email"
            value={email}
            onChange={handleEmailChange}
            required
            style={{ width: "100%" }}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, proporciona una dirección de correo electrónico válida.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Introduce contraseña"
            value={password}
            onChange={handlePasswordChange}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            required
            style={{ width: "100%" }}
          />
          <Form.Text className="text-muted" style={{ fontSize: "10px" }}>
            La contraseña debe contener al menos 6 caracteres, una letra mayúscula y un número.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            La contraseña debe contener al menos 6 caracteres, una letra mayúscula y un número.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recordar mis datos" onChange={handleRememberMeChange} />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button className="btn btn-custom" type="submit">
            Iniciar Sesión
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;

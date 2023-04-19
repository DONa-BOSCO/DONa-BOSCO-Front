import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import  './Stylesheet/Login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  

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
    <Container className="d-flex justify-content-center mt-5 entrar" style={{ marginTop: "20px", marginBottom: "20px", }}>
      <Form action="https://localhost:7048/User/InsertUser" method="POST" onSubmit={handleSubmit} style={{ width: "500px" }}>

        <Form.Group controlId="formBasicEmail"className="d-flex justify-content-center mt-3 ">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Introduce tu email"
            value={email}
            onChange={handleEmailChange}
            required
            style={{ width: "150%" }}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, proporciona una dirección de correo electrónico válida.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword"className="d-flex justify-content-center mt-3  ">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Introduce contraseña"
            value={password}
            onChange={handlePasswordChange}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            required
            style={{ width: "150%" }}
          />
         
        </Form.Group>
        <Form.Text className="text-muted" style={{ fontSize: "10px" }}>
            La contraseña debe contener al menos 6 caracteres, una letra mayúscula y un número.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            La contraseña debe contener al menos 6 caracteres, una letra mayúscula y un número.
          </Form.Control.Feedback>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recordar mis datos" onChange={handleRememberMeChange} />
        </Form.Group>
        <div className="d-flex justify-content-center mt-3">
          <Button className="btn btn-custom" type="submit">
            Iniciar Sesión
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;

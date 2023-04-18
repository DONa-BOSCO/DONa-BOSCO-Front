import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";


const Join = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`First Name: ${firstName},
                 Last Name: ${lastName},
                 Username: ${username},
                 Email: ${email},
                 Password: ${password}`);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
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
    <Container
      className="d-flex justify-content-center mt-5 entrar"
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <Form onSubmit={handleSubmit} style={{ width: "500px" }}>
        <Form.Group controlId="formBasicFirstName" className="d-flex justify-content-center mt-3 ">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduce tu nombre"
            value={firstName}
            onChange={handleFirstNameChange}
            required
            style={{ width: "150%" }}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, proporciona tu nombre.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicLastName" className="d-flex justify-content-center mt-3 ">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduce tus apellidos"
            value={lastName}
            onChange={handleLastNameChange}
            required
            style={{ width: "150%" }}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, proporciona tus apellidos.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicUsername" className="d-flex justify-content-center mt-3 ">
          <Form.Label>Alias</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduce tu alias"
            value={username}
            onChange={handleUsernameChange}
            required
            style={{ width: "150%" }}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, proporciona un nombre de usuario.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className="d-flex justify-content-center mt-3 ">
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

        <Form.Group controlId="formBasicPassword" className="d-flex justify-content-center mt-3 ">
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
            Registrarme
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Join;

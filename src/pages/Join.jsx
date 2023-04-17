import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Join = () => {
  return ( 
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <Form>
          <div className="mb-3">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" placeholder="nombre y apellido"required />
          </div>
          <div className="mb-3">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control type="text" placeholder="nombre de usuario"required />
          </div>
          <div className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="Email" placeholder="email"required />
          </div>
          <div className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="contraseña"required />
          </div>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="He leído y acepto las condiciones"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <center><Button className="btn btn-custom">Añadir Cuenta</Button></center>
        </Form>
      </div>
    </div>
  );
};

export default Join;

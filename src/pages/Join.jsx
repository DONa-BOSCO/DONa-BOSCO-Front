import React from 'react'
import { Form, Button } from 'react-bootstrap';
const Join = () => {
  return ( 
    <>

      <form>
        
      <div class="container mt-5 p-5">

        
        <div className="mb-3">
          <label>Nombre y Apellido</label>
          <input
            type="Nombre y Apellido"
            className="form-control"
            placeholder="nombre y apellido"
          />
        </div>
        <div className="mb-3">
          <label>Nombre de Usuario</label>
          <input
            type="Nombre de Usuario"
            className="form-control"
            placeholder="nombre de usuario"
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="Email"
            className="form-control"
            placeholder="email"
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="Contraseña"
            className="form-control"
            placeholder="contraseña"
          />
        </div>
        <Form.Group className="mb-3">
        <Form.Check
          required
          label="He leído y acepto las condiciones"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
       
       
      <Button variant="danger">Añadir Cuenta</Button>
     
       </div>
      </form>
    


    
    </>
  )
}
export default Join
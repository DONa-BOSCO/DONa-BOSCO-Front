import React from 'react'
import Form from 'react-bootstrap/Form';

const Login = () => {
  return ( 
    <>

      <form>
        
      <div class="container">

        
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
       
       <div className="d-grid">
          <button type="añadir cuenta" className="btn btn-primary">
            Añadir Cuenta
          </button>
        </div>
     
       </div>
      </form>
    


    
    </>
  )
}
export default Login


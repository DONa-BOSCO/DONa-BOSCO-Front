import { useRouteError, Link } from "react-router-dom";
import bosco from '../assets/bosco.jpg';





const NotFound = () => {
    const error = useRouteError();

  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>404</h1>
        <span role="img" aria-label="sad face" style={{ fontSize: '30px' }}>😔</span>
        <p>{error.statusText || error.message}</p>
    
        <Link to="/">Volver a la página principal</Link>
        <br></br>
        <img src={bosco} alt="logo" style={{ maxWidth: '100px' }} />

      </div>
    );
    
  };
  
  export default NotFound;
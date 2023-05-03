
import SideBar from '../components/SideBar';
import "./Stylesheet/UserProfileView.css";
import { Button } from "react-bootstrap";

const UserProfile = () => {


    return (
        <>
            <SideBar />
            <div className="container-textos text">
                <h2 className="text-center profile-headline text-dark fs-1 fs-md-3 ">Tu Perfil</h2>
                <h6 className="text-center profile-headline text-muted fs-4 fs-md-5">Aquí puedes ver y editar los datos de tu perfil</h6>
            </div>

            <div className="container-form" >
                <form  itemID="form1" className="bg-secondary">
                    <div className="text-center text-dark">
                        <p>Información</p>
                    </div>
                    <div className="row">
                       

                            <div>
                                <div className="name div1 bg-white text-muted fs-7 fs-md-5"> <p>Nombre y Apellidos</p></div>
                                <div className="nick-Name div2 bg-white text-muted fs-7 fs-md-5" ><p>Nombre de Usuario</p></div>
                                <div className="email div3 bg-white text-muted fs-7 fs-md-5" ><p>Correo Electrónico</p></div>
                                <div className="description div3 bg-white text-muted fs-7 fs-md-5" ><p>Descripción</p></div>
                            </div>
                            <div className="d-grid gap-3">
                                <div className="text-center">


                                    <Button className="btn btn-custom btn-sm mt-3 fs-7 fs-md-5 text-center" type="submit" id="btn">Cerrar Sesión</Button>
                                </div>
                            </div>
                   
                    </div>
                </form>
            </div>
        </>
    );
};
export default UserProfile;
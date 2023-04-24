import { useState } from 'react';
import SideBar from '../components/SideBar';
import "./Stylesheet/UserProfileView.css";
import { Button } from "react-bootstrap";

const UserProfile = () => {

    const [name, setName] = useState("");
    const [last_Name, setLast_Name] = useState("");
    const [phone_Number, setPhone_Number] = useState("");



    const handleNameChange = (event) => {
        let nameInput = event.target.value;
        setName(nameInput);
    };
    const handleLast_NameChange = (event) => {
        let last_NameInput = event.target.value;
        setLast_Name(last_NameInput);
    };
    const handlePhone_NumberChange = (event) => {
        let phone_NumberInput = event.target.value;
        setPhone_Number(phone_NumberInput);
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        let newUserProfile = { name, last_Name, phone_Number, };
        userProfileHandler.addUserProfile(newUserProfile);
        event.target.reset()
    };



    return (
        <>
            <SideBar />
            <div className="container-textos text">
                <h2 className="text-center profile-headline text-dark fs-1 fs-md-2 ">Tu Perfil</h2>
                <h6 className="text-center profile-headline text-muted fs-4 fs-md-5">Aquí puedes ver y editar los datos de tu perfil</h6>
            </div>

            <div className="container-form" >
                <form onSubmit={handleSubmit} itemID="form1" className="bg-secondary">
                    <div className="text-center text-dark">
                        <p>Información</p>
                    </div>
                    <div className="row">
                        <div className="col-md-5 text-dark" >

                            <div className="profile d-flex flex-column align-items-center">
                                <img src="https://user-images.githubusercontent.com/117834362/233957884-8aa4ced0-6526-4d35-b74e-d31b6dcaa667.jpg" className="rounded-circle" style={{ width: 180 }}></img>
                                <Button className="btn btn-custom  mt-3" type="submit" id="btn" >Subir Nueva Imagen</Button>
                            </div>

                        </div>
                        <div className="col-md-7">


                            <div>
                                <div className="div1 bg-white text-muted"> <p>Nombre y Apellidos</p></div>
                                <div className="div2 bg-white text-muted" ><p>Nombre de Usuario</p></div>
                                <div className="div3 bg-white text-muted" ><p>Correo Electrónico</p></div>
                                <div className="div3 bg-white text-muted" ><p>Descripción</p></div>
                            </div>
                            <div className="d-grid gap-3">
                                <div className="text-center">


                                    <Button className="btn btn-custom btn-sm mt-3 text-center" type="submit" id="btn">Cerrar Sesión</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
export default UserProfile;
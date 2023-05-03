import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineTags, AiOutlineHeart, AiOutlineLogout } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { Container, Navbar, Nav } from "react-bootstrap";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import './Stylesheet/SideBar.css'

function SideBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [isLoggedIn, setLoggedIn] = useState(true);
    const handleLogout = () => {
        localStorage.removeItem('userData');
        setLoggedIn(false);
        window.location.href = '/login';

        const tooltip = (
            <Tooltip id="tooltip-mis-productos">
                Mis productos
            </Tooltip>
        );
    };
    return (
        <div>
            <MediaQuery minWidth={768}>
               
                <div
                    className="sidebar"
                    style={{
                        position: "fixed",
                        width: "9vw",
                        overflow: "hidden",
                        backgroundColor: "#DC001B",
                    }}
                >
                    <NavLink activeClassName="active" exact to="/UserProfileView">
                        <BsFillPersonFill size={25} /> Mi perfil
                    </NavLink>
                    <NavLink activeClassName="active" to="/misProductos">
                        <AiOutlineTags size={25} /> Por Donar
                    </NavLink>
                    <NavLink activeClassName="active" to="/yaDonados">
                        <AiOutlineHeart size={25} /> Ya Donados
                    </NavLink>
                    
                    <Link className="logout-link" activeClassName="active" onClick={handleLogout} to="/">
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <AiOutlineLogout size={25}/>
                            Cerrar Sesión
                        </div>
                    </Link>

                </div>
            </MediaQuery>

            <MediaQuery maxWidth={767}>
              
                <Navbar expand="lg" variant="light" style={{ marginTop: '20px', marginBottom: '-20px' }} >
                    <Container className="d-flex flex-column flex-md-row">
                        <Nav className="w-100 justify-content-around flex-row">

                            <NavLink activeClassName="active" exact to="/UserProfileView">
                                <BsFillPersonFill size={25} className="icon--color" style={{ fontSize: '2.5rem', animation: 'rotate 2s linear infinite' }} />

                            </NavLink>
                            <NavLink activeClassName="active" to="/misProductos">
                                <AiOutlineTags size={25} className="icon--color" />

                            </NavLink>
                            <NavLink activeClassName="active" to="/yaDonados">
                                <AiOutlineHeart size={25} className="icon--color" />

                            </NavLink>
                
                            <NavLink activeClassName="active" onClick={handleLogout} href="/">

                                <AiOutlineLogout size={25} className="icon--color" />


                            </NavLink>
                        </Nav>
                    </Container>
                </Navbar>
            </MediaQuery>
        </div>
    );
}

export default SideBar;


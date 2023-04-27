/* import { NavLink } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineTags, AiOutlineLogout } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import "./Stylesheet/Sidebar.css"
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';


const Sidebar = () => {

    const [isLoggedIn, setLoggedIn] = useState(true);
    const handleLogout = () => {
        localStorage.removeItem('userData');
        setLoggedIn(false);
        window.location.href = '/login';
    };

    return (
        <div className="sidebar" style={{ position: 'fixed', width: '9vw', overflow: 'hidden' }}>
        <NavLink activeClassName="active" exact to="/miPerfil">
          <BsFillPersonFill /> Mi perfil
        </NavLink>
        <NavLink activeClassName="active" to="/misProductos">
          <AiOutlineTags /> Por Donar
        </NavLink>
        <NavLink activeClassName="active" to="/yaDonados">
          <AiOutlineHeart /> Ya Donados
        </NavLink>
        <NavLink activeClassName="active">
          <button className="btn-out" onClick={handleLogout}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
              <AiOutlineLogout  />
              Cerrar Sesión
            </div>
          </button>
        </NavLink>
      </div>
      
    );
};

export default Sidebar; */

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineTags, AiOutlineHeart, AiOutlineLogout } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { Container, Navbar, Nav } from "react-bootstrap";
import MediaQuery from "react-responsive";

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
                {/* barra lateral en pantallas grandes */}
                <div
                    className="sidebar"
                    style={{
                        position: "fixed",
                        width: "9vw",
                        overflow: "hidden",
                        backgroundColor: "#DC001B",
                    }}
                >
                    <NavLink activeClassName="active" exact to="/miPerfil">
                        <BsFillPersonFill size={25} /> Mi perfil
                    </NavLink>
                    <NavLink activeClassName="active" to="/misProductos">
                        <AiOutlineTags size={25} /> Por Donar
                    </NavLink>
                    <NavLink activeClassName="active" to="/yaDonados">
                        <AiOutlineHeart size={25} /> Ya Donados
                    </NavLink>
                    <NavLink className="logout-link" activeClassName="active" onClick={handleLogout}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <AiOutlineLogout size={25}/>
                            Cerrar Sesión
                        </div>
                    </NavLink>

                </div>
            </MediaQuery>

            <MediaQuery maxWidth={767}>
                {/* sub-navbar en pantallas pequeñas */}
                <Navbar expand="lg" variant="light" style={{ marginTop: '20px', marginBottom: '-20px' }} >
                    <Container className="d-flex flex-column flex-md-row">
                        <Nav className="w-100 justify-content-around flex-row">

                            <NavLink activeClassName="active" exact to="/miPerfil">
                                <BsFillPersonFill size={25} className="icon--color" style={{ fontSize: '2.5rem', animation: 'rotate 2s linear infinite' }} />

                            </NavLink>
                            <NavLink activeClassName="active" to="/misProductos">
                                <AiOutlineTags size={25} className="icon--color" />

                            </NavLink>
                            <NavLink activeClassName="active" to="/yaDonados">
                                <AiOutlineHeart size={25} className="icon--color" />

                            </NavLink>
                            <NavLink activeClassName="active" onClick={handleLogout}>

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


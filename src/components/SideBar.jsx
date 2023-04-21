

import { NavLink } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineTags } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import "./Stylesheet/Sidebar.css"
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';


const Sidebar = () => {
    
    const [isLoggedIn, setLoggedIn] = useState(true);
    const handleLogout = () => {
        localStorage.removeItem('nombreDelToken');
        setLoggedIn(false);
        window.location.href = '/login';
      };

  return (
    <div className="sidebar"  style={{position: 'fixed'}}>
      <NavLink activeClassName="active" exact to="/miPerfil">
      <BsFillPersonFill /> Mi perfil
      </NavLink>
      <NavLink activeClassName="active" to="/misProductos">
      <AiOutlineTags /> Por Donar
      </NavLink>
      <NavLink activeClassName="active" to="/yaDonados">
      <AiOutlineHeart /> Ya Donados
      </NavLink>
      <Button className=" btn btn-custom"onClick={handleLogout}>Cerrar Sesión</Button>
    </div>
  );
};

export default Sidebar;
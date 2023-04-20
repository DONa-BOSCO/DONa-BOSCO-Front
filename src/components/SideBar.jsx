import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineTags } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import "./Stylesheet/Sidebar.css"

const Sidebar = () => {
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
    </div>
  );
};

export default Sidebar;
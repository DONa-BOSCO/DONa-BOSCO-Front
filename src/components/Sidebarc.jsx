import React from "react";
import { Nav } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineTags } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import "../components/styleSheet/SideBarc.css";

const Sidebarc = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-danger col-md-2 col-5 min-vh-100 d-flex flex-column">
        <hr />
          <Nav.Link href="/mi-perfil" className="text-dark sm-5">
            <i className="bi bi-speedometer2"></i>
            <BsFillPersonFill />
            <span className="ms-2">Mi Perfil</span>
          </Nav.Link>
          <Nav.Link href="/productos" className="text-dark sm-5">
            <i className="bi bi-house"></i>
            <AiOutlineTags />
            <span className="ms-2">Por Donar</span>
          </Nav.Link>
          <Nav.Link href="/ya-donados" className="text-dark sm-5">
            <i className="bi bi-table"></i>
            <AiOutlineHeart />
            <span className="ms-2">Donados</span>
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebarc;




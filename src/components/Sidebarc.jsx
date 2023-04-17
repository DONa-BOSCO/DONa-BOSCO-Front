import React from "react";
import { Nav } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineTags } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import "../components/styleSheet/SideBarc.css";

const Sidebarc = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-danger col-3 min-vh-100 d-flex flex-column flex-grow-0">
          <hr />
          <Nav.Link href="/mi-perfil" className="text-dark fs-5 fs-md-4 fs-lg-3 mb-5">
            <i className="bi bi-speedometer2"></i>
           <center> <BsFillPersonFill />
            <span className="ms-2">Mi Perfil</span></center>
          </Nav.Link>
          <Nav.Link href="/productos" className="text-dark fs-5 fs-md-4 fs-lg-3 mb-5">
            <i className="bi bi-house"></i>
            <center> <AiOutlineTags />
            <span className="ms-2">Por Donar</span></center>
          </Nav.Link>
          <Nav.Link href="/ya-donados" className="text-dark fs-5 fs-md-4 fs-lg-3 mb-5">
            <i className="bi bi-table"></i>
            <center><AiOutlineHeart />
            <span className="ms-2">Donados</span></center>
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebarc;




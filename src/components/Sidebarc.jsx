import React from "react";
import { Nav } from "react-bootstrap";
import {BsFillPersonFill} from "react-icons/bs";
import {AiOutlineTags} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";


const Sidebarc = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-danger col-md-2 col-12 min-vh-100 d-flex flex-column">
          <a className="text-decoration-none text-white d-flex align-items-center ms-3 mt-2">
            <i className="bi bi-speedometer"></i>
          </a>
          <hr />
          <Nav defaultActiveKey="/mi-perfil" className="flex-column">
              <Nav.Link href="/mi-perfil" className="text-dark fs-5">
              <i className="bi bi-speedometer2"></i>
              <BsFillPersonFill/><span className="ms-2">Mi Perfil</span>
            </Nav.Link>
            <Nav.Link href="/productos" className="text-dark fs-5">
              <i className="bi bi-house"></i>
              <AiOutlineTags/><span className="ms-2">Productos</span>
            </Nav.Link>
            <Nav.Link href="/ya-donados" className="text-dark fs-5">
              <i className="bi bi-table"></i>
              <AiOutlineHeart/><span className="ms-2">Ya Donados</span>
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebarc;


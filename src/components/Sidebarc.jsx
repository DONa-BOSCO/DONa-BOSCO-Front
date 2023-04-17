import React from "react";




function Sidebarc () {
    return (

        <div className='container-fluid'>
            <div className='row'>
                <div className='bg-dark col-md-2 min-vh-100 d-flex'>
                    <a className='text-decoration-none  text-white d-flex align-itemcenter ms-3 mt-2'>
                        <i className='bi bi-speedometer'></i>
                        
                    </a>
                    <hr />
                    <ul class="nav nav-pills flex-colum">
                        <li class="nav-item text-white fs-4">
                            <a href="#" class="nav-link text-white fs-5" aria-current="page">
                            <i className="bi bi-speedometer2"></i>
                            <span className="ms-2">Mi Perfil</span>
                            </a>
                        
                        </li>

                        <li class="nav-item text-white fs-4">
                            <a href="#" class="nav-link text-white fs-5" aria-current="page">
                            <i className="bi bi-house"></i>
                            <span className="ms-2">Productos</span>
                            </a>
                        
                        </li>
                        
                        <li class="nav-item text-white fs-4">
                            <a href="#" class="nav-link text-white fs-5" aria-current="page">
                            <i className="bi bi-table"></i>
                            <span className="ms-2">Ya Donados</span>
                            </a>
                        
                        </li>
                       
                    </ul>
                </div>
            </div>

        </div>
    )

}


export default Sidebarc;

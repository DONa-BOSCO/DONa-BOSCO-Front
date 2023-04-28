import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";
import { BsEye } from 'react-icons/bs';
import ProductModalUser from '../components/ProductModalUser';
import './Stylesheet/DashboardUser.css';
import { productService } from "../services/productService.js";
import SideBar from "../components/SideBar";
import "../components/Stylesheet/SideBar.css"
import { Container } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io"
import { Link } from "react-router-dom";
import { IoLocationOutline } from 'react-icons/io5';
import { BsPencilSquare, BsTrash, BsX } from 'react-icons/bs'


function Dashboard() {

  const [productsData, setProductsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const deleteProduct = async (id) => {
    await productHandler.deleteProduct(id);
    setProductsData(productsData.filter(product => product.producItem.id !== id));
    handleCloseConfirmation();
  };
  const [show, setShow] = useState(false);
  const [productModal, setProductModal] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (productId) => {
    setProductModal(productsData.find(product => product.producItem.id == productId));
    setShow(true);
  };
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const handleCloseConfirmation = () => setShowConfirmation(false);
  const handleShowConfirmation = (productId) => {
    setProductIdToDelete(productId);
    setShowConfirmation(true);
  };

  const [showModal, setShowModal] = useState(false)
  const handleCloseModal = () => setShowModal(false)
  const handleOpenModal = (productId) => {
    setProductModal(productsData.find(product => product.producItem.id == productId));
  }

  async function getProducts() {
    var resultList = await productService.getProducts();
    setProductsData(resultList);
  }

  function buildImg(extension, content) {
    return "data:" + extension + ";base64," + content;
  }

  useEffect(() => {
    getProducts()
  }, [])
  


  return (

    <>
      <SideBar />
      <div className="d-flex mt-4">

        <Container>
          <div className="container-gn" id="text">
            <br />

            <h2 style={{
              fontSize: '40px',
              marginBottom: '40px',
              color: 'grey',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              letterSpacing: '3px'
            }}>Tus Productos</h2>


            <div className="container-bar mb-5">
              <label htmlFor="category-select"></label>
              <select id="category-select" className="btn btn-custom" onChange={handleCategoryChange}>
                <option value="">Selecciona por categoría </option>
                <option value="Ropa y accesorios">Ropa y accesorios</option>
                <option value="Electrodomesticos">Electrodomésticos</option>
                <option value="Informatica y electrónica">Informatica y electrónica</option>
                <option value="Deporte y ocio">Deporte y ocio</option>
                <option value="Videojuegos y videojuegos"> Videojuegos y juegos</option>
                <option value="Cine, libros y musica">Cine, libros y música</option>.
                <option value="Hogar y jardín">Hogar y jardín</option>
                <option value="Articulos infantiles">Artículos infantiles</option>
                <option value="Otros">Otros</option>
                <option value="">Todos los productos</option>
              </select>
              <Link to='/AddProduct'>
                <button className="btn2 btn-custom2 ms-1 " data-tooltip="Añadir Producto"
                  data-tooltip-location="left" style={{ borderRadius: '150px' }}>
                  <IoMdAdd size={'25px'} style={{ position: 'relative' }} /></button>
              </Link>
            </div>


            <div className="cards">
              {data.map((product) => {
                return (

                  <>
              <React.Fragment key={product.producItem.id}>
                <EditProduct show={showModal} handleClose={handleCloseModal} productModal={productModal} />
                <ProductModalAdm show={show} handleClose={handleClose} productModal={productModal} />
                <Card border="light" style={{ width: '17rem' }}>
                  <Card.Img variant="top" src={buildImg(product.base64FileModel.extension, product.base64FileModel.content)} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '1rem' }}>{product.producItem.title}</Card.Title>
                    <Card.Subtitle className="mt-2 text-muted" style={{ fontSize: '1rem', fontWeight: 'bold'}}>{product.producItem.category}</Card.Subtitle>
                    <Card.Subtitle className="mt-2 text" style={{ fontSize: '1rem' }}>{product.producItem.description}</Card.Subtitle>
                    <Card.Subtitle className="mt-2 text-muted" style={{ fontSize: '1rem' }}>{product.producItem.condition}</Card.Subtitle>
                    <Card.Subtitle className="mt-2 text-muted" style={{ fontSize: '1rem' }}><IoLocationOutline />{product.producItem.location}</Card.Subtitle>

              <br />
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                      <Button variant="light" style={{backgroundColor:'#f8f8f87e'}} size="sm" onClick={() => handleShow(product.producItem.id)}><BsEye /> Ver </Button>
                      <Link to={`/dashboardadmin/editProduct/${product.producItem.id}`}>
                        <Button variant="light" size="sm" onClick={() => handleOpenModal(product.producItem.id)}><BsPencilSquare /> Edit </Button>
                      </Link>
                      <Button variant="light" size="sm" onClick={() => handleShowConfirmation(product.producItem.id)}><BsTrash /> Eliminar </Button>
                    </div>

                  </Card.Body>
                </Card>
              </React.Fragment>
         

                  </>

                )
              })}
            </div>
          </div>
        </Container>
      </div>
    </>

  );
}

export default Dashboard;
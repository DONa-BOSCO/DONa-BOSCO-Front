import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import { BsEye, BsPencilSquare, BsTrash, BsX } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5';
import './Stylesheet/DashboardAdmin.css'
import ProductModalAdm from "../components/ProductModalAdm";
import ButtonNewProduct from '../components/ButtonNewProduct';
import Modal from 'react-bootstrap/Modal';
import EditProduct from '../components/EditProduct';
import { productService } from "../services/productService";
import { IoMdAdd } from "react-icons/io"
import SideBar from "../components/SideBar"


function Dashboard() {

  const [productsData, setProductsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const data = productsData.filter((product) => {
    return product.producItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.producItem.location.toLowerCase().includes(searchQuery.toLowerCase())
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
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
      <div className="container-gn mt-5">
        <br />
        <h2 style={{
              fontSize: '40px',
              marginBottom: '30px',
              color: 'grey',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              letterSpacing: '3px'
            }}>Todos los Productos</h2>
        <div className="container-bar">
              <input className="searchStyle" type="text" placeholder="Busca por nombre de producto o localización" value={searchQuery}
            onChange={handleSearchChange} />

        </div>
        <ButtonNewProduct />
        <div className="cardsAdmin">
          {data.map((product) => {
            return (
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
            )
          })}
        </div>
        <Modal show={showConfirmation} onHide={handleCloseConfirmation} className="my-modal">
          <Modal.Header closeButton>
            <Modal.Title>Confirmar la eliminación</Modal.Title>
          </Modal.Header>
          <Modal.Body>¿Quieres eliminar el producto definitivamente?</Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={() => handleCloseConfirmation()} className="my-button"><BsX /> Cancelar </Button>
            <Button variant="light" onClick={() => deleteProduct(productIdToDelete)} className="my-button"><BsTrash /> Eliminar </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );

}
export default Dashboard;


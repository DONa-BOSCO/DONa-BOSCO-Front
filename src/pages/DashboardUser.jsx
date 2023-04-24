import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";
import { BsEye } from 'react-icons/bs';
import ProductModalUser from '../components/ProductModalUser';
import './Stylesheet/DashboardUser.css';
import { productService } from "../services/productService.js";
import SideBar from "../components/SideBar";
import { Container } from "react-bootstrap";
import { IoLocationOutline } from 'react-icons/io5';


function Dashboard() {

  const [productsData, setProductsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const data = productsData.filter((product) => {
    const lowerCaseCategory = product.producItem.category.toLowerCase();
    const isCategoryMatch = selectedCategory ? lowerCaseCategory === selectedCategory.toLowerCase() : true;
    return isCategoryMatch;
  });

  const [show, setShow] = useState(false);
  const [productModal, setProductModal] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (productId) => {
    setProductModal(productsData.find(product => product.producItem.id == productId));
    setShow(true)
  };

  async function getProducts() {
    var resultList = await productService.getProducts();
    setProductsData(resultList);
  }

  function buildImg(extension, content) {
    return "data:" + extension + ";base64," + content;
  }

  const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const addToCart = async (product) => {
    console.log("cart product array", cartProducts);
    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }

  useEffect(() => {
    getProducts()
  }, [])

  const isLogged = JSON.parse(localStorage.getItem("userData"));
  console.log(isLogged);

  return (

    <>
      <SideBar />
      <div className="d-flex mt-5">

        <Container>
          <div className="container-gn" id="text">
            <br />
            {isLogged ? <h3>La persona esta loggeada</h3> : <h3>La persona no está loggeada</h3>}
            <h1 style={{ marginLeft: '110px' }}> Todos los Productos </h1>
            <div className="container-bar">
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
            </div>


            <div className="cards">
              {data.map((product) => {
                return (

                  <>

                    <ProductModalUser show={show} handleClose={handleClose} productModal={productModal} />
                    <Card border="light" style={{ width: '18rem' }}>
                      <Card.Img className="card-img" variant="top" src={buildImg(product.base64FileModel.extension, product.base64FileModel.content)} />
                      <Card.Body>
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                          <Card.Title style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '0.5rem' }}>{product.producItem.title}</Card.Title>

                        </div>

                        <Card.Subtitle className="mt-2 text-muted" style={{ fontSize: '1rem', fontWeight: 'bold' }}>{product.producItem.category}</Card.Subtitle>
                        <Card.Subtitle className="mt-2 text" style={{ fontSize: '1rem' }}>{product.producItem.description}</Card.Subtitle>
                        <Card.Subtitle className="mt-2 text-muted" style={{ fontSize: '1rem' }}>{product.producItem.condition}</Card.Subtitle>
                        <Card.Subtitle className="mt-2 text-muted" style={{ fontSize: '1rem' }}><IoLocationOutline />{product.producItem.location}</Card.Subtitle>

                        <Button variant="light" alignItems="right" onClick={() => handleShow(product.producItem.id)}><BsEye /> Ver </Button>
                      </Card.Body>
                    </Card>

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
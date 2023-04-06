import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";
import { BsEye } from 'react-icons/bs';
import ProductModalUser from '../components/ProductModalUser';
import './Stylesheet/DashboardUser.css';
import { productService } from "../services/productService.js";

function Dashboard() {

  const [productsData, setProductsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const data = productsData.filter((product) => {
    const isCategoryMatch =
      selectedCategory === "" || product.category === selectedCategory;
    return isCategoryMatch;
  });

  const [show, setShow] = useState(false);
  const [productModal, setProductModal] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (productId) => {
    setProductModal(productsData.find((product) => product.id === productId));
    setShow(true);
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

  return (
    <>
      <div className="container-gn" id="text">
        <br />
        <h1> <b>Todos los Productos</b></h1>
        <div className="container-bar">
          <input
            className="searchStyle"
            type="text"
            placeholder="Busca por categoría"
            value={selectedCategory}
            onChange={handleCategoryChange}
          />
        </div>


        <div className="cards">
          {data.map((product) => {
            return (

              <>

                <ProductModalUser show={show} handleClose={handleClose} productModal={productModal} />
                <Card border="light" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={buildImg(product.base64FileModel.extension, product.base64FileModel.content)} />
                  <Card.Body>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                      <Card.Title style={{ marginRight: '1rem' }}><b>{product.producItem.title}</b></Card.Title>
                      <Button variant="light" onClick={() => handleShow(product.producItem.id)}><BsEye /> Ver </Button>
                    </div>
                    <Card.Subtitle className="mb-2 text-muted">{product.producItem.category}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{product.producItem.description}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{product.producItem.condition}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{product.producItem.location}</Card.Subtitle>


                  </Card.Body>
                </Card>
              </>

            )
          })}
        </div>
      </div>
    </>
  );
}

export default Dashboard;

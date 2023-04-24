import Slide from "../components/Slide";

import "./Stylesheet/Home.css";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ProductModalUser from "../components/ProductModalUser";
import Card from "react-bootstrap/Card";
import { productService } from "../services/productService.js";
import Button from "react-bootstrap/Button";
import { BsEye } from "react-icons/bs";
import { IoLocationOutline } from 'react-icons/io5';


const Home = () => {
  {
    const [productsData, setProductsData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };

    const data = productsData.filter((product) => {
      const lowerCaseCategory = product.producItem.category.toLowerCase();
      const isCategoryMatch = selectedCategory
        ? lowerCaseCategory === selectedCategory.toLowerCase()
        : true;
      return isCategoryMatch;
    });

    const [show, setShow] = useState(false);
    const [productModal, setProductModal] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (productId) => {
      setProductModal(
        productsData.find((product) => product.producItem.id == productId)
      );
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
    };

    useEffect(() => {
      getProducts();
    }, []);

    return (
      <>
        <Slide />
        <div className="home--text">
          <h1 className="swift-up-text" style={{ textAlign: "center" }}>
            <span>Dona lo que ya no utilizas.</span>
            <br />
            <span>Fácil, y sin moverte del sofá</span>
          </h1>
        </div>

        <div className="d-flex">
          <Container>
            <div className="container-gn" id="text">
              <div className="container-bar">
                <label htmlFor="category-select"></label>
                <select
                  id="category-select"
                  className="btn btn-custom p-2"
                  style={{ width: '500px', textAlign: "left" }}
                  onChange={handleCategoryChange}
                >
                  <option value="" style={{ textAlign: 'center' }}>Selecciona por categoría </option>
                  <option value="Ropa y accesorios">Ropa y accesorios</option>
                  <option value="Electrodomesticos">Electrodomésticos</option>
                  <option value="Informatica y electrónica"> Informatica y electrónica</option>
                  <option value="Deporte y ocio">Deporte y ocio</option>
                  <option value="Videojuegos y videojuegos"> {" "} Videojuegos y juegos</option>
                  <option value="Cine, libros y musica">Cine, libros y música</option>
                  <option value="Hogar y jardín">Hogar y jardín</option>
                  <option value="Articulos infantiles"> Artículos infantiles </option>
                  <option value="Otros">Otros</option>
                  <option value="" >Todos los productos</option>
                </select>
              </div>


              <div className="cards">
                {data.slice(0, 4).map((product) => {
                  return (
                    <>
                      <ProductModalUser
                        show={show}
                        handleClose={handleClose}
                        productModal={productModal}
                      />
                      <Card border="light" style={{ width: "20rem" }}>
                        <Card.Img
                          className="card-img"
                          variant="top"
                          src={buildImg(
                            product.base64FileModel.extension,
                            product.base64FileModel.content
                          )}
                        />
                        <Card.Body>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "baseline",
                              justifyContent: "space-between",
                            }}
                          >
                            <Card.Title style={{ marginRight: "1rem" }}>
                              <b>{product.producItem.title}</b>
                            </Card.Title>

                          </div>
                          <Card.Subtitle className="mt-1 text-muted" style={{ fontSize: '1rem', fontWeight: 'bold' }}>{product.producItem.category}</Card.Subtitle>
                          {/* <Card.Subtitle className="mt-1 text" style={{ fontSize: '1rem' }}>{product.producItem.description}</Card.Subtitle> */}
                          {/* <Card.Subtitle className="mt-2 text-muted" style={{ fontSize: '1rem' }}>{product.producItem.condition}</Card.Subtitle> */}
                          <Card.Subtitle className="mt-3 text-muted" style={{ fontSize: '1rem' }}><IoLocationOutline />{product.producItem.location}</Card.Subtitle>
                          <Button
                            className="mt-3"
                            variant="light"
                            onClick={() => handleShow(product.producItem.id)}
                          >
                            <BsEye /> Ver{" "}
                          </Button>
                        </Card.Body>
                      </Card>
                    </>
                  );
                })}
              </div>
              <div className="Sponsors" style={{ textAlign: "center", width: "310px", margin: "0 auto", marginBottom: "100px", marginTop: "50px" }}>
                <h1>Patrocinadores</h1>
              </div>
              <div className="container">
                <div className="item" >
                  <img className="imgStyle--f5" src="https://femcoders.factoriaf5.org/wp-content/uploads/2021/12/factoria-web.png" alt="" />
                  <br />

                </div>
                <div className="item" >
                  <img className="imgStyle" src="https://www.salesianssantjordi.org/wp-content/uploads/2020/12/imagotipo_vertical_RGB.jpg" alt="" />

                </div>
              </div>

            </div>
          </Container>
        </div>
      </>
    );
  }


};
export default Home;

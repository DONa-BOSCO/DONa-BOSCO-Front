import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { productService } from "../services/productService";
import './Stylesheet/ProductModalUser.css'
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const ProductModalUser = ({ show, handleClose, productModal }) => {
  const [productsData, setProductsData] = useState([]);

  async function getProducts() {

    var resultList = await productService.getProducts();
    setProductsData(resultList);
  }

  function buildImg(extension, content) {
    return "data:" + extension + ";base64," + content;
  }


  const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const addToCart = async (product) => {
    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }

  useEffect(() => {
    getProducts()
  }, [])




  return (
    <Modal className='d-flex justify-content-center' show={show} onHide={handleClose} size="">
    <Modal.Header closeButton style={{ display: 'flex', alignItems: 'center' }}>
  <h3 style={{ width: '100%' }}>Usuario <StarRating/></h3>
  <Button className="btn btn-custom" variant="light"> chat </Button>
</Modal.Header>

      <Modal.Body>
        <div id="modal" className="modal-body" style={{ width: '100%' }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <img variant="top" style={{ width: '300px' }} src={buildImg(productModal?.base64FileModel?.extension, productModal?.base64FileModel?.content)} />
          </div>
        
          <h4 className='text-center' style={{ marginTop: '20px' }}>{productModal?.producItem?.title}</h4>  
          <p className='text-center' style={{ marginTop: '20px' }}>{productModal?.producItem?.description}</p>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td><strong>Categoria</strong></td>
                <td>{productModal?.producItem?.category}</td>
              </tr>
              <tr>
                <td><strong>Estado</strong></td>
                <td>{productModal?.producItem?.condition}</td>
              </tr>
              <tr>
                <td><strong>Localización</strong></td>
                <td>{productModal?.producItem?.location}</td>
              </tr>
            </tbody>
          </Table>
          {/* <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
           <Link to={`/Cart`}>
              HAY QUE MODIFICAR ESTO 
              <Button variant="light" onClick={() => addToCart(product)}><BsCart3 /> Reservar</Button>
            </Link> 
          </div> */}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModalUser;
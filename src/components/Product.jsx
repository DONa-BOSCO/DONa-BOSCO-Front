import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BsSearchHeart, BsCart3} from 'react-icons/bs';
import { Link, useLoaderData } from "react-router-dom";
import ProductModalAdm from './ProductModalAdm'


const Product = () => {
  const { Product } = useLoaderData();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



return (
  <>
   <ProductModalAdm show={show} handleClose={handleClose} product={product} />
    <Card border="light" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Product.img}  />
        <Card.Body>
        <Card.Title>{Product.title} </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{Product.description}</Card.Subtitle>
        <Button variant="light" onClick={handleShow}><BsSearchHeart/> View </Button>
        <Link to="/ShoppingCart">
        </Link>
        </Card.Body>
    </Card>
  </>
)

};
  export default Product;




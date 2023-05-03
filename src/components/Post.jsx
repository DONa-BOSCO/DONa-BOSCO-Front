import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from "react-router-dom";
import ProductModalAdm from './ProductModalAdm'

const Post = () => {
  const { Post } = useLoaderData();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return (
  <>
   <ProductModalAdm show={show} handleClose={handleClose} post={post} />
    <Card border="light" style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>{Post.title} </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{Post.description}</Card.Subtitle>
        </Card.Body>
    </Card>
  </>
)

};
  export default Post;
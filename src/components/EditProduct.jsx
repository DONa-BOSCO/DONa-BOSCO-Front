
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const EditProduct = ({handleOpenModal, handleCloseModal, product}) => {

    const { products } = useLoaderData();
    const id = products.id;

    const [title, setTitle] = useState(products.title);
    const [description, setDescription] = useState(products.description);
    const [img, setImg] = useState(products.img);
    const [condition, setCondition] = useState(products.condition);
    const [location, setLocation] = useState(products.location);
    const [category, setCategory] = useState(products.category);


    
    const handleTitleChange = (event) => {
        let titleInput = event.target.value;
        setTitle(titleInput);
      };
    
      const handleDescriptionChange = (event) => {
        let descriptionInput = event.target.value;
        setDescription(descriptionInput);
      };
    
      const handleConditionChange = (event) => {
        let conditionInput = event.target.value;
        setCondition(conditionInput);
      };
    
      const handleLocationChange = (event) => {
        let locationInput = event.target.value;
        setLocation(locationInput);
      };
    
      const handleCategoryChange = (event) => {
        let categoryInput = event.target.value;
        setCategory(categoryInput);
      };
    
      const handleImgChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setImg(reader.result)
        };
      };
    

  const handleUpdate = (event) => {
    event.preventDefault();
    let updatedProduct = { title, description, img, condition, location, category };
    productHandler.updateProduct(id, updatedProduct);
    event.target.reset()
  };


    return (
        <>
     
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={handleOpenModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>Edit product</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            <Form onSubmit={handleUpdate}>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Name </Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder={products.title}
                            onChange={handleTitleChange} />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Description </Form.Label>
                        <Form.Control
                            type="text"
                            name="description"
                            placeholder={products.description}
                            onChange={handleDescriptionChange} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
            
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Estado del producto </Form.Label>
                        <Form.Select
                            type="text"
                            name="material"
                            placeholder={products.material}
                            onChange={handleConditionChange}>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Dónde se encuentra el producto? </Form.Label>
                        <Form.Control
                            type="text"
                            name="pattern"
                            placeholder={products.pattern}
                            onChange={handleLocationChange} />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Category</Form.Label>
                        <Form.Control
                            type="text"
                            name="category"
                            placeholder={products.category}
                            onChange={handleCategoryChange} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                   
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Image </Form.Label>
                        <Form.Control
                            type="text"
                            name="genre"
                            placeholder={products.img}
                            onChange={handleImgChange} />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Save Changes
                </Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            Sakura Kimonos 
        </Modal.Footer>
    </Modal>
    </>
    )

}
export default EditProduct;
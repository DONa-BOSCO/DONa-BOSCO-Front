
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const EditProduct = ({handleOpenModal, handleCloseModal, product}) => {

    const { products } = useLoaderData();
    const id = products.id;

    // Form-related 

    const [title, setTitle] = useState(products.title);
    const [price, setPrice] = useState(products.price);
    const [description, setDescription] = useState(products.description);
    const [img, setImg] = useState(products.img);
    const [units, setUnits] = useState(products.units);
    const [material, setMaterial] = useState(products.material);
    const [pattern, setPattern] = useState(products.pattern);
    const [category, setCategory] = useState(products.category);
    const [season, setSeason] = useState(products.season);

    
  const handleTitleChange = (event) => {
    let titleInput = event.target.value; 
    setTitle(titleInput);
  };
  const handlePriceChange = (event) => {
    let priceInput = event.target.value; 
    setPrice(priceInput);
  };
  const handleDescriptionChange = (event) => {
    let descriptionInput = event.target.value; 
    setDescription(descriptionInput);
  };

  const handleMaterialChange = (event) => {
    let materialInput = event.target.value; 
    setMaterial(materialInput);
  };

  const handlePatternChange = (event) => {
    let patternInput = event.target.value; 
    setPattern(patternInput);
  };

  const handleCategoryChange = (event) => {
    let categoryInput = event.target.value; 
    setCategory(categoryInput);
  };

  const handleSeasonChange = (event) => {
    let seasonInput = event.target.value; 
    setSeason(seasonInput);
  };

  const handleUnitsChange = (event) => {
    let unitsInput = event.target.value; 
    setUnits(unitsInput);
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
    let updatedProduct = { title, description, price, img, units, material, pattern, category, season };
    productHandler.updateProduct(id, updatedProduct);
    event.target.reset()
  };

//   const handleUpdate = async (updatedProduct) => {
      
//     handleOpenModal();

//     if (!updatedProduct) {
//         return;
//     }
//     setUpdatedProduct(updatedProduct);
//     }

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
                        <Form.Label> Price </Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            placeholder={products.price}
                            onChange={handlePriceChange} />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Material </Form.Label>
                        <Form.Select
                            type="text"
                            name="material"
                            placeholder={products.material}
                            onChange={handleMaterialChange}>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Pattern </Form.Label>
                        <Form.Control
                            type="text"
                            name="pattern"
                            placeholder={products.pattern}
                            onChange={handlePatternChange} />
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
                        <Form.Label> Season </Form.Label>
                        <Form.Control
                            type="text"
                            name="season"
                            placeholder={products.season}
                            onChange={handleSeasonChange} />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Units </Form.Label>
                        <Form.Control
                            type="number"
                            name="units"
                            placeholder={products.units}
                            onChange={handleUnitsChange} />
                    </Form.Group>
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
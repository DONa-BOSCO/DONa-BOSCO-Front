import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData, Link } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import { BsEye, BsPencilSquare, BsTrash, BsX } from 'react-icons/bs';
import './Stylesheet/DashboardAdmin.css'
import ProductModalAdm from "../components/ProductModalAdm";
import ButtonNewProduct from '../components/ButtonNewProduct';
import Modal from 'react-bootstrap/Modal';
// import EditProduct from "../components/EditProduct";
import { productService } from "../services/productService";


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
  },[])
 

    return (
      <>
{/* 
        <div className="container-gn" id="text" >
          <br />
          <h1> Sakura Kimonos</h1>
          <>
            <div className="container-bar">
              <input
                className="searchStyle"
                type="text"
                placeholder="🔍 Search by product name or price"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div> */}
            <ButtonNewProduct />
            <div className="cards">
              {data.map((product) => {
                return (
                  <React.Fragment key={product.producItem.id}>
                    {/* <EditProduct show={showModal} handleClose={handleCloseModal} productModal={productModal}/>  */}
                    <ProductModalAdm show={show} handleClose={handleClose} productModal={productModal} />
                    <Card border="light" style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={buildImg(product.base64FileModel.extension, product.base64FileModel.content)} />
                      <Card.Body className='text-center'>
                        <Card.Title>{product.producItem.title} </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">${product.producItem.price}</Card.Subtitle>
                        <Button variant="light" onClick={() => handleShow(product.producItem.id)}><BsEye /> View </Button>
                        {/* <Link to={`editProduct/${product.producItem.id}`}> <Button variant="light" onClick={() => handleOpenModal(product.producItem.id)}><BsPencilSquare/> Edit </Button> </Link>  */}
                        <Button variant="light" onClick={() => handleShowConfirmation(product.producItem.id)}><BsTrash /> Delete </Button>
                      </Card.Body>
                    </Card>
                  </React.Fragment>
                )
              })}
            </div>
            <Modal show={showConfirmation} onHide={handleCloseConfirmation} className="my-modal">
              <Modal.Header closeButton>
                <Modal.Title>Confirm Deletion</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
              <Modal.Footer>
                <Button variant="light" onClick={() => handleCloseConfirmation()} className="my-button"><BsX /> Cancel </Button>
                <Button variant="light" onClick={() => deleteProduct(productIdToDelete)} className="my-button"><BsTrash /> Delete </Button>
              </Modal.Footer>
            </Modal>
          </>
        // </div>
      // </>
    );
  }
  export default Dashboard;
  
//     <>
//       <div className="container-gn" id="text">
//         <br />
//         <h1> Tus Productos </h1>
//         <div className="container-bar">
//           <label htmlFor="category-select"></label>
//           <select id="category-select" onChange={handleCategoryChange}>
//             <option value="">Selecciona por categoría</option>
//             <option value="Ropa y accesorios">Ropa y accesorios</option>
//               <option value="Electrodomesticos">Electrodomésticos</option>
//               <option value="Informatica y electrónica">Dispositivos electrónicos</option>
//               <option value="Deporte y ocio">Deporte y ocio</option>
//               <option value="Videojuegos y videojuegos"> Videojuegos y juegos</option>
//               <option value="Cine, libros y musica">Cine, libros y música</option>.
//               <option value="Hogar y jardín">Hogar y jardín</option>
//               <option value="Articulos infantiles">Artículos infantiles</option>
//               <option value="Otros">Otros</option>
//             <option value="Otros">Otros</option>
//           </select>
//         </div>
//         <ButtonNewProduct />
//         <div className="cards">
//           {data.map((product) => {
//             return (
//               <React.Fragment key={product.producItem.id}>
//                 <EditProduct show={showModal} handleClose={handleCloseModal} productModal={productModal} />
//                 <ProductModalAdm show={show} handleClose={handleClose} productModal={productModal} />
//                 <Card border="light" style={{ width: '18rem' }}>
//                   <Card.Img variant="top" src={buildImg(product.base64FileModel.extension, product.base64FileModel.content)} />
//                   <Card.Body>
//                     <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
//                       <Card.Title style={{ marginRight: '1rem' }}><b>{product.producItem.title}</b></Card.Title>
//                       <Button variant="light" onClick={() => handleShow(product.producItem.id)}><BsEye /> Ver </Button>
//                     </div>
//                     <Card.Subtitle className="mb-2 text-muted">{product.producItem.category}</Card.Subtitle>
//                     <Card.Subtitle className="mb-2 text-muted">{product.producItem.description}</Card.Subtitle>
//                     <Card.Subtitle className="mb-2 text-muted">{product.producItem.condition}</Card.Subtitle>
//                     <Card.Subtitle className="mb-2 text-muted">{product.producItem.location}</Card.Subtitle>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                       <Button variant="light" onClick={() => handleShow(product.producItem.id)}><BsSearchHeart /> Ver </Button>
//                       <Link to={`editProduct/${product.producItem.id}`}>
//                         <Button variant="light" onClick={() => handleOpenModal(product.producItem.id)}><BsPencilSquare /> Editar </Button>
//                       </Link>
//                       <Button variant="light" onClick={() => handleShowConfirmation(product.producItem.id)}><BsTrash /> Eliminar </Button>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </React.Fragment>
//             );
//           })}
//         </div>
//         <Modal show={showConfirmation} onHide={handleCloseConfirmation} className="my-modal">
//           <Modal.Header closeButton>
//             <Modal.Title>Confirma eliminar</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>¿Desea eliminar definitivamente?</Modal.Body>
//           <Modal.Footer>
//             <Button variant="light" onClick={() => handleCloseConfirmation()} className="my-button"><BsX /> Cancelar </Button>
//             <Button variant="light" onClick={() => deleteProduct(productIdToDelete)} className="my-button"><BsTrash /> Eliminar </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </>
//   );
          
// }
// export default Dashboard;


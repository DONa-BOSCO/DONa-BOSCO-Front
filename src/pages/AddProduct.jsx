import { useState } from 'react';
import { productHandler } from '../handlers/productHandler';


const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState(null);
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  let [newProduct, setNewProduct] = useState({});

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
 
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };


  const handleImgChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImg(reader.result)
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newProduct = { title, description,  img,  condition, location, category };
    productHandler.addProduct(newProduct);
    event.target.reset()
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <SideBarLogged /> */}
      <div className="container-form">
        <form onSubmit={handleSubmit} itemID="form1" enctype="multipart/form-data">
          <h1>Create a new product</h1>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input name="title" type="text" className="form-control" placeholder="Product name" onChange={handleTitleChange} required />
          </div>


          <div className="mb-3">
            <label className="form-label" htmlFor="description">Description</label>
            <input name="description" type="text" className="form-control" id="input-description" required placeholder="Tell us about the product." onChange={handleDescriptionChange} />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="Condition">Condition</label>
            <input name="Condition" type="text" className="form-control" id="input-Condition" required placeholder="What Condition is it made of?" onChange={handleConditionChange} />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="Location">Location</label>
            <input name="Location" type="text" className="form-control" id="input-Location" required placeholder="Type of Location." onChange={handleLocationChange} />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="category">Category</label>
            <input name="category" type="text" className="form-control" id="input-category" required placeholder="What is the category?" onChange={handleCategoryChange} />
          </div>

         
          <div className="mb-3">
            <label htmlFor="img" className="form-label">Image</label>
            <input name="img" type="file" className="form-control" placeholder="Upload a picture" onChange={handleImgChange} required />
          </div>

          <button type="submit" className="btn btn-primary" id="btn" onClick={handleShow}>Upload</button>
      </form>
    </div>
    </>
  );
};
export default AddProduct;

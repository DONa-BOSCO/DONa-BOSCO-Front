import { useState } from 'react';
import { postHandler } from '../handlers/postHandler';
import "../pages/Stylesheet/AddProduct.css"

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  let [newPost, setNewPost] = useState({});

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newPost = { title, description};
    postHandler.addPost(newPost);
    event.target.reset()
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div className="container-form">
      <form onSubmit={handleSubmit} itemID="form1" enctype="multipart/form-data">
        <h1><b>Valora tu compra a este vendedor</b></h1>
      
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Titulo</label>
          <input name="title" type="text" className="form-control" id="input-Title" placeholder="Titulo del comentario" onChange={handleTitleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="description">Descripción</label>
          <input name="description" type="text" className="form-control" id="input-description" placeholder="Valora al usuario" onChange={handleDescriptionChange} maxLength="500" required />
        </div>

        <button type="submit" className="btn btn-custom" id="btn" onClick={handleShow}>Subir</button>
      </form>
    </div>

  );
};
export default CreatePost;

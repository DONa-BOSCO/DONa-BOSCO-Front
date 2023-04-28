import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { productHandler } from "../handlers/productHandler";

function EditProduct() {

  const { Product, params } = useLoaderData();

  const id = params.id;
  const [title, setTitle] = useState(Product.title);
  const [description, setDescription] = useState(Product.description);
  const [img, setImg] = useState(Product.img);
  const [condition, setCondition] = useState(Product.condition);
  const [location, setLocation] = useState(Product.location);
  const [category, setCategory] = useState(Product.category);
  const [email, setEmail] = useState("");



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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
    let updatedProduct = {id, title, description, img, condition, location, category, email };
    productHandler.updateProduct(updatedProduct);
    event.target.reset()
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <div className="container-form">
        <form onSubmit={handleSubmit} itemID="form1">
          <h1>Editar el producto</h1>
          <Link to="/dashboardadmin"> <button type="submit" className="btn btn-custom" id="btn" href="/dashboardadmin" > Vuelve a tu página </button> </Link>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Nombre</label>
            <input name="title" type="text" className="form-control" placeholder={Product.title} onChange={handleTitleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="description">Descripción</label>
            <input name="description" type="text" className="form-control" id="input-description" placeholder={Product.description} onChange={handleDescriptionChange} />
          </div>

          <div className="mb-3">
          <label className="form-label" htmlFor="condition">Estado del producto</label>
          <select name="condition" className="form-select form-control" onChange={handleConditionChange} required>
            <option value="">Selecciona una de la 3 opciones</option>
            <option value="nuevo">Nuevo</option>
            <option value="seminuevo">Seminuevo</option>
            <option value="usado">Usado</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="Location">¿Dónde se encuentra el producto?</label>
          <select name="Location" className="form-select form-control" onChange={handleLocationChange} required>
            <option value="">Selecciona la provincia</option>
            <option value="Álava">Álava</option>
            <option value="Albacete">Albacete</option>
            <option value="Alicante">Alicante</option>
            <option value="Almería">Almería</option>
            <option value="Asturias">Asturias</option>
            <option value="Ávila">Ávila</option>
            <option value="Badajoz">Badajoz</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Burgos">Burgos</option>
            <option value="Cáceres">Cáceres</option>
            <option value="Cádiz">Cádiz</option>
            <option value="Cantabria">Cantabria</option>
            <option value="Castellón">Castellón</option>
            <option value="Ceuta">Ceuta</option>
            <option value="Ciudad Real">Ciudad Real</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Cuenca">Cuenca</option>
            <option value="Gerona">Gerona</option>
            <option value="Granada">Granada</option>
            <option value="Guadalajara">Guadalajara</option>
            <option value="Guipúzcoa">Guipúzcoa</option>
            <option value="Huelva">Huelva</option>
            <option value="Huesca">Huesca</option>
            <option value="Islas Baleares">Islas Baleares</option>
            <option value="Jaén">Jaén</option>
            <option value="La Coruña">La Coruña</option>
            <option value="La Rioja">La Rioja</option>
            <option value="Las Palmas">Las Palmas</option>
            <option value="León">León</option>
            <option value="Lérida">Lérida</option>
            <option value="Lugo">Lugo</option>
            <option value="Madrid">Madrid</option>
            <option value="Málaga">Málaga</option>
            <option value="Melilla">Melilla</option>
            <option value="Murcia">Murcia</option>
            <option value="Navarra">Navarra</option>
            <option value="Orense">Orense</option>
            <option value="Palencia">Palencia</option>
            <option value="Pontevedra">Pontevedra</option>
            <option value="Salamanca">Salamanca</option>
            <option value="Santa Cruz de Tenerife">Santa Cruz de Tenerife</option>
            <option value="Segovia">Segovia</option>
            <option value="Sevilla">Sevilla</option>
            <option value="Soria">Soria</option>
            <option value="Tarragona">Tarragona</option>
            <option value="Teruel">Teruel</option>
            <option value="Toledo">Toledo</option>
            <option value="Valencia">Valencia</option>
            <option value="Valladolid">Valladolid</option>
            <option value="Vizcaya">Vizcaya</option>
            <option value="Zamora">Zamora</option>
            <option value="Zaragoza">Zaragoza</option>

          </select>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="category">Categoría</label>
          <select name="category" className="form-select form-control" onChange={handleCategoryChange} required>
            <option value="">Selecciona la categoría </option>
            <option value="Ropa y accesorios">Ropa y accesorios</option>
            <option value="Electrodomesticos">Electrodomésticos</option>
            <option value="Informatica y electrónica">Dispositivos electrónicos</option>
            <option value="Deporte y ocio">Deporte y ocio</option>
            <option value="Videojuegos y videojuegos"> Videojuegos y juegos</option>
            <option value="Cine, libros y musica">Cine, libros y música</option>.
            <option value="Hogar y jardín">Hogar y jardín</option>
            <option value="Articulos infantiles">Artículos infantiles</option>
            <option value="Otros">Otros</option>
          </select>
        </div>   
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input name="email" type="text" className="form-control" id="email" placeholder="Email donde contactaran por tu producto" onChange={handleEmailChange} required />
        </div>  

          <div className="mb-3">
            <label htmlFor="img" className="form-label">Image</label>
            <input name="img" type="file" className="form-control"
              onChange={handleImgChange} />
          </div>

          <button type="submit" className="btn btn-custom" id="btn" onClick={handleShow}>Actualizar</button>
        </form>

      </div></>
  );
};



export default EditProduct;



import React from 'react';

function Product(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
     
    </div>
  );
}

export default Product;
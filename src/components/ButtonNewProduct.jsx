
import React from 'react';

function MyComponent() {
    const link = '/AddProduct';
    
    function handleClick() {
      window.location.href = link;
    }
    
    return (
      <div>
        <button
          type="submit"
          className="btn btn-primary"
          id="btn-ad"
          onClick={handleClick}
        >
          Add New Product
        </button>
        
        <a href={link} className="text-reset"></a>
      </div>
    );
  }

  export default MyComponent;

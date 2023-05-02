import React from 'react';

function MyComponent() {
    const link = '/conctactuser';
    
    function handleClick() {
      window.location.href = link;
    }
    
    return (
      <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px' }}>
      <button
        type="submit"
        className="btn btn-custom"
        id="btn-ad"
        onClick={handleClick}
      >
        Chat
      </button>

      <a href={link} className="text-reset"></a>
    </div>
    );
  }

  export default MyComponent;

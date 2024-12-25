import React from 'react';

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      {/* Ícono del carrito */}
      <span style={{ fontSize: '1.8rem', color: 'white' }}>
        <i className="fas fa-shopping-cart"></i> {/* Ícono del carrito */}
      </span>
      {/* Número del carrito */}
      <span
        style={{
          position: 'absolute',
          top: '-5px',
          right: '-10px',
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '5px 8px',
          fontSize: '0.8rem',
          fontWeight: 'bold',
        }}
      >
        3
      </span>
    </div>
  );
};

export default CartWidget;

import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div
      className="container has-text-centered mt-5"
      style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}
    >
      <h2 className="title is-3" style={{ color: '#333', fontWeight: 'bold' }}>
        {greeting}
      </h2>
    </div>
  );
};

export default ItemListContainer;


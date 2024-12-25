import React from 'react';

const ProductGrid = ({ title, products }) => {
  return (
    <div className="container">
      <h2 className="title is-4 has-text-centered">{title}</h2>
      <div className="columns is-multiline">
        {products.map((product, index) => (
          <div className="column is-one-third" key={index}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={product.image} alt={product.name} className="product-image" />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-6">{product.name}</p>
                <p className="subtitle is-6">S/. {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

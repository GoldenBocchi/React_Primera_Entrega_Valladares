import React from 'react';
import ProductGrid from './ProductGrid';

const Pantalones = () => {
  const products = [
    { name: 'Pantalón Jeans', price: 80, image: 'https://via.placeholder.com/150' },
    { name: 'Pantalón Chino', price: 90, image: 'https://via.placeholder.com/150' },
    { name: 'Pantalón Jogger', price: 100, image: 'https://via.placeholder.com/150' },
  ];

  return <ProductGrid title="Pantalones" products={products} />;
};

export default Pantalones;

import React from 'react';
import ProductGrid from './ProductGrid';
import Casaca1 from '../img/casacas/casaca_1.jpg';
import Casaca2 from '../img/casacas/casaca_2.jpg';
import Casaca3 from '../img/casacas/casaca_3.jpg'
const Casacas = () => {
  const products = [
    { name: 'Casaca de Invierno', price: 120, image: Casaca1 },
    { name: 'Casaca Jean', price: 140, image: Casaca2 },
    { name: 'Casaca Zip', price: 160, image: Casaca3 },
  ];

  return <ProductGrid title="Casacas" products={products} />;
};

export default Casacas;

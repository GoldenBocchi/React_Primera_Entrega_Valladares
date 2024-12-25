import React from 'react';
import ProductGrid from './ProductGrid';
import CamisaAzul from '../img/camisas/camisa_azul.jpg';
import CamisaNegra from '../img/camisas/camisa_negra.jpg';
import CamisaBlanca from '../img/camisas/camisa_blanca.jpg';

const Camisas = () => {
  const products = [
    { name: 'Camisa Azul', price: 50, image: CamisaAzul },
    { name: 'Camisa Negra', price: 60, image: CamisaNegra },
    { name: 'Camisa Rayada', price: 70, image: CamisaBlanca },
  ];

  return <ProductGrid title="Camisas" products={products} />;
};

export default Camisas;

import React from 'react';
import { ProductsSect } from './Products.styled';
import ProductItem from './ProductItem';
const Product = () => {
  return (
    <ProductsSect>
      <h2>Buy your favourite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
      </ul>
    </ProductsSect>
  );
};

export default Product;

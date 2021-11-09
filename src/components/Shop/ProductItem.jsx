import React from 'react';
import { Card } from '../UI/Card.styled';
import {
  ProductItemLi,
  ProductPrice,
  ProductActions,
} from './ProductItem.styled';

const ProductItem = (props) => {
  const { title, price, description } = props;
  return (
    <ProductItemLi>
      <Card>
        <header>
          <h3>{title}</h3>
          <ProductPrice>${price.toFixed(2)}</ProductPrice>
        </header>
        <p>{description}</p>
        <ProductActions>
          <button>Add to Cart</button>
        </ProductActions>
      </Card>
    </ProductItemLi>
  );
};

export default ProductItem;

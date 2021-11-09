import React from 'react';
import { Card } from '../UI/Card.styled';
import {
  ProductItemLi,
  ProductPrice,
  ProductActions,
} from './ProductItem.styled';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const ProductItem = (props) => {
  const { title, price, description, id } = props;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <ProductItemLi>
      <Card>
        <header>
          <h3>{title}</h3>
          <ProductPrice>${price.toFixed(2)}</ProductPrice>
        </header>
        <p>{description}</p>
        <ProductActions>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </ProductActions>
      </Card>
    </ProductItemLi>
  );
};

export default ProductItem;

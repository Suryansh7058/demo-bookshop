import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Actions,
  ItemLi,
  ItemPriceSpan,
  Details,
  Price,
  Quantity,
} from './CartItem.styled';
import { cartActions } from '../../store/cart-slice';
const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  return (
    <ItemLi>
      <header>
        <h3>{title}</h3>
        <Price>
          Rs. {total} <ItemPriceSpan>(Rs. {price}/item)</ItemPriceSpan>
        </Price>
      </header>
      <Details>
        <Quantity>
          x <span>{quantity}</span>
        </Quantity>
        <Actions>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </Actions>
      </Details>
    </ItemLi>
  );
};

export default CartItem;

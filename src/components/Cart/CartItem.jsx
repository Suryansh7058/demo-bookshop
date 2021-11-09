import React from 'react';
import {
  Actions,
  ItemLi,
  ItemPriceSpan,
  Details,
  Price,
  Quantity,
} from './CartItem.styled';
const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  return (
    <ItemLi>
      <header>
        <h3>{title}</h3>
        <Price>
          ${total.toFixed(2)}{' '}
          <ItemPriceSpan>(${price.toFixed(2)}/item)</ItemPriceSpan>
        </Price>
      </header>
      <Details>
        <Quantity>
          x <span>{quantity}</span>
        </Quantity>
        <Actions>
          <button>-</button>
          <button>+</button>
        </Actions>
      </Details>
    </ItemLi>
  );
};

export default CartItem;

import React from 'react';
import { Badge, ButtonCart } from './CartButton.styled';

const CartButton = () => {
  return (
    <ButtonCart>
      <span>My Cart</span>
      <Badge>1</Badge>
    </ButtonCart>
  );
};

export default CartButton;

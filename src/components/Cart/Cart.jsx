import React from 'react';
import { CartCard } from './Cart.styled';
import CartItem from './CartItem';
const Cart = () => {
  return (
    <CartCard>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 2, total: 12, price: 6 }}
        />
      </ul>
    </CartCard>
  );
};

export default Cart;

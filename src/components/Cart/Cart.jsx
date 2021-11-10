import React from 'react';
import { CartCard } from './Cart.styled';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <CartCard>
      <h2>Your Shopping Cart is Empty!!!</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </CartCard>
  );
};

export default Cart;

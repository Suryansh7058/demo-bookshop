import React from 'react';
import { Badge, ButtonCart } from './CartButton.styled';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';
const CartButton = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <ButtonCart onClick={toggleHandler}>
      <span>My Cart</span>
      <Badge>{totalQuantity}</Badge>
    </ButtonCart>
  );
};

export default CartButton;

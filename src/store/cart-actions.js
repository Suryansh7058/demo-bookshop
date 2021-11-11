import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';
import axios from 'axios';

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendCart = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Updating Cart...',
        })
      );
      try {
        await axios.put(
          'https://shopping-cart-redux-11c1e-default-rtdb.firebaseio.com/cart.json',
          {
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }
        );

        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Cart Updated!!!',
            message: 'Cart Updated successfully.',
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error...',
            message: 'Failed to Update the cart. Try again.',
          })
        );
      }
    };
    sendCart();
  };
};

export const getCart = () => {
  return async (dispatch) => {
    (async () => {
      try {
        const response = await axios.get(
          'https://shopping-cart-redux-11c1e-default-rtdb.firebaseio.com/cart.json'
        );
        dispatch(
          cartActions.setCart({
            items: response.data.items || [],
            totalQuantity: response.data.totalQuantity,
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error...',
            message: 'Failed to fetch the cart. Try again.',
          })
        );
      }
    })();
  };
};

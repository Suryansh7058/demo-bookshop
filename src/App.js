import React, { Fragment } from 'react';
import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
const App = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Fragment>
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
};
export default App;

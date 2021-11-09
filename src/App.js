import React, { Fragment } from 'react';
import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';
const App = () => {
  return (
    <Fragment>
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
};
export default App;

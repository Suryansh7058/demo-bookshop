import React from 'react';
import CartButton from '../Cart/CartButton';
import { Header } from './MainHeader.styled';
const MainHeader = () => {
  return (
    <Header>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default MainHeader;

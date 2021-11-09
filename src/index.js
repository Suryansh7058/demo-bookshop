import ReactDOM from 'react-dom';
import React from 'react';
import GlobalStyle from './global/GlobalStyle';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);

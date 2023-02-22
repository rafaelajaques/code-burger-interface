import React from 'react';
import PropTypes from 'prop-types';
import { UserProvider } from './UserContext';
import { CartProvider } from './CartContext';

const AppProvider = ({ children }) => (
  <CartProvider>
    <UserProvider>{children}</UserProvider>
  </CartProvider>
);

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.node,
};

import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header } from '../components/Header';

function PrivateRoute({ element, children, ...rest }) {
  const user = localStorage.getItem('codeburger:userData');

  if (!user) {
    return <Navigate replace to="/login" />;
  }
  return <Header>{children}</Header>;
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  children: PropTypes.element,
};

/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import ContainerButton from './style';

export function Button({ children, ...rest }) {
  return <ContainerButton {...rest}>{children}</ContainerButton>;
}

Button.propTypes = {
  children: PropTypes.string,
};

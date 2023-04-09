/* eslint-disable import/prefer-default-export */

import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Container, ContainerItems } from './style';
import Orders from './Orders';
import { SideMenuAdmin } from '../../components';
import ListProducts from './ListProducts';
import paths from '../../constants/paths';
import NewProduct from './NewProduct';

export function Admin() {
  const { pathname } = useLocation();

  return (
    <Container>
      <SideMenuAdmin pathname={pathname} />
      <ContainerItems>
        {pathname === paths.Orders && <Orders />}
        {pathname === paths.Products && <ListProducts />}
        {pathname === paths.NewProduct && <NewProduct />}
      </ContainerItems>
    </Container>
  );
}

Admin.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

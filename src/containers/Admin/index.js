/* eslint-disable import/prefer-default-export */

import React from 'react';
import { Container } from './style';
import Orders from './Orders';
import { SideMenuAdmin } from '../../components';

export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />

      <Orders />
    </Container>
  );
}

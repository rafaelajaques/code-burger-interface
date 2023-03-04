/* eslint-disable import/prefer-default-export */
import React from 'react';
import Cart from '../../assets/cart.svg';
import Person from '../../assets/person.svg';

import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  ContainerText,
  Line,
  PageLinkExit,
} from './style';

export function Header() {
  return (
    <Container>
      <ContainerLeft>
        <PageLink>Home</PageLink>
        <PageLink>Ver Produtos</PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img src={Cart} alt="carrinho" />
        </PageLink>
        <Line />
        <PageLink>
          <img src={Person} alt="usuario" />
        </PageLink>
        <ContainerText>
          <p>Olá, Rafaela!</p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
}

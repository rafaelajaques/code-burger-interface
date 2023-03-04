/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cart from '../../assets/cart.svg';
import Person from '../../assets/person.svg';
import { useUser } from '../../hooks/UserContext';

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
  const { logout } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const logoutUser = () => {
    logout();
    navigate('/login');
  };
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => navigate('/')} isActive={location.pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/produtos')}
          isActive={location.pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => navigate('/carrinho')}>
          <img src={Cart} alt="carrinho" />
        </PageLink>
        <Line />
        <PageLink>
          <img src={Person} alt="usuario" />
        </PageLink>
        <ContainerText>
          <p>Olá, Rafaela!</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
}

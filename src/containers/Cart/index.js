/* eslint-disable import/prefer-default-export */
import React from 'react';
import CartLogo from '../../assets/cart-image.svg';
import { CartItems, CartResume } from '../../components';
import { Container, CartImg, Wrapper } from './style';

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo do carrinho" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  );
}

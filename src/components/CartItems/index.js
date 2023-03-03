/* eslint-disable react/self-closing-comp */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Container, Header, Body } from './style';
import { useCart } from '../../hooks/CartContext';
import fomatCurrency from '../../utils/formatCurrency';

export function CartItems() {
  const { cartProducts } = useCart();
  console.log(cartProducts);
  return (
    <Container>
      <Header>
        <p />
        <p>Item</p>
        <p>Valor</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>
      {cartProducts &&
        cartProducts.map((product) => (
          <Body key={product.id}>
            <img src={product.url} alt="imagem do produto" />
            <p>{product.name}</p>
            <p>{fomatCurrency(product.price)}</p>
            <p>{product.quantity}</p>
            <p>{fomatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))}
    </Container>
  );
}

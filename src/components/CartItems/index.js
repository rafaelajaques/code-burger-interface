/* eslint-disable react/self-closing-comp */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Container, Header, Body, EmptyCart } from './style';
import { useCart } from '../../hooks/CartContext';
import formatCurrency from '../../utils/formatCurrency';

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts } = useCart();
  console.log(cartProducts);
  return (
    <Container>
      <Header>
        <p />
        <p>Item</p>
        <p>Valor</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
      </Header>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <Body key={product.id}>
            <img src={product.url} alt="imagem do produto" />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button type="button" onClick={() => decreaseProducts(product.id)}>
                -
              </button>
              <p>{product.quantity}</p>
              <button type="button" onClick={() => increaseProducts(product.id)}>
                +
              </button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
      ) : (
        <EmptyCart> Carrinho vazio</EmptyCart>
      )}
    </Container>
  );
}

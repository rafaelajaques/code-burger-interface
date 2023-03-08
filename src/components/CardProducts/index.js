/* eslint-disable import/prefer-default-export */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Container, Image, ProductName, ProductPrice } from './style';
import { Button } from '../Button';
import { useCart } from '../../hooks/CartContext';

export function CardProducts({ product }) {
  const { putProductInCart } = useCart();
  const navigate = useNavigate();

  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button
          onClick={() => {
            putProductInCart(product);
            navigate('/carrinho');
          }}
          style={{ width: 150 }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  );
}

CardProducts.propTypes = {
  product: PropTypes.object,
};

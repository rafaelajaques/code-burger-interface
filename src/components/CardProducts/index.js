/* eslint-disable import/prefer-default-export */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, ProductName, ProductPrice } from './style';
import { Button } from '../Button';

export function CardProducts({ product }) {
  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button>Adicionar</Button>
      </div>
    </Container>
  );
}

CardProducts.propTypes = {
  product: PropTypes.object,
};

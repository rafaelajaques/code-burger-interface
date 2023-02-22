/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, ProductName, ProductPrice } from './style';
import Button from '../Button';

function CardProducts({ product }) {
  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
        <Button>Adicionar</Button>
      </div>
    </Container>
  );
}

export default CardProducts;

CardProducts.propTypes = {
  product: PropTypes.object,
};

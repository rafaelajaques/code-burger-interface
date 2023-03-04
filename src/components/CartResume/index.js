/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Container } from './style';
import { Button } from '../Button';
import formatCurrency from '../../utils/formatCurrency';
import { useCart } from '../../hooks/CartContext';
import api from '../../services/api';

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(5);

  const { cartProducts } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce(
      (acc, current) => current.price * current.quantity + acc,
      0
    );

    setFinalPrice(sumAllItems);
  }, [cartProducts, deliveryTax]);

  const submitOrder = async () => {
    const order = cartProducts.map((product) => ({ id: product.id, quantity: product.quantity }));

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando pedido. Por favor, aguarde.',
      success: 'Pedido realizado com sucesso',
      error: 'Falha ao realizar pedido. Tente novamente',
    });
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>
        Finalizar Pedido
      </Button>
    </div>
  );
}

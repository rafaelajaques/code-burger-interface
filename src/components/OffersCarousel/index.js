/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from 'react-elastic-carousel';
import Offers from '../../assets/offer.png';
import api from '../../services/api';
import { Container, CategoryImg, ContainerItems, Image, Button } from './style';

function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products');

      const onlyOffers = data.filter((product) => product.offer);

      setOffers(onlyOffers);
    }

    loadOffers();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ];

  return (
    <Container>
      <CategoryImg src={Offers} alt="logo da oferta" />

      <Carousel itemsToShow={4} style={{ width: '90%' }} breakPoints={breakPoints}>
        {offers &&
          offers.map((product) => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="imagem do produto" />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <Button>Peça agora</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  );
}

export default OffersCarousel;

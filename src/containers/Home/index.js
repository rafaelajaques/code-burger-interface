/* eslint-disable import/prefer-default-export */
import React from 'react';
import HomeLogo from '../../assets/home-logo.svg';
import { CategoryCarousel, Header, OffersCarousel } from '../../components';
import { Container, HomeImg } from './style';

export function Home() {
  return (
    <Container>
      <Header />
      <HomeImg src={HomeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  );
}

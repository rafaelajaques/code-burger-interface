/* eslint-disable import/prefer-default-export */
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import PropTypes from 'prop-types';
import { Container, ItemContainer, ListLink } from './style';
import listLinks from './menu-list';
import { useUser } from '../../hooks/UserContext';

export function SideMenuAdmin({ pathname }) {
  const { logout } = useUser();
  return (
    <Container>
      <hr />
      {listLinks.map((item) => (
        <ItemContainer key={item.id} isActive={pathname === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr />
      <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
        <LogoutIcon style={{ color: '#ffffff' }} />
        <ListLink to="/login" onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  );
}

SideMenuAdmin.propTypes = {
  pathname: PropTypes.string,
};

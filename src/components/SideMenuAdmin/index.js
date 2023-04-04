/* eslint-disable import/prefer-default-export */
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Container, ItemContainer, ListLink } from './style';
import listLinks from './menu-list';
import { useUser } from '../../hooks/UserContext';

export function SideMenuAdmin() {
  const { logout } = useUser();
  return (
    <Container>
      <hr />
      {listLinks.map((item) => (
        <ItemContainer key={item.id} isActive>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr />
      <ItemContainer style={{ position: 'absolute', bottom: '30px' }}>
        <LogoutIcon style={{ color: '#ffffff' }} />
        <ListLink to="/login" onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  );
}

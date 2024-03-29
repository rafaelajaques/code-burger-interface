/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import ReactSelect from 'react-select';

export const Container = styled.div`
  background: #e5e5e5;
  min-height: 100vh;
`;

export const ProductsImg = styled.img`
  width: 60px;
  border-radius: 5px;
`;

export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;

  .css-qbdosj-Input {
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`;

export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
  font-weight: ${(props) => (props.isActiveStatus ? 'bold' : '400')};
  border-bottom: ${(props) => (props.isActiveStatus ? '2px solid #9758A6' : 'none')};
  padding-bottom: 5px;
`;

import styled from 'styled-components';

export const Container = styled.div``;

export const ProductsImg = styled.img`
  width: 100%;
`;

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`;

export const CategoryButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  font-size: 17px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) => props.isActiveCategory && '2px solid #9758A6'};
  color: ${(props) => (props.isActiveCategory ? '#9758A6' : '#9a9a9d')};
  padding-bottom: 5px;
`;

import React from 'react';
import styled from 'styled-components/native';

interface Props {
  address: string;
  category: string;
  target: string;
}

const Category: React.FC<Props> = ({ address, category, target }) => {
  return (
    <Container>
      <Item>{address}</Item>
      <Item>{category}</Item>
      <Item>{target}</Item>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Item = styled.Text`
  color: #2b2b2b;
  font-size: 10px;
  border-color: #ececec;
  border-radius: 10px;
  border-width: 1px;
  padding: 5px;
  margin-right: 5px;
`;

export default Category;

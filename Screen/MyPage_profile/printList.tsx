import React from 'react';
import ListItem from './listItem';
import styled from 'styled-components/native';

const PrintList = ({ lists }) => {
  return (
    <Container>
      {lists.map((list) => (
        <ListItem list={list} key={list.id} />
      ))}
    </Container>
  );
};
const Container = styled.View`
  flex-direction: column;
`;

export default PrintList;

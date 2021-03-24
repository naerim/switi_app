import React from 'react';
import ListItem from './listItem';
import styled from 'styled-components/native';

const SearchStoryList = ({ list }) => {
  return (
    <Container>
      {list.map((list) => (
        <SearchStoryItem list={list} key={list.id} />
      ))}
    </Container>
  );
};
const Container = styled.View`
  flex-direction: row;
`;

export default SearchStoryList;

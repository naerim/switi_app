import React from 'react';
import SearchStoryItem from './searchStoryItem';
import styled from 'styled-components/native';
const SearchStoryList = ({ searches }) => {
  return (
    <Container>
      {searches.map((search) => (
        <SearchStoryItem search={search} key={search.id} />
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
`;

export default SearchStoryList;

import React from 'react';
import SearchStoryItem from './searchStoryItem';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
const SearchStoryList = ({ searches }) => {
  return (
    <Container style={{ width: '100%' }}>
      {searches.map((search) => (
        <SearchStoryItem search={search} key={search.id} />
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  margin: 20px 0;
`;

const Scroll = styled.ScrollView`
  background-color: pink;
  width: 100%;
  flex-direction: row;
`;
const ScrollContainer = styled.ScrollView`
  height: 10px;
`;

export default SearchStoryList;

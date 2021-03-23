import React from 'react';
import SearchStoryItem from './searchStoryItem';
import styled from 'styled-components/native';

const SearchStoryList = ({ searches }) => {
  return (
    <Scroll>
      <Container>
        {searches.map((search) => (
          <SearchStoryItem search={search} key={search.id} />
        ))}
      </Container>
    </Scroll>
  );
};

const Container = styled.View`
  flex-direction: row;
`;

const Scroll = styled.ScrollView`
  height: 20%;
  display: flex;
  flex-direction: row;
  margin: 0px;
  //directionalLockEnabled 이거 쓰고 싶은데 안된다. 세로로는 드레그 안되게 고정하고 싶다.
`;

export default SearchStoryList;

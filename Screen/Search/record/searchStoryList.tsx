import React from 'react';
import SearchStoryItem from './searchStoryItem';
import styled from 'styled-components/native';

interface searchArrayProps {
  id: number;
  keyword: string;
  idUser: number;
}

interface SearchStoryItemProps {
  searches: searchArrayProps[];
  onPressX: any;
  onPressWord: any;
}

const SearchStoryList: React.FC<SearchStoryItemProps> = ({
  searches,
  onPressX,
  onPressWord,
}) => {
  return (
    <Scroll
      directionalLockEnabled={true}
      showsHorizontalScrollIndicator={false}
    >
      <Container>
        {searches.map((search) => (
          <SearchStoryItem
            onPressWord={onPressWord}
            search={search}
            key={search.id}
            onPressX={onPressX}
          />
        ))}
      </Container>
    </Scroll>
  );
};

const Scroll = styled.ScrollView`
  height: 30px;
  flex-direction: row;
  margin: 15px 0 15px 24px;
`;

const Container = styled.View`
  flex-direction: row;
`;

export default SearchStoryList;

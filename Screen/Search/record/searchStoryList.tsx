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
  onPressX: (id: number) => void;
}

const SearchStoryList: React.FC<SearchStoryItemProps> = ({
  searches,
  onPressX,
}) => {
  return (
    <Scroll
      directionalLockEnabled={true}
      showsHorizontalScrollIndicator={false}
    >
      <Container>
        {searches.map((search) => (
          <SearchStoryItem
            search={search}
            key={search.id}
            onPressX={onPressX}
          />
        ))}
      </Container>
    </Scroll>
  );
};

const Container = styled.View`
  flex-direction: row;
`;

const Scroll = styled.ScrollView`
  flex-direction: row;
  margin-left: 14px;
`;

export default SearchStoryList;

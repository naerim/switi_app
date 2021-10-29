import React from 'react';
import styled from 'styled-components/native';
import SearchStoryList from '../record/searchStoryList';
import RecommendContainer from './Recommend/RecommendContainer';
import OptionMenu from './optionMenu';

interface searchArrayProps {
  id: number;
  keyword: string;
  idUser: number;
}

interface Props {
  searches: searchArrayProps[];
  onPressSearchDelete: () => void;
  onPressX: (id: number) => void;
  onPressWord: any;
  onRecommendWord: (word: string) => void;
}

const SearchWord: React.FC<Props> = ({
  searches,
  onPressSearchDelete,
  onPressX,
  onPressWord,
  onRecommendWord,
}) => {
  return (
    <SearchWordContainer>
      <OptionMenu onPressSearchDelete={onPressSearchDelete} />
      <SearchStoryList
        onPressWord={onPressWord}
        searches={searches}
        onPressX={onPressX}
      />
      <Line />
      <RecommendContainer onRecommendWord={onRecommendWord} />
    </SearchWordContainer>
  );
};

const SearchWordContainer = styled.View``;
const Line = styled.Text`
  height: 10px;
  background-color: #f3f3f3;
  margin-top: 8px;
  margin-bottom: 10px;
`;

export default SearchWord;

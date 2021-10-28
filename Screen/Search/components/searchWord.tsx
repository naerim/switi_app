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
}

const SearchWord: React.FC<Props> = ({
  searches,
  onPressSearchDelete,
  onPressX,
}) => {
  return (
    <SearchWordContainer>
      <OptionMenu onPressSearchDelete={onPressSearchDelete} />
      <SearchStoryList searches={searches} onPressX={onPressX} />
      <Line />
      <RecommendContainer />
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

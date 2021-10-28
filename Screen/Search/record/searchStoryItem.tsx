import React from 'react';
import styled from 'styled-components/native';
import DeleteIcon from '../../../Img/btn_x_black.png';
import { ContentFonts } from '../../../Component/Font';

interface searchArrayProps {
  id: number;
  keyword: string;
  idUser: number;
}

interface SearchStoryItemProps {
  search: searchArrayProps;
  onPressX: any;
}

const SearchStoryItem: React.FC<SearchStoryItemProps> = ({
  search,
  onPressX,
}) => {
  const { id, keyword } = search;
  return (
    <Tag>
      <TouchContainer>
        <Text>{keyword}</Text>
      </TouchContainer>
      <TouchContainer onPress={() => onPressX(id)}>
        <Delete>+</Delete>
      </TouchContainer>
    </Tag>
  );
};

const Tag = styled.View`
  background-color: #fff0ce;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 8px;
  margin-right: 5px;
`;
//이미지 불러오는 데 시간이 걸려서 깜빡이 발생 -> 텍스트로 대체 다른 방법은 ?

const TouchContainer = styled.TouchableOpacity``;

const Text = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
  margin-right: 5px;
`;

const Delete = styled.Text`
  color: #2b2b2b;
  font-size: 20px;
  transform: rotate(45deg);
  font-weight: 200;
`;

export default SearchStoryItem;

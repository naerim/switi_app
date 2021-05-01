import React from 'react';
import styled from 'styled-components/native';
import DeleteIcon from '../../../Img/btn_x_black.png';

interface searchArrayProps {
  id: number;
  text: string;
}

interface SearchStoryItemProps {
  search: searchArrayProps;
  onPressX: (id: number) => void;
}

const SearchStoryItem: React.FC<SearchStoryItemProps> = ({
  search,
  onPressX,
}) => {
  const { id, text } = search;
  return (
    <Tag>
      <Text>{text}</Text>
      <IconContainer onPress={() => onPressX(id)}>
        <Icon source={DeleteIcon} />
      </IconContainer>
    </Tag>
  );
};

const Tag = styled.View`
  background-color: #fff0ce;
  padding: 6px 10px;
  margin: 0 5px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
`;

const IconContainer = styled.TouchableOpacity``;

const Icon = styled.Image`
  width: 10px;
  height: 10px;
`;

const Text = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
  margin-right: 8px;
`;

export default SearchStoryItem;

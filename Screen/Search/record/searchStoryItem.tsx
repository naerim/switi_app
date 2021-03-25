import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
//import deleteIcon from './image/x.png';->작동안함

interface searchArrayProps {
  id: number;
  test: string;
}

interface SearchStoryItemProps {
  search: searchArrayProps;
  onPressX: () => void;
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
        <Icon source={require('./image/x.png')} />
      </IconContainer>
    </Tag>
  );
};

const Tag = styled.View`
  background-color: #ffdd94;
  padding: 7px;
  margin: 0 5px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
`;

const IconContainer = styled.TouchableOpacity`
  margin-left: 2px;
`;
const Icon = styled.Image`
  width: 10px;
  height: 10px;
`;

export default SearchStoryItem;

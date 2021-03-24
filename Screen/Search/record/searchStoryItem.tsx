import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const SearchStoryItem = ({ search }) => {
  const { text } = search;
  return (
    <Tag>
      <Text>{text} X</Text>
    </Tag>
  );
};

const Tag = styled.View`
  background-color: #ffdd94;
  padding: 7px;
  margin: 0 5px;
  border-radius: 20px;
`;

export default SearchStoryItem;

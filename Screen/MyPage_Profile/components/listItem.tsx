import React from 'react';
import styled from 'styled-components/native';
const ListItem = ({ list }) => {
  const { name } = list;
  return (
    <View>
      <Tag>
        <Text>{name}</Text>
      </Tag>
    </View>
  );
};

const View = styled.View`
  flex-direction: row;
`;

const Tag = styled.View`
  padding: 7px;
  margin-top: 5px;
  border-radius: 20px;
  border: 1px #dbdbdb;
  margin-right: 5px;
`;

const Text = styled.Text`
  font-size: 12px;
`;

export default ListItem;

import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { StudyList } from '../../../Data';
import RenderItem from './RenderItem';

const StudyFlatList = () => {
  const FlatListItemSeparator = () => <Line />;

  return (
    <Container>
      <FlatList
        ItemSeparatorComponent={FlatListItemSeparator}
        data={StudyList}
        renderItem={RenderItem}
        keyExtractor={(item) => item.idx.toString()}
        extraData={StudyList}
      />
    </Container>
  );
};

const Container = styled.View`
  margin: 0 24px;
`;

const Line = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

export default StudyFlatList;

import React from 'react';
import styled from 'styled-components/native';
import RenderItem from '../Home/components/StudyFlatList/RenderItem';
import { FlatList } from 'react-native';
import { ScrapList } from '../../Data/Scrap';

const Scrap_FlatList = () => {
  const FlatListItemSeparator = () => <SeparatorLine />;
  const handleLoadMore = () => {
    console.log('reached');
  };
  return (
    <FlatList
      ItemSeparatorComponent={FlatListItemSeparator}
      data={ScrapList}
      renderItem={({ item }) => <RenderItem index={item.idx} item={item} />}
      keyExtractor={(item) => item.idx.toString()}
      extraData={ScrapList}
      contentContainerStyle={{ paddingBottom: 80 }}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0}
    />
  );
};

const SeparatorLine = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;
export default Scrap_FlatList;

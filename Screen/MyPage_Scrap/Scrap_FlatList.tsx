import React from 'react';
import styled from 'styled-components/native';
import RenderItem from '../Home/components/StudyFlatList/RenderItem';
import { FlatList } from 'react-native';
import { ScrapList } from '../../Data/Scrap';
import useScroll from '../../util/useScroll';

const Scrap_FlatList = () => {
  const { scroll, scrollOn } = useScroll();

  const FlatListItemSeparator = () => <SeparatorLine />;
  const handleLoadMore = () => {
    console.log('reached');
  };
  return (
    <Wrap>
      {scroll ? <Line /> : <Nothing />}
      <MarginContainer>
        <FlatList
          ItemSeparatorComponent={FlatListItemSeparator}
          data={ScrapList}
          renderItem={({ item }) => <RenderItem index={item.idx} item={item} />}
          keyExtractor={(item) => item.idx.toString()}
          extraData={ScrapList}
          contentContainerStyle={{ paddingBottom: 80 }}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0}
          onScroll={scrollOn}
        />
      </MarginContainer>
    </Wrap>
  );
};
const Wrap = styled.View``;
const SeparatorLine = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;
const MarginContainer = styled.View`
  margin-right: 24px;
  margin-left: 24px;
  margin-top: 10px;
`;

const Line = styled.View`
  height: 1px;
  background-color: #d8d8d8;
`;
const Nothing = styled.View``;
export default Scrap_FlatList;

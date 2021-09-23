import React from 'react';
import styled from 'styled-components/native';
import RenderItem from '../Home/components/StudyFlatList/RenderItem';
import { FlatList } from 'react-native';
import useScroll from '../../util/useScroll';
import { DataType } from '../Home/interface';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux';

const Scrap_FlatList = () => {
  const { scroll, scrollOn } = useScroll();
  const FlatListItemSeparator = () => <SeparatorLine />;

  const { scrapList } = useSelector(({ userReducer }: rootState) => ({
    scrapList: userReducer.scrapList,
  }));

  return (
    <Wrap>
      {scroll ? <Line /> : <Nothing />}
      <MarginContainer>
        <FlatList
          ItemSeparatorComponent={FlatListItemSeparator}
          data={scrapList && scrapList.scrapList}
          renderItem={({ item }) => <RenderItem index={item.id} item={item} />}
          keyExtractor={(item: DataType) => item.id.toString()}
          extraData={scrapList && scrapList.scrapList}
          contentContainerStyle={{ paddingBottom: 80 }}
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

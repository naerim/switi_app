import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import useScroll from '../../util/useScroll';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux';
import RenderItem from '../Home/components/StudyFlatList/RenderItem';
import EmptyScreen from '../../Component/EmptyScreen';

const Participation_FlatList = () => {
  const { scroll, scrollOn } = useScroll();

  const FlatListItemSeparator = () => <SeparatorLine />;
  const handleLoadMore = () => {
    console.log('reached');
  };

  const { studyHistory } = useSelector(({ userReducer }: rootState) => ({
    studyHistory: userReducer.studyHistory,
  }));

  return (
    <Wrap>
      {scroll ? <Line /> : <Nothing />}
      <MarginContainer>
        <FlatList
          ItemSeparatorComponent={FlatListItemSeparator}
          data={studyHistory && studyHistory.studyList}
          renderItem={({ item }) => <RenderItem index={item.id} item={item} />}
          keyExtractor={(item) => item.id.toString()}
          extraData={studyHistory && studyHistory.studyList}
          contentContainerStyle={{ paddingBottom: 80 }}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0}
          onScroll={scrollOn}
          ListEmptyComponent={<EmptyScreen desc="완료된 스터디가 없습니다." />}
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
export default Participation_FlatList;

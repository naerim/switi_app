import React from 'react';
import ScrapContainer from '../../Component/MypageContainer';
import { useGoMyPage } from '../../util/navigationHooks';
import styled from 'styled-components/native';
import RenderItem from '../Home/components/StudyFlatList/RenderItem';
import { FlatList } from 'react-native';
import { StudyList } from '../../Data';

interface Props {
  idx: number;
}

const Scrap_FlatList: React.FC<Props> = ({ idx }) => {
  const FlatListItemSeparator = () => <SeparatorLine />;
  const OnOffStudy = StudyList.filter((i) => i.online_flag === idx);
  const handleLoadMore = () => {
    console.log('reached');
  };
  return (
    <FlatList
      ItemSeparatorComponent={FlatListItemSeparator}
      data={OnOffStudy}
      renderItem={({ item }) => <RenderItem index={item.idx} item={item} />}
      keyExtractor={(item) => item.idx.toString()}
      extraData={OnOffStudy}
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

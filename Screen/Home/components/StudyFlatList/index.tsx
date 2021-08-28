import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import RenderItem from './RenderItem';
import ListHeader from '../ListHeader';
import { useDispatch, useSelector } from 'react-redux';
import {
  onlineStudyListRequest,
  offlineStudyListRequest,
} from '../../../../redux/studyReducer';
import { rootState } from '../../../../redux';
import { DataType } from '../../interface';

interface Props {
  idx: number;
  tagList: { key: number; name: string; category: string }[];
}

const StudyFlatList: React.FC<Props> = ({ idx, tagList }) => {
  const [checked, setChecked] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false); // flatList 내부의 로딩
  const FlatListItemSeparator = () => <SeparatorLine />;

  const dispatch = useDispatch();
  const fetchOnlineStudyList = (
    order: boolean,
    tagList: { key: number; name: string; category: string }[]
  ) => dispatch(onlineStudyListRequest(order, tagList));
  const fetchOfflineStudyList = (
    order: boolean,
    tagList: { key: number; name: string; category: string }[]
  ) => dispatch(offlineStudyListRequest(order, tagList));

  const { onlineStudyList, offlineStudyList } = useSelector(
    (state: rootState) => state.studyReducer
  );

  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchOnlineStudyList(checked, tagList);
    fetchOfflineStudyList(checked, tagList);
    idx === 0 ? setContent(onlineStudyList) : setContent(offlineStudyList);
    //console.log(tagList);
  }, [checked, tagList]);

  const fetchItem = () => {
    setIsRefreshing(true);
    fetchOnlineStudyList(checked, tagList);
    fetchOfflineStudyList(checked, tagList);
    idx === 0 ? setContent(onlineStudyList) : setContent(offlineStudyList);
    console.log(onlineStudyList);
    setIsRefreshing(false);
  };

  const handleLoadMore = () => {
    console.log('reached');
  };

  return (
    <Container>
      <ListHeader num={content.length} check={{ checked, setChecked }} />
      <FlatList
        ItemSeparatorComponent={FlatListItemSeparator}
        onRefresh={fetchItem}
        refreshing={isRefreshing}
        data={content}
        renderItem={({ item }) => <RenderItem index={item.id} item={item} />}
        keyExtractor={(item: DataType) => item.id.toString()}
        extraData={content}
        contentContainerStyle={{ paddingBottom: 80 }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

const Container = styled.View`
  margin: 0 24px;
`;

const SeparatorLine = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

export default StudyFlatList;

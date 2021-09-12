import React, { useCallback, useEffect, useState } from 'react';
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
  const [checked, setChecked] = useState(true);
  const [query, setQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false); // flatList 내부의 로딩
  const FlatListItemSeparator = () => <SeparatorLine />;

  const dispatch = useDispatch();

  const fetchOnlineStudyList = (order: boolean, query: string) =>
    dispatch(onlineStudyListRequest(order, query));
  const fetchOfflineStudyList = (order: boolean, query: string) =>
    dispatch(offlineStudyListRequest(order, query));

  const { onlineStudyList, offlineStudyList } = useSelector(
    (state: rootState) => state.studyReducer
  );

  const [content, setContent] = useState([]);

  useEffect(() => {
    let tag = '';
    tagList.forEach(({ key, name, category }) => {
      if (category == 'interest') {
        // 카테고리
        if (tag.includes('category')) tag += ':' + (key + 1).toString();
        else tag += '&category=' + (key + 1).toString();
      } else if (category == 'region') {
        // 지역
        if (tag.includes('region')) tag += ':' + (key + 1).toString();
        else tag += '&region=' + (key + 1).toString();
      } else {
        // 모집대상
        if (tag.includes('state')) tag += ':' + (key + 1).toString();
        else tag += '&state=' + (key + 1).toString();
      }
    });
    setQuery(tag);
  }, [tagList]);

  useEffect(() => {
    console.log(query);
    fetchOnlineStudyList(checked, query);
    fetchOfflineStudyList(checked, query);
    idx === 0 ? setContent(onlineStudyList) : setContent(offlineStudyList);
  }, [query]);

  const fetchItem = () => {
    setIsRefreshing(true);
    fetchOnlineStudyList(checked, query);
    fetchOfflineStudyList(checked, query);
    idx === 0 ? setContent(onlineStudyList) : setContent(offlineStudyList);
    setIsRefreshing(false);
  };

  const handleLoadMore = () => {
    console.log('reached');
  };

  // 인기순/최신순 정렬
  const onClickSort = () => {
    const check = checked;
    idx === 0
      ? fetchOnlineStudyList(check, query)
      : fetchOfflineStudyList(check, query);
    idx === 0 ? setContent(onlineStudyList) : setContent(offlineStudyList);
  };

  return (
    <Container>
      <ListHeader
        num={content.length}
        check={{ checked, setChecked }}
        onPress={onClickSort}
      />
      <FlatList
        ItemSeparatorComponent={FlatListItemSeparator}
        onRefresh={fetchItem}
        refreshing={isRefreshing}
        data={content}
        renderItem={useCallback(
          ({ item }) => (
            <RenderItem index={item.id} item={item} />
          ),
          []
        )}
        keyExtractor={(item: DataType) => item.id.toString()}
        extraData={content}
        contentContainerStyle={{ paddingBottom: 80 }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyContainer>
            <EmptyFont>데이터 없음</EmptyFont>
          </EmptyContainer>
        )}
        //   ListFooterComponent={}
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

const EmptyContainer = styled.View`
  margin-top: 10px;
`;

const EmptyFont = styled.Text`
  font-size: 12px;
`;

export default StudyFlatList;

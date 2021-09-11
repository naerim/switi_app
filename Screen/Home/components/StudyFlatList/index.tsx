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

  const fetchOnlineStudyList = (
    order: boolean,
    tagList: { key: number; name: string; category: string }[]
  ) => dispatch(onlineStudyListRequest(order, tagList));
  const fetchOfflineStudyList = (
    order: boolean,
    tagList: { key: number; name: string; category: string }[],
    query: string
  ) => dispatch(offlineStudyListRequest(order, tagList, query));

  const { onlineStudyList, offlineStudyList } = useSelector(
    (state: rootState) => state.studyReducer
  );

  const [content, setContent] = useState([]);

  useEffect(() => {
    var tag = '';
    tagList.forEach(({ key, name, category }) => {
      if (category == 'interest') {
        tag += (key + 1).toString();
        setQuery('&category=' + tag);
      } else setQuery('');
    });
  }, [query]);

  // const handleTag = (tagList: { key: any; name: any; category: any }[]) => {
  //   var tag = '';
  //   const orderValue = checked ? 'update' : 'count';
  //   console.log(tagList);
  //   tagList.forEach(({ key, name, category }) => {
  //     if (category == 'interest') {
  //       tag += (key + 1).toString();
  //       setQuery(orderValue + '&category=' + tag);
  //     } else setQuery(orderValue + '');
  //   });
  // };

  useEffect(() => {
    console.log(tagList);
    var tag = '';
    tagList.forEach(({ key, name, category }) => {
      if (category == 'interest') {
        tag += (key + 1).toString();
        setQuery('&category=' + tag);
      } else setQuery('');
    });

    fetchOnlineStudyList(checked, tagList);
    fetchOfflineStudyList(checked, tagList, query);
    idx === 0 ? setContent(onlineStudyList) : setContent(offlineStudyList);
  }, [tagList]);

  const fetchItem = () => {
    setIsRefreshing(true);
    fetchOnlineStudyList(checked, tagList);
    fetchOfflineStudyList(checked, tagList, query);
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
      ? fetchOnlineStudyList(check, tagList)
      : fetchOfflineStudyList(check, tagList, query);
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

import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import RenderItem from './RenderItem';
import ListHeader from '../ListHeader';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  onlineStudyListRequest,
  offlineStudyListRequest,
} from '../../../../redux/studyReducer';
import { rootState } from '../../../../redux';
import { DataType } from '../../interface';
import EmptyScreen from '../../../../Component/EmptyScreen';

interface Props {
  idx: number;
  tagList: { id: number; name: string; category: string }[];
}

const StudyFlatList: React.FC<Props> = ({ idx, tagList }) => {
  const [checked, setChecked] = useState(true);
  const [query, setQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false); // flatList 내부의 로딩
  const FlatListItemSeparator = () => <SeparatorLine />;

  const dispatch = useDispatch();

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { scrapList } = useSelector(
    ({ userReducer }: rootState) => ({
      scrapList: userReducer.scrapList,
    }),
    shallowEqual
  );

  const fetchOnlineStudyList = (order: boolean, query: string) =>
    dispatch(onlineStudyListRequest(login.token, order, query));
  const fetchOfflineStudyList = (order: boolean, query: string) =>
    dispatch(offlineStudyListRequest(login.token, order, query));

  const { onlineStudyList, offlineStudyList } = useSelector(
    (state: rootState) => state.studyReducer,
    shallowEqual
  );

  useEffect(() => {
    fetchOnlineStudyList(true, '');
    fetchOfflineStudyList(true, '');
  }, [dispatch]);

  useEffect(() => {
    let tag = '';
    tagList.forEach(({ id, name, category }) => {
      if (category == 'interest') {
        // 카테고리
        if (tag.includes('category')) tag += ':' + (id + 1).toString();
        else tag += '&category=' + (id + 1).toString();
      } else if (category == 'region') {
        // 지역
        if (tag.includes('region')) tag += ':' + (id + 1).toString();
        else tag += '&region=' + (id + 1).toString();
      } else {
        // 모집대상
        if (tag.includes('state')) tag += ':' + (id + 1).toString();
        else tag += '&state=' + (id + 1).toString();
      }
    });
    setQuery(tag);
  }, [tagList]);

  useEffect(() => {
    fetchOnlineStudyList(checked, query);
    fetchOfflineStudyList(checked, query);
  }, [checked, query, scrapList]);
  //비동기적 처리 -> 동기적 처리 순서로 결과가 화면에 출력되지 않음
  //동기적 처리로 해결

  const fetchItem = () => {
    setIsRefreshing(true);
    fetchOnlineStudyList(checked, query);
    fetchOfflineStudyList(checked, query);
    setIsRefreshing(false);
  };

  const studyLen =
    idx === 0
      ? onlineStudyList && onlineStudyList.length
      : offlineStudyList && offlineStudyList.length;
  const data = idx === 0 ? onlineStudyList : offlineStudyList;
  const renderItem = useCallback(
    ({ item }) => <RenderItem index={item.id} item={item} />,
    []
  );
  const keyExtractor = useCallback((item: DataType) => item.id.toString(), []);

  return (
    <Container>
      <ListHeader num={studyLen} check={{ checked, setChecked }} />
      <FlatList
        ItemSeparatorComponent={FlatListItemSeparator}
        onRefresh={fetchItem}
        refreshing={isRefreshing}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        extraData={data}
        contentContainerStyle={{ paddingBottom: 80 }}
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyScreen desc="진행중인 스터디가 없습니다." />}
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

import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Proceeding from './RenderItem/Proceeding';
import Recruitment from './RenderItem/Recruitment';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../redux';
import EmptyScreen from '../../../Component/EmptyScreen';
import {
  getMyApplyListRequest,
  getMyStudyListRequest,
} from '../../../redux/manageReducer';

interface Props {
  idx: number;
}

const ContentList: React.FC<Props> = ({ idx }) => {
  const [isRefreshing, setIsRefreshing] = useState(false); // flatList 내부의 로딩
  const FlatListItemSeparator = () => <SeparatorLine />;
  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { myStudyList } = useSelector(
    ({ manageReducer }: rootState) => ({
      myStudyList: manageReducer.myStudyList,
    }),
    shallowEqual
  );
  const { myApplyList } = useSelector(
    ({ manageReducer }: rootState) => ({
      myApplyList: manageReducer.myApplyList,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const onGetMyStudyList = useCallback(
    // 내가 만든 스터디 목록 가져오기
    () => dispatch(getMyStudyListRequest(login.token)),
    [dispatch]
  );
  const onGetMyApplyList = useCallback(
    // 스터디 신청 리스트 가져오기
    () => dispatch(getMyApplyListRequest(login.token)),
    [dispatch]
  );

  const fetchItem = () => {
    setIsRefreshing(true);
    onGetMyStudyList();
    onGetMyApplyList();
    setIsRefreshing(false);
  };

  const data = idx == 0 ? myApplyList : myStudyList;
  const renderItem = useCallback(
    (
      { item } // 0: 진행중, 1: 모집글
    ) =>
      idx == 0 ? (
        <Proceeding index={item.id} item={item} />
      ) : (
        <Recruitment index={item.id} item={item} />
      ),
    []
  );
  const keyExtractor = useCallback((item: any) => item.id.toString(), []);
  const setDesc =
    idx === 0 ? '참여하고 있는 스터디가 없습니다.' : '모집글이 없습니다.';
  if (!myStudyList) return null;
  if (!myApplyList) return null;
  return (
    <Container>
      <FlatList
        data={data}
        ItemSeparatorComponent={FlatListItemSeparator}
        style={{ paddingBottom: 100 }}
        onRefresh={fetchItem}
        refreshing={isRefreshing}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={<EmptyScreen desc={setDesc} />}
      />
    </Container>
  );
};

const Container = styled.View`
  margin: 24px;
`;

const SeparatorLine = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

export default ContentList;

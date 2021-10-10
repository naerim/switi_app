import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Proceeding from './RenderItem/Proceeding';
import Recruitment from './RenderItem/Recruitment';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../redux';
import {
  getMyApplyListRequest,
  getMyStudyListRequest,
} from '../../../redux/manageReducer';

interface Props {
  idx: number;
}

const ContentList: React.FC<Props> = ({ idx }) => {
  const [loading, setLoading] = useState(false);
  const FlatListItemSeparator = () => <SeparatorLine />;

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { myStudyList, myApplyList } = useSelector(
    ({ manageReducer }: rootState) => ({
      myStudyList: manageReducer.myStudyList,
      myApplyList: manageReducer.myApplyList,
    })
  );

  const dispatch = useDispatch();
  const onGetMyStudyList = useCallback(
    // 사용자 프로필 가져오기
    (token) => dispatch(getMyStudyListRequest(token)),
    [dispatch]
  );
  const onGetMyApplyList = useCallback(
    // 사용자 프로필 가져오기
    (token) => dispatch(getMyApplyListRequest(token)),
    [dispatch]
  );

  useEffect(() => {
    setLoading(true);
    onGetMyStudyList(login.token);
    onGetMyApplyList(login.token);
    setLoading(false);
  }, [idx]);

  if (loading) return <div>로딩중..</div>;
  if (!myStudyList) return null;
  if (!myApplyList) return null;

  return (
    <Container>
      <FlatList
        data={idx == 0 ? myApplyList : myStudyList}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({ item }) =>
          // 0: 진행중, 1: 모집글
          idx == 0 ? (
            <Proceeding index={item.id} item={item} />
          ) : (
            <Recruitment index={item.id} item={item} />
          )
        }
        keyExtractor={(item: any) => item.id.toString()}
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

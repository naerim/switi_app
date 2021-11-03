import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components/native';
import ContentList from './components/ContentList';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMyApplyListRequest,
  getMyStudyListRequest,
} from '../../redux/manageReducer';
import { rootState } from '../../redux';

const Management = ({ route }: any) => {
  // 0 : 진행중, 1 : 모집글
  const idx = route.params.idx;

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const dispatch = useDispatch();
  const onGetMyStudyList = useCallback(
    // 내가 만든 스터디 목록 가져오기
    (token) => dispatch(getMyStudyListRequest(token)),
    [dispatch]
  );
  const onGetMyApplyList = useCallback(
    // 스터디 신청 리스트 가져오기
    (token) => dispatch(getMyApplyListRequest(token)),
    [dispatch]
  );

  useEffect(() => {
    onGetMyStudyList(login.token);
    onGetMyApplyList(login.token);
  }, [dispatch]);

  return (
    <Container>
      <ContentList idx={idx} />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export default Management;

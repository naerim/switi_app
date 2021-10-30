import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import StudyFlatList from './components/StudyFlatList';
import TopCategory from './components/TopCategory';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import { getScrapListRequest } from '../../redux/userReducer';
import {
  getMyApplyListRequest,
  getMyStudyListRequest,
} from '../../redux/manageReducer';

const Home = ({ route }: any) => {
  const [tagList, setTagList] = useState<
    { id: number; name: string; category: string }[]
  >([]);
  // 0 : 온라인, 1 : 오프라인
  const idx = route.params.idx;

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));

  const dispatch = useDispatch();
  const onGetScrapList = useCallback(
    // 스크랩리스트 불러오기
    (token) => dispatch(getScrapListRequest(token)),
    [dispatch]
  );
  const onGetMyStudyList = useCallback(
    // 사용자 프로필 가져오기
    (token) => dispatch(getMyStudyListRequest(token)),
    [dispatch]
  );
  const onGetMyApplyList = useCallback(
    // 스터디 신청 리스트 가져오기
    (token) => dispatch(getMyApplyListRequest(token)),
    [dispatch]
  );

  useEffect(() => {
    onGetScrapList(login.token);
    onGetMyStudyList(login.token);
    onGetMyApplyList(login.token);
  }, [dispatch]);

  return (
    <Container>
      <TopCategory tagList={tagList} setTagList={setTagList} />
      <StudyFlatList idx={idx} tagList={tagList} />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export default Home;

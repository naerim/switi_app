import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import StudyFlatList from './components/StudyFlatList';
import TopCategory from './components/TopCategory';
import {
  getCharacterRequest,
  getInterestRequest,
  getRegionRequest,
} from '../../redux/dataReducer';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import { getScrapListRequest } from '../../redux/userReducer';

const Home = ({ route }: any) => {
  const [tagList, setTagList] = useState<
    { key: number; name: string; category: string }[]
  >([]);
  // 0 : 온라인, 1 : 오프라인
  const idx = route.params.idx;

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { character, interest, region } = useSelector(
    ({ dataReducer }: rootState) => ({
      character: dataReducer.character,
      interest: dataReducer.interest,
      region: dataReducer.region,
    })
  );
  const { scrapList } = useSelector(({ userReducer }: rootState) => ({
    scrapList: userReducer.scrapList,
  }));

  const dispatch = useDispatch();
  const onGetInterest = useCallback(() => dispatch(getInterestRequest), [
    dispatch,
  ]);
  const onGetCharacter = useCallback(() => dispatch(getCharacterRequest), [
    dispatch,
  ]);
  const onGetRegion = useCallback(() => dispatch(getRegionRequest), [dispatch]);

  const onGetScrapList = useCallback(
    // 스크랩리스트 불러오기
    (token) => dispatch(getScrapListRequest(token)),
    [dispatch]
  );

  useEffect(() => {
    // 관심분야, 성격, 지역
    onGetScrapList(login.token);
    onGetInterest();
    onGetCharacter();
    onGetRegion();
  }, []);

  if (!scrapList) return null;
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

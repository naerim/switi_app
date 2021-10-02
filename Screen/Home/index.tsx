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

const Home = ({ route }: any) => {
  const [tagList, setTagList] = useState<
    { key: number; name: string; category: string }[]
  >([]);
  // 0 : 온라인, 1 : 오프라인
  const idx = route.params.idx;

  const { character, interest, region } = useSelector(
    ({ dataReducer }: rootState) => ({
      character: dataReducer.character,
      interest: dataReducer.interest,
      region: dataReducer.region,
    })
  );

  const dispatch = useDispatch();
  const onGetInterest = useCallback(() => dispatch(getInterestRequest), [
    dispatch,
  ]);
  const onGetCharacter = useCallback(() => dispatch(getCharacterRequest), [
    dispatch,
  ]);
  const onGetRegion = useCallback(() => dispatch(getRegionRequest), [dispatch]);

  useEffect(() => {
    // 관심분야, 성격, 지역
    onGetInterest();
    onGetCharacter();
    onGetRegion();
  }, []);

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

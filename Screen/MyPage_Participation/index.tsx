import React from 'react';
import ScrapContainer from '../MyPage_Scrap/Scrap_Container';
import { useGoMyPage } from '../../util/navigationHooks';
import styled from 'styled-components/native';
import Participation_FlatList from './Participation_FlatList';
import { shallowEqual, useSelector } from 'react-redux';
import { rootState } from '../../redux';

const MyPage_Participation = () => {
  const goMyPage = useGoMyPage();

  const { studyHistory } = useSelector(
    ({ userReducer }: rootState) => ({
      studyHistory: userReducer.studyHistory,
    }),
    shallowEqual
  );

  const studyHistoryLength = studyHistory ? studyHistory.studyList.length : 0;
  const title = '참여 이력 ';
  return (
    <ScrapContainer
      onPress={goMyPage}
      display
      headerTitle={title}
      count={studyHistoryLength}
    >
      <MarginContainer>
        <Participation_FlatList />
      </MarginContainer>
    </ScrapContainer>
  );
};

const MarginContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default MyPage_Participation;

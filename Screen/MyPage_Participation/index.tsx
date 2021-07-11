import React from 'react';
import ScrapContainer from '../MyPage_Scrap/Scrap_Container';
import { useGoMyPage } from '../../util/navigationHooks';
import styled from 'styled-components/native';
import Participation_FlatList from './Participation_FlatList';
import { ScrapList } from '../../Data/Scrap';

const MyPage_Participation = () => {
  const goMyPage = useGoMyPage();
  const ScrapListLength = ScrapList.length;
  const title = '참여 이력 ';
  return (
    <ScrapContainer
      onPress={goMyPage}
      display
      headerTitle={title}
      count={ScrapListLength}
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

import React from 'react';
import ScrapContainer from './Scrap_Container';
import { useGoMyPage } from '../../util/navigationHooks';
import styled from 'styled-components/native';
import Scrap_FlatList from './Scrap_FlatList';
import { ScrapList } from '../../Data/Scrap';

const MyPage_Scrap = () => {
  const goMyPage = useGoMyPage();
  const ScrapListLength = ScrapList.length;
  const title = '스크랩 ';
  return (
    <ScrapContainer
      onPress={goMyPage}
      display
      headerTitle={title}
      count={ScrapListLength}
    >
      <MarginContainer>
        <Scrap_FlatList />
      </MarginContainer>
    </ScrapContainer>
  );
};

const MarginContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default MyPage_Scrap;

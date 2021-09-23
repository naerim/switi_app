import React from 'react';
import ScrapContainer from './Scrap_Container';
import { useGoMyPage } from '../../util/navigationHooks';
import styled from 'styled-components/native';
import Scrap_FlatList from './Scrap_FlatList';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux';

const MyPage_Scrap = () => {
  const goMyPage = useGoMyPage();

  const { scrapList } = useSelector(({ userReducer }: rootState) => ({
    scrapList: userReducer.scrapList,
  }));

  // 스크랩 수
  const ScrapListLength = scrapList ? scrapList.scrapList.length : 0;

  return (
    <ScrapContainer
      onPress={goMyPage}
      display
      headerTitle="스크랩 "
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

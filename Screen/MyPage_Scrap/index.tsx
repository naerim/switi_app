import React from 'react';
import ScrapContainer from './Scrap_Container';
import { useGoMyPage } from '../../util/navigationHooks';
import styled from 'styled-components/native';
import Scrap_FlatList from './Scrap_FlatList';
import { ScrapList } from '../../Data/Scrap';
import useScroll from '../../util/useScroll';

const MyPage_Scrap = () => {
  const { scroll, scrollOn } = useScroll();
  const goMyPage = useGoMyPage();
  const ScrapListLength = ScrapList.length;
  const title = '스크랩 ';
  return (
    <ScrapContainer
      onPress={goMyPage}
      display
      headerTitle={title}
      count={ScrapListLength}
      scroll={scroll}
    >
      <ScrollContainer onScroll={scrollOn}>
        <MarginContainer>
          <Scrap_FlatList />
        </MarginContainer>
      </ScrollContainer>
    </ScrapContainer>
  );
};

const MarginContainer = styled.View`
  flex: 1;
  background-color: #fff;
  margin-left: 24px;
  margin-right: 24px;
`;

const ScrollContainer = styled.ScrollView``;

export default MyPage_Scrap;

import React from 'react';
import ScrapContainer from '../../Component/MypageContainer';
import { useGoMyPage } from '../../util/navigationHooks';
import styled from 'styled-components/native';
import Scrap_FlatList from './FlatList';
const MyPage_Scrap = () => {
  const goMyPage = useGoMyPage();

  return (
    <ScrapContainer onPress={goMyPage} display headerTitle="스크랩">
      <MarginContainer>
        <Scrap_FlatList idx={1} />
      </MarginContainer>
    </ScrapContainer>
  );
};

const MarginContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 24px;
`;

export default MyPage_Scrap;

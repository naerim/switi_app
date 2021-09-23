import React from 'react';
import styled from 'styled-components/native';
import Icon_info from '../../../Img/icon_info.png';
import Sugar from '../Sugar';
import { useSelector } from 'react-redux';
import { rootState } from '../../../redux';

const SugarContainer = () => {
  const { myPage } = useSelector(({ userReducer }: rootState) => ({
    myPage: userReducer.myPage,
  }));

  const sugar: number = myPage ? myPage.myPage.sugar : 0;

  return (
    <Container>
      <TitleContainer>
        <Text>나의 당도</Text>
        <InfoIcon source={Icon_info} />
      </TitleContainer>
      <Sugar num={sugar} />
      <EmptyContainer />
    </Container>
  );
};

const Container = styled.View`
  margin-left: 24px;
  margin-right: 24px;
  flex: 3;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  flex: 2;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 12px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const InfoIcon = styled.Image`
  margin-left: 2px;
  height: 12px;
  width: 12px;
`;

const EmptyContainer = styled.View`
  flex-direction: row;
  flex: 1;
`;

export default SugarContainer;

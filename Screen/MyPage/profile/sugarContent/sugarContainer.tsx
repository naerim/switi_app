import React from 'react';
import styled from 'styled-components/native';
import SugarContent from './sugarcontent';
import Icon_info from '../../../../Img/icon_info.png';

const SugarContainer = () => (
  <Container>
    <TitleContainer>
      <TitleHelpContainer>
        <Text>나의 당도</Text>
      </TitleHelpContainer>
      <TitleHelpContainer>
        <InfoIcon source={Icon_info} />
      </TitleHelpContainer>
    </TitleContainer>
    <SugarContent />
    <EmptyContainer />
  </Container>
);

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

const TitleHelpContainer = styled.View`
  text-align: center;
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

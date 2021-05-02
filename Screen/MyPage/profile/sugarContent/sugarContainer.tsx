import React from 'react';
import styled from 'styled-components/native';
import SugarContent from './sugarcontent';
import Icon_info from '../../../../Img/icon_info.png';

const SugarContainer = () => (
  <Container>
    <TextContainer>
      <Text>나의 당도</Text>
      <InfoIcon source={Icon_info} />
    </TextContainer>
    <SugarContent />
  </Container>
);

const Container = styled.View`
  margin-left: 24px;
  margin-right: 24px;
`;

const TextContainer = styled.View`
  flex-direction: row;
`;

const Text = styled.Text`
  font-size: 12px;
  padding-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

const InfoIcon = styled.Image`
  margin-left: 2px;
  height: 12px;
  width: 12px;
`;

export default SugarContainer;

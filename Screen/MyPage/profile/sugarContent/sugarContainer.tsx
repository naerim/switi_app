import React from 'react';
import styled from 'styled-components/native';
import SugarContent from './sugarcontent';

const SugarContainer = () => (
  <Container>
    <Text>나의 당도</Text>
    <SugarContent />
  </Container>
);

const Container = styled.View`
  margin-left: 24px;
  margin-right: 24px;
`;

const Text = styled.Text`
  font-size: 12px;
  padding-bottom: 10px;
`;

export default SugarContainer;

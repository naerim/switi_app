import React from 'react';
import styled from 'styled-components/native';

const SugarContent = () => (
  <Container>
    <SugarContainer>
      <SugarImage source={require('./image/sweet50.png')} />
      <Text>50%</Text>
    </SugarContainer>
  </Container>
);

const Container = styled.View`
  width: 100%;
  height: 86px;
  background-color: #fffcf5;
  border-radius: 20px;
  justify-content: center;
  padding: 10px;
`;

const SugarContainer = styled.View`
  position: relative;
  justify-content: center;
`;

const SugarImage = styled.Image`
  width: 25.17px;
  height: 40.19px;
`;

const Text = styled.Text`
  font-size: 11px;
  color: #86e3c3;
  margin-top: 10px;
`;

export default SugarContent;

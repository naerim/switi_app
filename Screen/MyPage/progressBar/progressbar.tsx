import React from 'react';
import { Text } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

const ProgressBar = () => {
  return (
    <Container>
      <Text>Loading.....</Text>
      <ProgressBarContainer></ProgressBarContainer>
      <Text>50%</Text>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${Constants.statusBarHeight} 8px 8px 8px;
  background-color: #ecf0f1;
`;

const ProgressBarContainer = styled.View`
  height: 20px;
  background-color: white;
  border: 2px #0000;
  border-radius: 5px;
`;

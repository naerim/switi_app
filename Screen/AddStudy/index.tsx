import React from 'react';
import styled from 'styled-components/native';
import { useGoHome } from '../../util/navigationHooks';
import Header from './components/Header';
import { Platform } from 'react-native';

const AddStudy = () => {
  const goHome = useGoHome();
  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      <Header onPress={goHome} />
      <Title>스터디 추가 페이지</Title>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: white;
`;

const Title = styled.Text`
  font-size: 14px;
`;

export default AddStudy;

import React from 'react';
import styled from 'styled-components/native';
import { useGoHome } from '../../util/navigationHooks';
import Header from './components/Header';
import { Platform } from 'react-native';
import AddImage from './components/AddImage';

const AddStudy = () => {
  const goHome = useGoHome();
  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      <Header onPress={goHome} />
      <AddImage />
      <Content>
        <Title>스터디 추가 페이지</Title>
      </Content>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: white;
`;

const Content = styled.ScrollView`
  background-color: white;
  padding: 0 24px;
`;

const Title = styled.Text`
  font-size: 14px;
`;

export default AddStudy;

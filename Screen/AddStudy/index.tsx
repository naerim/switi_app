import React from 'react';
import styled from 'styled-components/native';
import { useGoHome } from '../../util/navigationHooks';
import Header from './components/Header';
import { Platform, ScrollView } from 'react-native';
import AddImage from './components/AddImage';
import Category from './components/Category';
import Target from './components/Target';

const AddStudy = () => {
  const goHome = useGoHome();
  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      <Header onPress={goHome} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <AddImage />
        <Content>
          <Category />
          <Target />
        </Content>
      </ScrollView>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: white;
`;

const Content = styled.ScrollView`
  background-color: white;
  padding: 20px 24px;
`;

export default AddStudy;

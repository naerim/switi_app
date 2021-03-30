import React from 'react';
import styled from 'styled-components/native';
import StudyFlatList from './components/StudyFlatList';

const Home = () => {
  return (
    <Container>
      <CategoryArea>
        <CategoryText>카테고리영역</CategoryText>
      </CategoryArea>
      <StudyFlatList />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Content = styled.View`
  margin: 0 24px;
`;

const CategoryArea = styled.View`
  margin-left: 24px;
  background-color: beige;
  padding: 24px 0;
`;

const CategoryText = styled.Text`
  font-size: 12px;
`;

export default Home;

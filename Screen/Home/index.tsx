import React from 'react';
import styled from 'styled-components/native';
import StudyFlatList from './components/StudyFlatList';
import TopCategory from './components/TopCategory';

const Home = ({ route }: any) => {
  // 0 : 온라인, 1 : 오프라인
  const idx = route.params.idx;

  return (
    <Container>
      <TopCategory />
      <StudyFlatList idx={idx} />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export default Home;

import React from 'react';
import styled from 'styled-components/native';
import ContentList from './components/ContentList';

const Management = ({ route }: any) => {
  // 0 : 진행중, 1 : 모집글
  const idx = route.params.idx;

  return (
    <Container>
      <ContentList idx={idx}>sdf</ContentList>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: white;
`;

export default Management;

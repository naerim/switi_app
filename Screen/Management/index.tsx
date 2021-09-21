import React from 'react';
import styled from 'styled-components/native';
import ContentList from './components/ContentList';

const Management = ({ route }: any) => {
  // 0 : 진행중, 1 : 모집글
  const idx = route.params.idx;

  return (
    <Container>
      <ContentList idx={idx} />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export default Management;

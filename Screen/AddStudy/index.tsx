import React from 'react';
import styled from 'styled-components/native';
import { useGoHome } from '../../util/navigationHooks';

const AddStudy = () => {
  const goHome = useGoHome();
  return (
    <Container>
      <Title>스터디 추가 페이지</Title>
      <PrevButton title="x" onPress={goHome} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 14px;
`;

const PrevButton = styled.Button``;

export default AddStudy;

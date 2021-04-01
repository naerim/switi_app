import React from 'react';
import styled from 'styled-components/native';
import { useGoHome } from '../../util/navigationHooks';

const StudyDetail = () => {
  const goHome = useGoHome();
  return (
    <Container>
      <PrevButton title="이전버튼" onPress={goHome} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const PrevButton = styled.Button`
  font-size: 14px;
`;

export default StudyDetail;

import React from 'react';
import styled from 'styled-components/native';
import { useGoHome } from '../../util/navigationHooks';
import { StudyList } from '../../Data';

const StudyDetail = ({ route }: any) => {
  const goHome = useGoHome();
  const idx = route.params.idx;
  const item = StudyList.find((i) => i.idx === idx);

  return (
    <Container>
      <Title>{item && item.title}</Title>
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

const Title = styled.Text`
  font-size: 16px;
`;

export default StudyDetail;

import React from 'react';
import styled from 'styled-components/native';
import { StudyList } from '../../Data';
import StudyImage from './components/StudyImage';

const StudyDetail = ({ route }: any) => {
  const idx = route.params.idx;
  const item = StudyList.find((i) => i.idx === idx);

  return (
    <Container>
      <StudyImage />
      <Detail>
        <Title>{item && item.title}</Title>
      </Detail>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
`;

const Title = styled.Text`
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
`;

const Detail = styled.View`
  padding: 0 24px;
`;

export default StudyDetail;

import React from 'react';
import styled from 'styled-components/native';
import { StudyList } from '../../Data';
import StudyImage from './components/StudyImage';
import StudyInfo from './components/StudyInfo';
import BottomButton from './components/BottomButton';

const StudyDetail = ({ route }: any) => {
  const idx = route.params.idx;
  const item = StudyList.find((i) => i.idx === idx);

  return (
    <Container>
      <StudyImage />
      <Content>
        <Title>{item && item.title}</Title>
        <Desc>{item?.desc}</Desc>
      </Content>
      <StudyInfo item={item} />
      <BottomButton />
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

const Content = styled.View`
  padding: 0 24px;
  flex: 3;
`;

const Desc = styled.Text`
  font-size: 12px;
  color: #2b2b2b;
`;

export default StudyDetail;

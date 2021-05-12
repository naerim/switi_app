import React from 'react';
import styled from 'styled-components/native';
import { StudyList } from '../../Data';
import StudyInfo from './components/StudyInfo';
import BottomButton from './components/BottomButton';
import OtherInfo from './components/OtherInfo';
import StudyImage from './components/StudyImage';

const StudyDetail = ({ route }: any) => {
  const idx = route.params.idx;
  const item = StudyList.find((i) => i.idx === idx);

  return (
    <Container>
      <StudyImage done={item?.flag === 0} />
      <Content>
        <Title>{item && item.title}</Title>
        <OtherInfo
          username={item?.username}
          createAt={item?.createAt}
          scrap={item?.scrap}
        />
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
  margin-bottom: 20px;
  flex: 4;
  border-bottom-width: 1px;
  border-color: #f3f3f3;
`;

const Desc = styled.Text`
  font-size: 12px;
  color: #2b2b2b;
  flex: 6;
`;

export default StudyDetail;

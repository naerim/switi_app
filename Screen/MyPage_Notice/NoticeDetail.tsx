import React from 'react';
import styled from 'styled-components/native';
import NoticeContainer from '../../Component/ContainerWithBack';
import { useGoBack } from '../../util/navigationHooks';
import { NoticeData } from './NoticeData';

const NoticeDetail = ({ route }: any) => {
  const idx = route.params.idx;
  const goBack = useGoBack();
  return (
    <NoticeContainer onPress={goBack} display headerTitle="공지사항">
      <Container>
        <Title>{NoticeData[idx].title}</Title>
        <Date>{NoticeData[idx].createAt}</Date>
        <Line />
        {NoticeData.map(
          ({ key, title, Component }) => idx == key && <Component key={key} />
        )}
      </Container>
    </NoticeContainer>
  );
};

const Container = styled.View`
  padding: 24px;
`;

const Title = styled.Text`
  font-size: 14px;
  color: #2b2b2b;
  font-weight: bold;
`;

const Date = styled.Text`
  font-size: 10px;
  color: #b4b4b4;
  padding: 10px 0;
`;

const Line = styled.View`
  height: 1px;
  background-color: #f3f3f3;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export default NoticeDetail;

import React from 'react';
import styled from 'styled-components/native';

interface OneNoticeContainerProps {
  idx: number;
  title: string;
  content: string;
  //아마도 내용은 나중에 스크린 만들어야 할 듯
  createAt: string;
}

const OneNoticeContainer: React.FC<OneNoticeContainerProps> = ({
  idx,
  title,
  content,
  createAt,
}) => (
  <Container activeOpacity={0.8}>
    <Title>{title}</Title>
    <Date>{createAt}</Date>
    <Line />
  </Container>
);

const Container = styled.TouchableOpacity`
  margin-top: 20px;
`;
const Title = styled.Text`
  font-size: 12px;
  padding-bottom: 5px;
  padding-left: 24px;
  padding-right: 24px;
`;

const Date = styled.Text`
  font-size: 10px;
  color: #b4b4b4;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 20px;
`;

const Line = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

export default OneNoticeContainer;

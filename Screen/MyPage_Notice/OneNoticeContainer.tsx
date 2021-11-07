import React from 'react';
import styled from 'styled-components/native';
import { UseGoNoticeDetail } from '../../util/navigationHooks';

interface OneNoticeContainerProps {
  key: number;
  title: string;
  createAt: string;
  onPress: () => void;
}

const OneNoticeContainer: React.FC<OneNoticeContainerProps> = ({
  key,
  title,
  createAt,
  onPress,
}) => {
  return (
    <Container activeOpacity={0.8} key={key} onPress={onPress}>
      <Title>{title}</Title>
      <Date>{createAt}</Date>
      <Line />
    </Container>
  );
};

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

import React from 'react';
import styled from 'styled-components/native';
import { UseGoAlarm } from '../../../util/navigationHooks';

interface Props {
  title: string;
}

const Headder: React.FC<Props> = ({ title }) => {
  const goAlarm = UseGoAlarm();
  return (
    <Wrap>
      <Container>
        <Title>{title}</Title>
      </Container>
      <IconContainer onPress={goAlarm}>
        <AlarmIcon source={require('./Alarm2.png')} />
      </IconContainer>
    </Wrap>
  );
};

const Wrap = styled.View`
  background-color: #fff;
  justify-content: space-between;
  height: 46px;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-right: 24px;
`;

const Container = styled.View`
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding-left: 24px;
`;

const IconContainer = styled.TouchableOpacity``;
const AlarmIcon = styled.Image`
  width: 18px;
  height: 18px;
`;
export default Headder;

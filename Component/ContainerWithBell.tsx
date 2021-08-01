import React from 'react';
import styled from 'styled-components/native';
import Alarm from '../Img/icon_alarm.png';
import { Platform } from 'react-native';

interface Props {
  onPress?: () => void;
  title: string;
  scroll?: boolean;
}

const ContainerWithBell: React.FC<Props> = ({
  title,
  children,
  onPress,
  scroll,
}) => {
  return (
    <Container
      style={{
        paddingTop: Platform.OS === 'ios' ? 20 : 70,
      }}
    >
      {/*40->50수정 알람버튼 윗부분 클릭 시 안드로이드에서 상단 바 내려와서 수정했습니다. */}
      <HeaderContainer>
        <Title>{title}</Title>
        <AlarmButton activeOpacity={0.8} onPress={onPress}>
          <AlarmIcon source={Alarm} />
        </AlarmButton>
      </HeaderContainer>
      {scroll ? <Line /> : <Nothing />}
      {children}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-flow: column;
  background-color: white;
`;

const HeaderContainer = styled.View`
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  color: #2b2b2b;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const AlarmIcon = styled.Image`
  height: 18px;
  width: 18px;
`;

const AlarmButton = styled.TouchableOpacity``;

const Line = styled.View`
  height: 1px;
  background-color: #d8d8d8;
`;
const Nothing = styled.View``;

export default ContainerWithBell;

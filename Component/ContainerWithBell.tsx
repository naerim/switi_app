import React from 'react';
import styled from 'styled-components/native';
import Alarm from '../Img/icon_alarm.png';
import { Platform } from 'react-native';
import useScroll from '../util/useScroll';

interface Props {
  onPressTitle?: () => void;
  onPressBell?: () => void;
  title: string;
}

const ContainerWithBell: React.FC<Props> = ({
  title,
  children,
  onPressBell,
  onPressTitle,
}) => {
  const { scroll, scrollOn } = useScroll();
  return (
    <Container
      style={{
        paddingTop: Platform.OS === 'ios' ? 20 : 70,
      }}
    >
      <HeaderContainer>
        <TitleTouch onPress={onPressTitle}>
          <Title>{title}</Title>
        </TitleTouch>
        <AlarmButton activeOpacity={0.8} onPress={onPressBell}>
          <AlarmIcon source={Alarm} />
        </AlarmButton>
      </HeaderContainer>
      {/*<ChildrenContainer onScroll={scrollOn}>*/}
      <ChildrenContainer>
        {scroll ? <Line /> : <Nothing />}
        {children}
      </ChildrenContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-flow: column;
  background-color: white;
`;

const HeaderContainer = styled.View`
  flex: 1;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
`;

// const ChildrenContainer = styled.ScrollView`
//   flex: 16;
// `;

const ChildrenContainer = styled.View`
  flex: 16;
`;

const TitleTouch = styled.TouchableOpacity``;

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

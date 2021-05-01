import React from 'react';
import styled from 'styled-components/native';
import Alarm from '../Img/icon_alarm.png';
import { Platform } from 'react-native';

interface Props {
  onPress?: () => void;
  title: string;
}

const SearchContainer: React.FC<Props> = ({ title, children, onPress }) => {
  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 20 : 40 }}>
      <HeaderContainer>
        <Title>{title}</Title>
        <AlarmButton activeOpacity={0.8} onPress={onPress}>
          <AlarmIcon source={Alarm} />
        </AlarmButton>
      </HeaderContainer>
      {children}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
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
`;

const AlarmIcon = styled.Image`
  height: 18px;
  width: 18px;
`;

const AlarmButton = styled.TouchableOpacity``;

export default SearchContainer;

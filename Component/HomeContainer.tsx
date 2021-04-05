import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import HomeHeader from './HomeHeader';

interface Props {
  onPress?: () => void;
}

const HomeContainer: React.FC<Props> = ({ children, onPress }) => {
  const goAlarm = () => console.log('alarm'); // 알람페이지로 이동
  return (
    <Wrap style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      <HomeHeader onPress={goAlarm} />
      <Container>{children}</Container>
    </Wrap>
  );
};

const Wrap = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Container = styled.View`
  flex: 12;
  background-color: #fff;
`;

export default HomeContainer;

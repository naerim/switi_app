import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import HomeHeader from './HomeHeader';
import AddStudyButton from '../Screen/Home/components/AddStudyButton';
import { UseGoAlarm } from '../util/navigationHooks';

interface Props {
  onPress?: () => void;
}

const HomeContainer: React.FC<Props> = ({ children, onPress }) => {
  const goAlarm = UseGoAlarm; // 알람페이지로 이동
  return (
    <Wrap style={{ paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
      <HomeHeader onPress={goAlarm()} />
      <Container>{children}</Container>
      <AddStudyButton />
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

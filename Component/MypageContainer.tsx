import React from 'react';
import styled from 'styled-components/native';
import BasicHeader from '../Component/MypageBasicHeader';
import { Platform } from 'react-native';

//설명 : 제가 만든 screen의 container입니다!

interface Props {
  headerTitle: string;
  display: boolean;
  onPress?: () => void;
}

const MypageContainer: React.FC<Props> = ({
  children,
  headerTitle,
  onPress,
  display,
}) => {
  return (
    <Wrap style={{ paddingTop: Platform.OS === 'ios' ? 20 : 40 }}>
      <BasicHeader title={headerTitle} onPress={onPress} display={display} />
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

export default MypageContainer;

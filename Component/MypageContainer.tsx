import React from 'react';
import styled from 'styled-components/native';
import BasicHeader from '../Component/MypageBasicHeader';
import { Platform } from 'react-native';

//설명 : 제가 만든 screen의 container입니다!

interface Props {
  headerTitle: string;
  display: boolean;
  onPress?: () => void;
  scroll?: boolean;
}

const MypageContainer: React.FC<Props> = ({
  children,
  headerTitle,
  onPress,
  display,
  scroll,
}) => {
  return (
    <Wrap style={{ paddingTop: Platform.OS === 'ios' ? 20 : 70 }}>
      <BasicHeader title={headerTitle} onPress={onPress} display={display} />
      {scroll ? <Line /> : <Nothing />}
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

const Line = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;
const Nothing = styled.View``;

export default MypageContainer;

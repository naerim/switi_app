import React from 'react';
import styled from 'styled-components/native';
import BasicHeader from '../Component/MypageBasicHeader';
import { Platform } from 'react-native';

interface Props {
  headerTitle: string;
  display: boolean;
  onPress?: () => void;
  scroll?: boolean;
}

const ContainerWithBack: React.FC<Props> = ({
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
  background-color: #d8d8d8;
`;
const Nothing = styled.View``;

export default ContainerWithBack;

import React from 'react';
import styled from 'styled-components/native';
import BasicHeader from '../../Component/MypageBasicHeader';
import { Platform } from 'react-native';

interface Props {
  headerTitle: string;
  display: boolean;
  onPress?: () => void;
}

const UserInfoContainer: React.FC<Props> = ({
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

export default UserInfoContainer;

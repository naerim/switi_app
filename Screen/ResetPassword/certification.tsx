import React from 'react';
import styled from 'styled-components/native';
import { useGoEmailAuth, useGoRenewPassword } from '../../util/navigationHooks';
import ResetPwdContainer from './components/Layout/ResetPwdContainer';

const Certification = () => {
  const goEmailAuth = useGoEmailAuth();
  const goRenewPassword = useGoRenewPassword();

  return (
    <ResetPwdContainer
      buttonText="확인"
      onClick={goRenewPassword}
      onPress={goEmailAuth}
    >
      <Container>
        <BigText>인증 번호</BigText>
      </Container>
    </ResetPwdContainer>
  );
};

const Container = styled.View``;

const BigText = styled.Text`
  font-size: 14px;
`;

export default Certification;

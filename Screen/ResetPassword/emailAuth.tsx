import React from 'react';
import styled from 'styled-components/native';
import ResetPwdContainer from './components/Layout/ResetPwdContainer';
import { useGoCertification, useGoSignIn } from '../../util/navigationHooks';

const EmailAuth = () => {
  const goLogin = useGoSignIn();
  const goCertification = useGoCertification();

  return (
    <ResetPwdContainer
      buttonText="인증번호 받기"
      onClick={goCertification}
      onPress={goLogin}
    >
      <Container>
        <BigText>이메일 인증</BigText>
      </Container>
    </ResetPwdContainer>
  );
};

const Container = styled.View``;

const BigText = styled.Text`
  font-size: 14px;
`;

export default EmailAuth;

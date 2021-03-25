import React from 'react';
import styled from 'styled-components/native';
import { useGoCertification, useGoSignIn } from '../../util/navigationHooks';
import ResetPwdContainer from './components/Layout/ResetPwdContainer';

const RenewPassword = () => {
  const goLogin = useGoSignIn();
  const goCertification = useGoCertification();

  return (
    <ResetPwdContainer
      buttonText="재설정 완료"
      onClick={goLogin}
      onPress={goCertification}
    >
      <Container>
        <BigText>비밀번호 갱신</BigText>
      </Container>
    </ResetPwdContainer>
  );
};

const Container = styled.View``;

const BigText = styled.Text`
  font-size: 14px;
`;

export default RenewPassword;

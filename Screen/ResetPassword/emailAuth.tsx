import React from 'react';
import styled from 'styled-components/native';
import ResetPwdContainer from './components/Layout/ResetPwdContainer';
import { useGoCertification, useGoSignIn } from '../../util/navigationHooks';
import useInput from '../../util/useInput';
import AuthInput from './components/AuthInput';

const EmailAuth = () => {
  const goLogin = useGoSignIn();
  const goCertification = useGoCertification();
  const desc =
    '입력하신 이메일 주소로 인증번호가 전송됩니다.\n인증이 완료된 후 비밀번호를 재설정해주세요.';
  const email = useInput('');

  const onPress = () => {
    if (email.value !== '') {
      goCertification();
    }
    // 인증번호 보내기
  };

  return (
    <ResetPwdContainer
      buttonText="인증번호 받기"
      onClick={onPress}
      onPress={goLogin}
    >
      <Container>
        <BigText>{'이메일 인증 후\n비밀번호를 재발급 받으세요'}</BigText>
        <SmallText>{desc}</SmallText>
      </Container>
      <AuthInput input={email} title="이메일을 입력해 주세요." />
    </ResetPwdContainer>
  );
};

const Container = styled.View`
  align-items: center;
  margin-top: 8%;
  margin-bottom: 16%;
`;

const BigText = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #2b2b2b;
  margin-bottom: 5%;
`;

const SmallText = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #b4b4b4;
`;

export default EmailAuth;

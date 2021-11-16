import React from 'react';
import styled from 'styled-components/native';
import ResetPwdContainer from './components/Layout/ResetPwdContainer';
import { useGoCertification, useGoSignIn } from '../../util/navigationHooks';
import useInput from '../../util/useInput';
import AuthInput from './components/AuthInput';
import axios from 'axios';
import { Alert } from 'react-native';
import { emailCheck } from '../../Component/authFunction';

const EmailAuth = () => {
  const email = useInput('');

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  const urlencoded = new URLSearchParams();
  urlencoded.append('email', email.value);

  const goLogin = useGoSignIn();
  const goCertification = useGoCertification(email.value);
  const desc =
    '입력하신 이메일 주소로 인증번호가 전송됩니다.\n인증이 완료된 후 비밀번호를 재설정해주세요.';

  const getNumber = async () => {
    if (emailCheck(email.value)) {
      axios({
        method: 'post',
        url: 'http://localhost:4000/auth/findPwd',
        data: { email: email.value },
      })
        .then((res) => {
          goCertification();
          setTimeout(() => {
            goCertification();
          }, 500);
        })
        .catch((err) => {
          if (err.toString() == 'Error: Request failed with status code 404')
            Alert.alert('존재하지 않는 이메일 입니다');
          else Alert.alert('이메일 인증 오류 :(');
        });
    }
  };

  return (
    <ResetPwdContainer
      buttonText="인증번호 받기"
      getNumber={getNumber}
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

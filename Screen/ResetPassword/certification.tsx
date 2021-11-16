import React from 'react';
import styled from 'styled-components/native';
import { useGoEmailAuth, useGoRenewPassword } from '../../util/navigationHooks';
import ResetPwdContainer from './components/Layout/ResetPwdContainer';
import useInput from '../../util/useInput';
import AuthInput from './components/AuthInput';
import axios from 'axios';
import { Alert } from 'react-native';

const Certification = ({ route }: any) => {
  const email = route.params.email ? route.params.email : '';
  const goEmailAuth = useGoEmailAuth();
  const goRenewPassword = useGoRenewPassword(email);
  const authNum = useInput('');

  const handleCertification = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/auth/checkCode',
      data: { email: email, inputCode: authNum.value },
    })
      .then((res) => {
        goRenewPassword();
        setTimeout(() => {
          goRenewPassword();
        }, 500);
      })
      .catch((err) => {
        if (err.toString() == 'Error: Request failed with status code 404')
          Alert.alert('인증번호가 일치하지 않습니다.');
        else Alert.alert('이메일 인증 오류 :(');
      });
  };

  return (
    <ResetPwdContainer
      buttonText="확인"
      getNumber={handleCertification}
      onPress={goEmailAuth}
    >
      <Container>
        <AuthInput input={authNum} title="인증번호를 입력해 주세요." />
        <Content>
          <Question>인증번호를 받지 못했나요?</Question>
          <Answer>인증번호 재전송</Answer>
        </Content>
      </Container>
    </ResetPwdContainer>
  );
};

const Container = styled.View`
  margin-top: 10%;
`;

const Content = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 5%;
`;

const Question = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
`;

const Answer = styled.Text`
  color: #707071;
  text-decoration-line: underline;
  font-size: 12px;
`;

export default Certification;

import React from 'react';
import styled from 'styled-components/native';
import { useGoEmailAuth, useGoRenewPassword } from '../../util/navigationHooks';
import ResetPwdContainer from './components/Layout/ResetPwdContainer';
import useInput from '../../util/useInput';
import AuthInput from './components/AuthInput';

const Certification = () => {
  const goEmailAuth = useGoEmailAuth();
  const goRenewPassword = useGoRenewPassword();
  const authNum = useInput('');

  return (
    <ResetPwdContainer
      buttonText="확인"
      getNumber={goRenewPassword}
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

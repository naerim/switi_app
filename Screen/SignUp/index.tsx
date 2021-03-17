import React, { useState } from 'react';
import styled from 'styled-components/native';
import GenderRadioButton from './components/GenderRadioButton';
import AgreeCheckBox from './components/AgreeCheckBox';
import SignupButton from './components/SignupButton';
import SignupContent from './components/Layout/SignupContent';
import BasicContainer from '../../Component/BasicContainer';
import EmailInput from './components/EmailInput';
import useInput from '../../util/useInput';
import PasswordInput from './components/PasswordInput';
import PasswordCheckInput from './components/PasswordCheckInput';
import OptionMenu from './components/OptionMenu';
import NicknameContainer from './components/Nickname';

const SignUp = () => {
  const [gender, setGender] = useState(0);
  const nicknameInput = useInput('');
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const passwordCheckInput = useInput('');
  const agreeCheck = useState(0);

  const signupData = [
    {
      title: '성별',
      Component: GenderRadioButton,
      input: { gender, setGender },
    },
    {
      title: '닉네임',
      Component: NicknameContainer,
      input: nicknameInput,
    },
    {
      title: '이메일',
      Component: EmailInput,
      input: emailInput,
    },
    {
      title: '비밀번호 (8자리 이상 영문, 숫자, 특수문자)',
      Component: PasswordInput,
      input: passwordInput,
    },
    {
      title: '비밀번호 확인',
      Component: PasswordCheckInput,
      input: { passwordInput, passwordCheckInput },
    },
  ];
  return (
    <BasicContainer headerTitle="회원가입">
      {signupData.map(({ title, Component, input }) => (
        <SignupContent key={title} title={title}>
          <Component input={input} />
        </SignupContent>
      ))}

      <Content>
        <AgreeCheckBox />
      </Content>

      <Content>
        <SignupButton />
        <OptionMenu />
      </Content>
    </BasicContainer>
  );
};

const Content = styled.View`
  flex: 2;
  justify-content: center;
`;

export default SignUp;

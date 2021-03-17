import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import GenderRadioButton from './components/GenderRadioButton';
import AgreeCheckBox from './components/AgreeCheckBox';
import SignupButton from './components/SignupButton';
import SignupContent from './components/Layout/SignupContent';
import BasicContainer from '../../Component/BasicContainer';
import EmailInput from './components/EmailInput';
import useInput from '../../util/useInput';
import PasswordInput from './components/PasswordInput';
import OptionMenu from './components/OptionMenu';
import NicknameContainer from './components/Nickname';
import PasswordCheckInput from './components/PasswordCheckInput';

const SignUp = () => {
  const [gender, setGender] = useState(0);
  const nicknameInput = useInput('');
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const passwordCheckInput = useInput('');

  const handleCheck = (pwd, checkPwd) => {
    if (pwd.value === checkPwd.value) {
      return ' ';
    } else {
      return '비밀번호가 일치하지 않습니다.';
    }
  };
  const signupData = [
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
  ];
  return (
    <BasicContainer headerTitle="회원가입">
      <GenderRadioButton title="성별" input={{ gender, setGender }} />
      {signupData.map(({ title, Component, input }) => (
        <SignupContent key={title} title={title}>
          <Component input={input} />
        </SignupContent>
      ))}
      <PasswordCheckInput
        title="비밀번호 확인"
        input={passwordCheckInput}
        error={handleCheck(passwordInput, passwordCheckInput)}
      />
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

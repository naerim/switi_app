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
import OptionMenu from './components/OptionMenu';
import NicknameContainer from './components/Nickname';

const SignUp = () => {
  const [gender, setGender] = useState(0);
  const nicknameInput = useInput('');
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const passwordCheckInput = useInput('');

  const isEmail = (email) => {
    const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (email == '' || email == null) {
      return '필수 정보입니다.';
    } else if (!regex.test(email)) {
      return '이메일 형식이 올바르지 않습니다.';
    } else {
      return ' ';
    }
  };

  const isPassword = (pwd) => {
    if (pwd == '' || pwd == null) {
      return '필수 정보입니다.';
    } else if (
      !/[0-9]/.test(pwd) ||
      !/[a-zA-Z]/.test(pwd) ||
      !/[~!@#$%<>^&*]/.test(pwd) ||
      pwd.length < 8 ||
      pwd.length > 50
    ) {
      return '공백, 특수문자는 사용 불가합니다.';
    } else {
      return ' ';
    }
  };
  const passwordCheck = (pwd, checkPwd) => {
    if (checkPwd.value == '' || checkPwd.value == null) {
      return '필수 정보입니다.';
    } else if (pwd.value === checkPwd.value) {
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
      error: isEmail(emailInput.value),
    },
    {
      title: '비밀번호 (8자리 이상 영문, 숫자, 특수문자)',
      Component: PasswordInput,
      input: passwordInput,
      error: isPassword(passwordInput.value),
    },
    {
      title: '비밀번호 확인',
      Component: PasswordInput,
      input: passwordCheckInput,
      error: passwordCheck(passwordInput, passwordCheckInput),
    },
  ];
  return (
    <BasicContainer headerTitle="회원가입" display={false}>
      <GenderRadioButton title="성별" input={{ gender, setGender }} />
      {signupData.map(({ title, Component, input, error }) => (
        <SignupContent key={title} title={title}>
          <Component input={input} error={error} />
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

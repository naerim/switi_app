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
import { Status } from './inteface';

const SignUp = () => {
  const [gender, setGender] = useState(0);
  const nicknameInput = useInput('');
  const [confirm, setConfirm] = useState(false);
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const passwordCheckInput = useInput('');
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({
    service: false,
    info: false,
  });

  const isNickname = (nicknameInput: string) => {
    const special = /[~!@#$%^&*()_+|<>?:{}]/;
    if (nicknameInput == '' || !nicknameInput || nicknameInput == ' ') {
      return { status: Status.NORMARL, text: '필수 정보입니다.' };
    } else if (
      special.test(nicknameInput) ||
      nicknameInput.search(/\s/) != -1
    ) {
      return {
        status: Status.ERROR,
        text: '공백, 특수문자는 사용 불가합니다.',
      };
    } else {
      return { status: Status.SUCCESS, text: '멋진 닉네임이네요!' };
    }
  };
  const isEmail = (email: string) => {
    const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (email == '' || email == null) {
      return { status: Status.NORMARL, text: '필수 정보입니다.' };
    } else if (!regex.test(email)) {
      return { status: Status.ERROR, text: '이메일 형식이 올바르지 않습니다.' };
    } else {
      return { status: Status.SUCCESS, text: ' ' };
    }
  };
  const isPassword = (pwd: string) => {
    if (pwd == '' || pwd == null) {
      return { status: Status.NORMARL, text: '필수 정보입니다.' };
    } else if (
      !/[0-9]/.test(pwd) ||
      !/[a-zA-Z]/.test(pwd) ||
      !/[~!@#$%<>^&*]/.test(pwd) ||
      pwd.length < 8 ||
      pwd.length > 16
    ) {
      return {
        status: Status.ERROR,
        text: '8~16문자 영문, 숫자, 특수문자를 사용하세요.',
      };
    } else {
      return { status: Status.SUCCESS, text: ' ' };
    }
  };
  const passwordCheck = (
    pwd: { value: string },
    checkPwd: { value: string }
  ) => {
    if (checkPwd.value == '' || checkPwd.value == null) {
      return { status: Status.NORMARL, text: '필수 정보입니다.' };
    } else if (pwd.value === checkPwd.value) {
      return { status: Status.SUCCESS, text: ' ' };
    } else {
      return { status: Status.ERROR, text: '비밀번호가 일치하지 않습니다.' };
    }
  };

  const signupData = [
    {
      title: '닉네임',
      Component: NicknameContainer,
      input: nicknameInput,
      error: isNickname(nicknameInput.value),
      confirm: { confirm, setConfirm },
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
  // 회원가입 성공 여부
  const success =
    confirm &&
    isEmail(emailInput.value).status === Status.SUCCESS &&
    isPassword(passwordInput.value).status === Status.SUCCESS &&
    passwordCheck(passwordInput, passwordCheckInput).status ===
      Status.SUCCESS &&
    checked.service &&
    checked.info;
  // 회원가입시 넘길 input 값
  const input = {
    // gender: gender === 0 ? '남' : '여',
    gender: gender,
    nickname: nicknameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  return (
    <BasicContainer headerTitle="회원가입" display={false}>
      <GenderRadioButton title="성별" input={{ gender, setGender }} />
      {signupData.map(({ title, Component, input, error, confirm }) => (
        <SignupContent key={title} title={title}>
          <Component input={input} error={error} confirm={confirm} />
        </SignupContent>
      ))}
      <Content>
        <AgreeCheckBox check={{ checked, setChecked }} />
      </Content>

      <Content>
        <SignupButton success={success} input={input} />
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

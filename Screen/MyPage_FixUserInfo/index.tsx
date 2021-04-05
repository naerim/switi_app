import styled from 'styled-components/native';
import { View, Text, Picker } from 'react-native';
import React, { useState } from 'react';
import BasicContainer from '../../Component/BasicContainer';
import { useGoMyPage } from '../../util/navigationHooks';
import NicknameContainer from '../SignUp/components/Nickname';
import EmailInput from '../SignUp/components/EmailInput';
import PasswordInput from '../SignUp/components/PasswordInput';
import useInput from '../../util/useInput';
import { Status } from '../SignUp/inteface';
import SignupContent from '../SignUp/components/Layout/SignupContent';
import FixButton from './fixButton';

const MyPage_FixUserInfo = () => {
  const goMyPage = useGoMyPage();
  const nicknameInput = useInput('');
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const passwordCheckInput = useInput('');
  const BeforePasswordInput = useInput('');
  const [confirm, setConfirm] = useState(false);

  const isNickname = (nickname: string) => {
    const special = /[~!@#$%^&*()_+|<>?:{}]/;
    if (nickname == '' || nickname == null) {
      return { status: Status.NORMARL, text: '필수 정보입니다.' };
    } else if (special.test(nickname) || nickname.search(/\s/) != -1) {
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

  const fixUserInfoData = [
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
      title: '기존 비밀번호',
      Component: PasswordInput,
      input: BeforePasswordInput,
      error: isPassword(passwordInput.value),
    },
    {
      title: '새 비밀번호 (8자리 이상 영문, 숫자, 특수문자)',
      Component: PasswordInput,
      input: passwordInput,
      error: isPassword(passwordInput.value),
    },
    {
      title: '새 비밀번호 확인',
      Component: PasswordInput,
      input: passwordCheckInput,
      error: passwordCheck(passwordInput, passwordCheckInput),
    },
  ];

  // 회원정 성공 여부
  const success =
    confirm &&
    isEmail(emailInput.value).status === Status.SUCCESS &&
    isPassword(passwordInput.value).status === Status.SUCCESS &&
    passwordCheck(passwordInput, passwordCheckInput).status === Status.SUCCESS;
  // 회원정보 넘길 input 값
  const input = {
    nickname: nicknameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  return (
    <BasicContainer headerTitle="회원탈퇴" display onPress={goMyPage}>
      <PictureContainer>
        <UserImage source={require('./image/profile.png')} />
      </PictureContainer>
      <InputContainer>
        {fixUserInfoData.map(({ title, Component, input, error, confirm }) => (
          <SignupContent key={title} title={title}>
            <Component input={input} error={error} confirm={confirm} />
          </SignupContent>
        ))}
      </InputContainer>
      <ButtonContainer>
        <FixButton success={success} input={input} />
      </ButtonContainer>
    </BasicContainer>
  );
};

const UserImage = styled.Image`
  width: 68px;
  height: 68px;
`;

const PictureContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;
const InputContainer = styled.View`
  flex: 10;
  padding-top: 10px;
`;

const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export default MyPage_FixUserInfo;

import styled from 'styled-components/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import BasicContainer from '../../Component/ContainerWithBack';
import { useGoMyPageUserInfo } from '../../util/navigationHooks';
import NicknameContainer from './Nickname';
import EmailInput from './input/emailInput';
import PasswordInput from './input/passwordInput';
import useInput from '../../util/useInput';
import { Status } from '../SignUp/inteface';
import AllInputContainer from './input/InputContent';
import FixButton from './fixButton';
import ImagePickerContainer from './imagePicker';
import IsNickname from './input/inputConfirm/isNickname';
import IsEmail from './input/inputConfirm/isEmail';
import IsPassword from './input/inputConfirm/isPassword';
import IsSamePassword from './input/inputConfirm/isSamePassword';
import IsBeforePassword from './input/inputConfirm/isBeforePassword';
import useScroll from '../../util/useScroll';

const MyPage_FixUserInfo = () => {
  const goMyPageUserInfo = useGoMyPageUserInfo();
  const nicknameInput = useInput('');
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const passwordCheckInput = useInput('');
  const BeforePasswordInput = useInput('');
  const [confirm, setConfirm] = useState(false);
  const { scroll, scrollOn } = useScroll();

  const FixButtonOnPress = () => {
    if (success) {
      Alert.alert('수정완료');
    } else {
      Alert.alert('이메일이나 비밀번호의 입력값에 오류가 있습니다. ');
    }
  };
  const fixUserInfoData = [
    {
      title: '닉네임',
      Component: NicknameContainer,
      input: nicknameInput,
      error: IsNickname(nicknameInput.value),
      confirm: { confirm, setConfirm },
    },
    {
      title: '이메일',
      Component: EmailInput,
      input: emailInput,
      error: IsEmail(emailInput.value),
    },
    {
      title: '기존 비밀번호',
      Component: PasswordInput,
      input: BeforePasswordInput,
      error: IsBeforePassword(BeforePasswordInput.value, 'abcd1234*'),
    },
    {
      title: '새 비밀번호',
      Component: PasswordInput,
      input: passwordInput,
      error: IsPassword(passwordInput.value),
    },
    {
      title: '새 비밀번호 확인',
      Component: PasswordInput,
      input: passwordCheckInput,
      error: IsSamePassword(passwordInput.value, passwordCheckInput.value),
    },
  ];

  // 회원정 성공 여부
  const success =
    confirm &&
    IsEmail(emailInput.value).status === Status.SUCCESS &&
    IsPassword(passwordInput.value).status === Status.SUCCESS &&
    IsSamePassword(passwordInput.value, passwordCheckInput.value).status ===
      Status.SUCCESS;
  // 회원정보 넘길 input 값
  const input = {
    nickname: nicknameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  return (
    <BasicContainer
      headerTitle="회원정보 수정"
      display
      onPress={goMyPageUserInfo}
      scroll={scroll}
    >
      <MarginContainer onScroll={scrollOn}>
        <PictureContainer>
          <ImagePickerContainer />
        </PictureContainer>
        <InputContainer>
          {fixUserInfoData.map(
            ({ title, Component, input, error, confirm }) => (
              <AllInputContainer key={title} title={title}>
                <Component input={input} error={error} confirm={confirm} />
              </AllInputContainer>
            )
          )}
        </InputContainer>
        <NothingContainer />
        <ButtonContainer>
          <FixButton
            success={success}
            input={input}
            onPress={FixButtonOnPress}
          />
        </ButtonContainer>
      </MarginContainer>
    </BasicContainer>
  );
};

const MarginContainer = styled.ScrollView`
  margin-left: 24px;
  margin-right: 24px;
  flex: 1;
`;

const PictureContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;
const InputContainer = styled.View`
  flex: 8;
  padding-top: 10px;
`;

const NothingContainer = styled.View`
  flex: 0.5;
`;

const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin-bottom: 10px;
`;

export default MyPage_FixUserInfo;

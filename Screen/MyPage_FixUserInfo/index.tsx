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
import SubmitButton from './submitButton';
import IsNickname from './input/inputConfirm/isNickname';
import IsPassword from './input/inputConfirm/isPassword';
import IsSamePassword from './input/inputConfirm/isSamePassword';
import MyImage from './MyImage';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import axios from 'axios';
import { getMyPageRequest } from '../../redux/userReducer';
import { HostURL } from '../../redux/url';

const MyPage_FixUserInfo = () => {
  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { myProfile } = useSelector(({ userReducer }: rootState) => ({
    myProfile: userReducer.myProfile,
  }));
  const goMyPageUserInfo = useGoMyPageUserInfo();
  const nicknameInput = useInput('');
  const emailInput = useInput(myProfile.myProfile.email);
  const passwordInput = useInput('');
  const passwordCheckInput = useInput('');
  const BeforePasswordInput = useInput('');
  const [confirm, setConfirm] = useState(false);
  const dispatch = useDispatch();

  const FixButtonOnPress = () => {
    axios({
      method: 'put',
      url: `${HostURL}/user/updateUserInfo`,
      headers: { Authorization: login.token },
      data: {
        nickname: input.nickname,
        email: input.email,
        newPassword: input.newPassword,
        password: input.password,
      },
    })
      .then(() => {
        dispatch(getMyPageRequest(login.token));
        Alert.alert('수정 되었습니다.');
      })
      .catch((err) => {
        Alert.alert('비밀번호가 일치하지 않습니다.');
        BeforePasswordInput.onChange('');
      });
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
      error: { status: Status.NORMARL, text: ' ' },
    },
    {
      title: '기존 비밀번호',
      Component: PasswordInput,
      input: BeforePasswordInput,
      error: IsPassword(BeforePasswordInput.value),
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

  // 프로필 수정 성공 여부
  const success =
    IsPassword(passwordInput.value).status === Status.SUCCESS &&
    IsSamePassword(passwordInput.value, passwordCheckInput.value).status ===
      Status.SUCCESS;
  // 프로필 수정시 넘길 input 값
  const input = {
    nickname: nicknameInput.value,
    email: emailInput.value,
    password: BeforePasswordInput.value,
    newPassword: passwordInput.value,
  };

  return (
    <BasicContainer
      headerTitle="회원정보 수정"
      display
      onPress={goMyPageUserInfo}
    >
      <Container>
        <PictureContainer>
          <MyImage />
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
      </Container>
      <ButtonContainer>
        <SubmitButton
          success={success}
          onPress={FixButtonOnPress}
          title="저장하기"
        />
      </ButtonContainer>
    </BasicContainer>
  );
};

const Container = styled.ScrollView`
  margin-top: 20px;
  flex-direction: column;
`;

const PictureContainer = styled.View`
  margin: 0 24px;
  flex: 2;
  align-items: center;
  justify-content: center;
`;
const InputContainer = styled.View`
  margin: 0 24px;
  flex: 8;
  padding-top: 10px;
`;

const ButtonContainer = styled.View`
  margin: 0 24px 0 24px;
`;

export default MyPage_FixUserInfo;

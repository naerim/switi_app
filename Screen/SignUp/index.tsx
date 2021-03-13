import React from 'react';
import styled from 'styled-components/native';
import { useGoSignIn } from '../../util/navigationHooks';
import { PasswordInput } from './AuthInput';
import GenderRadioButton from './GenderRadioButton';
import AgreeCheckBox from './AgreeCheckBox';
import SignupButton from './SignupButton';
import SignupContent from './SignupContent';
import BasicContainer from '../../Component/BasicContainer';
import NicknameContainer from './NicknameContainer';
import EmailInput from './EmailInput';

const SignUp = () => {
  const goLogin = useGoSignIn();

  const signupData = [
    {
      title: '성별',
      Component: GenderRadioButton,
    },
    {
      title: '닉네임',
      Component: NicknameContainer,
    },
    {
      title: '이메일',
      Component: EmailInput,
    },
    {
      title: '비밀번호 (8자리 이상 영문, 숫자, 특수문자)',
      Component: PasswordInput,
    },
    {
      title: '비밀번호 확인',
      Component: PasswordInput,
    },
  ];
  return (
    <BasicContainer headerTitle="회원가입">
      {signupData.map(({ title, Component }) => (
        <SignupContent key={title} title={title}>
          <Component />
        </SignupContent>
      ))}

      <Content>
        <AgreeCheckBox />
      </Content>

      <Content>
        <SignupButton />
        <GoLoginView>
          <TextStyle>이미 회원이세요? </TextStyle>
          <TextLine onPress={goLogin}>로그인하기</TextLine>
        </GoLoginView>
      </Content>
    </BasicContainer>
  );
};

const Content = styled.View`
  flex: 2;
  justify-content: center;
`;

const GoLoginView = styled.View`
  flex-direction: row;
  padding-top: 15px;
  justify-content: center;
  align-items: center;
`;

const TextStyle = styled.Text`
  font-size: 12px;
`;

const TextLine = styled.Text`
  font-size: 12px;
  text-decoration: underline;
`;

export default SignUp;

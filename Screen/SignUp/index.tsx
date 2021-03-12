import React from 'react';
import styled from 'styled-components/native';
import { useGoSignIn } from '../../util/navigationHooks';
import { PasswordInput } from '../../Component/AuthInput';
import GenderRadioButton from '../../Component/GenderRadioButton';
import AgreeCheckBox from '../../Component/AgreeCheckBox';
import SignupButton from '../../Component/button/SignupButton';
import SignupContent from '../../Component/layout/SignupContent';
import BasicContainer from '../../Component/layout/BasicContainer';
import NicknameInput from '../../Component/input/NicknameInput';
import EmailInput from '../../Component/input/EmailInput';

const SignUp = () => {
  const goLogin = useGoSignIn();
  return (
    <BasicContainer header="회원가입">
      <SignupContent title="성별">
        <GenderRadioButton />
      </SignupContent>

      <SignupContent title="닉네임">
        <NicknameInput />
      </SignupContent>

      <SignupContent title="이메일">
        <EmailInput />
      </SignupContent>

      <SignupContent title="비밀번호 (8자리 이상 영문, 숫자, 특수문자)">
        <PasswordInput />
      </SignupContent>

      <SignupContent title="비밀번호 확인">
        <PasswordInput />
      </SignupContent>

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

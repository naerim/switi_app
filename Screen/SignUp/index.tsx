import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { useGoFirstProfile, useGoSignIn } from '../../util/navigationHooks';
import BasicHeader from '../../Component/BasicHeader';
import {
  NickNameInput,
  EmailInput,
  PasswordInput,
} from '../../Component/AuthInput';
import EmailButton from '../../Component/EmailButton';
import GenderRadioButton from '../../Component/GenderRadioButton';

const SignUp = () => {
  const goLogin = useGoSignIn();
  const goFirstProfile = useGoFirstProfile();
  return (
    <Wrap>
      <BasicHeader title="회원가입" />
      <Container>
        <Title>성별</Title>
        <GenderRadioButton />

        <Title>닉네임</Title>
        <NickNameView>
          <NickNameInput />
          <EmailButton />
        </NickNameView>

        <Title>이메일</Title>
        <EmailInput />

        <Title>비밀번호 (8자리 이상 영문, 숫자, 특수문자)</Title>
        <PasswordInput />

        <Title>비밀번호 확인</Title>
        <PasswordInput />

        <Text onPress={goLogin}>로그인하기</Text>
        <Button title="가입하기" onPress={goFirstProfile} />
      </Container>
    </Wrap>
  );
};

const Wrap = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Container = styled.View`
  flex: 1;
  margin: 24px;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  margin-bottom: 10px;
`;

const NickNameView = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 25px;
  justify-content: space-between;
  align-items: center;
`;

export default SignUp;

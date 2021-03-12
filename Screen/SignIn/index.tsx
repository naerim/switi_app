import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useGoSignUp } from '../../NavigationHooks(copy)';
import AuthButton from './AuthButton';
import AuthInput from './AuthInput';
import useInput from './useInput';
import { Alert } from 'react-native';
import CheckBox from 'react-native-check-box';
import SocialLogin from './SocialLogin';

export default () => {
  const emailInput = useInput('');

  const goSignUp = useGoSignUp();

  const handleLogin = () => {
    const { value } = emailInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // 추후에 if 결과 변경, 비밀번호 체
    if (value === '') {
      Alert.alert("Email can't be empty");
    } else if (!value.includes('@') || !value.includes('.')) {
      Alert.alert('Please write an email');
    } else if (!emailRegex.test(value)) {
      Alert.alert('That email is invalid');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <SocialLogin />
        <DivisionContainer>
          <LineContainer>
            <Line></Line>
          </LineContainer>
          <OrContainer>
            <Or>또는</Or>
          </OrContainer>
          <LineContainer>
            <Line></Line>
          </LineContainer>
        </DivisionContainer>
        <TitleAndInput>
          <Title>이메일</Title>
          <AuthInput
            {...emailInput}
            placeholder="이메일"
            keyboardType="email-address"
            returnKeyType="send"
            onEndEditing={handleLogin}
            autoCorrect={false}
          />
        </TitleAndInput>
        <TitleAndInput>
          <Title>비밀번호</Title>
          <PasswordInput placeholder="비밀번호" />
        </TitleAndInput>

        <OtherSide>
          <LeftSideContainer>
            <CheckBox
              rightText="로그인 기억하기"
              rightTextStyle={{ fontSize: 12 }}
              checkBoxColor="#E3E3E3"
              isChecked={false}
              onClick={() => {
                console.log('check');
              }}
            />
          </LeftSideContainer>
          <RightSideContainer>
            <Text>비밀번호 찾기</Text>
          </RightSideContainer>
        </OtherSide>
        <LoginButtonView>
          <AuthButton onPress={handleLogin} text="로그인" />
        </LoginButtonView>
        <OtherSide>
          <LeftSideContainer>
            <Text>아직 스위티 회원이 아니신가요?</Text>
          </LeftSideContainer>
          <RightSideContainer>
            <Text onPress={goSignUp}>회원가입</Text>
          </RightSideContainer>
        </OtherSide>
      </Container>
    </TouchableWithoutFeedback>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const SpecialLoginButton = styled.View`
  border-width: 1px;
  width: 90%;
  background-color: #fff;
  border-color: #b4b4b4;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const SpecialLoginText = styled.Text`
  color: #b4b4b4;
  font-size: 15px;
`;

const DivisionContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

const LineContainer = styled.View`
  width: 40%;
`;

const Line = styled.Text`
  height: 1px;
  background-color: #e3e3e3;
  margin: 5px 0;
`;

const OrContainer = styled.View`
  width: 20%;
`;

const Or = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  margin-bottom: 2%;
  text-align: center;
`;

const TitleAndInput = styled.View`
  width: 90%;
`;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  margin-bottom: 2%;
`;

const PasswordInput = styled.TextInput`
  border-width: 1px;
  color: #2b2b2b;
  border-color: #e3e3e3;
  border-radius: 4px;
  padding: 10px;
`;

const OtherSide = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 90%;
`;

const LeftSideContainer = styled.View`
  width: 60%;
`;

const RightSideContainer = styled.View`
  background-color: white;
`;

const LoginButtonView = styled.View`
  justify-content: center;
  width: 70%;
`;

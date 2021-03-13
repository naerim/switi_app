import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import AuthButton from './EmailPassword/AuthButton';
import useInput from './Hooks/useInput';
import { Alert } from 'react-native';
import CheckBox from 'react-native-check-box';
import SocialLogin from './Social/SocialLogin';
import Division from './Components/Division';
import SignInForm from './EmailPassword/SignInForm';
import OptionMenu from './Components/OptionMenu';

export default () => {
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleChecked = () => setChecked(!checked);

  const handleLogin = () => {
    const email = emailInput;
    const password = passwordInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsLoading(false);
    if (email.value === '') {
      Alert.alert('이메일 주소가 잘못되거나 비밀번호가 틀렸습니다.');
    } else if (!email.value.includes('@') || !email.value.includes('.')) {
      Alert.alert('이메일 주소가 잘못되거나 비밀번호가 틀렸습니다.');
    } else if (!emailRegex.test(email.value)) {
      Alert.alert('이메일 주소가 잘못되거나 비밀번호가 틀렸습니다.');
    } else if (password.value === '') {
      Alert.alert('이메일 주소가 잘못되거나 비밀번호가 틀렸습니다.');
    } else if (password.value.length < 8)
      Alert.alert('이메일 주소가 잘못되거나 비밀번호가 틀렸습니다.');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <SocialLogin />
        <Division />
        <SignInForm emailInput={emailInput} passwordInput={passwordInput} />
        <CheckBoxContainer>
          <CheckBox
            rightText="로그인 기억하기"
            rightTextStyle={{ fontSize: 12 }}
            checkBoxColor="#E3E3E3"
            isChecked={checked}
            onClick={toggleChecked}
          />
        </CheckBoxContainer>
        <AuthButton onPress={handleLogin} loading={isLoading} text="로그인" />
        <OptionMenu />
      </Container>
    </TouchableWithoutFeedback>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 0 20px;
`;

const CheckBoxContainer = styled.View`
  width: 100%;
  padding: 0 10px;
`;

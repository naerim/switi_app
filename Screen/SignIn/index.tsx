import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useGoSignUp } from '../../NavigationHooks(copy)';
import AuthButton from './AuthButton';
import AuthInput from './AuthInput';
import useInput from './useInput';
import { Alert } from 'react-native';
import CheckBox from 'react-native-check-box';

const View = styled.View`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default () => {
  const emailInput = useInput('');
  const handleLogin = () => {
    const { value } = emailInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value === '') {
      return Alert.alert("Email can't be empty");
    } else if (!value.includes('@') || !value.includes('.')) {
      return Alert.alert('Please write an email');
    } else if (!emailRegex.test(value)) {
      return Alert.alert('That email is invalid');
    }
  };
  const goSignUp = useGoSignUp();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Line></Line>
        <Text>또는</Text>
        <Title>이메일</Title>
        <AuthInput
          {...emailInput}
          placeholder="이메일"
          keyboardType="email-address"
          returnKeyType="send"
          onEndEditing={handleLogin}
          autoCorrect={false}
        />
        <Title>비밀번호</Title>
        <PasswordInput placeholder="비밀번호" />
        <Container>
          <CheckBox
            rightText="아래 약관에 모두 동의합니다"
            rightTextStyle={{ fontSize: 12 }}
            checkBoxColor="#E3E3E3"
            isChecked={false}
            onClick={() => {
              console.log('check');
            }}
          />
        </Container>

        <Text>비밀번호 찾기</Text>
        <AuthButton onPress={handleLogin} text="Log In" />
        <Text>아직 스위티 회원이 아니신가요?</Text>
        <Text onPress={goSignUp}>회원가입</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  margin-bottom: 2%;
`;

const LoginBox = styled.div`

`

const PasswordInput = styled.TextInput`
  border-width: 1px;
  color: #2b2b2b;
  border-color: #e3e3e3;
  border-radius: 4px;
  padding: 10px;
`;

const Container = styled.View``;

const Line = styled.Text`
  height: 1px;
  background-color: #e3e3e3;
  margin: 5px 0;
`;

// const SignIn = () => {
//   const goSignUp = useGoSignUp();
//   return (
//     <View style={styles.container}>
//       <Text>This is SignIn Screen</Text>
//       <Text onPress={goSignUp}>회원가입</Text>
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
//
// export default SignIn;

import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text} from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import AuthButton from './AuthButton';
import AuthInput from './AuthInput';
import useInput from './useInput';
import { Alert } from 'react-native';

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
  //const goSignUp = useGoSignUp();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Text>또는</Text>
        <Text>이메일</Text>
        <AuthInput
          {...emailInput}
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="send"
          onEndEditing={handleLogin}
          autoCorrect={false}
        />
        <Text>비밀번호</Text>
        <AuthInput placeholder="password" keyboardType="default" />
        <Text>비밀번호 찾기</Text>
        <AuthButton onPress={handleLogin} text="Log In" />
        <Text>아직 스위티 회원이 아니신가요?</Text>
        <Text>회원가입</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

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

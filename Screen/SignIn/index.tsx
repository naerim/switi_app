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

// const View = styled.View`
//   background-color: #fff;
//   flex: 1;
// `;

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
      <View style={styles.container}>
        <SpecialLoginButton>
          <SpecialLoginText
            onPress={() => {
              console.log('btn');
            }}
          >
            네이버로 로그인
          </SpecialLoginText>
        </SpecialLoginButton>
        <SpecialLoginButton>
          <SpecialLoginText
            onPress={() => {
              console.log('btn');
            }}
          >
            카카오 로그인
          </SpecialLoginText>
        </SpecialLoginButton>
        <SpecialLoginButton>
          <SpecialLoginText
            onPress={() => {
              console.log('btn');
            }}
          >
            구글로 로그인
          </SpecialLoginText>
        </SpecialLoginButton>
        <View style={styles.item0}>
          <View style={styles.item1}>
            <Line></Line>
          </View>
          <View style={styles.item2}>
            <Or>또는</Or>
          </View>
          <View style={styles.item1}>
            <Line></Line>
          </View>
        </View>
        <View style={styles.TileAndInput}>
          <Title>이메일</Title>
          <AuthInput
            {...emailInput}
            placeholder="이메일"
            keyboardType="email-address"
            returnKeyType="send"
            onEndEditing={handleLogin}
            autoCorrect={false}
          />
        </View>
        <View style={styles.TileAndInput}>
          <Title>비밀번호</Title>
          <PasswordInput placeholder="비밀번호" />
        </View>

        <View style={styles.OtherSide}>
          <View style={styles.leftText}>
            <CheckBox
              rightText="로그인 기억하기"
              rightTextStyle={{ fontSize: 12 }}
              checkBoxColor="#E3E3E3"
              isChecked={false}
              onClick={() => {
                console.log('check');
              }}
            />
          </View>
          <View style={styles.rightText}>
            <Text>비밀번호 찾기</Text>
          </View>
        </View>
        <View style={styles.loginButtonView}>
          <AuthButton onPress={handleLogin} text="로그인" />
        </View>
        <View style={styles.OtherSide}>
          <View style={styles.leftText}>
            <Text>아직 스위티 회원이 아니신가요?</Text>
          </View>
          <View style={styles.rightText}>
            <Text onPress={goSignUp}>회원가입</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  item0: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  item1: {
    width: '40%',
    backgroundColor: 'white',
  },
  leftText: {
    width: '60%',
    backgroundColor: 'white',
  },
  rightText: {
    backgroundColor: 'white',
  },
  item2: {
    width: '20%',
    backgroundColor: 'white',
  },
  OtherSide: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  TileAndInput: {
    width: '90%',
  },
  loginButtonView: {
    justifyContent: 'center',
    width: '70%',
  },
});

const Or = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  margin-bottom: 2%;
  text-align: center;
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

const Line = styled.Text`
  height: 1px;
  background-color: #e3e3e3;
  margin: 5px 0;
`;

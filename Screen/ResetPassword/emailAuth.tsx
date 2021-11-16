import React from 'react';
import styled from 'styled-components/native';
import ResetPwdContainer from './components/Layout/ResetPwdContainer';
import { useGoCertification, useGoSignIn } from '../../util/navigationHooks';
import useInput from '../../util/useInput';
import AuthInput from './components/AuthInput';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import { findPwdThunk } from '../../redux/authReducer';
import { emailCheck } from '../../Component/authFunction';
import axios from 'axios';
import { Alert } from 'react-native';

const EmailAuth = () => {
  const email = useInput('');

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  const urlencoded = new URLSearchParams();
  urlencoded.append('email', 'mn0316@naver.com');

  const dispatch = useDispatch();
  const { findPwdSuccess } = useSelector((state: rootState) => ({
    findPwdSuccess: state.authReducer.findPwdSuccess,
  }));
  const goLogin = useGoSignIn();
  const goCertification = useGoCertification();
  const desc =
    '입력하신 이메일 주소로 인증번호가 전송됩니다.\n인증이 완료된 후 비밀번호를 재설정해주세요.';

  const getNumber = async () => {
    // if (emailCheck(email.value)) {
    //   await dispatch(findPwdThunk(email.value));
    //   if (findPwdSuccess) {
    //     await goCertification;
    //   }
    // }
    // const requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: urlencoded,
    //   redirect: 'follow',
    // };
    // // @ts-ignore
    // fetch('http://localhost:4000/auth/findPwd', requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log('error', error));
    axios({
      method: 'post',
      url: 'http://localhost:4000/auth/findPwd',
      data: { email: email.value },
    })
      .then((res) => {
        // setModalVisible(false);
        setTimeout(() => {
          // setDoneModalVisible(true);
        }, 500);
      })
      .catch((err) => {
        if (err.toString() == 'Error: Request failed with status code 404')
          Alert.alert('인증번호가 일치하지 않습니다.');
        else Alert.alert('이메일 인증 오류 :(');
      });
  };

  return (
    <ResetPwdContainer
      buttonText="인증번호 받기"
      getNumber={getNumber}
      onPress={goLogin}
    >
      <Container>
        <BigText>{'이메일 인증 후\n비밀번호를 재발급 받으세요'}</BigText>
        <SmallText>{desc}</SmallText>
      </Container>
      <AuthInput input={email} title="이메일을 입력해 주세요." />
    </ResetPwdContainer>
  );
};

const Container = styled.View`
  align-items: center;
  margin-top: 8%;
  margin-bottom: 16%;
`;

const BigText = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #2b2b2b;
  margin-bottom: 5%;
`;

const SmallText = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #b4b4b4;
`;

export default EmailAuth;

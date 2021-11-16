import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useGoCertification, useGoSignIn } from '../../util/navigationHooks';
import ResetPwdContainer from './components/Layout/ResetPwdContainer';
import PasswordInput from '../SignUp/components/PasswordInput';
import useInput from '../../util/useInput';
import { Status } from '../SignUp/inteface';
import CompleteModal from './components/CompleteModal';
import axios from 'axios';
import { Alert } from 'react-native';

const RenewPassword = ({ route }: any) => {
  const email = route.params.email ? route.params.email : '';
  const goLogin = useGoSignIn();
  const goCertification = useGoCertification(email);
  const passwordInput = useInput('');
  const passwordCheckInput = useInput('');
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => setModalVisible(false);

  const successChange = () => {
    setModalVisible(true);
    setTimeout(() => {
      goLogin();
    }, 2000);
  };

  const changePassword = () => {
    // console.log('clickChangePassword');
    axios({
      method: 'post',
      url: 'http://localhost:4000/auth/setNewPwd',
      data: { email: email, password: passwordInput.value },
    })
      .then((res) => {
        console.log(email, 'email, renewPasswordSuccess');
        successChange();
      })
      .catch((err) => {
        if (err.toString() == 'Error: Request failed with status code 404') {
          Alert.alert('존재하지 않는 이메일 입니다. ');
          console.log(email, 'email, renewPassword404');
        } else {
          Alert.alert('이메일 인증 오류 :(');
          console.log(email, 'email, renewPassword');
        }
      });
  };

  const isPassword = (pwd: string) => {
    if (pwd == '' || pwd == null) {
      return { status: Status.NORMARL, text: '필수 정보입니다.' };
    } else if (
      !/[0-9]/.test(pwd) ||
      !/[a-zA-Z]/.test(pwd) ||
      !/[~!@#$%<>^&*]/.test(pwd) ||
      pwd.length < 8 ||
      pwd.length > 16
    ) {
      return {
        status: Status.ERROR,
        text: '8문자 이상 영문, 숫자, 특수문자를 사용하세요.',
      };
    } else {
      return { status: Status.SUCCESS, text: ' ' };
    }
  };
  const passwordCheck = (
    pwd: { value: string },
    checkPwd: { value: string }
  ) => {
    if (checkPwd.value == '' || checkPwd.value == null) {
      return { status: Status.NORMARL, text: '필수 정보입니다.' };
    } else if (pwd.value === checkPwd.value) {
      return { status: Status.SUCCESS, text: ' ' };
    } else {
      return { status: Status.ERROR, text: '비밀번호가 일치하지 않습니다.' };
    }
  };

  const passwordData = [
    {
      title: '새 비밀번호 등록 (8자리 이상 영문, 숫자, 특수문자)',
      input: passwordInput,
      error: isPassword(passwordInput.value),
    },
    {
      title: '비밀번호 확인',
      input: passwordCheckInput,
      error: passwordCheck(passwordInput, passwordCheckInput),
    },
  ];

  return (
    <ResetPwdContainer
      buttonText="재설정 완료"
      getNumber={changePassword}
      onPress={goCertification}
    >
      {passwordData.map(({ title, input, error }) => (
        <Container key={title}>
          <Title>{title}</Title>
          <PasswordInput input={input} error={error} />
        </Container>
      ))}
      <CompleteModal modalVisible={modalVisible} closeModal={closeModal} />
    </ResetPwdContainer>
  );
};

const Container = styled.View`
  margin-top: 10%;
`;

const Title = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
  margin-bottom: 2%;
`;

export default RenewPassword;

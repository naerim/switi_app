import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useGoCertification, useGoSignIn } from '../../util/navigationHooks';
import ResetPwdContainer from './components/Layout/ResetPwdContainer';
import PasswordInput from '../SignUp/components/PasswordInput';
import useInput from '../../util/useInput';
import { Status } from '../SignUp/inteface';
import CompleteModal from './components/CompleteModal';

const RenewPassword = () => {
  const goLogin = useGoSignIn();
  const goCertification = useGoCertification();
  const passwordInput = useInput('');
  const passwordCheckInput = useInput('');
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => setModalVisible(false);

  const onClick = () => {
    setModalVisible(true);
    setTimeout(() => {
      goLogin();
    }, 2000);
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
      getNumber={onClick}
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

import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Alert } from 'react-native';
import CheckBox from 'react-native-check-box';
import useInput from './util/useInput';
import AuthButton from '../../Component/BasicButton';
import SocialLogin from './components/SocialLogin';
import Division from './components/Division';
import SignInForm from './components/SignInForm';
import OptionMenu from './components/OptionMenu';
import BasicContainer from '../../Component/BasicContainer';
import BasicModal from '../../Component/basicModal';

const SignIn: React.FC = () => {
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState<boolean>(true);

  const toggleChecked = () => setChecked(!checked);
  const closeModal = () => setModalVisible(false);

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
    } else if (password.value.length < 8) {
      Alert.alert('이메일 주소가 잘못되거나 비밀번호가 틀렸습니다.');
    }
  };

  return (
    <BasicContainer headerTitle="로그인" display={false}>
      <Container>
        <SocialLoginContainer>
          <SocialLogin />
        </SocialLoginContainer>
        <DivisionContainer>
          <Division />
        </DivisionContainer>
        <SignInFormContainer>
          <SignInForm emailInput={emailInput} passwordInput={passwordInput} />
        </SignInFormContainer>
        <CheckBoxContainer>
          <CheckBox
            rightText="로그인 기억하기"
            rightTextStyle={{ fontSize: 12 }}
            checkBoxColor="#E3E3E3"
            isChecked={checked}
            onClick={toggleChecked}
          />
        </CheckBoxContainer>
        <AuthButtonContainer>
          <AuthButton onPress={handleLogin} loading={isLoading} text="로그인" />
        </AuthButtonContainer>
        <OptionContainer>
          <OptionMenu />
        </OptionContainer>
        <EmptyContainer />
        <BasicModal modalVisible={modalVisible} closeModal={closeModal} />
      </Container>
    </BasicContainer>
  );
};

const Container = styled.View`
  flex: 1;
`;

const SocialLoginContainer = styled.View`
  flex: 3;
  justify-content: center;
`;

const DivisionContainer = styled.View`
  flex: 1;
`;

const SignInFormContainer = styled.View`
  flex: 3;
`;

const CheckBoxContainer = styled.View`
  flex: 1;
  padding: 0 10px;
`;

const AuthButtonContainer = styled.View`
  flex: 1.5;
`;

const OptionContainer = styled.View`
  flex: 2;
`;

const EmptyContainer = styled.View`
  flex: 1;
`;

export default SignIn;

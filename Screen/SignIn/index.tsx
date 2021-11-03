import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Alert } from 'react-native';
import CheckBox from 'react-native-check-box';
import useInput from './util/useInput';
import BasicButton from '../../Component/BasicButton';
import SocialLogin from './components/SocialLogin';
import Division from './components/Division';
import SignInForm from './components/SignInForm';
import OptionMenu from './components/OptionMenu';
import BasicContainer from '../../Component/BasicContainer';
import EmailAuthModal from './components/EmailAuthModal';
import EmailAuthDoneModal from './components/EmailAuthModal/EmailAuthDoneModal';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../redux/userReducer';
import { rootState } from '../../redux';

const SignIn: React.FC = () => {
  const emailInput = useInput('naerim1119@gmail.com');
  const passwordInput = useInput('qwer1234!');
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // 이메일 인증 모달창
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [doneModalVisible, setDoneModalVisible] = useState(false);
  const doneCloseModal = () => setDoneModalVisible(false);

  const toggleChecked = () => setChecked(!checked);
  const closeModal = () => setModalVisible(false);

  // 로그인된 이메일
  const myEmail = useInput('');

  const { login, loginError } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
    loginError: userReducer.loginError,
  }));

  const dispatch = useDispatch();
  const onLogin = useCallback(
    (email, password) => dispatch(loginRequest(email, password)),
    [dispatch]
  );

  const handleLogin = () => {
    const email = emailInput;
    const password = passwordInput;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    } else {
      onLogin(email.value, password.value);
    }
  };

  // 로그인에 실패하면 실행
  // 문제점: 같은 문제로 로그인에 실패하면 실행이 안됨
  useEffect(() => {
    if (loginError == 'Request failed with status code 500')
      Alert.alert('가입된 이메일 계정이 없습니다.');
    else if (loginError == 'Request failed with status code 404')
      Alert.alert('비밀번호가 일치하지 않습니다.');
    else if (loginError == 'Request failed with status code 400') {
      myEmail.onChange(emailInput.value);
      setModalVisible(true);
    }
  }, [login, loginError]);

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
          <BasicButton
            onPress={handleLogin}
            loading={isLoading}
            text="로그인"
            disabled={emailInput.value === '' && passwordInput.value === ''}
          />
        </AuthButtonContainer>
        <OptionContainer>
          <OptionMenu />
        </OptionContainer>
        <EmailAuthModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          closeModal={closeModal}
          setDoneModalVisible={setDoneModalVisible}
          email={myEmail.value}
        />
        <EmailAuthDoneModal
          modalVisible={doneModalVisible}
          closeModal={doneCloseModal}
        />
      </Container>
    </BasicContainer>
  );
};

const Container = styled.View`
  flex: 1;
`;

const SocialLoginContainer = styled.View`
  flex: 4;
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

export default SignIn;

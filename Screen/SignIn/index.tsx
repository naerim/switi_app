import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Alert } from 'react-native';
import CheckBox from 'react-native-check-box';
import useInput from './util/useInput';
import BasicButton from '../../Component/BasicButton';
import SignInForm from './components/SignInForm';
import OptionMenu from './components/OptionMenu';
import BasicContainer from '../../Component/BasicContainer';
import EmailAuthModal from './components/EmailAuthModal';
import EmailAuthDoneModal from './components/EmailAuthModal/EmailAuthDoneModal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../redux/userReducer';
import { rootState } from '../../redux';
import mainIcon from '../../Img/signIn_logo.png';

const SignIn: React.FC = () => {
  // const emailInput = useInput('naerim1119@gmail.com');
  // const passwordInput = useInput('qwer1234!');
  const [confirmOnPress, setConfirmOnPress] = useState(false);
  const emailInput = useInput('mn0316@naver.com');
  const passwordInput = useInput('lee000316^^');
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

  const { login, loginError } = useSelector(
    ({ userReducer }: rootState) => ({
      login: userReducer.login,
      loginError: userReducer.loginError,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const handleLogin = () => {
    const email = emailInput;
    const password = passwordInput;
    setConfirmOnPress(!confirmOnPress);
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsLoading(false);

    if (email.value === '') {
      Alert.alert('이메일 주소를 입력해주세요');
    } else if (!email.value.includes('@') || !email.value.includes('.')) {
      Alert.alert('이메일 주소가 잘못되었습니다.');
    } else if (!emailRegex.test(email.value)) {
      Alert.alert('이메일 주소가 잘못되었습니다. ');
    } else if (password.value === '') {
      Alert.alert('비밀번호를 입력해 주세요. ');
    } else if (password.value.length < 8 || password.value.length > 16) {
      Alert.alert('비밀번호가 잘못 입력되었습니다. ');
    } else {
      dispatch(loginRequest(email.value, password.value));
    }
  };

  // 로그인에 실패하면 실행
  // 문제점: 같은 문제로 로그인에 실패하면 실행이 안됨

  useEffect(() => {
    if (!login) {
      if (loginError == 'Request failed with status code 500')
        Alert.alert('네트워크 오류가 발생했습니다.');
      else if (loginError == 'Request failed with status code 404')
        Alert.alert('잘못된 로그인 정보입니다. ');
      else if (loginError == 'Request failed with status code 400') {
        myEmail.onChange(emailInput.value);
        setModalVisible(true);
      }
    }
  }, [loginError, confirmOnPress]);

  return (
    <BasicContainer headerTitle="로그인" display={false}>
      <Container>
        <IconContainer>
          <Icon source={mainIcon}></Icon>
        </IconContainer>
        <SignInFormContainer>
          <SignInForm emailInput={emailInput} passwordInput={passwordInput} />
          <CheckBox
            rightText="로그인 기억하기"
            rightTextStyle={{ fontSize: 12 }}
            checkBoxColor="#E3E3E3"
            isChecked={checked}
            onClick={toggleChecked}
          />
        </SignInFormContainer>
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
  padding-bottom: 20px;
`;

const IconContainer = styled.View`
  flex: 2.5;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.Image`
  width: 43px;
  height: 73px;
`;

const SignInFormContainer = styled.View`
  flex: 2;
  margin-bottom: 20px;
`;

const AuthButtonContainer = styled.View`
  margin: 15px 0;
`;

const OptionContainer = styled.View`
  flex: 2;
`;

export default SignIn;

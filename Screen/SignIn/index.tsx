import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../redux/userReducer';
import mainIcon from '../../Img/signIn_logo.png';
import { emailCheck, passwordCheck } from '../../Component/authFunction';

const SignIn: React.FC = () => {
  const emailInput = useInput('');
  const passwordInput = useInput('');
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
  const dispatch = useDispatch();

  const checkError = (login: any) => {
    const err = login.payload;
    if (err == 'Request failed with status code 500')
      Alert.alert('네트워크 오류가 발생했습니다.');
    else if (err == 'Request failed with status code 404')
      Alert.alert('잘못된 로그인 정보입니다. ');
    else if (err == 'Request failed with status code 400') {
      myEmail.onChange(emailInput.value);
      setModalVisible(true);
    }
    setIsLoading(false);
  };

  // 로그인 성공여부 확인
  const checkType = (login: any) => login.type == 'AUTH_LOGIN_FAILURE';

  const handleLogin = async () => {
    setIsLoading(true);
    const email = emailInput;
    const password = passwordInput;
    try {
      if (emailCheck(email.value)) {
        if (passwordCheck(password.value)) {
          const login = await dispatch(
            loginRequest(email.value, password.value)
          );
          // 로그인 실패하면 에러 확인
          checkType(login) && checkError(login);
        } else setIsLoading(false);
      } else setIsLoading(false);
    } catch (err) {
      Alert.alert('잘못된 로그인 접근입니다. ');
      setIsLoading(false);
    }
  };

  return (
    <BasicContainer headerTitle="로그인" display={false}>
      <Container showsVerticalScrollIndicator={false}>
        <IconContainer>
          <Icon source={mainIcon} />
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
            disabled={emailInput.value === '' || passwordInput.value === ''}
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

const Container = styled.ScrollView`
  padding-top: 20%;
  flex: 1;
`;

const IconContainer = styled.View`
  flex: 2.5;
  justify-content: center;
  align-items: center;
  padding-bottom: 20%;
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

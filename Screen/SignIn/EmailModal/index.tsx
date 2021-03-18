import React, { useState } from 'react';

import Modal from 'react-native-modal';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import EmailOption from './emailOption';
import AuthButton from '../components/AuthButton';
import useInput from '../util/useInput';
import EmailForm from './emailForm/emailForm';

const EmailModal = (Props: any): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(false);
  const emailInput = useInput('');

  const handleLogin = () => {
    const email = emailInput;

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsLoading(false);

    if (email.value === '') {
      Alert.alert('이메일 주소가 잘못되거나 비밀번호가 틀렸습니다.');
    } else if (!email.value.includes('@') || !email.value.includes('.')) {
      Alert.alert('이메일 주소가 잘못되거나 비밀번호가 틀렸습니다.');
    } else if (!emailRegex.test(email.value)) {
      Alert.alert('이메일 주소가 잘못되거나 비밀번호가 틀렸습니다.');
    }
  };

  //State를 이용하여 Modal을 제어함 x
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  //Output을 State로 받아서 화면에 표출하거나 정보 값으로 활용 x
  const [modalOutput, setModalOutput] = useState<string>('Open Modal');
  return (
    <StyledSafeAreaView>
      <Modal
        //isVisible Props에 State 값을 물려주어 On/off control
        isVisible={modalVisible}
        //아이폰에서 모달창 동작시 깜박임이 있었는데, useNativeDriver Props를 True로 주니 해결되었다.
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <StyledModalContainer>
          <BigText>이메일 인증을 진행해 주세요.</BigText>
          <SmallText>아래의 메일주소로 인증번호를 발송했습니다.</SmallText>
          <SmallText>인증번호를 입력해 주세요.</SmallText>
          <StyledModalGradeWrapper>
            <SmallText>switi@purplecode.com</SmallText>
          </StyledModalGradeWrapper>
          <EmailForm emailInput={emailInput} />
          <EmailOption />
          <ButtonContainer>
            <AuthButton
              text="이메일 인증하기"
              onPress={handleLogin}
              loading={isLoading}
            />
          </ButtonContainer>
        </StyledModalContainer>
      </Modal>

      <StyledModalOpenButton
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <StyledModalOutputText> {modalOutput}</StyledModalOutputText>
      </StyledModalOpenButton>
    </StyledSafeAreaView>
  );
};

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledModalContainer = styled.View`
  flex-direction: column;
  align-items: center;
  /* 모달창 크기 조절 */
  width: 100%;
  height: 420px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
`;

const StyledModalGradeWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

const BigText = styled.Text`
  padding: 50px 0;
  align-self: center;
  font-size: 20px;
`;

const SmallText = styled.Text`
  align-self: center;
`;

const StyledModalOpenButton = styled.TouchableOpacity`
  width: 60%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 1);
`;

const StyledModalOutputText = styled.Text`
  color: black;
  font-size: 30px;
`;

const ButtonContainer = styled.View`
  padding: 0 20px;
  justify-content: center;
  align-items: center;
`;

export default EmailModal;

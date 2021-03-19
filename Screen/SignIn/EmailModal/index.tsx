import React, { useState } from 'react';

import Modal from 'react-native-modal';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import EmailOption from './emailOption';
import AuthButton from '../components/AuthButton';
import useInput from '../util/useInput';
import EmailForm from './emailForm/emailForm';

interface EmailModalProps {
  modalVisible: boolean;
  closeModal: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({
  modalVisible,
  closeModal,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const certificationNumber = useInput('');

  const handleEmail = () => {
    setIsLoading(false);

    if (!certificationNumber.value) {
      Alert.alert('인증번호를 입력해주세요.');
    }
  };

  return (
    <Modal
      isVisible={modalVisible}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      onBackdropPress={closeModal}
      style={{ margin: 0, justifyContent: 'flex-end' }}
    >
      <StyledModalContainer>
        <BigText>이메일 인증을 진행해 주세요.</BigText>
        <SmallText>아래의 메일주소로 인증번호를 발송했습니다.</SmallText>
        <SmallText>인증번호를 입력해 주세요.</SmallText>
        <StyledModalGradeWrapper>
          <EmailText>switi@purplecode.com</EmailText>
        </StyledModalGradeWrapper>
        <EmailForm emailInput={certificationNumber} />
        <EmailOption />
        <ButtonContainer>
          <AuthButton
            text="이메일 인증하기"
            onPress={handleEmail}
            loading={isLoading}
            color="#4FD5A7"
          />
        </ButtonContainer>
      </StyledModalContainer>
    </Modal>
  );
};

const StyledModalContainer = styled.View`
  flex-direction: column;
  align-items: center;
  /* 모달창 크기 조절 */
  width: 100%;
  height: 500px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
`;

const StyledModalGradeWrapper = styled.View`
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 40px;
`;

const BigText = styled.Text`
  padding: 70px 0;
  align-self: center;
  font-size: 20px;
`;

const SmallText = styled.Text`
  align-self: center;
`;

const EmailText = styled.Text`
  align-self: center;
`;

const ButtonContainer = styled.View`
  padding: 0 20px;
  justify-content: center;
  align-items: center;
`;

export default EmailModal;

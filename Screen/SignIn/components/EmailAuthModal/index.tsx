import React from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../../Component/BasicModal';
import useInput from '../../util/useInput';
import { Alert } from 'react-native';
import ModalForm from './ModalForm';
import BasicButton from '../../../../Component/BasicButton';
import ModalOption from './ModalOption';

interface Props {
  modalVisible: boolean;
  setModalVisible: any;
  closeModal: () => void;
  setDoneModalVisible: any;
  email: string;
}
const EmailAuthModal: React.FC<Props> = ({
  modalVisible,
  setModalVisible,
  closeModal,
  setDoneModalVisible,
  email,
}) => {
  const certificationNumber = useInput('');

  const handleNum = () => {
    if (!certificationNumber.value) {
      Alert.alert('인증번호를 입력해주세요.');
    }
    setModalVisible(false);
    setTimeout(() => {
      setDoneModalVisible(true);
    }, 500);
  };

  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <Container>
        <BigText>이메일 인증을 진행해 주세요.</BigText>
        <SmallText>
          {
            '아래의 메일주소로 인증번호를 발송했습니다.\n인증번호를 입력해 주세요.'
          }
        </SmallText>
        <SmallText>{email}</SmallText>
        <ModalForm emailInput={certificationNumber} />
        <ModalOption />
        <BasicButton text="이메일 인증하기" onPress={handleNum} />
      </Container>
    </BasicModal>
  );
};

const Container = styled.View`
  padding-top: 60px;
`;

const BigText = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  color: #2b2b2b;
`;

const SmallText = styled.Text`
  padding-top: 40px;
  text-align: center;
  font-size: 12px;
  color: #2b2b2b;
`;

export default EmailAuthModal;

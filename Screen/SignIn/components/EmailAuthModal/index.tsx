import React from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../../Component/BasicModal';
import useInput from '../../util/useInput';
import { Alert } from 'react-native';
import ModalForm from './ModalForm';
import BasicButton from '../../../../Component/BasicButton';
import ModalOption from './ModalOption';
import axios from 'axios';
import { loginRequest } from '../../../../redux/userReducer';

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

  // 메일 인증
  const handleNum = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/auth/compareCode',
      data: { email: email, inputCode: certificationNumber.value },
    })
      .then((res) => {
        setModalVisible(false);
        setTimeout(() => {
          setDoneModalVisible(true);
        }, 500);
      })
      .catch((err) => {
        if (err.toString() == 'Error: Request failed with status code 404')
          Alert.alert('인증번호가 일치하지 않습니다.');
        else Alert.alert('이메일 인증 오류 :(');
      });
  };

  // 메일 재전송
  const resendMail = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/auth/resendMail',
      data: { email: email },
    }).catch((err) => {
      if (err.toString() == 'Error: Request failed with status code 400')
        Alert.alert('인증번호가 재전송되었습니다.');
      else Alert.alert('이메일 재전송 오류 :(');
      //console.log(err);
    });
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
        <ModalOption resendMail={resendMail} />
        <BasicButton
          text="이메일 인증하기"
          onPress={handleNum}
          disabled={!certificationNumber.value}
        />
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

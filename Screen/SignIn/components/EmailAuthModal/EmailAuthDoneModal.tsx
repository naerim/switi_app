import React from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../../Component/BasicModal';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

const EmailAuthDoneModal: React.FC<Props> = ({ modalVisible, closeModal }) => {
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <Container>
        <Title>이메일 인증이 완료되었습니다!</Title>
        <Desc>스위티에 가입하신 것을 진심으로 축하합니다.</Desc>
      </Container>
    </BasicModal>
  );
};

const Container = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  padding: 20px 0;
  color: #2b2b2b;
`;

const Desc = styled.Text`
  font-size: 14px;
  padding-bottom: 30px;
`;

export default EmailAuthDoneModal;

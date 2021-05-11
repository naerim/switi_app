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
      </Container>
    </BasicModal>
  );
};

const Container = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  font-size: 18px;
  color: #2b2b2b;
`;

export default EmailAuthDoneModal;

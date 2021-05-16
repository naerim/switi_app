import React from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../../Component/BasicModal';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

const ApplyModal: React.FC<Props> = ({ modalVisible, closeModal }) => {
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <Container>
        <Title>연락처(카카오톡 아이디 or 전화번호)</Title>
      </Container>
    </BasicModal>
  );
};

const Container = styled.View`
  padding: 24px 24px;
`;

const Title = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
`;

export default ApplyModal;

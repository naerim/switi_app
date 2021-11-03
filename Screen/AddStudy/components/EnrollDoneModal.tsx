import React from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../Component/BasicModal';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

const EnrollDoneModal: React.FC<Props> = ({ modalVisible, closeModal }) => {
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <Container>
        <Title>모집글이 등록되었습니다.</Title>
      </Container>
    </BasicModal>
  );
};

const Container = styled.View`
  padding: 0 24px;
  margin-top: 40px;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 18px;
  color: #2b2b2b;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export default EnrollDoneModal;

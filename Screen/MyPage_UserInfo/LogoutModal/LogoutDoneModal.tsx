import React from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../Component/BasicModal';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

const LogoutDoneModal: React.FC<Props> = ({ modalVisible, closeModal }) => {
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <Container>
        <Title>로그아웃이 완료되었습니다</Title>
        <Desc>{'로그아웃이 완료되었습니다!\n다음에 또 뵈어요:)'}</Desc>
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

const Desc = styled.Text`
  font-size: 12px;
  color: #2b2b2b;
  text-align: center;
  padding-bottom: 30px;
`;

export default LogoutDoneModal;

import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import BasicModal from '../../Component/BasicModal';

interface MyPageModalProps {
  modalVisible: boolean;
  closeModal: () => void;
}

const MyPageModal: React.FC<MyPageModalProps> = ({
  modalVisible,
  closeModal,
}) => {
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <StyledModalContainer
        style={{
          paddingBottom: Platform.OS === 'ios' ? 0 : 24,
        }}
      >
        <Text>Notice</Text>
      </StyledModalContainer>
    </BasicModal>
  );
};

const StyledModalContainer = styled.View`
  flex-direction: column;
  /* 모달창 크기 조절 */
  height: 120px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  text-align: left;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 12px;
`;

export default MyPageModal;

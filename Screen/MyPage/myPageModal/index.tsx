import React from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';

interface MyPageModalProps {
  modalVisible: boolean;
  closeModal: () => void;
}

const MyPageModal: React.FC<MyPageModalProps> = ({
  modalVisible,
  closeModal,
}) => {
  return (
    <Modal
      isVisible={modalVisible}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      onBackdropPress={closeModal}
      style={{ margin: 0, justifyContent: 'flex-end' }}
    >
      <StyledModalContainer>
        <Title>나의 당도란?</Title>
        <Text>
          나의 당도는 함께 활동한 스터디원들이 평가한 내 신뢰도를{'\n'}나타내는
          지표예요. 하나의 스터디 활동이 완료된 후{'\n'}실시된 상호평가에서 각
          스터디원들이 나에 대해 평가한{'\n'}점수의 평균이 나의 당도에
          반영되어요.
        </Text>
      </StyledModalContainer>
    </Modal>
  );
};

const StyledModalContainer = styled.View`
  flex-direction: column;
  padding: 24px;
  /* 모달창 크기 조절 */
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
`;

const Title = styled.Text`
  padding: 20px 0;
  font-size: 12px;
  color: #b4b4b4;
`;

const Text = styled.Text`
  font-size: 12px;
`;

export default MyPageModal;

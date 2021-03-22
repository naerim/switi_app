import React from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

const BasicModal: React.FC<Props> = ({
  children,
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
      <Container>
        <Content>{children}</Content>
      </Container>
    </Modal>
  );
};

const Container = styled.SafeAreaView`
  background-color: white;
`;

const Content = styled.View`
  padding: 24px;
`;
const T = styled.Text`
  font-size: 14px;
`;

export default BasicModal;

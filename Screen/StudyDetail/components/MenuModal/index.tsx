import React from 'react';
import { Alert, Modal, Pressable } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  modalVisible: boolean;
  setModalVisible: any;
}

const MenuModal: React.FC<Props> = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      <Container>
        <ModalView>
          <ModalText>Hello World!</ModalText>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <ModalText>Hide Modal</ModalText>
          </Pressable>
        </ModalView>
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

const ModalView = styled.View`
  margin: 20px;
  background-color: white;
  padding: 35px;
  border-radius: 20px;
  align-items: center;
`;

const ModalText = styled.Text`
  margin-bottom: 15px;
  text-align: center;
`;

export default MenuModal;

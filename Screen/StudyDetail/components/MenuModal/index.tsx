import React from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';

interface Props {
  modalVisible: boolean;
  setModalVisible: any;
}

const MenuModal: React.FC<Props> = ({ modalVisible, setModalVisible }) => {
  const closeModal = () => setModalVisible(!modalVisible);
  return (
    <Modal
      useNativeDriver={true}
      isVisible={modalVisible}
      hideModalContentWhileAnimating={true}
    >
      <Container>
        <MenuView>
          <ModalText onPress={() => console.log('수정')}>모집글 수정</ModalText>
          <Line />
          <ModalText onPress={() => console.log('삭제')}>모집글 삭제</ModalText>
        </MenuView>
        <CancelView onPress={closeModal} activeOpacity={0.8}>
          <CancelText>취소</CancelText>
        </CancelView>
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const MenuView = styled.View`
  background-color: white;
  border-radius: 10px;
  height: 101px;
  justify-content: center;
`;

const ModalText = styled.Text`
  text-align: center;
  color: #2b2b2b;
`;

const CancelText = styled.Text`
  text-align: center;
  color: red;
`;
const CancelView = styled.TouchableOpacity`
  background-color: white;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  height: 47px;
  justify-content: center;
`;

const Line = styled.View`
  background-color: #f3f3f3;
  height: 1px;
  margin: 15px 0;
`;

export default MenuModal;

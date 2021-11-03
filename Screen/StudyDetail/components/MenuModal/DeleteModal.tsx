import React from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../../Component/BasicModal';
import BasicButton from '../../../../Component/BasicButton';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  onPress: () => void;
}

const DeleteModal: React.FC<Props> = ({
  modalVisible,
  closeModal,
  onPress,
}) => {
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <Title>모집글을 삭제하시겠습니까?</Title>
      <BasicButton text="삭제하기" onPress={onPress} disabled={false} />
    </BasicModal>
  );
};

const Title = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #2b2b2b;
  padding: 30px 0;
  font-weight: bold;
`;

export default DeleteModal;

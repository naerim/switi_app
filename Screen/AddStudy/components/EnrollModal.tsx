import React from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../Component/BasicModal';
import BasicButton from '../../../Component/BasicButton';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  onPress: () => void;
}

const EnrollModal: React.FC<Props> = ({
  modalVisible,
  closeModal,
  onPress,
}) => {
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <Title>모집글을 등록하시겠습니까?</Title>
      <BasicButton text="등록하기" onPress={onPress} disabled={false} />
    </BasicModal>
  );
};

const Title = styled.Text`
  color: #2b2b2b;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  padding: 40px 0;
`;

export default EnrollModal;

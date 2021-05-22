import React from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../../Component/BasicModal';
import BasicButton from '../../../../Component/BasicButton';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

const CancelModal: React.FC<Props> = ({ modalVisible, closeModal }) => {
  const onPress = () => console.log('cancel');
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <Title>스터디 신청을 취소하시겠습니까?</Title>
      <BasicButton text="신청 취소하기" onPress={onPress} />
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

export default CancelModal;

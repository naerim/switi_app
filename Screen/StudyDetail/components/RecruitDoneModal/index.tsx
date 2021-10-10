import React from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../../Component/BasicModal';
import BasicButton from '../../../../Component/BasicButton';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

const RecruitDoneModal: React.FC<Props> = ({ modalVisible, closeModal }) => {
  const onPress = () => console.log('cancel');
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <Title>스터디 모집을 마감하시겠습니까?</Title>
      <Desc>마감 이후 재모집은 어려워요.</Desc>
      <BasicButton text="모집 마감하기" onPress={onPress} />
    </BasicModal>
  );
};

const Title = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #2b2b2b;
  padding-top: 50px;
  font-weight: bold;
`;

const Desc = styled.Text`
  font-size: 14px;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 45px;
  color: #2b2b2b;
`;

export default RecruitDoneModal;

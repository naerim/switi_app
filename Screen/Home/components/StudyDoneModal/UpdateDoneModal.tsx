import React from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../../Component/BasicModal';
import CheckIcon from '../../../../Img/icon_complete.png';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

const UpdateDoneModal: React.FC<Props> = ({ modalVisible, closeModal }) => {
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <Container>
        <Title>스터디가 정상적으로 연장되었습니다.</Title>
        <SubTitle>스터디가 종료되시면 다시 찾아올게요!</SubTitle>
        <Icon source={CheckIcon} />
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

const SubTitle = styled.Text`
  font-size: 12px;
  color: #2b2b2b;
  text-align: center;
  padding-bottom: 5px;
`;

const Icon = styled.Image`
  margin-top: 30px;
  width: 79px;
  height: 79px;
`;

export default UpdateDoneModal;

import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import BasicModal from '../../../Component/BasicModal';
import BasicButton from '../../../Component/BasicButton';

interface Props {
  name: string;
  modalVisible: boolean;
  closeModal: () => void;
  button: () => void;
}

const ConfirmReport: React.FC<Props> = ({
  name,
  modalVisible,
  closeModal,
  button,
}) => {
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <StyledModalContainer
        style={{
          paddingBottom: Platform.OS === 'ios' ? 0 : 24,
        }}
      >
        <Title>{name}님을 신고하시겠습니까?</Title>
        <Nothing />
        <Content>신고철회는 불가능하며,</Content>
        <Content>신고자의 익명이 보장됩니다.</Content>
      </StyledModalContainer>
      <BasicButton text="신고하기" onPress={button} />
    </BasicModal>
  );
};

const StyledModalContainer = styled.View`
  /* 모달창 크기 조절 */
  height: 150px;
  background-color: rgba(255, 255, 255, 1);
  text-align: left;
  margin-bottom: 40px;
  justify-content: center;
`;

const Nothing = styled.View`
  height: 18px;
`;

const Title = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-top: 18px;
  font-weight: bold;
`;

const Content = styled.Text`
  font-size: 14px;
  text-align: center;
`;

export default ConfirmReport;

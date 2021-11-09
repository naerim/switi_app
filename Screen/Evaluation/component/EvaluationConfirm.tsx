import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import BasicModal from '../../../Component/BasicModal';
import HalfButton from '../../../Component/HalfButton';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  onPressConfirm: any;
}

const ConfirmReport: React.FC<Props> = ({
  modalVisible,
  closeModal,
  onPressConfirm,
}) => {
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <StyledModalContainer
        style={{
          paddingBottom: Platform.OS === 'ios' ? 0 : 24,
        }}
      >
        <Title>평가를 완료하시겠습니까?</Title>
        <Nothing />
        <Content>완료된 평가는 이후 수정이 어려워요.</Content>
      </StyledModalContainer>
      <ModalButtonContainer>
        <HalfButton text="취소" onPress={closeModal} />
        <HalfButton text="완료하기" onPress={onPressConfirm} color="#86E3C3" />
      </ModalButtonContainer>
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

const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default ConfirmReport;

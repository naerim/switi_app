import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import BasicModal from '../../../Component/BasicModal';
import CircleCheck from '../../../Img/icon_circle_check.png';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

const FinalModal: React.FC<Props> = ({ modalVisible, closeModal }) => {
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <StyledModalContainer
        style={{
          paddingBottom: Platform.OS === 'ios' ? 0 : 24,
        }}
      >
        <Title>신고가 접수되었습니다</Title>
        <Nothing />
        <Content>의견을 내주셔서 감사합니다!</Content>
      </StyledModalContainer>
      <Imag source={CircleCheck} />
    </BasicModal>
  );
};

const StyledModalContainer = styled.View`
  /* 모달창 크기 조절 */
  height: 80px;
  background-color: rgba(255, 255, 255, 1);
  text-align: left;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
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

const Imag = styled.Image`
  height: 79px;
  width: 79px;
  align-self: center;
`;

export default FinalModal;

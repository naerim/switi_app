import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import BasicModal from '../../../Component/BasicModal';

interface MyPageModalProps {
  modalVisible: boolean;
  closeModal: () => void;
}

const MyPageModal: React.FC<MyPageModalProps> = ({
  modalVisible,
  closeModal,
}) => {
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <StyledModalContainer
        style={{
          paddingBottom: Platform.OS === 'ios' ? 0 : 24,
        }}
      >
        <Title>나의 당도란?</Title>
        <Text>
          나의 당도는 함께 활동한 스터디원들이 평가한 내 신뢰도를{'\n'}나타내는
          지표예요. 하나의 스터디 활동이 완료된 후{'\n'}실시된 상호평가에서 각
          스터디원들이 나에 대해 평가한{'\n'}점수의 평균이 나의 당도에
          반영되어요.
        </Text>
      </StyledModalContainer>
    </BasicModal>
  );
};

const StyledModalContainer = styled.View`
  flex-direction: column;
  /* 모달창 크기 조절 */
  height: 120px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  text-align: left;
  justify-content: center;
`;

const Title = styled.Text`
  padding: 20px 0;
  font-size: 12px;
  color: #b4b4b4;
`;

const Text = styled.Text`
  font-size: 12px;
`;

export default MyPageModal;

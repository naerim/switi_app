import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import BasicModal from '../../../Component/BasicModal';

interface Props {
  name: string;
  modalVisible: boolean;
  closeModal: () => void;
}

const ConfirmReport: React.FC<Props> = ({ name, modalVisible, closeModal }) => {
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <StyledModalContainer
        style={{
          paddingBottom: Platform.OS === 'ios' ? 0 : 24,
        }}
      ></StyledModalContainer>
    </BasicModal>
  );
};

const StyledModalContainer = styled.ScrollView`
  /* 모달창 크기 조절 */
  height: 450px;
  background-color: rgba(255, 255, 255, 1);
  text-align: left;
  margin-bottom: 40px;
`;

export default ConfirmReport;

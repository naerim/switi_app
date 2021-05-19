import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import BasicModal from '../../Component/BasicModal';
import StudyRadioButton from './studyRadioButton';
import PersonRadioButton from './personRadioButton';
import ReasonText from './reportReason';
import useInput from '../../util/useInput';

interface MyPageModalProps {
  modalVisible: boolean;
  closeModal: () => void;
}

const MyPageModal: React.FC<MyPageModalProps> = ({
  modalVisible,
  closeModal,
}) => {
  const [study, setStudy] = useState(0);
  const [person, setPerson] = useState(0);
  const reasonInput = useInput('');

  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <StyledModalContainer
        style={{
          paddingBottom: Platform.OS === 'ios' ? 0 : 24,
        }}
      >
        <Title>스터디 선택</Title>
        <StudyRadioButton input={{ reason: study, setReason: setStudy }} />
        <Line />
        <Title>신고 대상자 선택</Title>
        <PersonRadioButton input={{ reason: person, setReason: setPerson }} />
        <Line />
        <Title>신고사유</Title>
        <ReasonText input={reasonInput} />
      </StyledModalContainer>
    </BasicModal>
  );
};

const StyledModalContainer = styled.View`
  /* 모달창 크기 조절 */
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  text-align: left;
`;

const Title = styled.Text`
  font-size: 14px;
`;

const Line = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;
export default MyPageModal;

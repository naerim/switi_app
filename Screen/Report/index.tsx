import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import BasicModal from '../../Component/BasicModal';
import StudyRadioButton from './details/studyRadioButton';
import PersonRadioButton from './details/personRadioButton';
import ReasonText from './details/reportReason';
import useInput from '../../util/useInput';
import TwoModalButton from '../SignIn/components/EmailAuthModal/twoModalButton';
import TitleContainer from './details/titleContainer';
interface MyPageModalProps {
  modalVisible: boolean;
  closeModal: () => void;
  confirmButton: () => void;
}

const MyPageModal: React.FC<MyPageModalProps> = ({
  modalVisible,
  closeModal,
  confirmButton,
}) => {
  const [study, setStudy] = useState(0);
  const [person, setPerson] = useState(0);
  const reasonInput = useInput('');
  const [studyVisible, setStudyVisible] = useState(true);
  const [personVisible, setPersonVisible] = useState(true);
  const [reasonVisible, setReasonVisible] = useState(false);

  const onPressStudy = () => {
    if (studyVisible == true) setStudyVisible(false);
    else setStudyVisible(true);
  };

  const onPressPerson = () => {
    if (personVisible == true) setPersonVisible(false);
    else setPersonVisible(true);
  };

  const onPressReason = () => {
    if (reasonVisible == true) setReasonVisible(false);
    else setReasonVisible(true);
  };

  return (
    <BasicModal
      modalVisible={modalVisible}
      closeModal={closeModal}
      // scroll={scroll}
    >
      <StyledModalContainer
        showsVerticalScrollIndicator={false}
        style={{
          paddingBottom: Platform.OS === 'ios' ? 0 : 24,
        }}
      >
        <TitleContainer onPress={onPressStudy} titleText="스터디 선택" />
        {studyVisible ? (
          <StudyRadioButton input={{ reason: study, setReason: setStudy }} />
        ) : (
          <Nothing />
        )}
        <Line />
        <TitleContainer onPress={onPressPerson} titleText="신고 대상자 선택" />
        {personVisible ? (
          <PersonRadioButton input={{ reason: person, setReason: setPerson }} />
        ) : (
          <Nothing />
        )}
        <Line />
        <TitleContainer onPress={onPressReason} titleText="신고사유" />
        {reasonVisible ? <ReasonText input={reasonInput} /> : <Nothing />}
      </StyledModalContainer>
      <ModalButtonContainer>
        <TwoModalButton text="취소" onPress={closeModal} />
        <TwoModalButton
          text="신고하기"
          onPress={confirmButton}
          color="#86E3C3"
        />
      </ModalButtonContainer>
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

const Line = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

const Nothing = styled.View``;

const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default MyPageModal;

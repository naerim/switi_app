import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import BasicModal from '../../../Component/BasicModal';
import StudyRadioButton from '../details/studyRadioButton';
import PersonRadioButton from '../details/personRadioButton';
import ReasonText from '../details/reportReason';
import useInput from '../../../util/useInput';
import TwoModalButton from '../../../Component/basicModal/twoModalButton';
import check from '../../../Img/icon_filter.png';

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
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <StyledModalContainer
        showsVerticalScrollIndicator={false}
        style={{
          paddingBottom: Platform.OS === 'ios' ? 0 : 24,
        }}
      >
        <TitleContainer onPress={onPressStudy} activeOpacity={0.8}>
          <Title>스터디 선택</Title>
          <Check source={check} />
        </TitleContainer>
        {studyVisible ? (
          <StudyRadioButton input={{ reason: study, setReason: setStudy }} />
        ) : (
          <Nothing />
        )}
        <Line />
        <TitleContainer onPress={onPressPerson} activeOpacity={0.8}>
          <Title>신고 대상자 선택</Title>
          <Check source={check} />
        </TitleContainer>
        {personVisible ? (
          <PersonRadioButton input={{ reason: person, setReason: setPerson }} />
        ) : (
          <Nothing />
        )}
        <Line />
        <TitleContainer onPress={onPressReason} activeOpacity={0.8}>
          <Title>신고사유</Title>
          <Check source={check} />
        </TitleContainer>
        {reasonVisible ? <ReasonText input={reasonInput} /> : <Nothing />}
      </StyledModalContainer>
      <ModalButtonContainer>
        <TwoModalButton text="취소" onPress={closeModal} />
        <TwoModalButton text="신고하기" onPress={closeModal} color="#86E3C3" />
      </ModalButtonContainer>
    </BasicModal>
  );
};

const StyledModalContainer = styled.ScrollView`
  /* 모달창 크기 조절 */
  height: 450px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  text-align: left;
  margin-bottom: 40px;
`;

const TitleContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 14px;
`;

const Check = styled.Image`
  height: 13px;
  width: 13px;
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

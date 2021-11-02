import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import BasicModal from '../../Component/BasicModal';
import StudyRadioButton from './details/studyRadioButton';
import PersonRadioButton from './details/personRadioButton';
import ReasonText from './details/reportReason';
import useInput from '../../util/useInput';
import TwoModalButton from '../SignIn/components/EmailAuthModal/twoModalButton';
import TitleContainer from './details/titleContainer';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import {
  reportRequest,
  studyInProgressRequest,
  studyMemberRequest,
} from '../../redux/report/reportReducer';
interface MyPageModalProps {
  setReportStudyId: (studyId: number) => void;
  setReportMemberId: (memberId: number) => void;
  modalVisible: boolean;
  closeModal: () => void;
  confirmButton: () => void;
}

const MyPageModal: React.FC<MyPageModalProps> = ({
  setReportStudyId,
  setReportMemberId,
  modalVisible,
  closeModal,
  confirmButton,
}) => {
  const dispatch = useDispatch();
  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));

  const { studyInProgressList, studyMemberList } = useSelector(
    (state: rootState) => ({
      studyInProgressList: state.reportReducer.studyInProgressList,
      studyMemberList: state.reportReducer.studyMemberList,
    }),
    shallowEqual
  );

  const handleStudyInProgress = () => {
    dispatch(studyInProgressRequest(login.token));
  };

  const handleStudyMember = (studyId: any) => {
    dispatch(studyMemberRequest(login.token, studyId));
  };

  useEffect(() => {
    handleStudyInProgress();
  }, []);
  //맨 처음 스터디만 받아오기

  const [studyChoice, setStudyChoice] = useState(0);

  const handleStudyOnClick = (value: number, studyId: number) => {
    handleStudyMember(studyId);
    setStudyChoice(value);
  };

  const [person, setPerson] = useState(0);
  const reasonInput = useInput('');
  const [studyVisible, setStudyVisible] = useState(true);
  const [personVisible, setPersonVisible] = useState(false);
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
          <StudyRadioButton
            setReportStudyId={setReportStudyId}
            input={{ choice: studyChoice, setChoice: handleStudyOnClick }}
            studyInProgressList={studyInProgressList}
          />
        ) : (
          <Nothing />
        )}
        <Line />
        <TitleContainer onPress={onPressPerson} titleText="신고 대상자 선택" />
        {personVisible ? (
          <PersonRadioButton
            setReportMemberId={setReportMemberId}
            input={{ reason: person, setReason: setPerson }}
            studyMemberList={studyMemberList}
          />
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

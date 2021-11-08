import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import BasicModal from '../../Component/BasicModal';
import StudyRadioButton from './details/studyRadioButton';
import PersonRadioButton from './details/personRadioButton';
import ReasonText from './details/reportReason';
import TwoModalButton from '../SignIn/components/EmailAuthModal/twoModalButton';
import TitleContainer from './details/titleContainer';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import { InputProps } from './interface';
import { studyMemberRequest } from '../../redux/report/reportReducer';
interface MyPageModalProps {
  setReportStudyId: Dispatch<SetStateAction<undefined>>;
  setReportMemberId: Dispatch<SetStateAction<undefined>>;
  reportContent: InputProps;
  modalVisible: boolean;
  closeModal: () => void;
  confirmButton: () => void;
}

const MyPageModal: React.FC<MyPageModalProps> = ({
  setReportStudyId,
  setReportMemberId,
  reportContent,
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

  const handleStudyMember = (studyId: any) => {
    dispatch(studyMemberRequest(login.token, studyId));
  };

  const [studyChoice, setStudyChoice] = useState(0);

  const handleStudyOnClick = (value: number, studyId: number) => {
    handleStudyMember(studyId);
    setStudyChoice(value);
  };

  const [person, setPerson] = useState(0);
  const reasonInput = reportContent;
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
        <TitleContainer
          visible={studyInProgressList[0]}
          onPress={onPressStudy}
          titleText="스터디 선택"
        />
        {/*{console.log('report/index', studyInProgressList[0])}*/}
        {studyInProgressList[0] && (
          <StudyRadioButton
            setReportStudyId={setReportStudyId}
            input={{ choice: studyChoice, setChoice: handleStudyOnClick }}
            studyInProgressList={studyInProgressList}
          />
        )}
        <Line />
        <TitleContainer
          visible={studyMemberList[0]}
          onPress={onPressPerson}
          titleText="신고 대상자 선택"
        />
        {console.log('report/index2', studyMemberList[0])}
        {studyMemberList[0] && (
          <PersonRadioButton
            setReportMemberId={setReportMemberId}
            input={{ reason: person, setReason: setPerson }}
            studyMemberList={studyMemberList}
          />
        )}
        <Line />
        <TitleContainer
          visible={studyMemberList[0]}
          onPress={onPressReason}
          titleText="신고사유"
        />
        {studyMemberList[0] && <ReasonText input={reasonInput} />}
        {!studyMemberList[0] && (
          <AlertText>* 신고할 수 있는 대상이 없습니다.</AlertText>
        )}
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

const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const AlertText = styled.Text`
  margin-top: 20px;
  color: #ff5c48;
  font-size: 14px;
`;

export default MyPageModal;

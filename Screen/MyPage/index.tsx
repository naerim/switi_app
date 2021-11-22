import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import UserInfo from './profile/userInfo';
import MoveScreen from './moveScreen';
import MyPageModal from './myPageModal';
import ContainerWithBell from '../../Component/ContainerWithBell';
import ReportModal from '../Report';
import {
  useGoMyPageUserInfo,
  UseGoNotice,
  UseGoScrap,
  UseGoParticipation,
  useGoQuestion,
} from '../../util/navigationHooks';
import ConfirmReport from '../Report/details/confirmReport';
import FinalModal from '../Report/details/finalModal';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import {
  getMyPageRequest,
  getMyProfileRequest,
  getScrapListRequest,
  getStudyHistoryRequest,
} from '../../redux/userReducer';
import SugarContainer from './profile/sugarContainer';
import {
  reportRequest,
  studyInProgressRequest,
  studyMemberRequest,
} from '../../redux/report/reportReducer';
import useInput from '../../util/useInput';
import { Alert } from 'react-native';

const MyPage = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const [confirmModalVisible, setConfirmModalVisible] = useState<boolean>(
    false
  );
  const [finalModalVisible, setFinalModalVisible] = useState<boolean>(false);
  const closeModal = () => setModalVisible(false);
  const closeConfirm = () => setConfirmModalVisible(false);
  const [reportModalVisible, setReportModalVisible] = useState<boolean>(false);
  const reportModalClose = () => setReportModalVisible(false);
  const [reportStudyId, setReportStudyId] = useState();
  const [reportMemberId, setReportMemberId] = useState();
  const [reportMemberName, setReportMemberName] = useState();
  const reportContent = useInput('');

  //신고하기 전 현재 진행 중 스터디 목록 조회
  const handleStudyInProgress = () => {
    dispatch(studyInProgressRequest(login.token));
  };

  useEffect(() => {
    handleStudyInProgress();
  }, []);

  const { studyInProgressList, studyMemberList } = useSelector(
    (state: rootState) => ({
      studyInProgressList: state.reportReducer.studyInProgressList,
      studyMemberList: state.reportReducer.studyMemberList,
    }),
    shallowEqual
  );
  //하나일 때

  //신고하기 스터디 멤버 조회
  const handleStudyMember = (studyId: any) => {
    dispatch(studyMemberRequest(login.token, studyId));
  };
  useEffect(() => {
    studyInProgressList && handleStudyMember(studyInProgressList[0]?.id);
  }, [studyInProgressList]);

  //신고하기 api
  const handleReport = (studyId: any, memberId: any, content: any) => {
    dispatch(reportRequest(login.token, studyId, memberId, content));
  };

  const final = () => {
    setConfirmModalVisible(false);
    handleReport(reportStudyId, reportMemberId, reportContent.value);
    setTimeout(() => {
      setFinalModalVisible(true);
    }, 1000);
  };
  const finalClose = () => {
    setFinalModalVisible(false);
  };
  const goUserInfo = useGoMyPageUserInfo();
  const goNotice = UseGoNotice();
  const goScrap = UseGoScrap();
  const goReport = () => setReportModalVisible(true);
  const GoParticipation = UseGoParticipation();
  const goQuestion = useGoQuestion();

  const confirm = () => {
    console.log(
      'confirm(MyPage/index)',
      reportStudyId,
      reportMemberId,
      reportContent.value
    );
    if (reportContent.value !== '') {
      setReportModalVisible(false);
      setTimeout(() => {
        setConfirmModalVisible(true);
      }, 1000);
    } else Alert.alert('모든 항목을 입력해 주세요!');
  };

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { myPage } = useSelector(
    ({ userReducer }: rootState) => ({
      myPage: userReducer.myPage,
    }),
    shallowEqual
  );

  const onGetMyPage = useCallback(
    // 사용자 닉네임, 당도, 프로필사진, 스크랩 수 불러오기
    (token) => dispatch(getMyPageRequest(token)),
    [dispatch]
  );
  const onGetScrapList = useCallback(
    // 스크랩리스트 불러오기
    (token) => dispatch(getScrapListRequest(token)),
    [dispatch]
  );
  const onGetStudyHistory = useCallback(
    // 참여이력 불러오기
    (token) => dispatch(getStudyHistoryRequest(token)),
    [dispatch]
  );
  const onGetMyProfile = useCallback(
    // 나의 프로필 가져오기
    (token) => dispatch(getMyProfileRequest(token)),
    [dispatch]
  );

  useEffect(() => {
    onGetMyPage(login.token);
    onGetScrapList(login.token);
    onGetStudyHistory(login.token);
    onGetMyProfile(login.token);
  }, []);

  return (
    <ContainerWithBell title="마이페이지">
      <Container showsVerticalScrollIndicator={false}>
        <UserInfo title={myPage ? myPage.myPage.nickname : ' '} />
        <SugarContainer />
        <Line />
        <MoveScreen
          goUserInfo={goUserInfo}
          goNotice={goNotice}
          goReport={goReport}
          goScrap={goScrap}
          goParticipation={GoParticipation}
          goQuestion={goQuestion}
        />
      </Container>
      <MyPageModal modalVisible={modalVisible} closeModal={closeModal} />
      <BottomBar />
      <ReportModal
        setReportStudyId={setReportStudyId}
        setReportMemberId={setReportMemberId}
        setReportMemberName={setReportMemberName}
        modalVisible={reportModalVisible}
        reportContent={reportContent}
        closeModal={reportModalClose}
        confirmButton={confirm}
      />
      {reportMemberId && (
        <ConfirmReport
          modalVisible={confirmModalVisible}
          closeModal={closeConfirm}
          button={final}
        />
      )}
      <FinalModal
        modalVisible={finalModalVisible}
        closeModal={finalClose}
        title="신고가 접수되었습니다"
        content="의견을 내주셔서 감사합니다!"
      />
    </ContainerWithBell>
  );
};

const Line = styled.Text`
  flex: 0.2;
  background-color: #f3f3f3;
`;

const BottomBar = styled.View`
  flex: 4;
`;

const Container = styled.ScrollView``;

export default MyPage;

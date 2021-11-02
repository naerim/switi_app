import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import UserInfo from './profile/userInfo';
import MoveScreen from './moveScreen';
import MyPageModal from './myPageModal';
import ContainerWithBell from '../../Component/ContainerWithBell';
import ReportModal from '../Report';
import {
  UseGoAlarm,
  useGoMyPageUserInfo,
  UseGoNotice,
  UseGoScrap,
  UseGoParticipation,
} from '../../util/navigationHooks';
import ConfirmReport from '../Report/details/confirmReport';
import FinalModal from '../Report/details/finalModal';
import useScroll from '../../util/useScroll';

import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import {
  getMyPageRequest,
  getMyProfileRequest,
  getScrapListRequest,
  getStudyHistoryRequest,
} from '../../redux/userReducer';
import SugarContainer from './profile/sugarContainer';
import { reportRequest } from '../../redux/report/reportReducer';

const MyPage = () => {
  const { scroll, scrollOn } = useScroll();

  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const [confirmModalVisible, setConfirmModalVisible] = useState<boolean>(
    false
  );
  const [finalModalVisible, setFinalModalVisible] = useState<boolean>(false);
  const closeModal = () => setModalVisible(false);
  const closeConfirm = () => setConfirmModalVisible(false);
  const [reportModalVisible, setReportModalVisible] = useState<boolean>(false);
  const reportModalClose = () => setReportModalVisible(false);

  //신고하기 api
  const handleReport = (studyId: any, memberId: any, content: any) => {
    dispatch(reportRequest(login.token, studyId, memberId, content));
  };

  //1. studyID, memverId, content, name 어떻게 가져올 것인가 ?
  //2. studyID 는 studyRadioButton 안에서 가져온다. -> useState 또는 (리덕스) -> 마이페이지에서 다루어야 한다.. -> 나중에 컴포넌트 분리
  const [reportStudyId, setreportStudyId] = useState(10);
  const [reportMemberId, setreportMemberId] = useState(54);
  const [reportContent, setReportContent] = useState('테스트');

  const final = () => {
    setConfirmModalVisible(false);
    handleReport(reportStudyId, reportMemberId, reportContent);
    setTimeout(() => {
      setFinalModalVisible(true);
    }, 500);
  };
  const finalClose = () => {
    setFinalModalVisible(false);
  };
  const goAlarm = UseGoAlarm();
  const goUserInfo = useGoMyPageUserInfo();
  const goNotice = UseGoNotice();
  const goScrap = UseGoScrap();
  const goReport = () => setReportModalVisible(true);
  const GoParticipation = UseGoParticipation();

  const confirm = () => {
    setReportModalVisible(false);
    setTimeout(() => {
      setConfirmModalVisible(true);
    }, 500);
  };

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { myPage } = useSelector(({ userReducer }: rootState) => ({
    myPage: userReducer.myPage,
  }));

  const dispatch = useDispatch();
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
    <ContainerWithBell title="마이페이지" onPressBell={goAlarm} scroll={scroll}>
      <ScrollContainer onScroll={scrollOn}>
        <Container>
          <UserInfo title={myPage ? myPage.myPage.nickname : ' '} />
          <SugarContainer />
          <Line />
          <MoveScreen
            goAlarm={goAlarm}
            goUserInfo={goUserInfo}
            goNotice={goNotice}
            goReport={goReport}
            goScrap={goScrap}
            goParticipation={GoParticipation}
          />
        </Container>
        <MyPageModal modalVisible={modalVisible} closeModal={closeModal} />
        <BottomBar />
        <ReportModal
          modalVisible={reportModalVisible}
          closeModal={reportModalClose}
          confirmButton={confirm}
        />
        <ConfirmReport
          name="@@@"
          modalVisible={confirmModalVisible}
          closeModal={closeConfirm}
          button={final}
        />
        <FinalModal modalVisible={finalModalVisible} closeModal={finalClose} />
      </ScrollContainer>
    </ContainerWithBell>
  );
};

const ScrollContainer = styled.ScrollView``;

const Line = styled.Text`
  flex: 0.2;
  background-color: #f3f3f3;
`;

const BottomBar = styled.View`
  flex: 4;
`;

const Container = styled.ScrollView``;

export default MyPage;

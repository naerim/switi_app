import React, { useState } from 'react';
import styled from 'styled-components/native';
import UserInfo from './profile/userInfo';
import SugarContainer from './profile/sugarContent/sugarContainer';
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
  const final = () => {
    setConfirmModalVisible(false);
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

  return (
    <ContainerWithBell title="마이페이지" onPress={goAlarm} scroll={scroll}>
      <ScrollContainer onScroll={scrollOn}>
        <Container>
          <UserInfo title="사용자" />
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

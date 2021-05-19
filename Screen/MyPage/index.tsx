import React, { useState } from 'react';
import styled from 'styled-components/native';
import UserInfo from './profile/userInfo';
import SugarContainer from './profile/sugarContent/sugarContainer';
import MoveScreen from './moveScreen';
import MyPageModal from './myPageModal';
import SearchContainer from '../../Component/SearchContainer';
import NoticeModal from '../Report/modal/indexModal';
import {
  UseGoAlarm,
  useGoMyPageUserInfo,
  UseGoNotice,
  UseGoReport,
} from '../../util/navigationHooks';

const MyPage = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const closeModal = () => setModalVisible(false);

  const [reportModalVisible, setReportModalVisible] = useState<boolean>(false);
  const reportModalClose = () => setReportModalVisible(false);

  const goAlarm = UseGoAlarm();
  const goUserInfo = useGoMyPageUserInfo();
  const goNotice = UseGoNotice();
  const goReport = () => setReportModalVisible(true);

  return (
    <SearchContainer title="마이페이지" onPress={goAlarm}>
      <Container>
        <UserInfo title="사용자" />
        <SugarContainer />
        <Line />
        <MoveScreen
          goAlarm={goAlarm}
          goUserInfo={goUserInfo}
          goNotice={goNotice}
          goReport={goReport}
        />
      </Container>
      <MyPageModal modalVisible={modalVisible} closeModal={closeModal} />
      <BottomBar />
      <NoticeModal
        modalVisible={reportModalVisible}
        closeModal={reportModalClose}
      />
    </SearchContainer>
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

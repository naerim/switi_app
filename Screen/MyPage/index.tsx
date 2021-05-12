import React, { useState } from 'react';
import styled from 'styled-components/native';
import UserInfo from './profile/userInfo';
import SugarContainer from './profile/sugarContent/sugarContainer';
import MoveScreen from './moveScreen';
import MyPageModal from './myPageModal';
import SearchContainer from '../../Component/SearchContainer';
import NoticeModal from '../Report/indexModal';
import {
  UseGoAlarm,
  useGoMyPageUserInfo,
  UseGoNotice,
  UseGoReport,
} from '../../util/navigationHooks';

const MyPage = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const closeModal = () => setModalVisible(false);

  const [noticeModalVisible, setNoticeModalVisible] = useState<boolean>(false);
  const noticeCloseModal = () => setNoticeModalVisible(true);

  const goAlarm = UseGoAlarm();
  const goUserInfo = useGoMyPageUserInfo();
  const goNotice = UseGoNotice();
  const goReport = () => setNoticeModalVisible(true);
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
        modalVisible={noticeModalVisible}
        closeModal={noticeCloseModal}
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

import React, { useState } from 'react';
import styled from 'styled-components/native';
import UserInfo from './profile/userInfo';
import SugarContainer from './profile/sugarContent/sugarContainer';
import MoveScreen from './moveScreen';
import MyPageModal from './myPageModal';
import SearchContainer from '../../Component/SearchContainer';
import { UseGoAlarm } from '../../util/navigationHooks';

const MyPage = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const closeModal = () => setModalVisible(false);
  const goAlarm = UseGoAlarm;

  return (
    <SearchContainer title="마이페이지" onPress={goAlarm()}>
      <UserInfo title="사용자" />
      <SugarContainer />
      <Line />
      <MoveScreen />
      <MyPageModal modalVisible={modalVisible} closeModal={closeModal} />
      <BottomBar />
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

export default MyPage;

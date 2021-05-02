import React, { useState } from 'react';
import UserInfo from './profile/userInfo';
import SugarContainer from './profile/sugarContent/sugarContainer';
import styled from 'styled-components/native';
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
    </SearchContainer>
  );
};

const Line = styled.Text`
  width: 100%;
  height: 16px;
  background-color: #f3f3f3;
  margin: 30px 0;
`;

export default MyPage;

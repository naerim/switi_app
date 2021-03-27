import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import HeaderContainer from './myPageHeader/headerContainer';
import UserInfo from './profile/userInfo';
import SugarContainer from './profile/sugarContent/sugarContainer';
import styled from 'styled-components/native';
import MoveScreen from './moveScreen';
import MyPageModal from './myPageModal';

const MyPage = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const closeModal = () => setModalVisible(false);
  return (
    <HeaderContainer headerTitle="마이페이지">
      <View style={styles.container}>
        <UserInfo title="사용자" />
        <SugarContainer />
        <Line />
        <MoveScreen />
        <MyPageModal modalVisible={modalVisible} closeModal={closeModal} />
      </View>
    </HeaderContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const Line = styled.Text`
  width: 100%;
  height: 16px;
  background-color: #e3e3e3;
  margin: 30px 0;
`;
export default MyPage;

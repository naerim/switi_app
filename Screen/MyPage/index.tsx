import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HeaderContainer from './myPageHeader/headerContainer';
import UserInfo from './profile/userInfo';
import SugarContainer from './profile/sugarContent/sugarContainer';
const MyPage = () => {
  return (
    <HeaderContainer headerTitle="마이페이지">
      <View style={styles.container}>
        <UserInfo title="사용자" />
        <SugarContainer />
        <Text>MyPage Screen</Text>
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

export default MyPage;

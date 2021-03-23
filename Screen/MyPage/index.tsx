import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HeaderContainer from './myPageHeader/headerContainer';

const MyPage = () => {
  return (
    <HeaderContainer headerTitle="마이페이지">
      <View style={styles.container}>
        <Text>MyPage Screen</Text>
      </View>
    </HeaderContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyPage;

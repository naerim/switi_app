import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Text>회원 정보</Text>
    </View>
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

export default UserInfo;

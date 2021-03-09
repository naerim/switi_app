import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useGoSignIn } from '../../util/navigationHooks';

const SecondProfile = () => {
  const goLogin = useGoSignIn();
  return (
    <View style={styles.container}>
      <Text>second Profile Screen</Text>
      <Button title="프로필 설정 완료" onPress={goLogin} />
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

export default SecondProfile;

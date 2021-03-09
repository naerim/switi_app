import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useGoSignUp } from '../../util/navigationHooks';

const SignIn = () => {
  const goSignUp = useGoSignUp();
  return (
    <View style={styles.container}>
      <Text>This is SignIn Screen</Text>
      <Text onPress={goSignUp}>회원가입</Text>
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

export default SignIn;

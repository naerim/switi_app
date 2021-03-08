import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button } from 'react-native';

type NavigationProp = StackNavigationProp<LoginStackNaviParamList, 'SignIn'>;
interface Props {
  navigation: NavigationProp;
}

const SignIn = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>This is SignIn Screen</Text>
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

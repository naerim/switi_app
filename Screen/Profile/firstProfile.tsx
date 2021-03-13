import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useGoSecondProfile } from '../../util/navigationHooks';

const FirstProfile = () => {
  const goSecondProfile = useGoSecondProfile();

  return (
    <View style={styles.container}>
      <Text>first Profile Screen</Text>
      <Button title="다음" onPress={goSecondProfile} />
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

export default FirstProfile;

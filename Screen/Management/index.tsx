import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Management = () => {
  return (
    <View style={styles.container}>
      <Text>Management Screen</Text>
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

export default Management;

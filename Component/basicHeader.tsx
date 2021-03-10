import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BasicHeader = (title: string) => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
  },
  title: {
    fontSize: 14,
  },
});

export default BasicHeader;

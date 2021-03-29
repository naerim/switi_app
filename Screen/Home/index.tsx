import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 24,
    marginRight: 24,
  },
});

export default Home;

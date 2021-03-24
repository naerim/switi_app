import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/BasicContainer';
const MyPage_profile = () => {
  return (
    <BasicContainer headerTitle="내프로필">
      <View style={styles.container}>
        <Text>my_profile!</Text>
      </View>
    </BasicContainer>
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

// const Container = styled.View`
//   width: Dimentions.get('window') .width / 4;
//   background-color: pink;
// `;

export default MyPage_profile;

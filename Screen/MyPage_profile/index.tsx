import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/BasicContainer';

const MyPage_profile = () => {
  const myCharacter = [
    {
      id: 1,
      text: '토익공부',
    },
    {
      id: 2,
      text: '파이썬공부',
    },
    {
      id: 3,
      text: '코딩테스트',
    },
  ];

  return (
    <BasicContainer headerTitle="내 프로필">
      <Title>연령</Title>
      <Content>만 22세</Content>
      <Title>관심지역</Title>
      <Content>만 22세</Content>
      <Title>관심분야</Title>
      <Content>만 22세</Content>
      <Title>나의 상황</Title>
      <Content>만 22세</Content>
      <Title>나의 성격</Title>
      <Content>만 22세</Content>
      <Title>자기소개</Title>
      <Content>
        취미, 희망직무 등 나에 대해 간단히 소개해 주세요. 취미, 희망직무 등 나에
        대해 간단히 소개해 주세요. 취미, 희망직무 등 나에 대해 간단히 소개해
        주세요. 취미, 희망직무 등 나에 대해 간단히 소개해 주세요. 취미, 희망직무
        등 나에 대해 간단히 소개해 주세요.
      </Content>
    </BasicContainer>
  );
};

// const Container = styled.View`
//   width: Dimentions.get('window') .width / 4;
//   background-color: pink;
// `;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const Content = styled.Text`
  font-size: 12px;
  padding-bottom: 20px;
`;

export default MyPage_profile;

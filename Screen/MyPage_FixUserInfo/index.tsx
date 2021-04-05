import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import React from 'react';
import BasicContainer from '../../Component/BasicContainer';
import { useGoMyPage } from '../../util/navigationHooks';

const MyPage_FixUserInfo = () => {
  const goMyPage = useGoMyPage();
  return (
    <BasicContainer headerTitle="회원탈퇴" display onPress={goMyPage}>
      <Text>fixUseInfo</Text>
    </BasicContainer>
  );
};

export default MyPage_FixUserInfo;

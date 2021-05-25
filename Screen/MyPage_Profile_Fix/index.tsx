import React, { useState } from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/MypageContainer';
import PrintList from './printList';
import ColorButton from '../../Component/BasicButton';
import { useGoMyPageProfile } from '../../util/navigationHooks';
import { Text } from 'react-native';

const MyPage_Profile_Fix = () => {
  const goMyProfile = useGoMyPageProfile();
  return (
    <BasicContainer headerTitle="프로필 수정" display onPress={goMyProfile}>
      <Text>hello</Text>
    </BasicContainer>
  );
};

export default MyPage_Profile_Fix;

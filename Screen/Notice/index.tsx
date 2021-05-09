import React from 'react';
import NoticeContainer from '../../Component/MypageContainer';
import { useGoMyPage } from '../../util/navigationHooks';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Notice = () => {
  const goMyPage = useGoMyPage();

  return (
    <NoticeContainer onPress={goMyPage} display headerTitle="공지사항">
      <Text>hello</Text>
    </NoticeContainer>
  );
};

export default Notice;

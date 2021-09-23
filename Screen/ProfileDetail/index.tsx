// 상대방 프로필 확인 페이지
import React from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/BasicContainer';
import { useGoBack } from '../../util/navigationHooks';
import Sugar from '../MyPage/Sugar';

const ProfileDetail = ({ route }: any) => {
  const idx = route.params.idx;
  const goBack = useGoBack();
  return (
    <BasicContainer headerTitle="" display={true} onPress={goBack}>
      <Title>상대방 프로필</Title>
      <Sugar num={20} />
    </BasicContainer>
  );
};

const Title = styled.Text``;

export default ProfileDetail;

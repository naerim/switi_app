import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/BasicContainer';
import UserName from '../../Component/UserName';
const UserInfo = () => {
  return (
    <BasicContainer headerTitle="회원정보">
      <UserImageContainer>
        <UserImage source={require('./image/profile.png')} />
        <UserName title="사용자" />
      </UserImageContainer>
      <Text>회원 정보</Text>
    </BasicContainer>
  );
};

const UserImage = styled.Image`
  width: 68px;
  height: 68px;
`;

const UserImageContainer = styled.View`
  margin: 24px 0;
  align-items: center;
`;
export default UserInfo;

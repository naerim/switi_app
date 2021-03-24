import React from 'react';
import styled from 'styled-components/native';
import UserInfoContainer from './userInfoContainer';
import UserName from '../../Component/UserName';
const UserInfo = () => {
  return (
    <UserInfoContainer headerTitle="회원정보">
      <UserImageContainer>
        <UserImage source={require('./image/profile.png')} />
        <UserName title="사용자" />
      </UserImageContainer>
      <Line />
    </UserInfoContainer>
  );
};

const UserImage = styled.Image`
  width: 68px;
  height: 68px;
`;

const UserImageContainer = styled.View`
  margin: 0px 0;
  align-items: center;
  padding: 20px 0;
`;

const Line = styled.Text`
  width: 100%;
  height: 10px;
  background-color: #e3e3e3;
`;

export default UserInfo;

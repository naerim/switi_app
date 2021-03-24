import React from 'react';
import styled from 'styled-components/native';
import UserInfoContainer from './userInfoContainer';
import UserName from '../../Component/UserName';
import BasicModal from "../../Component/BasicModal";
const UserInfo = () => {
  return (
    <UserInfoContainer headerTitle="회원정보">
      <SmallLine />
      <UserImageContainer>
        <UserImage source={require('./image/profile.png')} />
        <UserName title="사용자" />
      </UserImageContainer>
      <Line />
      <Text>회원정보 수정</Text>
      <SmallLine />
      <Text>로그아웃</Text>
      <SmallLine />
      <LinkText>회원탈퇴</LinkText>
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

const SmallLine = styled.Text`
  width: 100%;
  height: 1px;
  background-color: #e3e3e3;
`;

const Text = styled.Text`
  font-size: 12px;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 24px;
`;

const LinkText = styled.Text`
  color: #b4b4b4;
  font-size: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 24px;
  text-decoration: #b4b4b4 underline;
`;
export default UserInfo;

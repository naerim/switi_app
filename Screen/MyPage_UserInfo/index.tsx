import React, { useState } from 'react';
import styled from 'styled-components/native';
import UserInfoContainer from './userInfoContainer';
import UserName from './UserName';
import ProfileIcon from '../../Img/icon_profile.png';
import {
  UseGoFixUserInfo,
  useGoMyPage,
  UseGoWithdrawal,
} from '../../util/navigationHooks';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux';
import LogoutModal from './LogoutModal';

const MyPage_UserInfo = () => {
  const goMyPage = useGoMyPage();
  const goWithdrawal = UseGoWithdrawal();
  const goFixUserInfo = UseGoFixUserInfo();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const onPressLogout = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const { myPage } = useSelector(({ userReducer }: rootState) => ({
    myPage: userReducer.myPage,
  }));

  return (
    <UserInfoContainer
      headerTitle="회원정보"
      display
      onPress={() => goMyPage()}
    >
      <UserImageContainer>
        <UserImage source={ProfileIcon} />
        <UserName title={myPage.myPage.nickname} />
      </UserImageContainer>
      <Line />
      <Text onPress={goFixUserInfo}>회원정보 수정</Text>
      <SmallLine />
      <Text onPress={onPressLogout}>로그아웃</Text>
      <SmallLine />
      <LinkText onPress={goWithdrawal}>회원탈퇴</LinkText>
      <LogoutModal modalVisible={modalVisible} closeModal={closeModal} />
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
  background-color: #f3f3f3;
`;

const SmallLine = styled.Text`
  width: 100%;
  height: 1px;
  background-color: #f3f3f3;
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

export default MyPage_UserInfo;

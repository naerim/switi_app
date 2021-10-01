// 상대방 프로필 확인 페이지
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/BasicContainer';
import { useGoBack } from '../../util/navigationHooks';
import Sugar from '../MyPage/Sugar';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import { getUserProfileRequest } from '../../redux/userReducer';
import {
  myCharacterType,
  myInterestType,
  myRegionType,
  myStateType,
} from '../MyPage_Profile/interface';
import ListContent from '../MyPage_Profile/components/ListCotent';
import UserName from './components/UserName';
import ProfileContent from './components/ProfileContent';
import axios from "axios";

const ProfileDetail = ({ route }: any) => {
  const idx = route.params.idx;
  const goBack = useGoBack();

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { userProfile } = useSelector(({ userReducer }: rootState) => ({
    userProfile: userReducer.userProfile,
  }));

  const dispatch = useDispatch();
  const onGetUserProfile = useCallback(
    // 나의 프로필 가져오기
    (token, id) => dispatch(getUserProfileRequest(token, id)),
    [dispatch]
  );

  useEffect(() => {
    onGetUserProfile(login.token, idx);
  }, []);

  useEffect(() => {
    onGetUserProfile(login.token, idx);
  }, [idx]);

  return (
    <BasicContainer headerTitle="" display={true} onPress={goBack}>
      <UserName name={userProfile.nickname} img={userProfile.profilepath}>
        상대방 프로필
      </UserName>
      <Sugar num={20} />
      <Container>
        <ProfileContent />
      </Container>
    </BasicContainer>
  );
};

const Title = styled.Text``;
const Container = styled.View``;
const Tag = styled.View`
  padding: 7px;
  margin-top: 5px;
  border-radius: 20px;
  border: 1px #dbdbdb;
  margin-right: 5px;
  width: ${({ width }: { width?: string }) => width || 'auto'};
`;

const Text = styled.Text`
  font-size: 12px;
`;

const ContentText = styled.Text`
  font-size: 12px;
  margin-top: 7px;
`;

export default ProfileDetail;

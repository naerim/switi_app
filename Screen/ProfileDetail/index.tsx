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

const ProfileDetail = ({ route }: any) => {
  const idx = route.params.idx;
  const goBack = useGoBack();
  const [loading, setLoading] = useState(false);

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { userProfile } = useSelector(({ userReducer }: rootState) => ({
    userProfile: userReducer.userProfile,
  }));

  const dispatch = useDispatch();
  const onGetUserProfile = useCallback(
    // 사용자 프로필 가져오기
    (token, id) => dispatch(getUserProfileRequest(token, id)),
    [dispatch]
  );

  useEffect(() => {
    setLoading(true);
    onGetUserProfile(login.token, idx);
    setLoading(false);
  }, [idx]);

  if (loading) return <div>로딩중..</div>;
  if (!userProfile) return null;

  const userAge = userProfile.age;
  const userCharacter = userProfile.Characters;
  const userRegion = userProfile.Gus;
  const userInterest = userProfile.Interests;
  const userState = userProfile.States;

  const profileData = [
    {
      title: '연령',
      content: <ContentText>{'만 ' + userAge + '세'}</ContentText>,
    },
    {
      title: '관심지역',
      content: userRegion.map((list: myRegionType) => (
        <Tag key={list.myRegion.GuId}>
          <Text>{list.Region.city}</Text>
        </Tag>
      )),
    },
    {
      title: '관심분야',
      content: userInterest.map((list: myInterestType) => (
        <Tag key={list.myInterest.InterestId}>
          <Text>{list.category}</Text>
        </Tag>
      )),
    },
    {
      title: '상황',
      content: userState.map((list: myStateType) => (
        <Tag key={list.myState.StateId}>
          <Text>{list.category}</Text>
        </Tag>
      )),
    },
    {
      title: '나의 성격',
      flexDirection: 'column',
      content: userCharacter.map((list: myCharacterType) => (
        <Tag width="70%" key={list.myCharacter.CharacterId}>
          <Text>{list.content}</Text>
        </Tag>
      )),
    },
    {
      title: '자기소개',
      content: <ContentText>{userProfile.aboutme}</ContentText>,
    },
  ];

  return (
    <BasicContainer headerTitle="" display={true} onPress={goBack}>
      <UserName name={userProfile.nickname} img={userProfile.profilepath}>
        상대방 프로필
      </UserName>
      <Sugar num={userProfile.sugar} />
      <Container>
        {profileData.map(({ title, content, flexDirection }) => (
          <ListContent key={title} title={title} flexDirection={flexDirection}>
            {content}
          </ListContent>
        ))}
      </Container>
    </BasicContainer>
  );
};

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

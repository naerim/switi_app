import React from 'react';
import styled from 'styled-components/native';
import {
  myCharacterType,
  myInterestType,
  myRegionType,
  myStateType,
} from '../../MyPage_Profile/interface';
import { useSelector } from 'react-redux';
import { rootState } from '../../../redux';
import ListContent from '../../MyPage_Profile/components/ListCotent';

const ProfileContent = () => {
  const { userProfile } = useSelector(({ userReducer }: rootState) => ({
    userProfile: userReducer.userProfile,
  }));

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
      content: userRegion.region.map((list: myRegionType) => (
        <Tag key={list.myRegion.GuId}>
          <Text>{list.Region.city}</Text>
        </Tag>
      )),
    },
    {
      title: '관심분야',
      content: userInterest.interest.map((list: myInterestType) => (
        <Tag key={list.myInterest.InterestId}>
          <Text>{list.category}</Text>
        </Tag>
      )),
    },
    {
      title: '상황',
      content: userState.state.map((list: myStateType) => (
        <Tag key={list.myState.StateId}>
          <Text>{list.category}</Text>
        </Tag>
      )),
    },
    {
      title: '나의 성격',
      flexDirection: 'column',
      content: userCharacter.character.map((list: myCharacterType) => (
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
    <Container>
      {profileData.map(({ title, content, flexDirection }) => (
        <ListContent key={title} title={title} flexDirection={flexDirection}>
          {content}
        </ListContent>
      ))}
    </Container>
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

export default ProfileContent;

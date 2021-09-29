import React, { useState } from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/ContainerWithBack';
import ColorButton from '../../Component/BasicButton';
import { useGoMyPage, useGoMypageProfileFix } from '../../util/navigationHooks';
import useScroll from '../../util/useScroll';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux';
import {
  myCharacterType,
  myInterestType,
  myRegionType,
  myStateType,
} from './interface';
import ListContent from './components/ListCotent';

const MyPage_Profile = () => {
  const { scroll, scrollOn } = useScroll();
  const goMyPage = useGoMyPage();
  const goProfileFix = useGoMypageProfileFix();

  const { myProfile } = useSelector(({ userReducer }: rootState) => ({
    myProfile: userReducer.myProfile,
  }));

  const [isLoading, setIsLoading] = useState(false);

  const myCharacter = myProfile.myProfile.Characters;
  const myRegion = myProfile.myProfile.Gus;
  const myInterest = myProfile.myProfile.Interests;
  const myState = myProfile.myProfile.States;

  const myProfileData = [
    {
      title: '연령',
      content: (
        <ContentText>{'만 ' + myProfile.myProfile.age + '세'}</ContentText>
      ),
    },
    {
      title: '관심지역',
      content: myRegion.map((list: myRegionType) => (
        <Tag key={list.myRegion.GuId}>
          <Text>{list.Region.city}</Text>
        </Tag>
      )),
    },
    {
      title: '관심분야',
      content: myInterest.map((list: myInterestType) => (
        <Tag key={list.myInterest.InterestId}>
          <Text>{list.category}</Text>
        </Tag>
      )),
    },
    {
      title: '상황',
      content: myState.map((list: myStateType) => (
        <Tag key={list.myState.StateId}>
          <Text>{list.category}</Text>
        </Tag>
      )),
    },
    {
      title: '나의 성격',
      flexDirection: 'column',
      content: myCharacter.map((list: myCharacterType) => (
        <Tag width="70%" key={list.myCharacter.CharacterId}>
          <Text>{list.content}</Text>
        </Tag>
      )),
    },
    {
      title: '자기소개',
      content: <ContentText>{myProfile.myProfile.aboutme}</ContentText>,
    },
  ];

  return (
    <BasicContainer
      headerTitle="내 프로필"
      display
      onPress={goMyPage}
      scroll={scroll}
    >
      <MarginContainer>
        <ScrollContainer onScroll={scrollOn}>
          {myProfileData.map(({ title, content, flexDirection }) => (
            <ListContent
              key={title}
              title={title}
              flexDirection={flexDirection}
            >
              {content}
            </ListContent>
          ))}
        </ScrollContainer>
        <ColorButton
          text="수정하기"
          onPress={goProfileFix}
          loading={isLoading}
        />
      </MarginContainer>
    </BasicContainer>
  );
};

const MarginContainer = styled.View`
  margin-left: 24px;
  margin-right: 24px;
  flex: 1;
  justify-content: space-between;
`;

const ScrollContainer = styled.ScrollView`
  margin-top: 10px;
`;

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

export default MyPage_Profile;

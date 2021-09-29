import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/ContainerWithBack';
import ColorButton from '../../Component/BasicButton';
import { useGoMyPage, useGoMypageProfileFix } from '../../util/navigationHooks';
import { User } from '../../Data/User';
import DetailContainer from './components/detailContainer';
import useScroll from '../../util/useScroll';
import { getMyProfileRequest } from '../../redux/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import {
  myCharacterType,
  myInterestType,
  myRegionType,
  myStateType,
} from './interface';

const MyPage_Profile = () => {
  const { scroll, scrollOn } = useScroll();
  const goMyPage = useGoMyPage();
  const goProfileFix = useGoMypageProfileFix();

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { myProfile } = useSelector(({ userReducer }: rootState) => ({
    myProfile: userReducer.myProfile,
  }));

  const dispatch = useDispatch();
  const onGetMyProfile = useCallback(
    // 참여이력 불러오기
    (token) => dispatch(getMyProfileRequest(token)),
    [dispatch]
  );

  useEffect(() => {
    onGetMyProfile(login.token);
    console.log(myProfile.myProfile);
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const myCharacter = myProfile.myProfile.Characters;

  const myRegion = myProfile.myProfile.Gus;
  const myInterest = myProfile.myProfile.Interests;
  const myState = myProfile.myProfile.States;

  const age = '만' + String(User[0].age) + '세';
  return (
    <BasicContainer
      headerTitle="내 프로필"
      display
      onPress={goMyPage}
      scroll={scroll}
    >
      <MarginContainer>
        <ScrollContainer onScroll={scrollOn}>
          <DetailContainer
            title="연령"
            content={'만 ' + myProfile.myProfile.age + '세'}
          />
          <DetailContainer title="관심지역">
            <ListContainer>
              {myRegion &&
                myRegion.map((list: myRegionType) => (
                  <Tag key={list.myRegion.GuId}>
                    <Text>{list.Region.city}</Text>
                  </Tag>
                ))}
            </ListContainer>
          </DetailContainer>
          <DetailContainer title="관심분야">
            <ListContainer>
              {myInterest &&
                myInterest.map((list: myInterestType) => (
                  <Tag key={list.myInterest.InterestId}>
                    <Text>{list.category}</Text>
                  </Tag>
                ))}
            </ListContainer>
          </DetailContainer>
          <DetailContainer title="상황">
            <ListContainer>
              {myState &&
                myState.map((list: myStateType) => (
                  <Tag key={list.myState.StateId}>
                    <Text>{list.category}</Text>
                  </Tag>
                ))}
            </ListContainer>
          </DetailContainer>
          <DetailContainer title="나의 성격">
            <ListContainer>
              {myCharacter &&
                myCharacter.map((list: myCharacterType) => (
                  <Tag key={list.myCharacter.CharacterId}>
                    <Text>{list.content}</Text>
                  </Tag>
                ))}
            </ListContainer>
          </DetailContainer>
          <DetailContainer
            title="자기소개"
            content={myProfile.myProfile.aboutme}
          />
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

const ListContainer = styled.View`
  flex-direction: row;
`;

const Tag = styled.View`
  padding: 7px;
  margin-top: 5px;
  border-radius: 20px;
  border: 1px #dbdbdb;
`;

const Text = styled.Text`
  font-size: 12px;
`;

export default MyPage_Profile;

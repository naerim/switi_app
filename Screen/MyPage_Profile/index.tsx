import React, { useState } from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/MypageContainer';
import PrintList from './printList';
import ColorButton from '../../Component/BasicButton';
import { useGoMyPage, useGoMypageProfileFix } from '../../util/navigationHooks';
import { User } from '../../Data/User';
const MyPage_Profile = () => {
  const goMyPage = useGoMyPage();
  const goProfileFix = useGoMypageProfileFix();

  const [isLoading, setIsLoading] = useState(false);

  const myCharacter = User[0].myCharacter;

  const myRegion = User[0].myRegion;
  const myInterest = User[0].myInterest;

  return (
    <BasicContainer headerTitle="내 프로필" display onPress={goMyPage}>
      <MarginContainer>
        <ContentContainer>
          <SmallSizeContainer>
            <Title>연령</Title>
            <Content>만 22세</Content>
          </SmallSizeContainer>
          <PrintListContainer>
            <Title>관심지역</Title>
            <PrintList lists={myRegion}></PrintList>
          </PrintListContainer>
          <PrintListContainer>
            <Title>관심분야</Title>
            <PrintList lists={myInterest}></PrintList>
          </PrintListContainer>
          <SmallSizeContainer>
            <Title>나의 상황</Title>
            <Content>대학생/취준생</Content>
          </SmallSizeContainer>
          <BigPrintListContainer>
            <Title>나의 성격</Title>
            <PrintList lists={myCharacter} flexDirection="column"></PrintList>
          </BigPrintListContainer>
          <BigSizeContainer>
            <Title>자기소개</Title>
            <Content>{User[0].aboutMe}</Content>
          </BigSizeContainer>
        </ContentContainer>
        <ButtonContainer>
          <ColorButton
            text="수정하기"
            onPress={goProfileFix}
            loading={isLoading}
          />
        </ButtonContainer>
      </MarginContainer>
    </BasicContainer>
  );
};

const MarginContainer = styled.View`
  margin-left: 24px;
  margin-right: 24px;
  flex: 1;
`;

const ContentContainer = styled.View`
  flex: 12;
`;

const SmallSizeContainer = styled.View`
  flex: 1.5;
`;

const PrintListContainer = styled.View`
  flex: 2;
`;

const BigPrintListContainer = styled.View`
  flex: 4;
`;

const BigSizeContainer = styled.View`
  flex: 3;
`;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  padding-bottom: 5px;
  padding-top: 10px;
`;

const Content = styled.Text`
  font-size: 12px;
`;

const ButtonContainer = styled.View`
  flex: 1;
`;

export default MyPage_Profile;

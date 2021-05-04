import React, { useState } from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/MypageContainer';
import PrintList from './printList';
import ColorButton from '../../Component/BasicButton';
import { useGoMyPage } from '../../util/navigationHooks';

const MyPage_profile = () => {
  const goMyPage = useGoMyPage();

  const [isLoading, setIsLoading] = useState(false);
  const [onPress, setonPress] = useState(false);

  const myCharacter = [
    {
      id: 1,
      text: '체계적이고 계획적인 사람이에요',
    },
    {
      id: 2,
      text: '솔직하고 시원시원해요',
    },
    {
      id: 3,
      text: '시간을 잘 지켜요',
    },
  ];

  const interestedState = [
    {
      id: 1,
      text: '서울 전체',
    },
  ];

  const interestedParts = [
    {
      id: 1,
      text: '취업',
    },
    {
      id: 2,
      text: '어학',
    },
  ];
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
            <PrintList lists={interestedState}></PrintList>
          </PrintListContainer>
          <PrintListContainer>
            <Title>관심분야</Title>
            <PrintList lists={interestedParts}></PrintList>
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
            <Content>
              취미, 희망직무 등 나에 대해 간단히 소개해 주세요. 취미, 희망직무
              등 나에 대해 간단히 소개해 주세요. 취미, 희망직무 등 나에 대해
              간단히 소개해 주세요. 취미, 희망직무 등 나에 대해 간단히 소개해
              주세요. 취미, 희망직무 등 나에 대해 간단히 소개해 주세요.
            </Content>
          </BigSizeContainer>
        </ContentContainer>
        <ButtonContainer>
          <ColorButton
            text="수정하기"
            onPress={onPress}
            loading={isLoading}
            color="#86E3C3"
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

export default MyPage_profile;

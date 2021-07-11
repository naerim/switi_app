import React, { useState } from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/ContainerWithBack';
import PrintList from './components/printList';
import ColorButton from '../../Component/BasicButton';
import { useGoMyPage, useGoMypageProfileFix } from '../../util/navigationHooks';
import { User } from '../../Data/User';
import DetailContainer from './components/detailContainer';
import useScroll from '../../util/useScroll';

const MyPage_Profile = () => {
  const { scroll, scrollOn } = useScroll();
  const goMyPage = useGoMyPage();
  const goProfileFix = useGoMypageProfileFix();

  const [isLoading, setIsLoading] = useState(false);

  const myCharacter = User[0].myCharacter;

  const myRegion = User[0].myRegion;
  const myInterest = User[0].myInterest;

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
          <DetailContainer title="연령" content={age} />
          <DetailContainer title="관심지역">
            <PrintList lists={myRegion}></PrintList>
          </DetailContainer>
          <DetailContainer title="관심분야">
            <PrintList lists={myInterest}></PrintList>
          </DetailContainer>
          <DetailContainer title="상황" content={User[0].myState.name} />
          <DetailContainer title="나의 성격">
            <PrintList lists={myCharacter} flexDirection="column"></PrintList>
          </DetailContainer>
          <DetailContainer title="자기소개" content={User[0].aboutMe} />
        </ScrollContainer>
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
  justify-content: space-between;
`;

const ScrollContainer = styled.ScrollView`
  margin-top: 10px;
`;

const ButtonContainer = styled.View``;

export default MyPage_Profile;

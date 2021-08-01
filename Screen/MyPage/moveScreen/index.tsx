import React from 'react';
import styled from 'styled-components/native';

interface Props {
  goAlarm: () => void;
  goNotice: () => void;
  goUserInfo: () => void;
  goReport: () => void;
  goScrap: () => void;
  goParticipation: () => void;
}

const MoveScreen: React.FC<Props> = ({
  goAlarm,
  goNotice,
  goUserInfo,
  goReport,
  goScrap,
  goParticipation,
}) => {
  return (
    <Wrap>
      <Container>
        <Title>내활동</Title>
        <SubTitleContainer onPress={goScrap}>
          <SubTitle>스크랩</SubTitle>
        </SubTitleContainer>
        <SubTitleContainer onPress={goParticipation}>
          <SubTitle>참여 이력</SubTitle>
        </SubTitleContainer>
      </Container>
      <Line />
      <Container>
        <Title>서비스 설정</Title>
        <SubTitleContainer onPress={goUserInfo}>
          <SubTitle>회원정보</SubTitle>
        </SubTitleContainer>
        <SubTitleContainer onPress={goAlarm}>
          <SubTitle>설정</SubTitle>
        </SubTitleContainer>
      </Container>
      <Line />
      <Container>
        <Title>고객센터</Title>
        <SubTitleContainer onPress={goNotice}>
          <SubTitle>공지사항</SubTitle>
        </SubTitleContainer>
        <SubTitleContainer onPress={goReport}>
          <SubTitle>신고하기</SubTitle>
        </SubTitleContainer>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.View`
  flex: 5;
`;

const Container = styled.View`
  padding: 0 24px;
`;

const Title = styled.Text`
  font-size: 10px;
  color: #b4b4b4;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const SubTitleContainer = styled.TouchableOpacity``;

const SubTitle = styled.Text`
  font-size: 12px;
  padding-bottom: 20px;
`;

const Line = styled.Text`
  height: 1px;
  background-color: #f3f3f3;
`;

export default MoveScreen;

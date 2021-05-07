import React from 'react';
import styled from 'styled-components/native';

interface Props {
  goAlarm: () => void;
  goNotice: () => void;
  goUserInfo: () => void;
}

const MoveScreen: React.FC<Props> = ({ goAlarm, goNotice, goUserInfo }) => {
  return (
    <Wrap>
      <Container>
        <Title>내활동</Title>
        <SubTitle>스크랩</SubTitle>
        <SubTitle>참여기록</SubTitle>
      </Container>
      <Line />
      <Container>
        <Title>설정</Title>
        <Content onPress={goUserInfo}>
          <SubTitle>회원정보</SubTitle>
        </Content>
        <Content onPress={goAlarm}>
          <SubTitle>알림 설정</SubTitle>
        </Content>
      </Container>
      <Line />
      <Container>
        <Title>고객센터</Title>
        <Content onPress={goNotice}>
          <SubTitle>공지사항</SubTitle>
        </Content>
        <SubTitle>문의</SubTitle>
        <SubTitle>신고하기</SubTitle>
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

const ContentContainer = styled.TouchableOpacity``;

const Title = styled.Text`
  font-size: 10px;
  color: #b4b4b4;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const Content = styled.TouchableOpacity``;

const SubTitle = styled.Text`
  font-size: 12px;
  padding-bottom: 20px;
`;

const Line = styled.Text`
  height: 1px;
  background-color: #f3f3f3;
`;

export default MoveScreen;

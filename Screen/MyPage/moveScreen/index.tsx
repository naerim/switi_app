import React from 'react';
import styled from 'styled-components/native';
import {
  useGoMyPageUserInfo,
  UseGoAlarm,
  UseGoNotice,
} from '../../../util/navigationHooks';

const MoveScreen = () => {
  const goUserInfo = useGoMyPageUserInfo();
  const goAlarm = UseGoAlarm();
  const goNotice = UseGoNotice();

  return (
    <Wrap>
      <Container>
        <Title>내활동</Title>
        <Content>스크랩</Content>
        <Content>참여기록</Content>
      </Container>
      <Line />
      <Container>
        <Title>설정</Title>
        <Content onPress={() => goUserInfo()}>회원정보</Content>
        <Content onPress={() => goAlarm()}>알림 설정</Content>
      </Container>
      <Line />
      <Container>
        <Title>고객센터</Title>
        <ContentContainer onPress={() => goNotice()}>
          <Content>공지사항</Content>
        </ContentContainer>
        <Content>문의</Content>
        <Content>신고하기</Content>
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

const ContentContainer = styled.TouchableOpacity`
`;

const Title = styled.Text`
  font-size: 10px;
  color: #b4b4b4;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const Content = styled.Text`
  font-size: 12px;
  padding-bottom: 20px;
`;

const Line = styled.Text`
  height: 1px;
  background-color: #f3f3f3;
`;

export default MoveScreen;

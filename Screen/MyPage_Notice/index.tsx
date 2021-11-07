import React from 'react';
import NoticeContainer from '../../Component/ContainerWithBack';
import { useGoMyPage, UseGoNoticeDetail } from '../../util/navigationHooks';
import styled from 'styled-components/native';
import { NoticeData } from './NoticeData';
import useScroll from '../../util/useScroll';

const MyPage_Notice = () => {
  const goMyPage = useGoMyPage();
  const goNotice = (key1: number) => UseGoNoticeDetail(key1);
  const { scroll, scrollOn } = useScroll();
  return (
    <NoticeContainer
      onPress={goMyPage}
      display
      headerTitle="공지사항"
      scroll={scroll}
    >
      <AllNoticeContainer onScroll={scrollOn}>
        {NoticeData.map(({ key, title, createAt, Component }) => (
          <Container activeOpacity={0.8} onPress={goNotice(key)} key={key}>
            <Title>{title}</Title>
            <Date>{createAt}</Date>
            <Line />
          </Container>
        ))}
      </AllNoticeContainer>
    </NoticeContainer>
  );
};

const AllNoticeContainer = styled.ScrollView`
  flex: 1;
`;

const Container = styled.TouchableOpacity`
  margin-top: 20px;
`;
const Title = styled.Text`
  font-size: 12px;
  padding-bottom: 5px;
  padding-left: 24px;
  padding-right: 24px;
`;

const Date = styled.Text`
  font-size: 10px;
  color: #b4b4b4;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 20px;
`;

const Line = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

export default MyPage_Notice;

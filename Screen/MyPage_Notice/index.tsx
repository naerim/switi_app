import React from 'react';
import NoticeContainer from '../../Component/ContainerWithBack';
import { useGoMyPage, UseGoNoticeDetail } from '../../util/navigationHooks';
import styled from 'styled-components/native';
import { NoticeData } from './NoticeData';
import OneNoticeContainer from './OneNoticeContainer';
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
          <OneNoticeContainer
            key={key}
            onPress={goNotice(key)}
            title={title}
            createAt={createAt}
          />
        ))}
      </AllNoticeContainer>
    </NoticeContainer>
  );
};

const AllNoticeContainer = styled.ScrollView`
  flex: 1;
`;

export default MyPage_Notice;

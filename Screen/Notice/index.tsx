import React from 'react';
import NoticeContainer from '../../Component/ContainerWithBack';
import { useGoMyPage } from '../../util/navigationHooks';
import styled from 'styled-components/native';
import { NoticeData } from '../../Data/NoticeData';
import OneNoticeContainer from './OneNoticeContainer';
import useScroll from '../../util/useScroll';

const Notice = () => {
  const goMyPage = useGoMyPage();
  const { scroll, scrollOn } = useScroll();
  return (
    <NoticeContainer
      onPress={goMyPage}
      display
      headerTitle="공지사항"
      scroll={scroll}
    >
      <AllNoticeContainer onScroll={scrollOn}>
        {NoticeData.map(({ key, title, content, createAt }) => (
          <OneNoticeContainer
            key={key}
            title={title}
            content={content}
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

export default Notice;

import React from 'react';
import NoticeContainer from '../../Component/MypageContainer';
import { useGoMyPage } from '../../util/navigationHooks';
import styled from 'styled-components/native';
import { NoticeData } from '../../Data/NoticeData';
import OneNoticeContainer from './OneNoticeContainer';

const Notice = () => {
  const goMyPage = useGoMyPage();

  return (
    <NoticeContainer onPress={goMyPage} display headerTitle="공지사항">
      <AllNoticeContainer>
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

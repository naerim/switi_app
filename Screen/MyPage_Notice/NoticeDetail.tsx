import React from 'react';
import styled from 'styled-components/native';
import NoticeContainer from '../../Component/ContainerWithBack';
import { useGoBack } from '../../util/navigationHooks';

const NoticeDetail = () => {
  const goBack = useGoBack();
  return (
    <NoticeContainer onPress={goBack} display headerTitle="공지사항">
      <Container>
        <Title>타이</Title>
      </Container>
    </NoticeContainer>
  );
};

const Container = styled.View``;

const Title = styled.Text``;

export default NoticeDetail;

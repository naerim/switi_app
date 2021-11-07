import React, { Component } from 'react';
import styled from 'styled-components/native';
import NoticeContainer from '../../Component/ContainerWithBack';
import { useGoBack } from '../../util/navigationHooks';
import { NoticeData } from './NoticeData';

const NoticeDetail = ({ route }: any) => {
  const idx = route.params.idx;
  const goBack = useGoBack();
  return (
    <NoticeContainer onPress={goBack} display headerTitle="공지사항">
      <Container>
        <Title>타이</Title>
        {NoticeData.map(
          ({ key, title, Component }) => idx == key && <Component key={key} />
        )}
      </Container>
    </NoticeContainer>
  );
};

const Container = styled.View``;

const Title = styled.Text``;

export default NoticeDetail;

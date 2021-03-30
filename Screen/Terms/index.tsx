import React from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/BasicContainer';
import { useGoSignUp } from '../../util/navigationHooks';
import { TermData } from './TermData';

const Terms = ({ route }: any) => {
  const goSignUp = useGoSignUp();
  const idx = route.params.idx;

  return (
    <BasicContainer
      headerTitle={TermData[idx].headerTitle}
      display={true}
      onPress={goSignUp}
    >
      <Container showsVerticalScrollIndicator={false}>
        <Title>{TermData[idx].title}</Title>
        <Content>{TermData[idx].content}</Content>
      </Container>
    </BasicContainer>
  );
};

const Container = styled.ScrollView`
  margin-bottom: 15px;
`;

const Title = styled.Text`
  font-size: 12px;
  margin: 15px 0;
`;

const Content = styled.Text`
  font-size: 9px;
`;

export default Terms;

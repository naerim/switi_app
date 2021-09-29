import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
  flexDirection?: string;
}
const ListContent: React.FC<Props> = ({ children, title, flexDirection }) => (
  <Container>
    <Title>{title}</Title>
    <Content flexDirection={flexDirection}>{children}</Content>
  </Container>
);

const Container = styled.View`
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  margin-top: 10px;
`;

const Content = styled.View`
  flex-direction: ${({ flexDirection }: { flexDirection?: string }) =>
    flexDirection || 'row'};
`;

export default ListContent;

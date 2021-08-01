import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
  content?: string;
}

const DetailContainer: React.FC<Props> = ({ title, content, children }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      {content ? <Content>{content}</Content> : <Nothing />}
      <Container>{children}</Container>
    </Wrap>
  );
};

const Wrap = styled.View``;

const Nothing = styled.View``;
const Container = styled.View`
`;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Content = styled.Text`
  font-size: 12px;
`;
export default DetailContainer;

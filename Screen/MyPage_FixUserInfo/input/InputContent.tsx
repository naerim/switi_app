import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
}

const InputContent: React.FC<Props> = ({ children, title }) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        {children}
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  margin-bottom: 20px;
`;

const Content = styled.View`
  flex: 5;
`;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  margin-bottom: 5px;
`;

export default InputContent;

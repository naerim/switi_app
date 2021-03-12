import React from 'react';
import styled from 'styled-components/native';

interface Props {
  children: React.ReactNode;
  title: string;
}

const SignupContent: React.FC<Props> = ({ children, title }) => {
  return (
    <Content>
      <Title>{title}</Title>
      {children}
    </Content>
  );
};

const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  padding-bottom: 1%;
`;

export default SignupContent;

import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
}

const ProfileContent: React.FC<Props> = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  margin-bottom: 5%;
`;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  padding-bottom: 2%;
`;

export default ProfileContent;

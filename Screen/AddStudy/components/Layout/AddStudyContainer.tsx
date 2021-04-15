import React from 'react';
import styled from 'styled-components/native';
import { ContentProps } from '../../interface';

const AddStudyContainer: React.FC<ContentProps> = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

const Container = styled.View`
  min-height: 60px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
  margin-bottom: 2%;
`;

export default AddStudyContainer;

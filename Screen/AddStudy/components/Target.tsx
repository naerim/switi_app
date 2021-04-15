import React from 'react';
import styled from 'styled-components/native';
import AddStudyContainer from './Layout/AddStudyContainer';

const Target = () => {
  return (
    <AddStudyContainer title="모집대상">
      <Title>대학생</Title>
    </AddStudyContainer>
  );
};

const Title = styled.Text`
  font-size: 12px;
`;

export default Target;

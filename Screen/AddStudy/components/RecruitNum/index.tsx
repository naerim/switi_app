import React from 'react';
import styled from 'styled-components/native';
import AddStudyContainer from '../Layout/AddStudyContainer';
import NumInput from './NumInput';

const RecruitNum = () => {
  return (
    <AddStudyContainer title="모집인원">
      <Container>
        <NumInput />
      </Container>
    </AddStudyContainer>
  );
};

const Container = styled.View`
  flex-direction: row;
`;

export default RecruitNum;

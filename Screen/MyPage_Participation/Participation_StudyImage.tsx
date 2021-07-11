import React from 'react';
import styled from 'styled-components/native';
import RecruitIcon from '../../Component/Icon/RecruitIcon';

interface Props {
  done: number;
}

const Participation_StudyImage: React.FC<Props> = ({ done }) => {
  return (
    <Container>
      <RecruitIcon done={true} />
    </Container>
  );
};

const Container = styled.View`
  background-color: #f3f3f3;
  flex: 1;
  width: 84px;
  height: 84px;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
`;

export default Participation_StudyImage;
